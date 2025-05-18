"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">切换菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <span className="font-bold">设计导航</span>
                </Link>
                <Link
                  href="/"
                  className={`${pathname === "/" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                >
                  首页
                </Link>
                <Link
                  href="/knowledge-base"
                  className={`${pathname?.startsWith("/knowledge-base") ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                >
                  知识库
                </Link>
                <Link
                  href="/about"
                  className={`${pathname === "/about" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                >
                  关于我们
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">设计导航</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className={`${pathname === "/" ? "text-foreground font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              首页
            </Link>
            <Link
              href="/knowledge-base"
              className={`${pathname?.startsWith("/knowledge-base") ? "text-foreground font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              知识库
            </Link>
            <Link
              href="/about"
              className={`${pathname === "/about" ? "text-foreground font-medium" : "text-muted-foreground"} hover:text-foreground transition-colors`}
            >
              关于我们
            </Link>
          </nav>

          <div className="h-6 w-px bg-border hidden md:block"></div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">切换主题</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
