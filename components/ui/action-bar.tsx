'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Bell, Settings, Search, X, Minus, Square } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ActionBarProps {
  onAction?: (action: string) => void
}

export function ActionBar({ onAction }: ActionBarProps) {
  const [activeTab, setActiveTab] = React.useState<string | null>(null)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [notifications] = React.useState([
    { id: 1, message: 'New update available', time: '2 mins ago' },
    { id: 2, message: 'System backup completed', time: '1 hour ago' },
    { id: 3, message: 'Security scan finished', time: '3 hours ago' },
  ])

  const handleAction = (action: string) => {
    setActiveTab(activeTab === action ? null : action)
    onAction?.(action)
  }

  return (
    <div className="bg-background text-foreground rounded-none overflow-hidden font-mono text-sm border border-border">
      <div className="flex items-center justify-between bg-background text-foreground px-4 py-2 border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-center flex-grow text-muted-foreground">
          Action Bar
        </div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          <Square className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
        </div>
      </div>
      <div className="bg-background/50 p-2 flex items-center justify-between border-b border-border">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={() => handleAction('profile')}
            data-active={activeTab === 'profile'}
          >
            <User className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={() => handleAction('notifications')}
            data-active={activeTab === 'notifications'}
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={() => handleAction('settings')}
            data-active={activeTab === 'settings'}
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          {searchOpen ? (
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Search..."
                className="h-8 bg-background text-foreground border-border focus:border-ring focus:ring-0 text-xs"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted ml-2"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      {activeTab && (
        <ScrollArea className="h-[200px]">
          <div className="p-3 space-y-2">
            {activeTab === 'profile' && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-foreground">Josh Han</div>
                    <div className="text-muted-foreground text-xs">
                      Administrator
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground text-xs pt-2">
                  Last login: Today at 10:45 AM
                </div>
              </div>
            )}
            {activeTab === 'notifications' && (
              <div className="space-y-2">
                {notifications.map(notification => (
                  <div key={notification.id} className="p-2 hover:bg-muted">
                    <div className="text-foreground">
                      {notification.message}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Dark Mode</span>
                  <span className="text-green-500">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Notifications</span>
                  <span className="text-green-500">On</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Auto-update</span>
                  <span className="text-yellow-500">Manual</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
