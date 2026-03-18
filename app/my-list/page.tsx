"use client";

import React from "react";
import MediaCarouselSection from "@/app/common/MediaCarouselSection";

import { MyListSection, MyListItems, MyListContent } from "@/data/my-list";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Header list={MyListContent} />

      <main className="flex flex-col gap-24 px-4 pb-24 sm:px-6 md:gap-32 md:pb-8 lg:gap-10 lg:px-10">
        <MediaCarouselSection
          sectionId="my-list"
          content={MyListSection}
          items={MyListItems}
          itemsPerPage={4}
        />

        <Footer />
      </main>
    </div>
  );
};

export default Page;
