import { GoogleGenerativeAI, SchemaType  } from "@google/generative-ai";

export default class GeminiClient {
  constructor(apiKey) {
    const genAI = new GoogleGenerativeAI(apiKey);
    this.model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.STRING
        }
      }
    });
  }

  async predictSalary(currency, jobUrl) {
    const prompt = `Given the URL of a job description, predict the salary in ${currency}: \n ${jobUrl}`;

    const response = (await this.model.generateContent(prompt)).response.text();
    // Remove double quotes
    return response.replace(/['"]+/g, '');
  }
}
