# Minim Icons

A shadcn registry item for 20 Minim interface icons. Each icon includes a default and selected variant and renders as a customizable inline SVG.

## Install

From the public GitHub registry:

```bash
npx shadcn@latest add peacenode/minim-icons/minim-icons
```

Or from the hosted registry endpoint:

```bash
npx shadcn@latest add https://minim-icons.vercel.app/r/minim-icons.json
```

## Use

```tsx
import { MinimIcon } from "@/components/minim-icons"

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <MinimIcon name="library" className="size-6" title="Library" />
      <MinimIcon name="library" variant="selected" className="size-6" />
    </div>
  )
}
```

`MinimIcon` accepts standard SVG props. Default icons inherit `currentColor`, so Tailwind color classes work without changing the source.

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
