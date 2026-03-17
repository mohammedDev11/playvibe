import React from "react";
import { NewReleasesSection } from "@/data/Movies";
import { NewReleasesTvSeries } from "@/data/TV";
import MediaCarouselSection from "../common/MediaCarouselSection";

const NewReleases = () => {
  return (
    <section id="new-releases">
      <div className="flex flex-col gap-10">
        <MediaCarouselSection
          sectionId="popular"
          content={NewReleasesSection}
          items={NewReleasesTvSeries}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default NewReleases;
