"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";

export default function Layout({
  children,
  type,
}: {
  children: ReactNode;
  type?: string;
}) {
  const [theme, setTheme] = useState<string>("light");
  const changeTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
    <body data-theme={theme}>
      <header>
        <Header theme={theme} changeTheme={changeTheme} />
      </header>
      <div className="grid grid-cols-3 gap-4 container min-h-screen pt-20 px-4">
        <main className="col-span-2 bg-base-200 rounded-sm bg-base-200/20 backdrop-blur-sm rounded-xl p-8">
          {children}
        </main>
        <aside className="col-span-1 bg-base-200 rounded-sm bg-base-200/20 backdrop-blur-sm rounded-xl p-8">
          sidebar
        </aside>
      </div>
    </body>
  );
}
