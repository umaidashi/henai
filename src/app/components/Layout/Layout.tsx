"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("light");
  const changeTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
    <body data-theme={theme}>
      <Header theme={theme} changeTheme={changeTheme} />
      <main className="min-h-screen">{children}</main>
    </body>
  );
}
