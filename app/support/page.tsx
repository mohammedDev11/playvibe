import React from "react";
import Header from "../common/Header";
import { SupportTopNavbarContent } from "@/data/support";
import Form from "./Form";
import Questions from "../Home/Questions";
import Footer from "../common/Footer";
import SupportPosters from "./SupportPosters";

const page = () => {
  return (
    <div className="flex flex-col">
      <Header list={SupportTopNavbarContent} />

      <main className="flex flex-col gap-24 px-4 pb-24 sm:px-6 md:gap-32 md:pb-8 lg:gap-28 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[420px_1fr]">
          <SupportPosters />
          <Form />
        </div>

        <Questions />
        <Footer />
      </main>
    </div>
  );
};

export default page;
