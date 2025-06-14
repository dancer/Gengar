import { Card } from '@/components/ui/card'
import { FrameworkSelector } from '@/components/framework-selector'
import { TerminalWindow } from '@/components/ui/terminal-window'

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Installation</h1>
        <p className="mt-2 text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Frameworks</h2>
        <FrameworkSelector />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">TypeScript</h2>
        <p className="text-muted-foreground">
          This project and the components are written in TypeScript. We
          recommend using TypeScript for your project as well.
        </p>
        <p className="text-muted-foreground">
          However we provide a JavaScript version of the components as well. The
          JavaScript version is available via the{' '}
          <code className="text-sm">.js</code> files.
        </p>

        <p className="text-muted-foreground mt-6">
          To opt-out of TypeScript, you can use the{' '}
          <code className="text-sm">.js</code> flag in your{' '}
          <code className="text-sm">components.json</code> file:
        </p>
        <Card>
          <TerminalWindow title="components.json">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                {`{
  "style": "default",
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "tsx": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}`}
              </code>
            </pre>
          </TerminalWindow>
        </Card>

        <p className="text-muted-foreground mt-6">
          To configure import aliases, you can use the following{' '}
          <code className="text-sm">jsconfig.json</code>:
        </p>
        <Card>
          <TerminalWindow title="jsconfig.json">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                {`{
  "compilerOptions": {
    "paths": {
      "~/*": ["./*"]
    }
  }
}`}
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>
    </div>
  )
}
