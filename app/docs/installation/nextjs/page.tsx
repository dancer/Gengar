import { Card } from '@/components/ui/card'
import { TerminalWindow } from '@/components/ui/terminal-window'

export default function NextjsInstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Next.js Installation</h1>
      <p className="text-muted-foreground">
        Follow these steps to install and set up Gengar UI with Next.js.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Create a new Next.js project</h2>
        <Card>
          <TerminalWindow title="terminal">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                npx create-next-app@latest my-gengar-ui-app --typescript --tailwind --eslint
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Install dependencies</h2>
        <Card>
          <TerminalWindow title="terminal">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Configure Tailwind CSS</h2>
        <p className="text-muted-foreground">
          Update your tailwind.config.js file:
        </p>
        <Card>
          <TerminalWindow title="tailwind.config.js">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                {`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`}
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Add global styles</h2>
        <p className="text-muted-foreground">
          Update your globals.css file:
        </p>
        <Card>
          <TerminalWindow title="globals.css">
            <pre className="p-4">
              <code className="text-sm text-foreground">
                {`@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 4.9%;
    --primary: 0 0% 11.2%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 11.2%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 46.9%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 91.4%;
    --input: 0 0% 91.4%;
    --ring: 0 0% 4.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 0 0% 4.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 4.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 4.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 11.2%;
    --secondary: 0 0% 17.5%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 17.5%;
    --muted-foreground: 0 0% 65.1%;
    --accent: 0 0% 17.5%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 17.5%;
    --input: 0 0% 17.5%;
    --ring: 0 0% 83.9%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`}
              </code>
            </pre>
          </TerminalWindow>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Start using Lineal UI components</h2>
        <p className="text-muted-foreground">
          You can now start using Lineal UI components in your Next.js project. Copy the component files you need from our documentation and use them in your pages or components.
        </p>
      </div>
    </div>
  )
}

