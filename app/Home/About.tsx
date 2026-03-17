import { HomeAboutSection, PlayVibeDevices } from "@/data/Index";
import React from "react";
import SectionHeading from "../common/SectionHeading";

const About = () => {
  const content = HomeAboutSection;

  return (
    <section id="about" className="w-full pt-28">
      {/* Heading */}
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          title={content.title}
          description={content.description}
        />
      </header>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PlayVibeDevices.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur transition hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>

                <div className="min-w-0 flex flex-col gap-2">
                  <h3 className="text-base font-semibold leading-snug md:text-lg">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
