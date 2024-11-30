import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";

type ArticlesDataWithChildrent = {
  articles: PerigontypeArticle[];
  category?: string;
  renderItem?: (article: PerigontypeArticle) => React.ReactNode;
};

export default function LeadArticleCard({
  articles,
  category,
  renderItem,
}: ArticlesDataWithChildrent) {
  return (
    <div className="col-span-4 p-4" style={{ height: "max-content" }}>
      {articles.map((article: PerigontypeArticle) => {
        const CATEGORY = category || article.category || "top";
        const cleanTitle = article.title.split("%20").join("-");
        return (
          <>
            <Link
              key={article.article_id}
              href={`/article/${CATEGORY}/${cleanTitle}/${article.article_id}`}
              className=" absolute overflow-hidden h-fit max-w-full relative  transition hover:shadow-lg hover:cursor-pointer flex-shrink-0"
            >
              <div
                className="overflow-hidden max-w-full pl-[0] flex-shrink-0"
                style={{ height: "100%" }}
              >
                {renderItem && renderItem(article)}
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
                  <p className="text-sm text-gray-700 mt-1 line-clamp-3 overflow-hidden text-ellipsis">
                    {article.description}
                  </p>
                  {/* <img
                    alt="Source Icon"
                    src={article.source_icon}
                    style={{
                      top: "0",
                      maxWidth: "50px",
                      right: "0",
                      position: "absolute",
                    }}
                  /> */}
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
