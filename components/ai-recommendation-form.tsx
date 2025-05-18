"use client"

import type React from "react"

import { useState } from "react"
import { Loader2, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RecommendationResult } from "@/components/recommendation-result"

export function AIRecommendationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [challenge, setChallenge] = useState("")
  const [result, setResult] = useState<null | {
    methods: Array<{ name: string; description: string; phase: string }>
    tools: Array<{ name: string; description: string; type: string }>
  }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!challenge.trim()) return

    setIsLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      // Mock response - in a real app, this would come from an AI API call
      setResult({
        methods: [
          {
            name: "利益相关者图谱",
            description: "根据影响力和兴趣对项目中涉及或受影响的所有相关方进行可视化表示。",
            phase: "研究与发现",
          },
          {
            name: "基于利益的问题解决",
            description: "一种协作方法，关注利益相关者立场背后的利益，寻找互利共赢的解决方案。",
            phase: "构思与策略",
          },
          {
            name: "价值主张画布",
            description: "确保产品或服务围绕客户价值和需求定位的工具。",
            phase: "验证与测试",
          },
        ],
        tools: [
          {
            name: "Miro利益相关者图谱模板",
            description: "用于可视化利益相关者关系和优先级的交互式模板。",
            type: "协作工具",
          },
          {
            name: "冲突解决框架",
            description: "逐步指导有效处理和解决利益相关者冲突的方法。",
            type: "框架",
          },
        ],
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle>描述你的设计挑战</CardTitle>
          <CardDescription>具体描述你面临的问题，以获得最相关的推荐</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Textarea
              placeholder="例如：我在产品设计过程中难以处理利益相关者的冲突需求..."
              className="min-h-[120px] resize-none"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" disabled={isLoading || !challenge.trim()}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  分析中...
                </>
              ) : (
                <>
                  <SendIcon className="mr-2 h-4 w-4" />
                  获取推荐
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {result && <RecommendationResult result={result} />}
    </div>
  )
}
