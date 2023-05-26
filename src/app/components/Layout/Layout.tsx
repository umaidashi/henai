"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";
import { User } from "@prisma/client";

export default function Layout({
  children,
  type,
  currentUser,
}: {
  children: ReactNode;
  type?: string;
  currentUser: User | undefined | null;
}) {
  const [theme, setTheme] = useState<string>("light");
  const changeTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
    <body data-theme={theme}>
      <header className="container mx-auto">
        <Header theme={theme} changeTheme={changeTheme} currentUser={currentUser} />
      </header>
      <div className="grid grid-cols-3 gap-4 container min-h-screen pt-24 px-4">
        <main className="col-span-2 bg-base-200 rounded-sm bg-base-200/20 backdrop-blur-sm rounded-xl p-8">
          {children}
        </main>
        <aside className="col-span-1 bg-base-200 rounded-sm bg-base-200/20 backdrop-blur-sm rounded-xl p-8">
          sidebar
        </aside>
      </div>
      <div className="grid grid-cols-3 gap-4 container min-h-screen pt-20 px-4">
        <main className="col-span-2 bg-base-200 rounded-sm bg-base-200/20 backdrop-blur-sm rounded-xl p-8">
          <div className="gap-2 columns-3">
            <div>
              <img
                className="w-full aspect-video object-cover mb-2"
                src="https://picsum.photos/500/300?random=1"
              />
            </div>
            <div>
              <img
                className="w-full aspect-square object-cover mb-2"
                src="https://picsum.photos/500/300?random=2"
              />
            </div>
            <div>
              <img
                className="w-full aspect-square object-cover mb-2"
                src="https://picsum.photos/500/300?random=3"
              />
            </div>
            <div>
              <img
                className="w-full aspect-square object-cover mb-2"
                src="https://picsum.photos/500/300?random=4"
              />
            </div>
            <div>
              <img
                className="w-full aspect-video object-cover mb-2"
                src="https://picsum.photos/500/300?random=5"
              />
            </div>
            <div>
              <img
                className="w-full aspect-video object-cover mb-2"
                src="https://picsum.photos/500/300?random=6"
              />
            </div>
            <div>
              <img
                className="w-full aspect-square object-cover mb-2"
                src="https://picsum.photos/500/300?random=7"
              />
            </div>
            <div>
              <img
                className="w-full aspect-video object-cover mb-2"
                src="https://picsum.photos/500/300?random=8"
              />
            </div>
            <div>
              <img
                className="w-full aspect-square object-cover mb-2"
                src="https://picsum.photos/500/300?random=9"
              />
            </div>
          </div>
        </main>
        <aside className="col-span-1 bg-base-200 rounded-sm bg-base-200/20 backdrop-blur-sm rounded-xl p-8">
          sidebar
        </aside>
      </div>
    </body>
  );
}
