import { CopyCode } from "@/components/copy-code"
import { RegistryShell } from "@/components/registry-shell"

const initCommand = "npx shadcn@latest init"
const installAllCommand =
  "npx shadcn@latest add peacenode/minim/minim-icons"

export default function Home() {
  return (
    <RegistryShell>
      <div className="relative flex min-h-svh items-center justify-center px-6 py-36 sm:px-10">
        <div className="absolute left-1/2 top-4 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 space-y-3 sm:top-6">
          <CopyCode label="Initialize shadcn" code={initCommand} />
          <CopyCode label="Install all" code={installAllCommand} />
        </div>

        <div className="text-center">
          <h1 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            Minim icons
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            20 icons with default and selected variants.
          </p>
        </div>
      </div>
    </RegistryShell>
  )
}
