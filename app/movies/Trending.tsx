import React from "react";
import MovieControl from "./components/MovieControl";
import { TrendingMovies, TrendingSection } from "@/data/Movies";
import MediaCarouselSection from "../common/MediaCarouselSection";

const Trending = () => {
  return (
    <section id="trending">
      <div className="flex flex-col gap-10">
        <MediaCarouselSection
          sectionId="popular"
          content={TrendingSection}
          items={TrendingMovies}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default Trending;
