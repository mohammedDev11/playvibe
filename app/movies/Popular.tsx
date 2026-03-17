"use client";

import React from "react";
// import MovieControl from "./MovieControl";
// import MovieCarouselSection from "./MovieCarouselSection";
import { PopularMovies, PopularMoviesSection } from "@/data/Movies";
import MovieControl from "./components/MovieControl";
import MediaCarouselSection from "../common/MediaCarouselSection";
// import MovieCarouselSection from "./components/MovieCarouselSection";

const Popular = () => {
  return (
    <div className="flex flex-col gap-10">
      <MovieControl />

      <MediaCarouselSection
        sectionId="popular"
        content={PopularMoviesSection}
        items={PopularMovies}
        itemsPerPage={4}
      />
    </div>
  );
};

export default Popular;
