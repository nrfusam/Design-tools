import { ArrowRight, Lightbulb, BookOpen, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedTools } from "@/components/featured-tools"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
      <section className="relative w-full py-48 md:py-64 lg:py-80 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <iframe src='https://my.spline.design/particleaibrain-nmZWxNnMS4PnuUPrPdOHYjMz/' frameBorder='0' width='100%' height='100%'></iframe>
          
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  设计导航
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  AI驱动的设计方法与工具推荐平台，帮助解决你的设计挑战
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
                <Link
                  href="/analyze"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  开始使用
                </Link>
                <Link
                  href="/knowledge-base"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-white/10 backdrop-blur-sm px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  浏览知识库
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="core-features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">核心功能</h2>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                我们提供专业的设计方法与工具推荐，帮助设计师解决各种挑战
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI智能推荐</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    基于你的具体设计挑战，我们的AI系统会分析并推荐最合适的设计方法和工具，节省你的研究时间。
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>全面知识库</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    探索我们精心整理的设计方法和工具库，包含详细的使用指南、案例研究和最佳实践。
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>实用指南</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    每种设计方法都配有详细的步骤说明、常见问题解答和专家提示，帮助你有效地应用到实际工作中。
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>专家见解</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    获取来自行业专家的建议和见解，了解如何在不同情境下最大化设计方法的效果。
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                      <path d="M9 15h.01" />
                      <path d="M15 15h.01" />
                    </svg>
                  </div>
                  <CardTitle>工具比较</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    对比不同设计工具的功能、优缺点和适用场景，帮助你选择最适合自己项目需求的工具。
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M8 18v-1" />
                      <path d="M16 18v-3" />
                    </svg>
                  </div>
                  <CardTitle>实用模板</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    获取各种设计方法的现成模板和工作表，让你能够立即开始应用这些方法到你的设计流程中。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-200/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">使用流程</h2>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                简单四步，找到最适合你的设计方法与工具
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 18v-6"></path>
                      <path d="M8 18v-1"></path>
                      <path d="M16 18v-3"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold">1. 描述挑战</h3>
                <p className="mt-2 text-sm text-muted-foreground">输入你当前面临的设计问题或挑战</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold">2. 获取推荐</h3>
                <p className="mt-2 text-sm text-muted-foreground">AI分析你的需求并推荐合适的设计方法和工具</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold">3. 探索详情</h3>
                <p className="mt-2 text-sm text-muted-foreground">深入了解每种方法的使用步骤、案例和最佳实践</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold">4. 应用实践</h3>
                <p className="mt-2 text-sm text-muted-foreground">将推荐的方法和工具应用到你的设计工作中</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/analyze"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                开始使用
              </Link>
            </div>
          </div>
        </section>

        <section id="featured-tools" className="w-full py-12 md:py-24 lg:py-32 bg-write dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">精选设计方法与工具</h2>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                探索我们精心挑选的设计方法和工具，提升你的设计流程
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12">
              <FeaturedTools />
            </div>
            <div className="flex justify-center">
              <Link
                href="/knowledge-base"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                查看全部 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
