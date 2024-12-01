"use client";
import React, { useEffect } from "react";

function AdHorizontal() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (err: unknown) { console.log(err)}
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
