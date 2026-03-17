// =============================
// SupportPosters.tsx
// (Fixed: relative container + responsive width)
// =============================
"use client";

import React from "react";
import { FormSection, supportPosters } from "@/data/support";
import SectionHeading from "../common/SectionHeading";

const SupportPosters: React.FC = () => {
  const content = FormSection;

  return (
    <section className="w-full">
      <SectionHeading title={content.title} description={content.description} />

      {/* ✅ IMPORTANT: relative so absolute overlays stay inside */}
      <div
        className="
          relative
          hidden lg:block
          w-full
          rounded-3xl
          border border-white/10
          bg-black/40
          p-6
          shadow-[0_0_120px_rgba(255,255,255,0.08)]
          overflow-hidden
          mt-8
        "
      >
        <div className="grid grid-cols-4 gap-5 rounded-2xl">
          {supportPosters.map((item, idx) => (
            <div
              key={`${item.alt}-${idx}`}
              className="
                relative
                aspect-[2/3]
                overflow-hidden
                rounded-2xl
                bg-white/5
                ring-1 ring-white/10
                transition
                hover:scale-[1.03]
                hover:ring-white/20
              "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="
                  h-full w-full object-cover
                  opacity-90
                  transition duration-300
                  hover:opacity-100
                "
                loading="lazy"
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-b
                  from-black/15 via-black/10 to-black/35
                "
              />
            </div>
          ))}
        </div>

        {/* subtle bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
    </section>
  );
};

export default SupportPosters;
