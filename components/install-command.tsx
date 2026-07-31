"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

interface InstallCommandProps {
  command: string
}

async function writeToClipboard(value: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement("textarea")
  textarea.value = value
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()

  const copied = document.execCommand("copy")
  textarea.remove()

  if (!copied) throw new Error("Could not copy install command")
}

export function InstallCommand({ command }: InstallCommandProps) {
  const [copied, setCopied] = React.useState(false)
  const resetTimer = React.useRef<ReturnType<typeof setTimeout>>(null)

  React.useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  async function copyCommand() {
    await writeToClipboard(command)
    setCopied(true)

    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="flex min-w-0 max-w-full items-center gap-1 rounded-md bg-muted/70 p-1 pl-3 text-muted-foreground backdrop-blur-sm">
      <code className="min-w-0 truncate text-xs">{command}</code>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={copyCommand}
        aria-label={copied ? "Install command copied" : "Copy install command"}
        title={copied ? "Copied" : "Copy install command"}
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      </Button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Install command copied" : ""}
      </span>
    </div>
  )
}
