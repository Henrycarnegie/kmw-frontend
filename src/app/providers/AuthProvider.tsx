"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
   id: number;
   username: string;
   email: string;
};

type AuthContextType = {
   user: User | null;
   isLogged: boolean;
   loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState<User | null>(null);
   const [isLogged, setIsLogged] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const initAuth = async () => {
         try {
            const res = await fetch("/api/me");

            if (res.status === 401) {
               setUser(null);
               setIsLogged(false);
               return;
            }

            const data = await res.json();

            setUser(data);
            setIsLogged(true);
         } catch {
            setUser(null);
            setIsLogged(false);
         } finally {
            setLoading(false);
         }
      };

      initAuth();
   }, []);

   return (
      <AuthContext.Provider value={{ user, isLogged, loading }}>
         {children}
      </AuthContext.Provider>
   );
}

export const useAuth = () => {
   const context = useContext(AuthContext);

   if (context === null) {
      throw new Error("useAuth must be used within AuthProvider");
   }

   return context;
};