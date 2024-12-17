import { CATEGORIES } from "@/utils/utils";

export default async function sitemap(params) {
  console.log("PARAMS: ", params);
  const key = process.env.NEWSDATA_IO_KEY;
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://dailygist.info/"
      : "http://localhost:3000/";

  const homeURL = `https://newsdata.io/api/1/latest?country=us,gb&domain=foxnews,bbc,cnn,nytimes,abc&image=1&apikey=${key}&language=en&removeduplicate=1`;

  const res = await fetch(homeURL, {
    next: {
      revalidate: 1800,
    },
  });

  let articles = await res.json();
  const homeArticles = articles.results;
  //========================================//

  let categoriesArticle = [];

  for (let i = 0; i < CATEGORIES.length; i++) {
    const homeURL = `https://newsdata.io/api/1/latest?country=us,gb&domain=foxnews,bbc,cnn,nytimes,abc&image=1&category=${CATEGORIES[i]}&apikey=${key}&language=en&removeduplicate=1`;
    const res = await fetch(homeURL, {
      next: {
        revalidate: 1800,
      },
    });

    const newArticles = await res.json();
    if (newArticles.totalResults > 0) {
      categoriesArticle = categoriesArticle.concat(newArticles?.results);
    }
  }

  const allArticles = [...homeArticles, ...categoriesArticle];

  return allArticles.map((article) => {
    return {
      url: `${baseURL}/article/${article.category[0]}/${article.title}/${article.article_id}`,
      lastModified: new Date(),
    };
  });
}
