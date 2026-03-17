"use client";

import React from "react";
import Image from "next/image";
import { HiStar, HiPlay, HiPlus } from "react-icons/hi2";
import MainButton from "../../common/MainButton";
import SecondButton from "../../common/SecondButton";

type TrendingCardProps = {
  item: {
    id: number;
    name: string;
    img: string;
    rate: string;
    type: "movie" | "tv";
    year: string;
    genre: string;
    duration: string;
    description: string;
    position?: "top" | "center" | "bottom";
  };
  onQuickView?: () => void;
};

const positionClassMap = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

const TrendingCard = ({ item, onQuickView }: TrendingCardProps) => {
  return (
    <article
      className="
        group relative overflow-hidden rounded-[24px]
        border border-white/10 bg-neutral-900/70
        transition duration-300 hover:-translate-y-1 hover:border-primary/40
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
      "
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className={`object-cover transition duration-500 group-hover:scale-105 ${
            positionClassMap[item.position ?? "center"]
          }`}
        />

        {/* better overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        {/* top badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
            {item.type === "movie" ? "Movie" : "TV Series"}
          </span>

          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
            <HiStar className="text-primary" size={14} />
            {item.rate}
          </span>
        </div>

        {/* content moved a bit higher */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="translate-y-2 transition duration-300 group-hover:translate-y-0">
            <h3 className="line-clamp-1 text-xl font-bold text-white drop-shadow-md">
              {item.name}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/80">
              <span>{item.year}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="line-clamp-1">{item.genre}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{item.duration}</span>
            </div>

            <div className="mt-4 flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
              <MainButton
                label="Watch"
                icon={<HiPlay size={16} />}
                className="rounded-xl px-4 py-2 text-sm"
              />

              <SecondButton
                icon={<HiPlus size={18} />}
                className="rounded-xl border border-white/10 bg-white/10 hover:bg-white/15"
              />

              <SecondButton
                label="Details"
                onClick={onQuickView}
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TrendingCard;
