import React from "react";
import Link from "next/link";
import { PerigontypeArticle } from "@/TYEPS";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import CardVerticle from "../CardLead/CardLead";
import LeadArticles from "../LeadArticles/LeadArticles";

function Articles({
  data,
  category,
}: {
  data: PerigontypeArticle[];
  category: string;
}) {
  return (
    <>
      <CategoryMenu catergoryParam={category} />

      <div className="container  md:mt-[5em] mt-[10em] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <LeadArticles articles={data.splice(0, 6)} category={category} />
        <div className="flex flex-wrap gap-5 gap-y-7 justify-center container mt-[3em]">
          {data?.map((newsData: PerigontypeArticle) => (
            <CardVerticle
              article={newsData}
              key={newsData.article_id}
              category={category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Articles;
