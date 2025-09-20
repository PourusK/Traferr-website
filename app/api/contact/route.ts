import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  console.log("Contact submission", payload);

  return NextResponse.json({ ok: true });
}
