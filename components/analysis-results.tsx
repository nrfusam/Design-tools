import Link from "next/link"
import { BookOpen, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface AnalysisResultsProps {
  results: {
    methods: Array<{ name: string; description: string; phase: string }>
    tools: Array<{ name: string; description: string; type: string }>
    analysis: string
  }
  challenge: string
}

export function AnalysisResults({ results, challenge }: AnalysisResultsProps) {
  return (
    <div className="space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>挑战分析</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">你的挑战描述：</h3>
            <p className="text-sm italic border-l-4 border-primary/20 pl-4 py-2">{challenge}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">AI分析：</h3>
            <p>{results.analysis}</p>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">推荐解决方案</h2>
        <Tabs defaultValue="methods" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="methods">设计方法 ({results.methods.length})</TabsTrigger>
            <TabsTrigger value="tools">设计工具 ({results.tools.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.methods.map((method, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{method.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10">
                        {method.phase}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/knowledge-base/methods/${method.name.toLowerCase().replace(/\s+/g, "-")}`} passHref>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <BookOpen className="h-4 w-4" />
                        了解更多
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.tools.map((tool, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10">
                        {tool.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/knowledge-base/tools/${tool.name.toLowerCase().replace(/\s+/g, "-")}`} passHref>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Tool className="h-4 w-4" />
                        查看详情
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-center pt-6">
        <Button asChild>
          <Link href="/knowledge-base">浏览完整知识库</Link>
        </Button>
      </div>
    </div>
  )
}
