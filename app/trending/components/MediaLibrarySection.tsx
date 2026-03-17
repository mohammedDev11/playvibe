"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { HiPlay, HiStar, HiXMark } from "react-icons/hi2";

import FloatingInput from "@/app/common/FloatingInput";
import SectionHeading from "@/app/common/SectionHeading";
import Modal from "@/app/common/Modal";
import ThirdButton from "@/app/common/ThirdButton";
import MediaCard from "@/app/common/MediaCard";
import MainButton from "@/app/common/MainButton";
import SecondButton from "@/app/common/SecondButton";
import type { MediaCardItem } from "@/data/media";

type MediaLibrarySectionProps = {
  title: string;
  description: string;
  items: MediaCardItem[];
  defaultType?: "movie" | "tv";
  className?: string;
};

const MediaLibrarySection = ({
  title,
  description,
  items,
  defaultType = "movie",
  className = "",
}: MediaLibrarySectionProps) => {
  const [activeType, setActiveType] = useState<"movie" | "tv">(defaultType);
  const [columns, setColumns] = useState<3 | 4>(4);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<MediaCardItem | null>(null);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesType = item.type === activeType;
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.genre?.toLowerCase().includes(q) ||
        item.year?.toLowerCase().includes(q);

      return matchesType && matchesSearch;
    });
  }, [activeType, search, items]);

  const gridClass =
    columns === 3
      ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";
  const modalImageClass =
    selectedItem?.position === "top"
      ? "object-top"
      : selectedItem?.position === "bottom"
      ? "object-bottom"
      : "object-center";

  return (
    <>
      <section
        className={`mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 ${className}`}
      >
        <div className="rounded-[28px] border border-white/10 bg-neutral-900/70 p-4 backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-5">
            <SectionHeading title={title} description={description} />

            <div className="max-w-md">
              <FloatingInput
                icon={<BiSearch size={20} />}
                type="text"
                name="media-library-search"
                id="media-library-search"
                label="Search by title, genre, or year..."
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                className="bg-black"
              />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2 rounded-2xl bg-neutral-950 p-2">
                <button
                  type="button"
                  onClick={() => setActiveType("movie")}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer ${
                    activeType === "movie"
                      ? "bg-neutral-200 text-neutral-950"
                      : "bg-transparent text-neutral-300 hover:bg-white/5"
                  }`}
                >
                  Movies
                </button>

                <button
                  type="button"
                  onClick={() => setActiveType("tv")}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer ${
                    activeType === "tv"
                      ? "bg-neutral-200 text-neutral-950"
                      : "bg-transparent text-neutral-300 hover:bg-white/5"
                  }`}
                >
                  TV Series
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-white/60">Columns</span>

                <div className="flex items-center gap-2 rounded-2xl bg-neutral-950 p-2">
                  <button
                    type="button"
                    onClick={() => setColumns(4)}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer ${
                      columns === 4
                        ? "bg-primary text-white"
                        : "bg-transparent text-neutral-300 hover:bg-white/5"
                    }`}
                  >
                    4
                  </button>

                  <button
                    type="button"
                    onClick={() => setColumns(3)}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer ${
                      columns === 3
                        ? "bg-primary text-white"
                        : "bg-transparent text-neutral-300 hover:bg-white/5"
                    }`}
                  >
                    3
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {activeType === "movie" ? "Movies" : "TV Series"}
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Showing {filteredItems.length} result
              {filteredItems.length !== 1 ? "s" : ""}
            </p>
          </div>

          <ThirdButton
            label={search ? "Clear Search" : "Explore All"}
            onClick={() => setSearch("")}
            className="self-start rounded-xl bg-neutral-800 px-5 py-3 text-sm hover:bg-neutral-700"
          />
        </div>

        {filteredItems.length > 0 ? (
          <div className={`grid gap-5 ${gridClass}`}>
            {filteredItems.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
                onQuickView={() => setSelectedItem(item)}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[28px] border border-dashed border-white/10 bg-neutral-900/50 px-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              No results found
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
              Try another search term or switch between Movies and TV Series to
              find something here.
            </p>
          </div>
        )}
      </section>

      <Modal
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name}
        className="max-w-3xl"
      >
        {selectedItem && (
          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
              <Image
                src={selectedItem.img}
                alt={selectedItem.name}
                fill
                className={`object-cover ${modalImageClass}`}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {selectedItem.type === "movie" ? "Movie" : "TV Series"}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                  <HiStar className="text-primary" size={14} />
                  {selectedItem.rate}
                </span>
              </div>

              {(selectedItem.year ||
                selectedItem.genre ||
                selectedItem.duration) && (
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/65">
                  {selectedItem.year && <span>{selectedItem.year}</span>}
                  {selectedItem.year && selectedItem.genre && (
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                  )}
                  {selectedItem.genre && <span>{selectedItem.genre}</span>}
                  {selectedItem.genre && selectedItem.duration && (
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                  )}
                  {selectedItem.duration && (
                    <span>{selectedItem.duration}</span>
                  )}
                </div>
              )}

              {selectedItem.description && (
                <p className="mt-5 text-sm leading-7 text-white/75">
                  {selectedItem.description}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <MainButton
                  label="Watch Now"
                  icon={<HiPlay size={16} />}
                  className="px-5 py-3"
                />

                <SecondButton
                  label="Close"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-2xl bg-neutral-800 px-5 py-3 hover:bg-neutral-700"
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MediaLibrarySection;
