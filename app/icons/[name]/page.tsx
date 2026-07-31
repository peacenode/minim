import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CopyCode } from "@/components/copy-code"
import { RegistryShell } from "@/components/registry-shell"
import { iconMetadata, isIconName } from "@/lib/icon-metadata"
import {
  iconNames,
  MinimIcon,
  type IconName,
} from "@/registry/default/minim-icons/minim-icons"

interface IconPageProps {
  params: Promise<{ name: string }>
}

function installCommand(name: IconName) {
  return `npx shadcn@latest add peacenode/minim/${name}`
}

function usageCode(name: IconName) {
  const { component, label } = iconMetadata[name]

  return `import { ${component} } from "@/components/minim-icons/${name}-icon"

export function Example() {
  return (
    <${component}
      variant="selected"
      className="size-8"
      title="${label}"
    />
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
      <div className="relative flex min-h-svh flex-col items-center justify-center px-6 py-36 sm:px-10">
        <div className="absolute left-1/2 top-4 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 sm:top-6">
          <CopyCode label={`Install ${label}`} code={installCommand(name)} />
        </div>

        <div className="flex flex-col items-center gap-6">
          <MinimIcon
            name={name}
            variant="selected"
            className="size-40 sm:size-56"
          />
          <h1 className="text-balance text-center text-lg font-medium tracking-tight">
            {label}
          </h1>
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
