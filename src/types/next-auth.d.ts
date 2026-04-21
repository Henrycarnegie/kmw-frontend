import { DefaultSession } from "next-auth";

declare module "next-auth" {
   interface Session extends DefaultSession {
      user: {
         id: string;
         username: string;
         jwt: string;
         confirmed: boolean;
      } & DefaultSession["user"];
   }

   interface User {
      id: string;
      username: string;
      jwt: string;
      confirmed: boolean;
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      id: string;
      username: string;
      jwt: string;
      confirmed: boolean;
   }
}
