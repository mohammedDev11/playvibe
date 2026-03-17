import React from "react";
import { TopRatedSection } from "@/data/Movies";
import { TopRatedTvSeries } from "@/data/TV";
import MediaCarouselSection from "../common/MediaCarouselSection";

const TopRated = () => {
  return (
    <section id="top-rated">
      <div className="flex flex-col gap-10">
        <MediaCarouselSection
          sectionId="popular"
          content={TopRatedSection}
          items={TopRatedTvSeries}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default TopRated;
