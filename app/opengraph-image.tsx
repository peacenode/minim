import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const alt = "Minim"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const caribon = readFile(
  path.join(process.cwd(), "public/fonts/Caribon-Regular.otf")
)

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#fff",
          color: "#000",
          display: "flex",
          fontFamily: "Caribon",
          fontSize: 240,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.01em",
          lineHeight: 0.9,
          width: "100%",
        }}
      >
        minim
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Caribon",
          data: await caribon,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
