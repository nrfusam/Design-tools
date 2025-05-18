import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Replace with your actual API key
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing GEMINI_API_KEY environment variable');
}

const ai = new GoogleGenAI({ apiKey: API_KEY }); // 使用从环境变量获取的 API_KEY

export async function POST(request: Request) {
  try {
    const { challenge } = await request.json();

    if (!challenge) {
      return NextResponse.json({ error: 'Challenge description is required' }, { status: 400 });
    }

    

    const prompt = `你是一个专业的设计方法和工具推荐AI。用户会给你一个设计挑战的描述，你需要根据这个描述，分析挑战的核心问题，并推荐3-5个相关的设计方法和3-5个相关的设计工具。请以JSON格式返回结果，格式如下：
{
  "analysis": "对挑战的分析",
  "methods": [
    { "name": "方法名称", "description": "方法描述", "phase": "适用阶段 (例如：研究与发现, 构思与策略, 验证与测试)" }
  ],
  "tools": [
    { "name": "工具名称", "description": "工具描述", "type": "工具类型 (例如：协作工具, 框架, 决策工具)" }
  ]
}

请确保返回的JSON是有效的，并且只包含JSON内容，不要包含任何额外的文本或markdown格式。以下是用户的设计挑战：

${challenge}`;

    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: prompt
    }  
    );
    const response = await result.text;
    const text = response;

    if (!text) {
      return NextResponse.json({ error: 'No response from AI' }, { status: 500 });
    }

    // Attempt to parse the JSON response from Gemini
    let analysisResult;
    try {
      // Clean up the response text to ensure it's valid JSON
      const jsonString = text.replace(/^```json\n|\n```$/g, '').trim();
      analysisResult = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Failed to parse Gemini response as JSON:', parseError);
      console.error('Gemini raw response:', text);
      return NextResponse.json({ error: 'Failed to parse AI response', rawResponse: text }, { status: 500 });
    }

    return NextResponse.json(analysisResult);

  } catch (error: any) {
    console.error('API Error:', error);
    // Return a more specific error message to the frontend
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}