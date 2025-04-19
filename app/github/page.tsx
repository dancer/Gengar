"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import html2canvas from 'html2canvas'

export default function GitHubPage() {
    const [username, setUsername] = React.useState("")
    const [userData, setUserData] = React.useState<any>(null)
    const [loading, setLoading] = React.useState(false)
    const [downloading, setDownloading] = React.useState(false)
    const cardRef = React.useRef<HTMLDivElement>(null)
    const avatarRef = React.useRef<HTMLImageElement>(null)

    const fetchGitHubStats = async (username: string) => {
        setLoading(true)
        try {
            const response = await fetch('/api/github', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username })
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error || 'Failed to fetch GitHub data')
            }

            const data = await response.json()
            setUserData(data)
        } catch (error) {
            console.error("Error fetching GitHub data:", error)
        }
        setLoading(false)
    }

    const downloadCard = async () => {
        if (!cardRef.current || !userData) return
        setDownloading(true)

        try {
            if (avatarRef.current) {
                await new Promise((resolve) => {
                    if (avatarRef.current?.complete) resolve(null)
                    else avatarRef.current?.addEventListener('load', () => resolve(null), { once: true })
                })
            }

            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: '#000',
                scale: 3,
                useCORS: true,
                allowTaint: true,
                logging: false,
                windowWidth: 1200,
                windowHeight: 800,
                onclone: (clonedDoc) => {
                    const element = clonedDoc.querySelector('[data-html2canvas-clone="true"]')
                    if (element) {
                        element.className = element.className + ' font-mono'
                    }
                    const navTabs = clonedDoc.querySelectorAll('.nav-tab')
                    navTabs.forEach(tab => {
                        if (tab instanceof HTMLElement) {
                            tab.style.paddingTop = '0.25rem'
                            tab.style.paddingBottom = '0.25rem'
                        }
                    })
                }
            })

            const link = document.createElement('a')
            link.download = `${userData.login}.png`
            link.href = canvas.toDataURL('image/png')
            link.click()
        } catch (error) {
            console.error('Error generating image:', error)
        }
        setDownloading(false)
    }

    return (
        <div className="space-y-8 font-mono">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">GitHub Stats</h1>
                <p className="text-lg text-muted-foreground">
                    View GitHub statistics in a terminal-inspired interface.
                </p>
            </div>

            {/* Search Section */}

            <div className="flex gap-4">
                <Input
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="max-w-[300px] bg-background/50 border-border"
                />
                <Button
                    variant="outline"
                    onClick={() => fetchGitHubStats(username)}
                    disabled={!username || loading}
                    className="border-border"
                >
                    {loading ? "Loading..." : <Search className="h-4 w-4" />}
                </Button>
            </div>

            {/* Stats Card */}
            {userData && (
                <div className="space-y-4">
                    <Card ref={cardRef} className="relative overflow-hidden bg-background border-border shadow-[0_0_50px_rgba(0,255,0,0.05)]">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff00]/5 to-transparent dark:from-[#00ff00]/10 z-0" />

                        {/* Header with User Info */}
                        <div className="relative p-6 pb-4">
                            <div className="absolute top-4 right-4 w-12 h-12 opacity-50">
                                <Image
                                    src="/gengar.png"
                                    alt="Gengar"
                                    width={48}
                                    height={48}
                                    className="drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]"
                                />
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="relative">
                                    <img
                                        ref={avatarRef}
                                        src={userData.avatar_url}
                                        alt={`${userData.login}'s avatar`}
                                        className="w-24 h-24 rounded-sm border border-border"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                                <div className="flex-1 pt-1">
                                    <h2 className="text-xl font-bold text-foreground">{userData.name || userData.login}</h2>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm text-muted-foreground">{userData.login}</p>
                                        <p className="text-xs text-muted-foreground/60">#{String(userData.id).padStart(3, '0')}</p>
                                    </div>
                                    {userData.bio && (
                                        <p className="text-sm text-muted-foreground leading-normal mt-3">{userData.bio}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex gap-6 border-t border-border px-6">
                            <div className="nav-tab flex items-center py-1">
                                <span className="text-sm text-foreground font-medium">Stats</span>
                            </div>
                            <div className="nav-tab flex items-center py-1">
                                <span className="text-sm text-muted-foreground">Repos</span>
                            </div>
                            <div className="nav-tab flex items-center py-1">
                                <span className="text-sm text-muted-foreground">Activity</span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="p-6 grid grid-cols-2 gap-6">
                            <StatBar
                                label="Public Repos"
                                value={userData.public_repos}
                                maxValue={100}
                            />
                            <StatBar
                                label="Followers"
                                value={userData.followers}
                                maxValue={1000}
                            />
                            <StatBar
                                label="Stars"
                                value={userData.stars}
                                maxValue={1000}
                            />
                            <StatBar
                                label="Contributions (Year)"
                                value={userData.contributions}
                                maxValue={1000}
                            />
                        </div>

                        {/* Footer Info */}
                        <div className="px-6 py-4 border-t border-border">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Member since {new Date(userData.created_at).getFullYear()}</span>
                                {userData.location && (
                                    <span>{userData.location}</span>
                                )}
                            </div>
                        </div>
                    </Card>

                    {/* Download Button */}
                    <Button
                        variant="outline"
                        onClick={downloadCard}
                        disabled={downloading}
                        className="border-border gap-2"
                    >
                        <Download className="h-4 w-4" />
                        {downloading ? "Generating..." : "Download as PNG"}
                    </Button>
                </div>
            )}
        </div>
    )
}

function StatBar({ label, value, maxValue }: {
    label: string
    value: number
    maxValue: number
}) {
    const percentage = Math.min((value / maxValue) * 100, 100)

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{label}</span>
                <span className="text-foreground font-medium">{value}</span>
            </div>
            <div className="h-2 bg-muted rounded-sm overflow-hidden">
                <div
                    className="h-full transition-all duration-500 bg-foreground/20"
                    style={{
                        width: `${percentage}%`,
                        boxShadow: '0 0 10px rgb(var(--foreground) / 0.3)'
                    } as React.CSSProperties}
                />
            </div>
        </div>
    )
} 