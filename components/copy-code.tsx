"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CopyCodeProps {
  code: string
  label?: string
  className?: string
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

  if (!copied) throw new Error("Could not copy code")
}

export function CopyCode({ code, label, className }: CopyCodeProps) {
  const [copied, setCopied] = React.useState(false)
  const resetTimer = React.useRef<ReturnType<typeof setTimeout>>(null)

  React.useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  async function copyCode() {
    await writeToClipboard(code)
    setCopied(true)

    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className={cn("min-w-0", className)}>
      {label ? (
        <div className="mb-1 px-1 text-center text-xs text-muted-foreground">
          {label}
        </div>
      ) : null}
      <div className="flex min-w-0 items-start gap-1 rounded-md bg-muted/70 p-1 pl-3 text-muted-foreground backdrop-blur-sm">
        <pre className="min-w-0 flex-1 overflow-x-auto py-2 text-xs leading-relaxed">
          <code>{code}</code>
        </pre>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={copyCode}
          aria-label={copied ? "Code copied" : "Copy code"}
          title={copied ? "Copied" : "Copy code"}
        >
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </Button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Code copied" : ""}
        </span>
      </div>
    </div>
  )
}
