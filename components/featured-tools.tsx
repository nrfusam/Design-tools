import { BookOpen, Lightbulb, Users, Workflow } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedTools() {
  const featuredItems = [
    {
      name: "设计思维",
      description: "以人为中心的创新方法，结合设计师工具箱，整合人的需求、技术和商业成功。",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      type: "方法",
      phase: "所有阶段",
    },
    {
      name: "用户旅程图",
      description: "对用户实现目标过程的可视化表示，展示每个接触点的用户体验。",
      icon: <Workflow className="h-8 w-8 text-primary" />,
      type: "方法",
      phase: "研究",
    },
    {
      name: "利益相关者访谈",
      description: "与项目利益相关者进行的结构化对话，收集见解、需求和期望。",
      icon: <Users className="h-8 w-8 text-primary" />,
      type: "方法",
      phase: "发现",
    },
    {
      name: "Figma",
      description: "协作界面设计工具，使团队能够从头到尾创建、测试和交付设计。",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      type: "工具",
      category: "设计",
    },
    {
      name: "Miro",
      description: "在线协作白板平台，使分布式团队能够有效地一起工作。",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      type: "工具",
      category: "协作",
    },
    {
      name: "Optimal Workshop",
      description: "用于改进信息架构和用户体验的可用性测试工具套件。",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      type: "工具",
      category: "研究",
    },
    {
      name: "价值主张画布",
      description: "确保产品或服务围绕客户价值和需求定位的框架。",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      type: "方法",
      phase: "策略",
    },
    {
      name: "可用性测试",
      description: "通过代表性用户测试产品以识别可用性问题。",
      icon: <Users className="h-8 w-8 text-primary" />,
      type: "方法",
      phase: "测试",
    },
  ]

  return (
    <>
      {featuredItems.map((item, index) => (
        <Link
          key={index}
          href={`/knowledge-base/${item.type.toLowerCase()}s/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="group"
        >
          <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                {item.icon}
                <Badge variant="outline" className="bg-primary/10">
                  {item.type === "方法" ? item.phase : item.category}
                </Badge>
              </div>
              <CardTitle className="text-lg mt-2">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}
