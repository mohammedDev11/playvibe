import React from "react";
import MovieControl from "../movies/components/MovieControl";
import { PopularTv, PopularTvSeriesSection } from "@/data/TV";
import MediaCarouselSection from "../common/MediaCarouselSection";

const Popular = () => {
  return (
    <section id="popular">
      <div className="flex flex-col gap-10">
        <MovieControl />

        <MediaCarouselSection
          sectionId="popular"
          content={PopularTvSeriesSection}
          items={PopularTv}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default Popular;
