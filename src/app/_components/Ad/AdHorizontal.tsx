"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

function AdHorizontal() {

  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`Adsbygoogle error: ${err.message}`);
      } else {
        console.error('Adsbygoogle encountered an unknown error', err);
      }
    }
  }, []);
  return (
    <div className="w-full bg-gray-700  h-[300px] mt-[2em] mb-[2em]">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4339219773762700"
        data-ad-slot="4484528772"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

export default AdHorizontal;
