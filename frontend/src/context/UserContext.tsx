"use client"

import { createContext, ReactNode, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from "axios";

interface User {
  id: number,
  uid: string,
  name: string;
  email: string;
  avatar: { url: string | null },
  created_at: Date,
  updated_at: Date,
};

export const userContext = createContext<User | null>(null);

export const UserContextProvider = ({children}: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = async () => {
      if (session) {
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL
          const response = await axios.get(`${apiUrl}/users/${session.user?.email}`);
          const user = response.data.user;
          setUser(user);
        } catch (error) {
          return
        };
      };
    };
    userData();
  }, [session]);

  return <userContext.Provider value={user}>{children}</userContext.Provider>
};
