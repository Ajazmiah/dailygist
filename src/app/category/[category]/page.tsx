import { PerigontypeArticle } from "@/TYEPS";
import ArticleLists from "@/app/_components/Articles/Articles";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;

  const key = process.env.NEWSDATA_IO_KEY;
  let Articles = { results: [] };

  try {
    const URL = `https://newsdata.io/api/1/latest?country=us,gb&domain=bbc,yahoo,nbcnews,foxnews,politico&image=1&apikey=${key}&category=${category}`;

    const perigonURL = URL;

    const res = await fetch(perigonURL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const articles = await res.json();
    Articles = articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  const data = Articles.results.map((article: PerigontypeArticle) => {
    return {
      article_id: article.article_id,
      title: article.title,
      link: article.link,
      keywords: article.keywords,
      creator: article.creator,
      video_url: article.video_url,
      description: article.description,
      content: article.content,
      pubDate: article.pubDate,
      pubDateTZ: article.pubDateTZ,
      image_url: article.image_url,
      source_id: article.source_id,
      source_priority: article.source_priority,
      source_name: article.source_name,
      source_url: article.source_url,
      source_icon: article.source_icon,
      language: article.language,
      country: article.country,
      category: article.category,
    };
  });

  return <ArticleLists data={data} category={category} />;
}
