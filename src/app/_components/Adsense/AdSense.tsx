import Script from "next/script"; // Ensure you are importing Script from 'next/script'

type AdsenseTypes = {
  pId: string | undefined;
};

const AdSense = ({ pId }: AdsenseTypes) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4339219773762700`}
      crossOrigin="anonymous"
    />
  );
};

export default AdSense;
