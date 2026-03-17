"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { HiPlay, HiStar } from "react-icons/hi2";

import CarouselPager from "@/app/common/CarouselPager";
import SectionHeading from "@/app/common/SectionHeading";
import MediaCard from "@/app/common/MediaCard";
import Modal from "@/app/common/Modal";
import MainButton from "@/app/common/MainButton";
import SecondButton from "@/app/common/SecondButton";
import type { MediaCardItem } from "@/data/media";

type SectionContent = {
  title: string;
  description: string;
};

type MediaCarouselSectionProps = {
  sectionId: string;
  content: SectionContent;
  items: MediaCardItem[];
  itemsPerPage?: number;
};

const MediaCarouselSection = ({
  sectionId,
  content,
  items,
  itemsPerPage = 4,
}: MediaCarouselSectionProps) => {
  const [page, setPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MediaCardItem | null>(null);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const safePage = Math.min(page, totalPages - 1);

  useEffect(() => {
    if (page !== safePage) setPage(safePage);
  }, [page, safePage]);

  const visibleItems = useMemo(() => {
    const start = safePage * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [safePage, itemsPerPage, items]);

  const modalImageClass =
    selectedItem?.position === "top"
      ? "object-top"
      : selectedItem?.position === "bottom"
      ? "object-bottom"
      : "object-center";

  return (
    <>
      <section id={sectionId} className="flex flex-col gap-10 py-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            title={content.title}
            description={content.description}
          />

          <CarouselPager
            totalItems={items.length}
            itemsPerPage={itemsPerPage}
            page={safePage}
            onPageChange={setPage}
            maxDots={7}
          />
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              onQuickView={() => setSelectedItem(item)}
            />
          ))}
        </div>
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
                  {selectedItem.type === "tv" ? "TV Series" : "Movie"}
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

export default MediaCarouselSection;
