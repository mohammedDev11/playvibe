import React from "react";
import Header from "../common/Header";
import { SupportTopNavbarContent } from "@/data/support";
import Form from "./Form";
import Questions from "../Home/Questions";
import Footer from "../common/Footer";
import SupportPosters from "./SupportPosters";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header list={SupportTopNavbarContent} />
      <main className="flex flex-col gap-24 md:gap-32 lg:gap-28">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[420px_1fr] items-start">
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
