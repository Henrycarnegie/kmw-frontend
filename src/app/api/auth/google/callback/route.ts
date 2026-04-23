import { NextResponse } from "next/server";

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function POST(req: Request) {
   const { access_token } = await req.json();

   if (!access_token) {
      return NextResponse.json(
         { error: "Access token is required" },
         { status: 400 },
      );
   }

   const res = await fetch(
      `${backendUrl}/api/auth/google/callback?access_token=${access_token}`,
   );

   const data = await res.json();

   if (!res.ok) {
      console.error("Strapi Google Auth Error:", data);
      return NextResponse.json(
         { error: data.error?.message || "Google login failed" },
         { status: 400 },
      );
   }

   console.log("STRAPI RESPONSE:", data);
   const response = NextResponse.json({ user: data.user });

   response.cookies.set("token", data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
   });

   return response;
}
