"use client";

import React from "react";
import MediaCarouselSection from "@/app/common/MediaCarouselSection";

import { MyListSection, MyListItems } from "@/data/my-list";
import Footer from "../common/Footer";

const Page = () => {
  return (
    <main className="px-6 py-8">
      <MediaCarouselSection
        sectionId="my-list"
        content={MyListSection}
        items={MyListItems}
        itemsPerPage={4}
      />
      <Footer />
    </main>
  );
};

export default Page;
