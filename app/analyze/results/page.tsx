"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnalysisResults } from "@/components/analysis-results"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const challenge = searchParams.get("challenge")
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<null | {
    methods: Array<{ name: string; description: string; phase: string }>
    tools: Array<{ name: string; description: string; type: string }>
    analysis: string
  }>(null)

  useEffect(() => {
    if (!challenge) return

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ challenge }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching analysis results:', error);
        // Optionally set an error state here to display to the user
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [challenge])

  if (!challenge) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-24 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">未提供挑战描述</h1>
        <p className="mt-4 text-muted-foreground">请返回并描述你的设计挑战</p>
        <Button asChild className="mt-8">
          <Link href="/analyze">返回</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="mb-8">
        <Link href="/analyze" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回修改挑战
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">分析结果</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">基于你的挑战描述，我们推荐以下设计方法和工具</p>
      </div>

      {isLoading ? (
        <div className="space-y-8">
          <Skeleton className="h-24 w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      ) : results ? (
        <AnalysisResults results={results} challenge={challenge} />
      ) : (
        <div className="text-center text-red-500">加载分析结果失败。请稍后重试。</div>
      )
      }
    </div>
  )
}
