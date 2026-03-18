import React from "react";
import Popular from "./Popular";
import Trending from "./Trending";
import TopRated from "./TopRated";
import NewReleases from "./ NewReleases";
import Header from "../common/Header";
import Hero from "./Hero";
import Footer from "../common/Footer";
import { TvSeriesTopNavbarContent } from "@/data/TV";

const page = () => {
  return (
    <div className="flex flex-col">
      <Header list={TvSeriesTopNavbarContent} />

      <main className="flex flex-col gap-24 px-4 pb-24 sm:px-6 md:gap-32 md:pb-8 lg:gap-10 lg:px-10">
        <Hero />

        <Popular />
        <Trending />
        <TopRated />
        <NewReleases />
        <Footer />
      </main>
    </div>
  );
};

export default page;
