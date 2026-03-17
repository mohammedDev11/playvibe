// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import { HiPlay, HiStar } from "react-icons/hi2";

// import CarouselPager from "@/app/common/CarouselPager";
// import SectionHeading from "@/app/common/SectionHeading";
// import MediaCard, { type MediaCardItem } from "@/app/common/MediaCard";
// import Modal from "@/app/common/Modal";
// import MainButton from "@/app/common/MainButton";
// import SecondButton from "@/app/common/SecondButton";

// type SectionContent = {
//   title: string;
//   description: string;
// };

// type MovieCarouselSectionProps = {
//   sectionId: string;
//   content: SectionContent;
//   movies: MediaCardItem[];
//   itemsPerPage?: number;
// };

// const MovieCarouselSection = ({
//   sectionId,
//   content,
//   movies,
//   itemsPerPage = 4,
// }: MovieCarouselSectionProps) => {
//   const [page, setPage] = useState(0);
//   const [selectedMovie, setSelectedMovie] = useState<MediaCardItem | null>(
//     null
//   );

//   const totalPages = Math.max(1, Math.ceil(movies.length / itemsPerPage));
//   const safePage = Math.min(page, totalPages - 1);

//   useEffect(() => {
//     if (page !== safePage) setPage(safePage);
//   }, [page, safePage]);

//   const visibleMovies = useMemo(() => {
//     const start = safePage * itemsPerPage;
//     return movies.slice(start, start + itemsPerPage);
//   }, [safePage, itemsPerPage, movies]);

//   const modalImageClass =
//     selectedMovie?.position === "top"
//       ? "object-top"
//       : selectedMovie?.position === "bottom"
//       ? "object-bottom"
//       : "object-center";

//   const modalImageStyle =
//     !selectedMovie?.position && selectedMovie?.postion
//       ? { objectPosition: selectedMovie.postion }
//       : undefined;

//   return (
//     <>
//       <section id={sectionId} className="flex flex-col gap-10 py-10">
//         <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <SectionHeading
//             title={content.title}
//             description={content.description}
//           />

//           <CarouselPager
//             totalItems={movies.length}
//             itemsPerPage={itemsPerPage}
//             page={safePage}
//             onPageChange={setPage}
//             maxDots={7}
//           />
//         </header>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {visibleMovies.map((movie) => (
//             <MediaCard
//               key={movie.id}
//               item={movie}
//               onQuickView={() => setSelectedMovie(movie)}
//             />
//           ))}
//         </div>
//       </section>

//       <Modal
//         open={!!selectedMovie}
//         onClose={() => setSelectedMovie(null)}
//         title={selectedMovie?.name}
//         className="max-w-3xl"
//       >
//         {selectedMovie && (
//           <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
//             <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
//               <Image
//                 src={selectedMovie.img}
//                 alt={selectedMovie.name}
//                 fill
//                 style={modalImageStyle}
//                 className={`object-cover ${modalImageClass}`}
//               />
//             </div>

//             <div className="flex flex-col">
//               <div className="flex flex-wrap items-center gap-3">
//                 <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
//                   {selectedMovie.type === "tv" ? "TV Series" : "Movie"}
//                 </span>

//                 <span className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">
//                   <HiStar className="text-primary" size={14} />
//                   {selectedMovie.rate}
//                 </span>
//               </div>

//               {(selectedMovie.year ||
//                 selectedMovie.genre ||
//                 selectedMovie.duration) && (
//                 <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/65">
//                   {selectedMovie.year && <span>{selectedMovie.year}</span>}

//                   {selectedMovie.year && selectedMovie.genre && (
//                     <span className="h-1 w-1 rounded-full bg-white/30" />
//                   )}

//                   {selectedMovie.genre && <span>{selectedMovie.genre}</span>}

//                   {selectedMovie.genre && selectedMovie.duration && (
//                     <span className="h-1 w-1 rounded-full bg-white/30" />
//                   )}

//                   {selectedMovie.duration && (
//                     <span>{selectedMovie.duration}</span>
//                   )}
//                 </div>
//               )}

//               {selectedMovie.description && (
//                 <p className="mt-5 text-sm leading-7 text-white/75">
//                   {selectedMovie.description}
//                 </p>
//               )}

//               <div className="mt-6 flex flex-wrap items-center gap-3">
//                 <MainButton
//                   label="Watch Now"
//                   icon={<HiPlay size={16} />}
//                   className="px-5 py-3"
//                 />

//                 <SecondButton
//                   label="Close"
//                   onClick={() => setSelectedMovie(null)}
//                   className="rounded-2xl bg-neutral-800 px-5 py-3 hover:bg-neutral-700"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </>
//   );
// };

// export default MovieCarouselSection;
