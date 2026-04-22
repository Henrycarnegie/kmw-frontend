import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function GET() {
   const cookieStore = await cookies();
   const token = cookieStore.get("token")?.value;

   if (!token) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
   }

   const res = await fetch(`${backendUrl}/api/users/me`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });

   if (!res.ok) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
   }

   const data = await res.json();

   return Response.json({
      id: data.id,
      username: data.username,
      email: data.email,
   });
}
