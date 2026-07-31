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

function basicUsageCode(name: IconName) {
  const { component, label } = iconMetadata[name]

  return `import { ${component} } from "@/components/minim-icons/${name}-icon"

export function Example() {
  return (
    <div className="flex items-center gap-4">
      <${component} className="size-8" title="${label}" />
      <${component}
        variant="selected"
        className="size-8"
        title="${label} selected"
      />
    </div>
  )
}`
}

function navigationUsageCode(name: IconName) {
  const { component, label } = iconMetadata[name]

  return `import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ${component} } from "@/components/minim-icons/${name}-icon"

interface IconNavItemProps {
  active: boolean
}

export function IconNavItem({ active }: IconNavItemProps) {
  return (
    <Button
      asChild
      variant={active ? "secondary" : "ghost"}
    >
      <Link
        href="/${name}"
        aria-current={active ? "page" : undefined}
      >
        <${component}
          variant={active ? "selected" : "default"}
          className="size-8"
        />
        <span>${label}</span>
      </Link>
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

        <div className="mt-16 w-full max-w-xl space-y-12">
          <section aria-labelledby="basic-usage-title">
            <h2
              id="basic-usage-title"
              className="mb-2 px-1 text-sm font-medium"
            >
              Basic usage
            </h2>
            <CopyCode code={basicUsageCode(name)} />
          </section>

          <section aria-labelledby="navigation-usage-title">
            <h2
              id="navigation-usage-title"
              className="mb-2 px-1 text-sm font-medium"
            >
              Navigation usage
            </h2>
            <CopyCode code={navigationUsageCode(name)} />
          </section>
        </div>
      </div>
    </RegistryShell>
  )
}
