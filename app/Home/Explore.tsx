// "use client";

// import React, { useMemo, useState } from "react";
// import { HomeExploreCategories, HomeExploreSection } from "@/data/Index";
// import SectionHeading from "../common/SectionHeading";
// import CarouselPager from "../common/CarouselPager";
// import { HiArrowRight } from "react-icons/hi2";

// const Explore = () => {
//   const content = HomeExploreSection;

//   const itemsPerPage = 3; // ✅ changed to 3
//   const [page, setPage] = useState(0);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(HomeExploreCategories.length / itemsPerPage)
//   );

//   const safePage = Math.min(page, totalPages - 1);

//   const visibleCategories = useMemo(() => {
//     const start = safePage * itemsPerPage;
//     return HomeExploreCategories.slice(start, start + itemsPerPage);
//   }, [safePage]);

//   return (
//     <section id="explore" className="pt-28">
//       <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//         <SectionHeading
//           title={content.title}
//           description={content.description}
//         />

//         <CarouselPager
//           totalItems={HomeExploreCategories.length}
//           itemsPerPage={itemsPerPage} // ✅ now 3
//           page={safePage}
//           onPageChange={setPage}
//           maxDots={7}
//         />
//       </header>

//       {/* Cards */}
//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visibleCategories.map((category) => (
//           <article
//             key={category.id}
//             className="rounded-2xl border border-white/10 bg-neutral-900 p-4 hover:bg-neutral-900/80 cursor-pointer transition"
//           >
//             <img
//               src={category.poster}
//               alt={category.title}
//               className="w-full aspect-[3/3] rounded-2xl mb-4 object-cover object-top"
//             />
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold text-lg">{category.title}</h3>
//               <HiArrowRight size={20} />
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Explore;

"use client";

import React, { useMemo, useState } from "react";
import { HomeExploreCategories, HomeExploreSection } from "@/data/Index";
import SectionHeading from "../common/SectionHeading";
import CarouselPager from "../common/CarouselPager";
import { HiArrowRight } from "react-icons/hi2";

const Explore = () => {
  const content = HomeExploreSection;

  const itemsPerPage = 3;
  const [page, setPage] = useState(0);

  const totalPages = Math.max(
    1,
    Math.ceil(HomeExploreCategories.length / itemsPerPage)
  );

  const safePage = Math.min(page, totalPages - 1);

  const desktopCategories = useMemo(() => {
    const start = safePage * itemsPerPage;
    return HomeExploreCategories.slice(start, start + itemsPerPage);
  }, [safePage]);

  return (
    <section id="explore" className="pt-20 md:pt-28">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          title={content.title}
          description={content.description}
        />

        <CarouselPager
          totalItems={HomeExploreCategories.length}
          itemsPerPage={itemsPerPage}
          page={safePage}
          onPageChange={setPage}
          maxDots={7}
        />
      </header>

      {/* Mobile: horizontal swipe */}
      <div className="scrollbar-hide mt-8 overflow-x-auto overflow-y-hidden md:hidden">
        <div className="flex gap-4 pb-1">
          {HomeExploreCategories.map((category) => (
            <article
              key={category.id}
              className="w-[260px] shrink-0 cursor-pointer rounded-2xl border border-white/10 bg-neutral-900 p-4 transition hover:bg-neutral-900/80"
            >
              <img
                src={category.poster}
                alt={category.title}
                className="mb-4 aspect-square w-full rounded-2xl object-cover object-top"
              />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <HiArrowRight size={20} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop / tablet: paged grid */}
      <div className="mt-8 hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:grid">
        {desktopCategories.map((category) => (
          <article
            key={category.id}
            className="cursor-pointer rounded-2xl border border-white/10 bg-neutral-900 p-4 transition hover:bg-neutral-900/80"
          >
            <img
              src={category.poster}
              alt={category.title}
              className="mb-4 aspect-square w-full rounded-2xl object-cover object-top"
            />
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <HiArrowRight size={20} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explore;
