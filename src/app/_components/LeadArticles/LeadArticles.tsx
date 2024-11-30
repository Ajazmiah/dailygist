import React from "react";
import { PerigontypeArticle } from "@/TYEPS";
import LeadArticleCard from "./LeadArticleCard";

export type newsDataTypeProps = {
  articles: PerigontypeArticle[];
  category: string;
};

const renderImage = (article: PerigontypeArticle) => {
  return (
    <img
      alt={article.title}
      src={article.image_url}
      className="w-full h-[250px] object-cover"
    />
  );
};

function LeadArticles({ articles, category }: newsDataTypeProps) {
  const CARROSEL_ARTICLES = articles.splice(0, 2);

  const content = (
    <div className="grid grid-cols-6 gap-4">
      {/* Left Section - Carousel Articles */}
      <LeadArticleCard articles={CARROSEL_ARTICLES} category={category} renderItem={renderImage}/>  

      {/* Right Section - Articles List */}
      <div className="col-span-2 p-4 mt-[-44px]">
        {/* // className="relative flex flex-col bg-white rounded-lg hover:shadow-lg transition" */}
        <LeadArticleCard articles={articles} category={category} />
      </div>
    </div>
  );

  return <div className="container pt-[6em]">{content}</div>;
}

export default LeadArticles;
