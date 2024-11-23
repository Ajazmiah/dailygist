import React from "react";
import AdSquare from "@/app/_components/Ad/AdSquare";
import AdVertical from "@/app/_components/Ad/AdVertical";
import Link from "next/link";
import MoreLikeThis from "@/app/_components/MoreLikeThis/MoreLikeThis";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string; title: string };
}) {
  const cleanTitle = params.title.split("%20").join(" ");
  return {
    title: cleanTitle,
  };
}

const key = process.env.NEWSDATA_IO_KEY

const fetchPost = async (id: string) => {
  const perigonURL = `https://newsdata.io/api/1/latest?&apikey=${key}&id=${id}`;
  const res = await fetch(perigonURL);

  const data = await res.json();

  if (!res.ok) {
    notFound();
  }

  return data.results[0];
};

async function page({ params }: { params: { id: string; category: string } }) {
  const { id, category } = params;

  const article = await fetchPost(id);

  const ADS = [
    {
      id: 1,
      title: "Super Sale - 50% Off on Electronics",
      image: "https://via.placeholder.com/300x200?text=Electronics+Ad",
      description:
        "Get amazing discounts on the latest electronics. Offer valid until stocks last!",
      link: "https://www.electronics-store.com/sale",
    },
    {
      id: 2,
      title: "Luxury Watches at Unbeatable Prices",
      image: "https://via.placeholder.com/300x200?text=Watches+Ad",
      description:
        "Explore our collection of luxury watches at the best prices.",
      link: "https://www.watches-shop.com/deals",
      verticle: true,
    },
  ];

  return (
    <div className="container m-auto">
      <div className="mx-auto pt-[10em] pb-[8em] px-[2em] flex gap-16 max-w-[1280px]md:flex> ">
        <aside className="w-1/4 w-[330px] hidden lg:block">
          <h3 className="p-4 pb-1 text-xl font-semibold">More Like This</h3>

          <div className="border-t border-black border-4"></div>
           <MoreLikeThis  category={category} currentId={id}/> 
        </aside>
        <main className="md:w-3/4">
          <Link
            className="rounded-md block w-[100px] mb-[1em] bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            href={`/category/${params.category}`}
          >
            Categories
          </Link>
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
