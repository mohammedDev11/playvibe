// "use client";

// import React from "react";
// import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

// type CarouselPagerProps = {
//   totalItems: number; // total cards
//   itemsPerPage?: number; // default 4
//   page: number; // 0-based current page
//   onPageChange: (page: number) => void;

//   className?: string;

//   // optional: limit dots displayed (when pages are huge)
//   maxDots?: number; // default: show all
// };

// const clamp = (n: number, min: number, max: number) =>
//   Math.max(min, Math.min(max, n));

// export default function CarouselPager({
//   totalItems,
//   itemsPerPage = 4,
//   page,
//   onPageChange,
//   className = "",
//   maxDots,
// }: CarouselPagerProps) {
//   const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

//   const safePage = clamp(page, 0, totalPages - 1);

//   const canPrev = safePage > 0;
//   const canNext = safePage < totalPages - 1;

//   const goPrev = () => canPrev && onPageChange(safePage - 1);
//   const goNext = () => canNext && onPageChange(safePage + 1);

//   // Decide which dots to show (all or windowed)
//   let start = 0;
//   let end = totalPages;

//   if (maxDots && totalPages > maxDots) {
//     const half = Math.floor(maxDots / 2);
//     start = clamp(safePage - half, 0, totalPages - maxDots);
//     end = start + maxDots;
//   }

//   const dots = Array.from({ length: end - start }, (_, i) => start + i);

//   return (
//     <div
//       className={`
//         flex items-center gap-3
//         border border-white/30 rounded-xl p-2
//         bg-black/20 backdrop-blur
//         ${className}
//       `}
//     >
//       <button
//         type="button"
//         onClick={goPrev}
//         disabled={!canPrev}
//         className={`
//           text-white p-3 rounded-xl border border-white/10
//           bg-neutral-800 hover:bg-neutral-900 transition
//           disabled:opacity-40 disabled:hover:bg-neutral-800 disabled:cursor-not-allowed
//         `}
//         aria-label="Previous"
//       >
//         <HiArrowLeft size={20} />
//       </button>

//       <div className="flex items-center gap-1">
//         {start > 0 && (
//           <span className="w-2 h-1 bg-neutral-700 rounded-full opacity-70" />
//         )}

//         {dots.map((p) => {
//           const active = p === safePage;
//           return (
//             <button
//               key={p}
//               type="button"
//               onClick={() => onPageChange(p)}
//               className={`
//                 h-1 rounded-full transition-all
//                 ${
//                   active
//                     ? "w-6 bg-primary"
//                     : "w-4 bg-neutral-700 hover:bg-neutral-600"
//                 }
//               `}
//               aria-label={`Go to page ${p + 1}`}
//             />
//           );
//         })}

//         {end < totalPages && (
//           <span className="w-2 h-1 bg-neutral-700 rounded-full opacity-70" />
//         )}
//       </div>

//       <button
//         type="button"
//         onClick={goNext}
//         disabled={!canNext}
//         className={`
//         text-white p-3 rounded-xl border border-white/10
//         bg-neutral-800 hover:bg-neutral-900 transition
//         disabled:opacity-40 disabled:hover:bg-neutral-800 disabled:cursor-not-allowed`}
//         aria-label="Next"
//       >
//         <HiArrowRight size={20} />
//       </button>
//     </div>
//   );
// }

"use client";

import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

type CarouselPagerProps = {
  totalItems: number;
  itemsPerPage?: number;
  page: number;
  onPageChange: (page: number) => void;
  className?: string;
  maxDots?: number;
};

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

export default function CarouselPager({
  totalItems,
  itemsPerPage = 4,
  page,
  onPageChange,
  className = "",
  maxDots,
}: CarouselPagerProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const safePage = clamp(page, 0, totalPages - 1);
  const canPrev = safePage > 0;
  const canNext = safePage < totalPages - 1;

  const goPrev = () => canPrev && onPageChange(safePage - 1);
  const goNext = () => canNext && onPageChange(safePage + 1);

  let start = 0;
  let end = totalPages;

  if (maxDots && totalPages > maxDots) {
    const half = Math.floor(maxDots / 2);
    start = clamp(safePage - half, 0, totalPages - maxDots);
    end = start + maxDots;
  }

  const dots = Array.from({ length: end - start }, (_, i) => start + i);

  return (
    <div
      className={`
        hidden md:flex items-center gap-3
        rounded-xl border border-white/30 bg-black/20 p-2 backdrop-blur
        ${className}
      `}
    >
      <button
        type="button"
        onClick={goPrev}
        disabled={!canPrev}
        className="
          rounded-xl border border-white/10 bg-neutral-800 p-3 text-white transition
          hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-40
          disabled:hover:bg-neutral-800
        "
        aria-label="Previous"
      >
        <HiArrowLeft size={20} />
      </button>

      <div className="flex items-center gap-1">
        {start > 0 && (
          <span className="h-1 w-2 rounded-full bg-neutral-700 opacity-70" />
        )}

        {dots.map((p) => {
          const active = p === safePage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={`h-1 rounded-full transition-all ${
                active
                  ? "w-6 bg-primary"
                  : "w-4 bg-neutral-700 hover:bg-neutral-600"
              }`}
              aria-label={`Go to page ${p + 1}`}
            />
          );
        })}

        {end < totalPages && (
          <span className="h-1 w-2 rounded-full bg-neutral-700 opacity-70" />
        )}
      </div>

      <button
        type="button"
        onClick={goNext}
        disabled={!canNext}
        className="
          rounded-xl border border-white/10 bg-neutral-800 p-3 text-white transition
          hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-40
          disabled:hover:bg-neutral-800
        "
        aria-label="Next"
      >
        <HiArrowRight size={20} />
      </button>
    </div>
  );
}
