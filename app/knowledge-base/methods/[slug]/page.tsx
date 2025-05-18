import { ArrowLeft, Clock, FileText, Lightbulb, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { methods } from "@/data/methods"

interface MethodPageProps {
  params: {
    slug: string
  }
}

export default function MethodPage({ params }: MethodPageProps) {
  // Find the method based on the slug
  const method = methods.find(
    (m) => m.id === parseInt(params.slug)
  )

  // If method is not found, return a 404 page
  if (!method) {
    notFound()
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
                {method.phase}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {method.timeRequired}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-1 h-4 w-4" />
                {method.teamSize}
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{method.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{method.description}</p>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="steps">步骤</TabsTrigger>
              <TabsTrigger value="challenges">挑战</TabsTrigger>
              <TabsTrigger value="resources">资源</TabsTrigger>
              <TabsTrigger value="cases">案例</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">关于此方法</h3>
                <p className="text-muted-foreground">{method.overview}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">适用场景</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {method.applicableScenarios && method.applicableScenarios.map((scenario, index) => (
                    <li key={index}>{scenario}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">预期结果</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {method.expectedOutcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Stakeholder Mapping Example"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </TabsContent>

            <TabsContent value="steps" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">如何使用此方法</h3>

                <div className="space-y-6">
                  {method.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{step.title}</h4>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg overflow-hidden border mt-8">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Stakeholder Mapping Process"
                    width={800}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">常见挑战与解决方案</h3>

                <div className="space-y-4">
                  {method.commonChallenges.map((challenge, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                          挑战 {index + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{challenge}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 mt-6">
                  <h4 className="font-medium mb-2">专业提示</h4>
                  <p className="text-sm text-muted-foreground">
                    考虑在项目关键里程碑重新审视你的利益相关者图谱。利益相关者的影响力和兴趣可能在整个项目生命周期中发生变化，新的利益相关者可能会出现。
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">额外资源</h3>

                <div>
                  <h4 className="font-medium mb-2">模板与下载</h4>
                  <div className="grid gap-2">
                    <Button variant="outline" className="justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      利益相关者图谱模板 (PDF)
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      利益相关者分析工作表 (XLSX)
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">相关方法</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {method.relatedMethods.map((relatedMethod, index) => (
                      <Link
                        key={index}
                        href={`/knowledge-base/methods/${relatedMethod.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group"
                      >
                        <Card className="transition-all hover:border-primary/50">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">{relatedMethod}</CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">推荐工具</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {method.relatedTools.map((tool, index) => (
                      <Link
                        key={index}
                        href={`/knowledge-base/tools/${tool.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group"
                      >
                        <Card className="transition-all hover:border-primary/50">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">{tool}</CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cases" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">实际案例</h3>

                <div className="space-y-4">
                  {method.cases && method.cases.map((caseItem, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">
                          {caseItem.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>尝试此方法</CardTitle>
              <CardDescription>开始使用利益相关者图谱</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Stakeholder Mapping Template"
                  width={400}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                使用我们的交互式模板创建你自己的利益相关者图谱并制定参与策略。
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">使用模板</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>专家提示</CardTitle>
              <CardDescription>来自设计专业人士的建议</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jane Doe, UX Researcher</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      在绘制利益相关者图谱时，不要只关注他们当前的影响力。考虑他们的影响力在整个项目生命周期中可能如何变化。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    MS
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mike Smith, Product Manager</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      对于长期项目，我建议至少每季度重新审视一次你的利益相关者图谱。随着项目的发展，新的利益相关者经常会出现。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
