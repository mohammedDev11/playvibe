import React from "react";
import { TrendingSection } from "@/data/Movies";
import { TrendingTvSeries } from "@/data/TV";
import MediaCarouselSection from "../common/MediaCarouselSection";

const Trending = () => {
  return (
    <section id="trending">
      <div className="flex flex-col gap-10">
        <MediaCarouselSection
          sectionId="popular"
          content={TrendingSection}
          items={TrendingTvSeries}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default Trending;
