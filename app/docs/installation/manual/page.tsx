import { Card } from '@/components/ui/card'

export default function ManualInstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">
        Manual Installation
      </h1>
      <p className="text-muted-foreground">
        Follow these steps to manually install and set up Gengar UI with
        Tailwind CSS v4 in your project.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          1. Install dependencies
        </h2>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground">terminal</span>
          </div>
          <pre className="p-4">
            <code className="text-sm text-foreground">
              npm install tailwindcss @tailwindcss/postcss @radix-ui/react-slot
              class-variance-authority clsx tailwind-merge lucide-react
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          2. Configure PostCSS
        </h2>
        <p className="text-muted-foreground">
          Create a postcss.config.js file in your project root:
        </p>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground">
              postcss.config.js
            </span>
          </div>
          <pre className="p-4">
            <code className="text-sm text-foreground">
              {`export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`}
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          3. Create your CSS file
        </h2>
        <p className="text-muted-foreground">
          Create a CSS file (e.g., styles.css) with Tailwind v4 imports and
          theme configuration:
        </p>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground">
              styles.css
            </span>
          </div>
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
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          4. Import your CSS
        </h2>
        <p className="text-muted-foreground">
          Import your CSS file in your main application file (e.g., main.js,
          index.js, or App.js):
        </p>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground">main.js</span>
          </div>
          <pre className="p-4">
            <code className="text-sm text-foreground">
              {`import './styles.css'`}
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          5. Start using Gengar UI components
        </h2>
        <p className="text-muted-foreground">
          You can now start using Gengar UI components in your project. Copy the
          component files you need from our documentation and use them in your
          application.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-sm mb-2">
            ✨ Tailwind CSS v4 Benefits:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              • <strong>No configuration file needed</strong> - CSS-first
              configuration approach
            </li>
            <li>
              • <strong>Faster builds</strong> - Up to 3x faster than v3
            </li>
            <li>
              • <strong>Dynamic utilities</strong> - Use values like{' '}
              <code>grid-cols-15</code> without pre-configuration
            </li>
            <li>
              • <strong>Modern CSS features</strong> - Built-in container
              queries, 3D transforms, and more
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
