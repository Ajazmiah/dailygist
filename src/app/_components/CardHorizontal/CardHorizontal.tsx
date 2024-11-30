import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";

type ArticlesDataWithChildrent = {
  articles: PerigontypeArticle[];
  category?: string;
};

function CardHorizontal({ articles, category }: ArticlesDataWithChildrent) {
  return (
    <div
      className="col-span-4  flex flex-wrap"
      style={{ height: "max-content" }}
    >
      {articles.map((article: PerigontypeArticle) => {
        const CATEGORY = category || article.category || "top";
        const cleanTitle = article.title.split("%20").join("-");
        return (
          <>
            <Link
              key={article.article_id}
              href={`/article/${CATEGORY}/${cleanTitle}/${article.article_id}`}
              className="basis-1/2 flex items-center"
            >
              <div className="flex gap-5 items-center">
                <img
                  alt={article.title}
                  src={article.image_url}
                  className=" w-[200px] h-full align-center object-cover"
                />
                <div className="bg-white p-4 sm:p-6" style={{ paddingLeft: 0 }}>
                  <time
                    dateTime={new Date(article.pubDate).toISOString()}
                    className="block text-xs text-gray-500"
                  >
                    {new Date(article.pubDate).toLocaleDateString()}
                  </time>
                  <h3 className="mt-0.5 text-lg text-gray-900 font-medium">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
            <div className="my-4">
              <div className="border-t border-gray-300"></div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CardHorizontal;
