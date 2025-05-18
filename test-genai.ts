import { GoogleGenAI } from '@google/genai';;

const API_KEY = process.env.GEMINI_API_KEY || 'YOUR_API_KEY';
const ai = new GoogleGenAI({ apiKey: API_KEY });

async function test() {
    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash-001',
      contents: 'Write a 100-word poem.',
    });
    for await (const chunk of response) {
      console.log(chunk.text);
    }
  }
  
  test();