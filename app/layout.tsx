import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Minim icons",
  description: "Interactive Minim icon set",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
