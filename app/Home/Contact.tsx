"use client";

import { HomeContactSection } from "@/data/Index";
import React from "react";
import SectionHeading from "../common/SectionHeading";
import InputLight from "../common/InputLight";
import MainButton from "../common/MainButton";
import { HiEnvelope, HiChatBubbleLeftRight } from "react-icons/hi2";

const Contact = () => {
  const content = HomeContactSection;

  return (
    <section id="contact" className="relative w-full overflow-hidden py-24">
      {/* Background Image */}
      <img
        src="/Home/contact-bg.jpg"
        alt="contact background"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Text */}
        <div className="max-w-xl">
          <SectionHeading
            title={content.title}
            description={content.description}
          />
        </div>

        {/* Right Form Card */}
        <div className="w-full max-w-md rounded-2xl  p-8 backdrop-blur-lg border border-white/10 flex flex-col gap-6">
          <InputLight
            placeholder="Your Email"
            icon={<HiEnvelope size={20} />}
            className="w-full bg-neutral-100"
          />

          <InputLight
            placeholder="Your Message"
            icon={<HiChatBubbleLeftRight size={20} />}
            className="w-full"
          />

          <MainButton label="Send Message" className="w-full py-3" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
