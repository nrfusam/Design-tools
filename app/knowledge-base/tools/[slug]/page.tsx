import { ArrowLeft, Check, ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ToolPageProps {
  params: {
    slug: string
  }
}

export default function ToolPage({ params }: ToolPageProps) {
  // In a real app, you would fetch this data from an API or database based on the slug
  // For this example, we'll use mock data
  const tool = {
    name: "Miro",
    description: "在线协作白板平台，使分布式团队能够有效地一起工作。",
    category: "协作",
    pricing: "免费版可用，付费版每月8美元起",
    website: "https://miro.com",
    rating: 4.5,
    overview:
      "Miro是为分布式团队设计的在线协作白板平台。它提供了一个灵活的画布，团队可以在其中实时进行头脑风暴、规划、设计和管理工作流程。凭借各种模板和集成，Miro支持各种设计方法和流程，使其成为远程协作的重要工具。",
    features: [
      "无限画布，用于可视化协作",
      "多用户实时协作",
      "各种设计方法的丰富模板",
      "与Figma、Jira和Slack等工具集成",
      "演示模式，用于分享工作",
      "评论和反馈工具",
      "投票和优先级功能",
    ],
    useCases: [
      {
        title: "利益相关者图谱",
        description: "使用Miro的模板创建可视化的利益相关者图谱，帮助识别和优先考虑关键利益相关者。",
      },
      {
        title: "用户旅程图",
        description: "协作创建用户旅程图，可视化整个用户体验的各个接触点。",
      },
      {
        title: "远程设计工作坊",
        description: "使用Miro的协作功能，为分布式团队提供互动设计思维工作坊。",
      },
      {
        title: "敏捷仪式",
        description: "通过可视化协作进行冲刺规划、回顾和其他敏捷仪式。",
      },
    ],
    pros: [
      "高度直观和用户友好的界面",
      "非常适合可视化协作和构思",
      "各种设计方法的强大模板库",
      "与其他工具的强大集成能力",
      "适用于同步和异步协作",
    ],
    cons: [
      "大型团队或复杂项目可能变得混乱",
      "高级功能需要付费订阅",
      "新用户掌握所有功能需要一定学习曲线",
      "非常大的画板可能会导致性能变慢",
    ],
    alternatives: ["MURAL", "Figma FigJam", "Lucidspark", "Conceptboard"],
    relatedMethods: ["设计思维", "用户旅程图", "亲和图", "利益相关者图谱"],
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8">
        <Link
          href="/knowledge-base"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回知识库
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-primary/10">
                {tool.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(tool.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                <span className="ml-1">{tool.rating}/5</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{tool.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{tool.description}</p>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="features">功能</TabsTrigger>
              <TabsTrigger value="use-cases">使用场景</TabsTrigger>
              <TabsTrigger value="comparison">对比</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">关于此工具</h3>
                <p className="text-muted-foreground">{tool.overview}</p>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt={`${tool.name} Interface`}
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>优点</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>缺点</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="h-5 w-5 flex items-center justify-center shrink-0 text-red-500 mt-0.5">
                            •
                          </span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">主要功能</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {tool.features.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            {index + 1}
                          </div>
                          <div className="pt-1">
                            <p className="text-sm">{feature}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="rounded-lg overflow-hidden border mt-6">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt={`${tool.name} Features`}
                    width={800}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="use-cases" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">常见用例</h3>

                <div className="space-y-6">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{useCase.title}</h4>
                        <p className="text-muted-foreground mt-1">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-medium mb-2 mt-8">相关设计方法</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {tool.relatedMethods.map((method, index) => (
                      <Link
                        key={index}
                        href={`/knowledge-base/methods/${method.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group"
                      >
                        <Card className="transition-all hover:border-primary/50">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">{method}</CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">替代方案与比较</h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">工具</th>
                        <th className="text-left py-3 px-4">最适合</th>
                        <th className="text-left py-3 px-4">价格</th>
                        <th className="text-left py-3 px-4">评分</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-primary/5">
                        <td className="py-3 px-4 font-medium">{tool.name}</td>
                        <td className="py-3 px-4">可视化协作，工作坊</td>
                        <td className="py-3 px-4">{tool.pricing}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(tool.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">MURAL</td>
                        <td className="py-3 px-4">设计思维，引导</td>
                        <td className="py-3 px-4">免费版，每月9.99美元起</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Figma FigJam</td>
                        <td className="py-3 px-4">设计团队，快速构思</td>
                        <td className="py-3 px-4">Free plan, from $3/month</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 4.5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Lucidspark</td>
                        <td className="py-3 px-4">结构化协作</td>
                        <td className="py-3 px-4">From $7.95/month</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-6">
                  <h4 className="font-medium mb-2">何时选择 {tool.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tool.name}{" "}
                    在你需要一个支持广泛设计方法并适合分布式团队的多功能协作平台时是理想选择。它在可视化协作方面特别强大，并为设计工作坊提供了出色的模板选项。
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>快速信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">类别</p>
                  <p className="text-sm text-muted-foreground">{tool.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">价格</p>
                  <p className="text-sm text-muted-foreground">{tool.pricing}</p>
                </div>
              </div>

              <div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={tool.website} target="_blank" rel="noopener noreferrer">
                    访问网站
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>模板</CardTitle>
              <CardDescription>可直接使用的模板，适用于 {tool.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Stakeholder Mapping Template"
                  width={300}
                  height={150}
                  className="w-full object-cover"
                />
              </div>
              <h4 className="font-medium">Stakeholder Mapping Template</h4>
              <p className="text-sm text-muted-foreground">一个可直接使用的模板，用于与团队一起创建利益相关者图谱。</p>
              <Button variant="outline" className="w-full">
                查看模板
              </Button>

              <div className="pt-4 mt-4 border-t">
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="/placeholder.svg?height=150&width=300"
                    alt="User Journey Map Template"
                    width={300}
                    height={150}
                    className="w-full object-cover"
                  />
                </div>
                <h4 className="font-medium mt-4">User Journey Map Template</h4>
                <p className="text-sm text-muted-foreground">使用这个协作模板可视化整个用户体验。</p>
                <Button variant="outline" className="w-full mt-4">
                  查看模板
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
