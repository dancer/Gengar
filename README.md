# Gengar UI

A modern, terminal-inspired component library for React applications. Built with Next.js, Tailwind CSS, and Radix UI primitives.

![Terminal Style](/public/preview.png)

## Features

- **Terminal-Inspired Design**: Beautiful components that combine terminal aesthetics with modern usability
- **Fully Customizable**: Every component can be styled and themed to match your brand
- **Dark Mode Support**: Built-in dark mode with terminal-appropriate colors
- **Modern Stack**: Built with Next.js, Tailwind CSS, and Radix UI primitives
- **Copy and Use**: No installation needed - just copy the components you need

## Components

- Action Bar
- Accordion
- Alert
- Avatar
- Badge
- Button
- Card
- Command Palette
- Console Output
- Dialog
- Input
- Progress Bar
- Select
- Tabs
- Terminal Prompt
- Tooltip
- Tree View
- Terminal
- ASCII Art Generator
- File Explorer
- Network Monitor

## Getting Started

1. **Copy Components**: Visit our [documentation](https://github.com/dancer/gengar) and copy the components you need.

2. **Install Dependencies**:

```bash
npm install tailwindcss postcss autoprefixer @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
```

3. **Configure Tailwind**:

```js
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... other theme variables
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

4. **Start Building**: Import and use components in your project:

```tsx
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return <Button>Hello, Terminal!</Button>;
}
```

## Customization

All components use CSS variables for styling, making them easy to customize:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --terminal-red: 0 84.2% 60.2%;
  --terminal-yellow: 38 92% 50%;
  --terminal-green: 142 71% 45%;
  /* ... other variables */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode variables */
}
```

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

MIT License - feel free to use in your own projects.

## Credits

Built with:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)
- [shadcn/ui](https://ui.shadcn.com)

## Support

- [Documentation](https://github.com/dancer/gengar)
- [Issue Tracker](https://github.com/dancer/gengar/issues)
