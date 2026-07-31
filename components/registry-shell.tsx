import Link from "next/link"

import { Button } from "@/components/ui/button"
import { iconMetadata } from "@/lib/icon-metadata"
import {
  iconNames,
  MinimIcon,
  type IconName,
} from "@/registry/default/minim-icons/minim-icons"

interface RegistryShellProps {
  activeIcon?: IconName
  children: React.ReactNode
}

export function RegistryShell({ activeIcon, children }: RegistryShellProps) {
  return (
    <div className="grid min-h-svh grid-cols-[4.75rem_minmax(0,1fr)] sm:grid-cols-[13rem_minmax(0,1fr)]">
      <aside className="fixed inset-y-0 left-0 z-20 w-[4.75rem] overflow-y-auto overscroll-y-contain bg-muted/40 px-2 pb-2 pt-16 sm:w-[13rem] sm:px-4 sm:pb-4 sm:pt-20">
        <Link
          href="/"
          className="minim-wordmark absolute left-1/2 top-1 -translate-x-1/2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-6 sm:translate-x-0"
          aria-label="Minim home"
        >
          minim
        </Link>

        <nav aria-label="Minim icons" className="mx-auto flex w-fit flex-col sm:mx-0">
          {iconNames.map((name) => {
            const active = name === activeIcon
            const { label } = iconMetadata[name]

            return (
              <Button
                key={name}
                asChild
                variant={active ? "secondary" : "ghost"}
                className="group h-auto w-fit min-w-0 justify-center gap-2 p-1 font-normal sm:justify-start"
              >
                <Link href={`/icons/${name}`} aria-current={active ? "page" : undefined}>
                  <MinimIcon
                    name={name}
                    variant={active ? "selected" : "default"}
                    className="size-8 shrink-0"
                  />
                  <span className="hidden truncate px-1 text-sm text-muted-foreground group-hover:text-foreground group-aria-[current=page]:text-foreground sm:block">
                    {label}
                  </span>
                </Link>
              </Button>
            )
          })}
        </nav>
      </aside>

      <main className="col-start-2 min-h-svh min-w-0">{children}</main>
    </div>
  )
}
