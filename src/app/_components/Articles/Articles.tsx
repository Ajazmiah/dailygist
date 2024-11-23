import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import CardVerticle from "../CardLead/CardLead";

function Articles({
  data,
  category,
}: {
  data: PerigontypeArticle[];
  category: string;

}) {
  const lastPage = null;

  return (
    <>
      <CategoryMenu catergoryParam={category} />
      <div className="container mx-auto md:mt-[5em] mt-[10em] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-wrap gap-5 gap-y-7 justify-center container mt-[3em]">
          {data?.map((newsData: PerigontypeArticle) => (
            <CardVerticle article={newsData} key={newsData.article_id}  category={category}/>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {lastPage ? (
            <Link
              className="text-center my-[2em] block"
              href={`/category/${category}`}
            >
              <button className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                <span>Prev</span>
              </button>
            </Link>
          ) : null}

          <Link
            className="text-center my-[2em] block"
            href={`/category/${category}}`}
          >
            <button className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4">
              <span>Next</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Articles;
