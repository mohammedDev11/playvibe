import React from "react";
import { TopRatedMovies, TopRatedSection } from "@/data/Movies";
import MediaCarouselSection from "../common/MediaCarouselSection";

const TopRated = () => {
  return (
    <section id="top-rated">
      <div className="flex flex-col gap-10">
        <MediaCarouselSection
          sectionId="popular"
          content={TopRatedSection}
          items={TopRatedMovies}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default TopRated;
