# Minim

The shared shadcn registry for Minim. It currently ships 20 named React icon components, each with default and selected variants.

## Setup

Initialize shadcn in your project if it is not already configured:

```bash
npx shadcn@latest init
```

## Install all

From the public GitHub registry:

```bash
npx shadcn@latest add peacenode/minim/minim-icons
```

Or from the hosted registry endpoint:

```bash
npx shadcn@latest add https://minim.peaceno.de/r/minim-icons.json
```

Install a single icon by its registry name:

```bash
npx shadcn@latest add peacenode/minim/library
```

## Use

```tsx
import { LibraryIcon } from "@/components/minim-icons/library-icon"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <LibraryIcon className="size-6" title="Library" />
      <LibraryIcon variant="selected" className="size-6" />
    </div>
  )
}
```

Each named icon accepts standard SVG props and a `default` or `selected` variant. Icons inherit `currentColor`, so Tailwind color classes work without changing their source.

The install-all item also includes `MinimIcon` for dynamic rendering:

```tsx
import { MinimIcon } from "@/components/minim-icons/minim-icons"

<MinimIcon name="library" variant="selected" className="size-6" />
```

The exported `iconNames`, `IconName`, and `IconVariant` values provide the complete typed API.

## Develop

```bash
npm install
npm run dev
```

After changing a source SVG, regenerate and verify the registry:

```bash
npm run registry:build
npm run lint
npm run build
```
