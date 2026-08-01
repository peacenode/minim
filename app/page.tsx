import { ArrowDownToLine } from "lucide-react"

import { CopyCode } from "@/components/copy-code"
import { Button } from "@/components/ui/button"

const initCommand = "npx shadcn@latest init"
const installAllCommand =
  "npx shadcn@latest add peacenode/minim/minim-icons"
const downloadPath = "/downloads/2026-07-31-1733/minim-icons.zip"

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center px-6 py-12 sm:px-10">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        <h1 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">
          Minim icons
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          20 icons with default and selected variants.
        </p>
        <div className="mt-8 flex w-full flex-col items-center gap-3 text-left">
          <CopyCode
            label="Initialize shadcn"
            code={initCommand}
            className="w-fit max-w-full"
          />
          <CopyCode
            label="Install all"
            code={installAllCommand}
            className="w-fit max-w-full"
          />
        </div>
        <Button
          asChild
          className="mt-6 h-auto rounded-full bg-black px-4 py-3 text-xs text-white hover:bg-black/90 has-[>svg]:px-4"
        >
          <a href={downloadPath} download="minim-icons.zip">
            <ArrowDownToLine aria-hidden="true" />
            Download all
          </a>
        </Button>
      </div>
    </div>
  )
}
