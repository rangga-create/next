"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

interface User {
  username: string;
  nama: string;
}

interface ContextStyle {
  theme: string;
  toggleTheme: () => void;
  IsAuth: boolean;
  Login: (username: string, nama: string) => void;
  LogOut: () => void;
  user: User | null;
}

export const AppContext = createContext<ContextStyle>({
  theme: "light",
  toggleTheme: () => {},
  IsAuth: false,
  Login: () => {},
  LogOut: () => {},
  user: null,
});

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [theme, setTheme] = useState("light");
  const [IsAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    const savedUser = localStorage.getItem("user");
    if (auth === "true" && savedUser) {
      setIsAuth(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const Login = (username: string, nama: string) => {
    const newUser = { username, nama };
    setIsAuth(true);
    setUser(newUser);
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const LogOut = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        IsAuth,
        Login,
        LogOut,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
