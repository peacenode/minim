"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  MinimIcon,
  type IconName,
} from "@/registry/default/minim-icons/minim-icons"

interface IconDemoProps {
  name: IconName
  label: string
}

export function IconDemo({ name, label }: IconDemoProps) {
  const [selected, setSelected] = React.useState(false)

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label={`Toggle ${label} selected state`}
      aria-pressed={selected}
      onClick={() => setSelected((current) => !current)}
      className="h-auto w-auto p-0 hover:bg-transparent"
    >
      <MinimIcon
        name={name}
        variant={selected ? "selected" : "default"}
        className="size-40 sm:size-56"
      />
    </Button>
  )
}
