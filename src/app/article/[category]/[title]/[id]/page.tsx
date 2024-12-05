import React from "react";
import AdSquare from "@/app/_components/Ad/AdSquare";
import AdVertical from "@/app/_components/Ad/AdVertical";
import MoreLikeThis from "@/app/_components/MoreLikeThis/MoreLikeThis";
import { notFound } from "next/navigation";
import { fetchSinglePost } from "@/utils/dataFetch";
import SectionHeader from "@/app/_components/SectionHeader/SectionHeader";
import { PerigontypeArticle } from "@/TYEPS";

type typeParams = {
  params: { id: string; title: string };
};

// export async function generateStaticParams() {
//   const key = process.env.NEWSDATA_IO_KEY;
//   const URL = `https://newsdata.io/api/1/latest?country=us,gb&domain=foxnews,bbc,cnn,nytimes,abc&image=1&apikey=${key}&language=en&removeduplicate=1`;

//   const res = await fetch(URL);

//   const data = await res.json();

//   const { results } = data;

//   return results.map((article: PerigontypeArticle) => article.article_id);
// }

export async function generateMetadata({ params }: typeParams) {
  const article = await fetchSinglePost(params.id);

  const cleanTitle = article.title.split("%20").join("-");
  return {
    title: cleanTitle,
    description: article.description,
    openGraph: {
      images: [{ url: article.image_url }],
    },
  };
}

async function page({ params }: { params: { id: string; category: string } }) {
  const { id, category } = params;

  const article = await fetchSinglePost(id);

  if (!article) notFound();

  return (
    <div className="container m-auto">
      <div className="mx-auto pt-[10em] pb-[8em] px-[2em] flex gap-16 max-w-[1280px]md:flex> ">
        <aside className="w-1/4 w-[330px] hidden lg:block">
          <SectionHeader>Top News</SectionHeader>
          <div className="border-t border-black border-4"></div>
          <MoreLikeThis category={category} currentId={id} />
        </aside>
        <main className="md:w-3/4">
          <article>
            <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
              <img
                src={article?.image_url}
                alt={article?.title}
                className="w-full object-cover  rounded-t-lg"
                style={{ maxHeight: "540px" }}
              />
              <div className="mt-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  {article?.title}
                </h1>
                <p className="mt-2 text-sm text-gray-600 flex items-center gap-[10px]">
                  <span className="bg-black text-white py-1 px-3 rounded-md text-sm font-semibold">
                    {article.source_name}
                  </span>
                  <span>{new Date(article?.pubDate).toLocaleDateString()}</span>{" "}
                </p>
              </div>
              <div className="mt-6">
                <p className="mt-2 text-gray-700">{article.description}</p>
                <a
                  href={article?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-1 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200"
                >
                  Read More
                </a>
              </div>
            </div>
          </article>
        </main>
        <aside className="w-1/4 w-[330px] shadow-md hidden md:block">
          <AdSquare />
          <AdVertical />
        </aside>
      </div>
      <div className="mb:block lg:hidden block w-[300px] m-[auto] mt-[2em]">
        <h3 className="p-4 pb-1 text-xl font-semibold">More Like This</h3>

        <div className="border-t border-black border-4"></div>
        <MoreLikeThis currentId={id} category={category} />
        <AdSquare />
      </div>
    </div>
  );
}

export default page;
