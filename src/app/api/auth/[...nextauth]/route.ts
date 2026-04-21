import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
   providers: [
      CredentialsProvider({
         name: "Credentials",
         credentials: {
            identifier: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            if (!credentials?.identifier || !credentials?.password) return null;

            try {
               const res = await fetch(
                  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/local`,
                  {
                     method: "POST",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({
                        identifier: credentials.identifier,
                        password: credentials.password,
                     }),
                  },
               );

               const data = await res.json();

               if (res.ok && data.jwt) {
                  return {
                     id: data.user.id.toString(),
                     username: data.user.username,
                     name: data.user.username,
                     email: data.user.email,
                     jwt: data.jwt,
                     confirmed: data.user.confirmed,
                  };
               }
               return null;
            } catch (error) {
               console.error("Auth error:", error);
               return null;
            }
         },
      }),
   ],
   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            token.jwt = user.jwt;
            token.id = user.id;
            token.username = user.username;
            token.confirmed = user.confirmed;
         }
         return token;
      },
      async session({ session, token }) {
         if (token) {
            session.user.jwt = token.jwt;
            session.user.id = token.id;
            session.user.username = token.username;
            session.user.confirmed = token.confirmed;
         }
         return session;
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
   pages: {
      signIn: "/login",
   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
