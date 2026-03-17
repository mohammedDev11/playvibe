"use client";

import React from "react";
import { trendingPageItems } from "@/data/trending";
import MediaLibrarySection from "./components/MediaLibrarySection";
import { div } from "motion/react-client";
import Footer from "../common/Footer";

const Page = () => {
  return (
    <div>
      <MediaLibrarySection
        title="Trending Now"
        description="Discover what’s capturing attention right now across movies and TV series."
        items={trendingPageItems}
        defaultType="movie"
      />
      <Footer />
    </div>
  );
};

export default Page;
