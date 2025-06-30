import { NextRequest, NextResponse } from "next/server";
import { Mistral } from "@mistralai/mistralai";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const { messages } = (await req.json()) as { messages: Message[] };
  const apiKey = process.env.MISTRAL_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "API key is missing" },
      { status: 500 }
    );
  }

  const client = new Mistral({ apiKey });

  try {
    const chatResponse = await client.agents.complete({
      agentId: "ag:305d2485:20250114:tharikida-ui:9ae94d61",
      messages,
    });

    return NextResponse.json(chatResponse);
  } catch (error) {
    console.error("Error making API call:", error);
    return NextResponse.json(
      { message: "Error making API call" },
      { status: 500 }
    );
  }
}
