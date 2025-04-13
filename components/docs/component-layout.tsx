import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { TerminalWindow } from '@/components/ui/terminal-window'

interface ComponentLayoutProps {
    title: string
    description: string
    children?: React.ReactNode
    preview?: React.ReactNode
    code?: string
    installation?: string
    usage?: string
}

export function ComponentLayout({
    title,
    description,
    children,
    preview,
    code,
    installation,
    usage
}: ComponentLayoutProps) {
    return (
        <div className="space-y-8 font-mono">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
                <p className="text-lg text-muted-foreground">
                    {description}
                </p>
            </div>

            {/* Preview/Code Section */}
            {(preview || code) && (
                <Tabs defaultValue="preview" className="space-y-4">
                    <TabsList className="bg-background border border-border">
                        <TabsTrigger value="preview" className="text-foreground data-[state=active]:bg-muted">Preview</TabsTrigger>
                        <TabsTrigger value="code" className="text-foreground data-[state=active]:bg-muted">Code</TabsTrigger>
                    </TabsList>
                    {preview && (
                        <TabsContent value="preview" className="space-y-4">
                            <Card className="bg-background border-border p-6">
                                {preview}
                            </Card>
                        </TabsContent>
                    )}
                    {code && (
                        <TabsContent value="code">
                            <Card>
                                <TerminalWindow title="component.tsx">
                                    <pre className="p-4">
                                        <code className="text-sm text-foreground">
                                            {code}
                                        </code>
                                    </pre>
                                </TerminalWindow>
                            </Card>
                        </TabsContent>
                    )}
                </Tabs>
            )}

            {/* Installation */}
            {installation && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
                    <Card>
                        <TerminalWindow title="terminal">
                            <pre className="p-4">
                                <code className="text-sm text-foreground">
                                    {installation}
                                </code>
                            </pre>
                        </TerminalWindow>
                    </Card>
                </div>
            )}

            {/* Usage */}
            {usage && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
                    <Card>
                        <TerminalWindow title="example.tsx">
                            <pre className="p-4">
                                <code className="text-sm text-foreground">
                                    {usage}
                                </code>
                            </pre>
                        </TerminalWindow>
                    </Card>
                </div>
            )}

            {/* Additional Content */}
            {children}
        </div>
    )
} 