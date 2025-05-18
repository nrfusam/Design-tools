"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export function AnalyzeForm() {
  const router = useRouter()
  const [challenge, setChallenge] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!challenge.trim()) return

    setIsSubmitting(true)

    // 将挑战描述作为查询参数传递给结果页面
    const params = new URLSearchParams()
    params.set("challenge", challenge)
    router.push(`/analyze/results?${params.toString()}`)
  }

  return (
    <Card className="border-2 border-primary/20">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>输入你的设计挑战</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="例如：我在产品设计过程中难以处理不同利益相关者的冲突需求，如何平衡各方期望并确保产品满足核心用户需求？"
            className="min-h-[200px] resize-none"
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" disabled={isSubmitting || !challenge.trim()}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                分析中...
              </>
            ) : (
              "获取推荐"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
