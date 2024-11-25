import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";

type newsDataTypeProps = {
  articles: PerigontypeArticle[];
  category: string;
};

function LargeCard({ articles, category }: newsDataTypeProps) {
  const CARROSEL_ARTICLES = articles.splice(0, 3);

  const content = (
    <div className="grid grid-cols-6 gap-4">
      {/* Left Section - Carousel Articles */}
      <div className="col-span-4 p-4">
        {CARROSEL_ARTICLES.map((article) => (
          <Link

            key={article.article_id}
            href={`/article/${category}/${article.title}/${article.article_id}`}
            className=" absolute overflow-hidden h-fit max-w-full relative rounded-lg shadow transition hover:shadow-lg hover:cursor-pointer flex-shrink-0"
          >
            <div
              className="overflow-hidden max-w-full rounded-lg shadow flex-shrink-0"
              style={{ height: "100%" }}
            >
              <img
                alt={article.title}
                src={article.image_url}
                className="w-full h-[250px] object-cover"
              />
              <div className="bg-white p-4 sm:p-6">
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
                <img
                  alt="Source Icon"
                  src={article.source_icon}
                  style={{
                    top: "0",
                    maxWidth: "50px",
                    right: "0",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          </Link>
        ))}{" "}
      </div>

      {/* Right Section - Articles List */}
      <div className="col-span-2 p-4">
        {articles.map((article) => (
          <div key={article.article_id} className="my-6">
            <Link
              href={`/article/${category}/${article.title}/${article.article_id}`}
              className="relative flex flex-col bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="p-4">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full rounded-lg"
                />
                <h5 className="mt-2 underline text-slate-800 text-md font-semibold">
                  {article.title}
                </h5>
              </div>
            </Link>
            <div className="my-4">
              <div className="border-t border-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return content;
}

export default LargeCard;
