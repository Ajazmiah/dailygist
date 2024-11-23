import React from "react";
import Link from "next/link";
import Logo from "../../../public/LogoBriefly.svg";

function Header() {
  const mainNav = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
  ];

  return (
    <header className="px-[10px] container mx-auto pt-[1.5em]">
      <div className="mx-[0] flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          className="block text-teal-600 dark:text-teal-300 pt-[1em]"
          href="/"
        >
          <Logo />
        </Link>
        <nav aria-label="Global">
          <ul className="flex items-center text-black gap-6 text-sm">
            {mainNav.map((nav) => (
              <li key={nav.path}>
                <Link  className="border-b-0 hover:border-b-[3px] hover:border-red-500" href={nav.path}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-start md:justify-between">
          {/* <div class="flex items-center gap-4 ml-[auto]">
            <div class="sm:flex sm:gap-4">
              <a
                class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                href="#"
              >
                Login
              </a>

              <a
                class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a>
            </div>

            <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <span class="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
