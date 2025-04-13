import { Card } from '@/components/ui/card'

export default function TypographyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Typography</h1>
      <p className="text-muted-foreground">
        Gengar UI uses a carefully crafted typography system to create a consistent and readable interface. Here's an overview of the typography styles available.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Headings</h2>
        <Card className="overflow-hidden border-border bg-background p-6">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Heading 1</h1>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Heading 2</h2>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Heading 3</h3>
          <h4 className="text-xl font-bold mb-4 text-foreground">Heading 4</h4>
          <h5 className="text-lg font-bold mb-4 text-foreground">Heading 5</h5>
          <h6 className="text-base font-bold text-foreground">Heading 6</h6>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Paragraphs</h2>
        <Card className="overflow-hidden border-border bg-background p-6">
          <p className="text-base mb-4 text-foreground">
            This is a standard paragraph. It uses the base font size and line height.
          </p>
          <p className="text-sm mb-4 text-muted-foreground">
            This is a smaller paragraph, useful for less important information or UI elements.
          </p>
          <p className="text-lg text-foreground">
            This is a larger paragraph, which can be used for introductory text or to add emphasis.
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Inline Text Styles</h2>
        <Card className="overflow-hidden border-border bg-background p-6">
          <p className="mb-2 text-foreground"><strong>Bold text</strong> for emphasis</p>
          <p className="mb-2 text-foreground"><em>Italic text</em> for slight emphasis</p>
          <p className="mb-2 text-foreground"><u>Underlined text</u> for additional emphasis</p>
          <p className="mb-2 text-foreground"><code className="bg-muted text-foreground px-1 rounded">Inline code</code> for technical terms or commands</p>
          <p className="text-foreground"><a href="#" className="text-foreground underline hover:no-underline">Link style</a> for clickable text</p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Lists</h2>
        <Card className="overflow-hidden border-border bg-background p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">Unordered List</h3>
          <ul className="list-disc list-inside mb-4 text-foreground">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-foreground">Ordered List</h3>
          <ol className="list-decimal list-inside text-foreground">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Blockquote</h2>
        <Card className="overflow-hidden border-border bg-background p-6">
          <blockquote className="border-l-4 border-border pl-4 italic text-foreground">
            "The best way to predict the future is to invent it." - Alan Kay
          </blockquote>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Monospace Text</h2>
        <Card className="overflow-hidden border-border bg-background p-6">
          <pre className="font-mono text-foreground">
            {`function helloWorld() {
  console.log("Hello, Gengar UI!");
}`}
          </pre>
        </Card>
      </div>
    </div>
  )
}

