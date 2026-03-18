"use client";

import React, { useMemo, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { HeroContent } from "@/data/TV";
import MainButton from "../common/MainButton";
import ThirdButton from "../common/ThirdButton";
import HeroButtons from "../movies/components/HeroButtons";
// import HeroButtons from "./components/HeroButtons";

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const Hero = () => {
  const content = HeroContent;
  const MainIcon = content.mainButton.icon;

  const [page, setPage] = useState(0);
  const totalMovies = content.movies.length;

  const safePage = useMemo(() => {
    return clamp(page, 0, Math.max(0, totalMovies - 1));
  }, [page, totalMovies]);

  const movie = content.movies[safePage];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative overflow-hidden h-[420px] sm:h-[480px] md:h-[520px] lg:h-[480px]">
        {/* Background */}
        <img
          key={movie?.heroImage}
          src={movie?.heroImage ?? "/Movies/hero.avif"}
          alt={movie?.title ?? "hero background"}
          className={`absolute inset-0 h-full w-full object-cover object-${movie.position}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute -bottom-10 left-0 z-10 w-full px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-3xl">
            <SectionHeading
              title={movie?.title ?? ""}
              description={movie?.description ?? ""}
            />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <MainButton
                label={content.mainButton.label}
                icon={<MainIcon size={18} />}
                className="h-14 w-full justify-center px-6 sm:w-auto"
              />

              <div className="flex items-center gap-3">
                {content.actions.map((action) => {
                  const ActionIcon = action.icon;
                  return (
                    <ThirdButton
                      key={action.id}
                      className="h-14 w-14 rounded-2xl"
                    >
                      <ActionIcon size={22} />
                    </ThirdButton>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroButtons
        totalItems={totalMovies}
        page={safePage}
        onPageChange={setPage}
      />
    </section>
  );
};

export default Hero;
