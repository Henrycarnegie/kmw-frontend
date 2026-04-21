"use client";

import { useEffect, useState } from "react";

type User = {
   id: string | null;
   username: string | null;
   name: string | null;
   email: string | null;
   confirmed: boolean;
   jwt: string | null;
};

const useActiveUser = (): User | null => {
   const [user, setUser] = useState<User | null>(null);

   useEffect(() => {
      const jwt = localStorage.getItem("jwt");
      const username = localStorage.getItem("username");
      const email = localStorage.getItem("email");

      if (jwt) {
         const userData: User = {
            id: null,
            username: username,
            name: username,
            email: email,
            confirmed: true,
            jwt: jwt,
         };
         
         // Use queueMicrotask to avoid synchronous setState warning
         // "Calling setState synchronously within an effect can trigger cascading renders"
         queueMicrotask(() => {
            setUser(userData);
         });
      } else {
         queueMicrotask(() => {
            setUser(null);
         });
      }
   }, []);

   return user;
};

export default useActiveUser;