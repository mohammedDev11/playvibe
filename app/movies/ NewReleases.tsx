import React from "react";
import { NewReleasesMovies, NewReleasesSection } from "@/data/Movies";
import MediaCarouselSection from "../common/MediaCarouselSection";

const NewReleases = () => {
  return (
    <section id="new-releases">
      <div className="flex flex-col gap-10">
        <MediaCarouselSection
          sectionId="popular"
          content={NewReleasesSection}
          items={NewReleasesMovies}
          itemsPerPage={4}
        />
      </div>
    </section>
  );
};

export default NewReleases;
