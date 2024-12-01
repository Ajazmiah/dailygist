import Script from "next/script"; // Ensure you are importing Script from 'next/script'
import { pid } from "process";

type AdsenseTypes = {
  pId: string | undefined;
};

const AdSense = ({ pId }: AdsenseTypes) => {
    console.log(pId)
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4339219773762700`}
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
