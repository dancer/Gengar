import { Card } from '@/components/ui/card'

export default function LaravelInstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">
        Laravel Installation
      </h1>
      <p className="text-muted-foreground">
        Follow these steps to install and set up Gengar UI with Laravel and
        Tailwind CSS v4.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          1. Create a new Laravel project
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
              composer create-project laravel/laravel my-gengar-ui-app
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          2. Install dependencies
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
          3. Configure PostCSS
        </h2>
        <p className="text-muted-foreground">
          Create or update your postcss.config.js file:
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
          4. Add global styles
        </h2>
        <p className="text-muted-foreground">
          Create or update your resources/css/app.css file with Tailwind v4
          imports and theme configuration:
        </p>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground">
              resources/css/app.css
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
          5. Configure Vite
        </h2>
        <p className="text-muted-foreground">
          Update your vite.config.js file:
        </p>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground">
              vite.config.js
            </span>
          </div>
          <pre className="p-4">
            <code className="text-sm text-foreground">
              {`import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});`}
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          6. Start using Gengar UI components
        </h2>
        <p className="text-muted-foreground">
          You can now start using Gengar UI components in your Laravel project.
          Copy the component files you need from our documentation and use them
          in your Blade views or JavaScript components.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-sm mb-2">
            ✨ Tailwind CSS v4 with Laravel Benefits:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              • <strong>Laravel Vite integration</strong> - Seamless build
              process with Laravel's asset pipeline
            </li>
            <li>
              • <strong>Blade template support</strong> - Works perfectly with
              Laravel's templating engine
            </li>
            <li>
              • <strong>Faster builds</strong> - Up to 3x faster than v3
            </li>
            <li>
              • <strong>Dynamic utilities</strong> - Use any value without
              pre-configuration
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
