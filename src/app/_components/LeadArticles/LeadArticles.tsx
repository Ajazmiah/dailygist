import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";
import LeadArticleCard from "./LeadArticleCard";

export type newsDataTypeProps = {
  articles: PerigontypeArticle[];
  category: string;
};

function LargeCard({ articles, category }: newsDataTypeProps) {
  const CARROSEL_ARTICLES = articles.splice(0, 2);

  const content = (
    <div className="grid grid-cols-6 gap-4">
      {/* Left Section - Carousel Articles */}
      <LeadArticleCard articles={CARROSEL_ARTICLES} category={category} />

      {/* Right Section - Articles List */}
      <div className="col-span-2 p-4">
        {articles.map((article) => {
          const CATEGORY = category || article.category[0] || "top";
          return (
            <div key={article.article_id} className="my-6">
              <Link
                href={`/article/${CATEGORY}/${article.title}/${article.article_id}`}
                className="relative flex flex-col bg-white rounded-lg hover:shadow-lg transition"
              >
                <div className="p-4">
                  <h5 className="mt-2 underline text-slate-800 text-md font-semibold">
                    {article.title}
                  </h5>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-3 overflow-hidden text-ellipsis">
                    {article.description}
                  </p>
                </div>
              </Link>
              <div className="my-4">
                <div className="border-t border-gray-300"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return <div className="container pt-[6em]">{content}</div>;
}

export default LargeCard;
