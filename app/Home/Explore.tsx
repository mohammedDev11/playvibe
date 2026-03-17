"use client";

import React, { useMemo, useState } from "react";
import { HomeExploreCategories, HomeExploreSection } from "@/data/Index";
import SectionHeading from "../common/SectionHeading";
import CarouselPager from "../common/CarouselPager";
import { HiArrowRight } from "react-icons/hi2";

const Explore = () => {
  const content = HomeExploreSection;

  const itemsPerPage = 3; // ✅ changed to 3
  const [page, setPage] = useState(0);

  const totalPages = Math.max(
    1,
    Math.ceil(HomeExploreCategories.length / itemsPerPage)
  );

  const safePage = Math.min(page, totalPages - 1);

  const visibleCategories = useMemo(() => {
    const start = safePage * itemsPerPage;
    return HomeExploreCategories.slice(start, start + itemsPerPage);
  }, [safePage]);

  return (
    <section id="explore" className="pt-28">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          title={content.title}
          description={content.description}
        />

        <CarouselPager
          totalItems={HomeExploreCategories.length}
          itemsPerPage={itemsPerPage} // ✅ now 3
          page={safePage}
          onPageChange={setPage}
          maxDots={7}
        />
      </header>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCategories.map((category) => (
          <article
            key={category.id}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-4 hover:bg-neutral-900/80 cursor-pointer transition"
          >
            <img
              src={category.poster}
              alt={category.title}
              className="w-full aspect-[3/3] rounded-2xl mb-4 object-cover object-top"
            />
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <HiArrowRight size={20} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explore;
