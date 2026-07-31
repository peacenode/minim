import { CopyCode } from "@/components/copy-code"
import { RegistryShell } from "@/components/registry-shell"

const initCommand = "npx shadcn@latest init"
const installAllCommand =
  "npx shadcn@latest add peacenode/minim/minim-icons"

export default function Home() {
  return (
    <RegistryShell>
      <div className="flex min-h-svh items-center justify-center px-6 py-12 sm:px-10">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          <h1 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            Minim icons
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            20 icons with default and selected variants.
          </p>
          <div className="mt-8 w-full space-y-3 text-left">
            <CopyCode label="Initialize shadcn" code={initCommand} />
            <CopyCode label="Install all" code={installAllCommand} />
          </div>
        </div>
      </div>
    </RegistryShell>
  )
}
