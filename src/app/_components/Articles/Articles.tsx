import React from "react";
import { PerigontypeArticle } from "@/TYEPS";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import LeadArticles from "../LeadArticles/LeadArticles";
import CardHorizontal from "../CardHorizontal/CardHorizontal";
import Seperator from "../Seperator/Seperator";
import AdHorizontal from "../Ad/AdHorizontal";

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
        <Seperator customClasses="h-[1px]" />
          <AdHorizontal/>
        <Seperator customClasses="h-[1px]" />
        <div className="mt-[3em]">
          <CardHorizontal articles={data} category={category} />
        </div>
      </div>
    </>
  );
}

export default Articles;
