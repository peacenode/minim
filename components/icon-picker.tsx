"use client"

import * as React from "react"

import {
  iconNames,
  MinimIcon,
  type IconName,
} from "@/registry/default/minim-icons/minim-icons"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const labels: Record<IconName, string> = {
  search: "Search",
  library: "Library",
  catalog: "Catalog",
  notification: "Notification",
  profile: "Profile",
  "profile-2": "Profile 2",
  settings: "Settings",
  "minim-1": "Minim 1",
  "minim-2": "Minim 2",
  "minim-3": "Minim 3",
  "minim-4": "Minim 4",
  "minim-5": "Minim 5",
  "minim-6": "Minim 6",
  explore: "Explore",
  "explore-2": "Explore 2",
  "settings-2": "Settings 2",
  left: "Left",
  right: "Right",
  up: "Up",
  down: "Down",
}

export function IconPicker() {
  const [selected, setSelected] = React.useState<IconName>("search")

  return (
    <div className="grid min-h-svh grid-cols-[4.75rem_minmax(0,1fr)] sm:grid-cols-[13rem_minmax(0,1fr)]">
      <aside className="relative bg-muted/40 px-2 pb-2 pt-16 sm:px-4 sm:pb-4 sm:pt-20">
        <span className="minim-wordmark absolute left-1/2 top-1 -translate-x-1/2 sm:left-6 sm:translate-x-0" aria-label="Minim">
          minim
        </span>

        <ToggleGroup
          type="single"
          orientation="vertical"
          value={selected}
          onValueChange={(value) => value && setSelected(value as IconName)}
          aria-label="Choose an icon"
          className="mx-auto flex w-fit flex-col items-start !gap-0 sm:mx-0"
        >
          {iconNames.map((name) => (
            <ToggleGroupItem
              key={name}
              value={name}
              aria-label={`Select ${labels[name]}`}
              className="minim-icon-button group h-auto w-fit min-w-0 justify-center gap-2 rounded-md bg-transparent p-1 text-foreground hover:bg-muted hover:text-foreground data-[state=on]:bg-accent data-[state=on]:text-foreground focus-visible:ring-2 focus-visible:ring-ring sm:justify-start"
            >
              <span className="relative size-8 shrink-0">
                <MinimIcon
                  name={name}
                  className="icon-default absolute inset-0 size-full transition-opacity duration-150"
                />
                <MinimIcon
                  name={name}
                  variant="selected"
                  className="icon-selected absolute inset-0 size-full opacity-0 transition-opacity duration-150"
                />
              </span>
              <span className="hidden truncate px-1 text-sm font-normal text-muted-foreground transition-colors group-hover:text-foreground group-data-[state=on]:text-foreground sm:block">
                {labels[name]}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </aside>

      <main className="flex min-w-0 items-center justify-center px-6 py-12 sm:px-10">
        <div className="flex flex-col items-center gap-6" aria-live="polite">
          <MinimIcon
            name={selected}
            variant="selected"
            className="size-40 sm:size-56"
          />
          <h1 className="text-balance text-center text-lg font-medium tracking-tight">
            {labels[selected]}
          </h1>
          <code className="max-w-72 break-all text-center text-xs text-muted-foreground sm:max-w-none">
            npx shadcn@latest add peacenode/minim/minim-icons
          </code>
        </div>
      </main>
    </div>
  )
}
