import { AnalyzeForm } from "@/components/analyze-form"

export default function AnalyzePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">描述你的设计挑战</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          详细描述你当前面临的设计问题或挑战，我们的AI将分析并推荐最适合的设计方法和工具
        </p>
      </div>

      <AnalyzeForm />
    </div>
  )
}
