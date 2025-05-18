"use client"

import { BookOpen, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface RecommendationResultProps {
  result: {
    methods: Array<{ name: string; description: string; phase: string }>
    tools: Array<{ name: string; description: string; type: string }>
  }
}

export function RecommendationResult({ result }: RecommendationResultProps) {
  return (
    <div className="mt-8 w-full">
      <h3 className="text-xl font-semibold mb-4">推荐解决方案</h3>

      <Tabs defaultValue="methods" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="methods">设计方法 ({result.methods.length})</TabsTrigger>
          <TabsTrigger value="tools">设计工具 ({result.tools.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-4 mt-4">
          {result.methods.map((method, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:border-primary/50">
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
        </TabsContent>

        <TabsContent value="tools" className="space-y-4 mt-4">
          {result.tools.map((tool, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:border-primary/50">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
