import { Card } from '@/components/ui/card'
import { TerminalWindow } from '@/components/ui/terminal-window'

export default function NextjsInstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">
        Next.js Installation
      </h1>
      <p className="text-muted-foreground">
        Follow these steps to install and set up Gengar UI with Next.js and
        Tailwind CSS v4.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          1. Create a new Next.js project
        </h2>
        <Card>
          <TerminalWindow title="terminal">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                npx create-next-app@latest my-gengar-ui-app --typescript
                --tailwind --eslint
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          2. Install dependencies
        </h2>
        <Card>
          <TerminalWindow title="terminal">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                npm install @radix-ui/react-slot class-variance-authority clsx
                tailwind-merge lucide-react
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          3. Configure Tailwind CSS v4
        </h2>
        <p className="text-muted-foreground">
          Update your globals.css file with Tailwind v4 imports and theme
          configuration:
        </p>
        <Card>
          <TerminalWindow title="app/globals.css">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                {`@import "tailwindcss";

@theme {
  --color-background: 0 0% 100%;
  --color-foreground: 0 0% 4.9%;
  --color-card: 0 0% 100%;
  --color-card-foreground: 0 0% 4.9%;
  --color-popover: 0 0% 100%;
  --color-popover-foreground: 0 0% 4.9%;
  --color-primary: 0 0% 11.2%;
  --color-primary-foreground: 0 0% 98%;
  --color-secondary: 0 0% 96.1%;
  --color-secondary-foreground: 0 0% 11.2%;
  --color-muted: 0 0% 96.1%;
  --color-muted-foreground: 0 0% 46.9%;
  --color-accent: 0 0% 96.1%;
  --color-accent-foreground: 0 0% 11.2%;
  --color-destructive: 0 84.2% 60.2%;
  --color-destructive-foreground: 0 0% 98%;
  --color-border: 0 0% 91.4%;
  --color-input: 0 0% 91.4%;
  --color-ring: 0 0% 4.9%;
  --radius: 0.5rem;
  --color-terminal-red: 0 84.2% 60.2%;
  --color-terminal-yellow: 38 92% 50%;
  --color-terminal-green: 142 71% 45%;
}

@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: 0 0% 4.9%;
    --color-foreground: 0 0% 98%;
    --color-card: 0 0% 4.9%;
    --color-card-foreground: 0 0% 98%;
    --color-popover: 0 0% 4.9%;
    --color-popover-foreground: 0 0% 98%;
    --color-primary: 0 0% 98%;
    --color-primary-foreground: 0 0% 11.2%;
    --color-secondary: 0 0% 17.5%;
    --color-secondary-foreground: 0 0% 98%;
    --color-muted: 0 0% 17.5%;
    --color-muted-foreground: 0 0% 65.1%;
    --color-accent: 0 0% 17.5%;
    --color-accent-foreground: 0 0% 98%;
    --color-destructive: 0 62.8% 30.6%;
    --color-destructive-foreground: 0 0% 98%;
    --color-border: 0 0% 17.5%;
    --color-input: 0 0% 17.5%;
    --color-ring: 0 0% 83.9%;
    --color-terminal-red: 0 62.8% 30.6%;
    --color-terminal-yellow: 38 92% 30%;
    --color-terminal-green: 142 71% 25%;
  }
}

@layer base {
  * {
    border-color: hsl(var(--color-border));
  }
  body {
    background-color: hsl(var(--color-background));
    color: hsl(var(--color-foreground));
  }
}`}
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          4. Remove tailwind.config.js (if present)
        </h2>
        <p className="text-muted-foreground">
          Tailwind CSS v4 uses CSS-first configuration, so you can delete the
          tailwind.config.js file if it was created. All configuration is now
          handled in your CSS file.
        </p>
        <Card>
          <TerminalWindow title="terminal">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                rm tailwind.config.js tailwind.config.ts
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          5. Start using Gengar UI components
        </h2>
        <p className="text-muted-foreground">
          You can now start using Gengar UI components in your Next.js project.
          Copy the component files you need from our documentation and use them
          in your pages or components.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-sm mb-2">
            ✨ Tailwind CSS v4 Benefits:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              • <strong>3x faster builds</strong> - Significantly improved
              performance
            </li>
            <li>
              • <strong>Dynamic utilities</strong> - Use any value like{' '}
              <code>grid-cols-15</code> without configuration
            </li>
            <li>
              • <strong>Built-in container queries</strong> - Modern responsive
              design features
            </li>
            <li>
              • <strong>CSS-first configuration</strong> - More intuitive and
              maintainable
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
