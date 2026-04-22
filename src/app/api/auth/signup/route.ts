import { NextResponse } from "next/server";

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(`${backendUrl}/api/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: result.error?.message || "Signup failed" },
      { status: 400 }
    );
  }

  const response = NextResponse.json({ user: result.user });

  response.cookies.set("token", result.jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // ✅ FIX
    sameSite: "lax", // lebih aman untuk dev
    path: "/",
  });

  return response;
}