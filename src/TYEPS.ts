// export type newsDataType = {

//     source?: {
//         id: string,
//         name:string
//     };
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: string;

// };

// export type  ArticleType = {
//     article_id: string;
//     title: string;
//     link: string;
//     keywords: string[]
//     creator: string[] 
//     description: string;
//     content: string;
//     pubDate: string;
//     pubDateTZ: string;
//     image_url: string;
//     source_id: string;
//     source_priority: number;
//     source_name: string;
//     source_url: string;
//     source_icon: string 
//   };
  
  export type FullArticleType = {
    article_id: string;
    title: string;
    link: string;
    keywords: string[] | null;
    creator: string[] | null;
    video_url: string | null;
    description: string;
    content?: string; // Make content optional
    pubDate: string;
    pubDateTZ: string;
    image_url: string;
    source_id: string;
    source_priority: number;
    source_name: string;
    source_url: string;
    source_icon: string | null;
    category?: string
  };
  
  export type PerigontypeArticle = {
    article_id: string;
    title: string;
    link: string;
    keywords: string[] | null;
    creator: string | null;
    video_url: string | null;
    description: string | null;
    content: string | null;
    pubDate: string;
    pubDateTZ: string;
    image_url: string;
    source_id: string;
    source_priority: number;
    source_name: string;
    source_url: string;
    source_icon: string;
    language: string;
    country: string[];
    category?: []
  };
  

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-= //
export const sources: Record<string, string[]> = {
  Politics: [
    "&source=apnews.com",
    "&source=politico.com",
    "&source=cnn.com",
    "&source=bbc.com & bbc.co.uk",
    "&source=foxnews.com",
    "&source=theguardian.com",
    "&source=reuters.com",
    "&source=aljazeera.com",
    "&source=nytimes.com",
    "&source=washingtonpost.com",
    "&source=wsj.com",
    "&source=cbsnews.com",
    "&source=independent.co.uk",
  ],
  Science:[
    "&source=popularmechanics.com",
    "&source=howstuffworks.com",
    "&source=sciencealert.com",
    "&source=nasa.gov",
    "&source=space.com",
    "&source=nationalgeographic.com",
    "&source=livescience.com",
  ],
  Business: [
    "&source=cnbc.com",
    "&source=bloomberg.com",
    "&source=thestreet.com",
    "&source=nasdaq.com",
    "&source=foxbusiness.com",
    "&source=economist.com",
    "&source=fortune.com",
    "&source=forbes.com",
    "&source=financialpost.com",
    "&source=barrons.com",
    "&source=finance.yahoo.com",
    "&source=ft.com",
    "&source=benzinga.com",
    "&source=ibtimes.com",
    "&source=fastcompany.com",
  ],
  Finance: [
    "&source=cnbc.com",
    "&source=bloomberg.com",
    "&source=thestreet.com",
    "&source=nasdaq.com",
    "&source=foxbusiness.com",
    "&source=economist.com",
    "&source=fortune.com",
    "&source=forbes.com",
    "&source=financialpost.com",
    "&source=barrons.com",
    "&source=finance.yahoo.com",
    "&source=ft.com",
    "&source=benzinga.com",
    "&source=ibtimes.com",
    "&source=fastcompany.com",
    "&source=coindesk.com",
    "&source=cointelegraph.com",
    "&source=decrypt.co",
    "&source=coinpedia.org",
    "&source=bitrates.com",
  ],
  Tech: [
    "&source=inc.com",
    "&source=polygon.com",
    "&source=wired.com",
    "&source=techcrunch.com",
    "&source=livescience.com",
    "&source=cnet.com",
    "&source=cheddar.com",
    "&source=appleinsider.com",
    "&source=thenextweb.com",
    "&source=lifehacker.com",
    "&source=venturebeat.com",
  ],
  Sports: [
    "&source=espn.com",
    "&source=theathletic.com",
    "&source=nhl.com",
    "&source=nfl.com",
    "&source=mmafighting.com",
    "&source=nbcsports.com",
    "&source=si.com",
    "&source=cbssports.com",
  ],
  Entertainment: [
    "&source=buzzfeed.com",
    "&source=deadline.com",
    "&source=hollywoodreporter.com",
    "&source=variety.com",
    "&source=boredpanda.com",
    "&source=tmz.com",
    "&source=people.com",
    "&source=indiewire.com",
    "&source=vulture.com",
    "&source=pagesix.com",
  ],
  Health: [
    "&source=who.int",
    "&source=healthfeedback.com",
    "&source=menshealth.com",
    "&source=psychologytoday.com",
    "&source=womenshealthmag.com",
    "&source=muscleandfitness.com",
    "&source=aarp.org",
    "&source=elpais.com",
  ],
};

// Define the getSources function with type safety
const getSources = (category: string): string[] => {
  // Safely access the sources by category
  console.log("____CATEEEEEE__", category)
  return sources[category] || [];
};

// returns array of sources
export const getAllSources = (category: string) => {
  let newsSourceStr = "";
  


  const newsSources = getSources(category)
  newsSources.forEach((st: string) => (newsSourceStr += st));

  return newsSourceStr
}