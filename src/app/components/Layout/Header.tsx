"use client";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  SwatchIcon,
} from "@heroicons/react/20/solid";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default function Header({
  theme,
  changeTheme,
}: {
  theme: string;
  changeTheme: (theme: string) => void;
}) {
  return (
    <div className="navbar rounded-sm bg-base-200/20 backdrop-blur-sm fixed z-50">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Hen AI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Parent
                <ChevronDownIcon className="w-5 h-5" />
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li tabIndex={1}>
              <a className="gap-2 flex">
                <SwatchIcon className="w-5 h-5" />
                {theme[0].toUpperCase() + theme.slice(1)}
                <ChevronDownIcon className="w-5 h-5" />
              </a>
              <ul className="p-2 shadow-lg bg-base-100 w-60 max-h-[400px] overflow-y-auto right-0">
                {THEMES.map((THEME) => (
                  <li
                    data-theme={THEME}
                    key={THEME}
                    className="flex gap-1 items-center my-2 px-6 pt-3 pb-4 rounded-md font-bold border-2 border-base-200"
                    onClick={() => changeTheme(THEME)}
                  >
                    {THEME[0].toUpperCase() + THEME.slice(1)}
                    {THEME === theme && (
                      <CheckCircleIcon className="h-6 w-6 ml-2 p-0" />
                    )}
                    <div className="px-1 py-1 bg-primary"></div>
                    <div className="px-1 py-1 bg-secondary"></div>
                    <div className="px-1 py-1 bg-accent"></div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
