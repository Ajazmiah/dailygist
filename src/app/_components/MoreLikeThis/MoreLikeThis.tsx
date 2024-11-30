import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";

const key = process.env.NEWSDATA_IO_KEY;

const fetchArticles = async (category: string, currentId: string) => {
  try {
    const perigonURL = `https://newsdata.io/api/1/latest?country=us,gb,in,bd&image=1&apikey=${key}&category=${
      category === "other" ? "top" : category
    }&size=3&language=en`;
    const res = await fetch(perigonURL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.results.filter(
      (article: PerigontypeArticle) => article.article_id !== currentId
    );
  } catch (error) {
    console.error("An error occurred while fetching the post:", error);
  }
};

async function MoreLikeThis({
  category,
  currentId,
}: {
  category: string;
  currentId: string;
}) {
  const articles = await fetchArticles(category, currentId);
  return (
    <>
      {articles.map((article: PerigontypeArticle) => (
        <>
          <Link
            className="relative w-[100%]flex flex-col my-6 bg-white"
            key={article.article_id}
            href={`/article/${category}/${article.title}/${article.article_id}`}
          >
            <div className="p-4">
              <img src={article.image_url} />
              <h5 className="mb-2 underline text-slate-800 text-md font-semibold">
                {article.title}
              </h5>
            </div>
          </Link>
          <div className="my-4">
            <div className="border-t border-gray-300"></div>
          </div>
        </>
      ))}
    </>
  );
}

export default MoreLikeThis;
