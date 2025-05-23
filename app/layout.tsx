import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "设计导航 - AI驱动的设计方法与工具",
  description: "通过AI推荐发现适合你设计挑战的正确设计方法和工具",
  generator: 'v0.dev',
  icons: {
    icon: '/placeholder-logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 设计导航. 保留所有权利。
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <a href="#" className="hover:underline">
                    条款
                  </a>
                  <a href="#" className="hover:underline">
                    隐私
                  </a>
                  <a href="#" className="hover:underline">
                    联系我们
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
