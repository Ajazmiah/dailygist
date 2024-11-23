"use client";
import { getIcon } from "@/utils/utils";
import Link from "next/link";
import React from "react";

function CategoryMenu({ catergoryParam }: { catergoryParam: string }) {
  const categories = [
    "Technology",
    "Politics",
    "Science",
    "Sports",
    "Business",
    "Crime",
    "Entertainment",
    "Health",
    "Lifestyle",
    "Environment",
    "Food",
  ];

  // const [selectedCategory, setSelectedCategory] = React.useState(
  //   catergoryParam || "Technology"
  // );

  // useEffect(() => {
  //   // Set the selected category based on the initial `catergoryParam` prop
  //   if (catergoryParam) {
  //     setSelectedCategory(catergoryParam);
  //   }
  // }, [catergoryParam]);

  const menuClasses = `flex flex-col pt-8 w-full absolute top-[15vh]  h-[auto] z-[100]`;

  return (
    <>
      <div className={menuClasses}>
        <ul className="flex max-w-full flex-row py-[0] pl-8 gap-[.8em] mx-auto overflow-x-scroll max-w-[960px]">
          {categories.map((category) => (
            <li key={category} className="flex items-center gap-[1em]">
              {getIcon(category)}
              <Link
                href={`/category/${category}`}
                className={`flex ml-[-15px] items-center p-2 text-gray-900 hover:text-gray-500`}
              >
                <span
                  className="text-sm font-medium text-black"
                  style={
                    catergoryParam === category
                      ? { borderBottom: "2px solid red" }
                      : {}
                  }
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
