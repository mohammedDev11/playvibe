"use client";

import React from "react";
import Image from "next/image";
import { HomeHeroPremium } from "@/data/Index";
import MainButton from "../common/MainButton";
import { HiPlay } from "react-icons/hi2";
import Link from "next/link";

const Hero = () => {
  const content = HomeHeroPremium;

  return (
    <div className="flex flex-col items-center">
      {/* ===== Laptop (Fixed Size) ===== */}
      <div className="relative w-[900px] max-w-none overflow-x-auto scale-75">
        <Image
          src="/Home/laptopEmpty.png"
          alt="Laptop"
          width={900}
          height={700}
          priority
        />

        <div
          className="
              absolute
              top-[3%]
              left-[12%]
              w-[78%]
              h-[90%]
              overflow-hidden
              rounded-md
            "
        >
          <Image
            src="/Home/strangerThings01.jpg"
            alt="Stranger Things"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* ===== Content (Responsive Only) ===== */}
      <div className="text-center max-w-[600px] px-4">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4">
          {content.title}
        </h2>

        <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
          {content.description}
        </p>

        <Link href="/movies">
          <MainButton
            className="px-5 py-3"
            label={content.buttonText}
            icon={<HiPlay size={18} />}
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
