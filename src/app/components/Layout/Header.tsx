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
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
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
            <a className="gap-2 flex relative">
              <SwatchIcon className="w-5 h-5" />
              {theme[0].toUpperCase() + theme.slice(1)}
              <ChevronDownIcon className="w-5 h-5" />
            </a>
            <ul className="p-2 shadow bg-base-200 rounded-sm w-60 max-h-[400px] overflow-y-auto z-50 absolute right-0">
              {THEMES.map((THEME) => (
                <li
                  data-theme={THEME}
                  key={THEME}
                  className="flex gap-1 items-center my-2 px-6 pt-3 pb-4 rounded-md font-bold"
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
    </header>
  );
}
