import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

import { iconSources } from "./icon-sources.mjs"

const batchName = process.argv[2]

if (!batchName) {
  throw new Error("Pass a new batch name, for example 2026-07-31-1735")
}

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const batchDirectory = join(projectRoot, "public/downloads", batchName)
const archivePath = join(batchDirectory, "minim-icons.zip")

if (existsSync(batchDirectory)) {
  throw new Error(`Download batch already exists: ${batchDirectory}`)
}

function selectedFallback(svg) {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1]
  const body = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)?.[1]

  if (!viewBox || body === undefined) {
    throw new Error("Could not build selected SVG fallback")
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
  <rect width="24" height="24" rx="6" ry="6"/>
  <g fill="#fff">${body.trim()}</g>
</svg>
`
}

const temporaryDirectory = mkdtempSync(join(tmpdir(), "minim-download-"))
const iconDirectory = join(temporaryDirectory, "minim-icons")

mkdirSync(iconDirectory)

try {
  for (const [name, defaultFile, selectedFile] of iconSources) {
    const defaultSource = readFileSync(join(projectRoot, defaultFile), "utf8")
    const selectedSource = selectedFile
      ? readFileSync(join(projectRoot, selectedFile), "utf8")
      : selectedFallback(defaultSource)

    writeFileSync(join(iconDirectory, `${name}.svg`), defaultSource)
    writeFileSync(join(iconDirectory, `${name}-selected.svg`), selectedSource)
  }

  mkdirSync(batchDirectory, { recursive: true })
  execFileSync("zip", ["-qr", archivePath, "minim-icons"], {
    cwd: temporaryDirectory,
  })
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true })
}

console.log(`Built ${archivePath}`)
