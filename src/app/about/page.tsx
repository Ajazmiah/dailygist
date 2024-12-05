// app/about/page.tsx (or .jsx if you're using JavaScript)
import React from "react";
import Link from "next/link";
import { Metadata } from "next";




export const metadata: Metadata = {
    title: 'About'
}

// This is a server component by default
export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="lg:py-24">
          <h1 className="text-3xl font-bold sm:text-4xl">About Us</h1>

          <p className="mt-4 text-gray-600 text-xl">
            Welcome to Daily-Gist, your go-to source for aggregated news from
            various outlets across a wide range of topics. We strive to bring
            you the latest and most relevant stories in technology, politics,
            food, travel, sports, and more, all in one convenient place. Our
            mission is to provide you with a comprehensive overview of the news
            landscape, allowing you to stay informed and engaged with the world
            around you. Explore DailyGist to discover insightful articles and
            diverse perspectives that keep you updated on the issues that matter
            most.
          </p>
        </div>
        <Link
            className="rounded-md block w-[200px] mb-[1em] bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            href={`/`}
          >
            Read Articles
          </Link>
      </div>
    </section>
  );
}
