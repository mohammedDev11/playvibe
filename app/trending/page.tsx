"use client";

import React from "react";
import { TrendingContent, trendingPageItems } from "@/data/trending";
import MediaLibrarySection from "./components/MediaLibrarySection";
import { div } from "motion/react-client";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Page = () => {
  return (
    <div className="flex flex-col gap-16">
      <Header list={TrendingContent} />
      <main className="flex flex-col gap-24 md:gap-32 lg:gap-10">
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
