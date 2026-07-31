import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://minim.peaceno.de"),
  title: "Minim icons",
  description: "Interactive Minim icon set",
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "Minim icons",
    description: "Interactive Minim icon set",
    url: "/",
    siteName: "Minim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minim icons",
    description: "Interactive Minim icon set",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
