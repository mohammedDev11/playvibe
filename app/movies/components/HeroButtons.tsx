"use client";

import React from "react";
import CarouselPager2 from "@/app/common/CarouselPager2";

type HeroButtonsProps = {
  className?: string;
  totalItems: number;
  page: number;
  onPageChange: (page: number) => void;
};

const HeroButtons = ({
  className = "",
  totalItems,
  page,
  onPageChange,
}: HeroButtonsProps) => {
  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      {/* LEFT */}
      <CarouselPager2
        totalItems={totalItems}
        itemsPerPage={1}
        page={page}
        onPageChange={onPageChange}
        className="shrink-0"
        maxDots={5}
      />
    </div>
  );
};

export default HeroButtons;
