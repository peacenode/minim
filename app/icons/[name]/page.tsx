import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CopyCode } from "@/components/copy-code"
import { IconDemo } from "@/components/icon-demo"
import { RegistryShell } from "@/components/registry-shell"
import { iconMetadata, isIconName } from "@/lib/icon-metadata"
import { iconNames, type IconName } from "@/registry/default/minim-icons/minim-icons"

interface IconPageProps {
  params: Promise<{ name: string }>
}

function installCommand(name: IconName) {
  return `npx shadcn@latest add peacenode/minim/${name}`
}

function usageCode(name: IconName) {
  const { component, label } = iconMetadata[name]

  return `"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { ${component} } from "@/components/minim-icons/${name}-icon"

export function Example() {
  const [selected, setSelected] = React.useState(false)

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-pressed={selected}
      onClick={() => setSelected((current) => !current)}
    >
      <${component}
        variant={selected ? "selected" : "default"}
        className="size-8"
        title="${label}"
      />
    </Button>
  )
}`
}

export function generateStaticParams() {
  return iconNames.map((name) => ({ name }))
}

export async function generateMetadata({
  params,
}: IconPageProps): Promise<Metadata> {
  const { name } = await params

  if (!isIconName(name)) return {}

  return {
    title: `${iconMetadata[name].label} · Minim`,
    description: `${iconMetadata[name].label} icon with default and selected variants.`,
  }
}

export default async function IconPage({ params }: IconPageProps) {
  const { name } = await params

  if (!isIconName(name)) notFound()

  const { label } = iconMetadata[name]

  return (
    <RegistryShell activeIcon={name}>
      <div className="flex min-h-svh flex-col items-center justify-center px-6 py-12 sm:px-10">
        <div className="flex w-full flex-col items-center gap-6">
          <IconDemo name={name} label={label} />
          <h1 className="text-balance text-center text-lg font-medium tracking-tight">
            {label}
          </h1>
          <CopyCode
            code={installCommand(name)}
            className="w-fit max-w-full"
          />
        </div>

        <section className="mt-16 w-full max-w-xl" aria-labelledby="usage-title">
          <h2 id="usage-title" className="mb-2 px-1 text-sm font-medium">
            Usage
          </h2>
          <CopyCode code={usageCode(name)} />
        </section>
      </div>
    </RegistryShell>
  )
}
