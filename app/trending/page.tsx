"use client";

import React from "react";
import { TrendingContent, trendingPageItems } from "@/data/trending";
import MediaLibrarySection from "./components/MediaLibrarySection";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Header list={TrendingContent} />

      <main className="flex flex-col gap-24 px-4 pb-24 sm:px-6 md:gap-32 md:pb-8 lg:gap-10 lg:px-10">
        <MediaLibrarySection
          title="Trending Now"
          description="Discover what’s capturing attention right now across movies and TV series."
          items={trendingPageItems}
          defaultType="movie"
        />

        <Footer />
      </main>
    </div>
  );
};

export default Page;
