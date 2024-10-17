import Groq from "groq-sdk";

const GROQ_API_KEY = "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";

const groq = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getTripPlannerAnswer(text: string): Promise<string> {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: text,
      },
    ],
    model: "llama3-8b-8192",
  });

  return chatCompletion.choices[0]?.message?.content || "";
}
