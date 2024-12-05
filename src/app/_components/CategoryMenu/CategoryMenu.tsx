"use client";
import { CATEGORIES, getIcon } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function CategoryMenu({ catergoryParam }: { catergoryParam: string }) {
  const pathname = usePathname();

  const currentNav = (category: string) => {
    if (pathname === "/" && category === "Home") {
      return { borderBottom: "2px solid red" };
    } else {
      return catergoryParam === category
        ? { borderBottom: "2px solid red" }
        : {};
    }
  };

  const menuClasses = `flex flex-col pt-8 w-full absolute top-[15vh]  h-[auto] z-[100]`;

  return (
    <>
      <div className={menuClasses}>
        <ul className="flex max-w-full flex-row py-[0] pl-8 gap-[.8em] mx-auto overflow-x-scroll max-w-[960px]">
          {CATEGORIES.map((category) => (
            <li key={category} className="flex items-center gap-[1em]">
              {getIcon(category)}
              <Link
                href={category === "Home" ? "/" : `/category/${category}`}
                className={`flex ml-[-15px] items-center p-2 text-gray-900 hover:text-gray-500`}
              >
                <span
                  className="text-sm font-medium text-black"
                  style={currentNav(category)}
                >
                  {category}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryMenu;
