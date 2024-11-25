import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";

type newsDataTypeProps = {
  article: PerigontypeArticle
  category: string;
};

function CardVerticle({ article, category }: newsDataTypeProps) {
  return (
    <Link
      href={`/article/${category}/${article.title}/${article.article_id}`}
      style={{ flexBasis: "400px" }}
      className="overflow-hidden h-fit max-w-full relative rounded-lg shadow transition hover:shadow-lg flex-shrink-0 hover:cursor-pointer"
    >
      <div
        className="overflow-hidden max-w-full rounded-lg shadow transition hover:shadow-lg flex-shrink-0 hover:cursor-pointer"
        style={{ flexBasis: "400px", height: "100%" }}
      >
        <img
          alt=""
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
          {/* <p className="text-sm text-gray-700 mt-1 line-clamp-3 overflow-hidden text-ellipsis">
            {article.description}
          </p> */}
          <img
           
            style={{ top: "0", maxWidth:'50px', right: '0', position:'absolute' }}
            src= {article.source_icon}
          >
           
          </img>        </div>
      </div>
    </Link>
  );
}

export default CardVerticle;
