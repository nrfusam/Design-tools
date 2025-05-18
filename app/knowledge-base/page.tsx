"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { methods } from "@/data/methods"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPhase, setSelectedPhase] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock data - in a real app, this would come from a database or API
  const tools = [
    {
      id: 1,
      name: "Figma",
      description: "协作界面设计工具，使团队能够从头到尾创建、测试和交付设计。",
      category: "设计",
    },
    {
      id: 2,
      name: "Miro",
      description: "在线协作白板平台，使分布式团队能够有效地一起工作。",
      category: "协作",
    },
    {
      id: 3,
      name: "Optimal Workshop",
      description: "用于改进信息架构和用户体验的可用性测试工具套件。",
      category: "研究",
    },
    {
      id: 4,
      name: "Maze",
      description: "快速测试平台，使您能够验证想法、测试设计并收集用户反馈。",
      category: "测试",
    },
    {
      id: 5,
      name: "Notion",
      description: "集笔记、任务、知识库和数据库于一体的工作空间。",
      category: "文档",
    },
    {
      id: 6,
      name: "Airtable",
      description: "部分电子表格，部分数据库，完全灵活，用于组织设计研究和见解。",
      category: "组织",
    },
  ]

  // Filter methods based on search query and selected phase
  const filteredMethods = methods.filter((method) => {
    const matchesSearch =
      method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPhase = selectedPhase === "all" || method.phase === selectedPhase
    return matchesSearch && matchesPhase
  })

  // Filter tools based on search query and selected category
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">设计知识库</h1>
        <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          探索我们全面的设计方法和工具集合，提升你的设计流程
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索方法和工具..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="methods" className="mt-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="methods">设计方法</TabsTrigger>
          <TabsTrigger value="tools">设计工具</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="mt-6">
          <div className="flex justify-end mb-4">
            <Select value={selectedPhase} onValueChange={setSelectedPhase}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="按阶段筛选" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有阶段</SelectItem>
                <SelectItem value="Discovery">发现</SelectItem>
                <SelectItem value="Research">研究</SelectItem>
                <SelectItem value="Strategy">策略</SelectItem>
                <SelectItem value="Testing">测试</SelectItem>
                <SelectItem value="All Phases">跨阶段</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMethods.map((method) => (
              <Link
                key={method.id}
                href={`/knowledge-base/methods/${method.id}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{method.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10">
                        {method.phase}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredMethods.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">没有找到符合条件的方法。</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="tools" className="mt-6">
          <div className="flex justify-end mb-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="按类别筛选" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有类别</SelectItem>
                <SelectItem value="Design">设计</SelectItem>
                <SelectItem value="Collaboration">协作</SelectItem>
                <SelectItem value="Research">研究</SelectItem>
                <SelectItem value="Testing">测试</SelectItem>
                <SelectItem value="Documentation">文档</SelectItem>
                <SelectItem value="Organization">组织</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/knowledge-base/tools/${tool.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{tool.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10">
                        {tool.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">没有找到符合条件的工具。</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
