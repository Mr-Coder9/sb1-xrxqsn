import { NextResponse } from "next/server";

const PAIZA_API_URL = "https://api.paiza.io/runners/create";
const PAIZA_API_KEY = process.env.PAIZA_API_KEY;

const LANGUAGE_MAP = {
  python: "python3",
  javascript: "nodejs",
  java: "java",
  cpp: "cpp",
};

export async function POST(request: Request) {
  try {
    const { language, code } = await request.json();

    if (!PAIZA_API_KEY) {
      return NextResponse.json(
        { error: "Compiler service not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(PAIZA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PAIZA_API_KEY}`,
      },
      body: JSON.stringify({
        source_code: code,
        language: LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP],
        input: "",
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    // Get the compilation result
    const resultResponse = await fetch(
      `https://api.paiza.io/runners/get_details?id=${data.id}`,
      {
        headers: {
          Authorization: `Bearer ${PAIZA_API_KEY}`,
        },
      }
    );

    const result = await resultResponse.json();

    return NextResponse.json({
      output: result.stdout || result.stderr || "No output",
      error: result.build_stderr || null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to compile code" },
      { status: 500 }
    );
  }
}