import { SubscriptionsTopNavbarContent } from "@/data/subscriptions";
import React from "react";
import Header from "../common/Header";
import Plan from "../Home/Plan";
import SubscriptionTable from "./SubscriptionTable";
import Contact from "../Home/Contact";
import Footer from "../common/Footer";

const page = () => {
  return (
    <div className="flex flex-col ">
      <Header list={SubscriptionsTopNavbarContent} />
      <main className="flex flex-col gap-24 md:gap-32 lg:gap-28">
        <Plan />
        <SubscriptionTable />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default page;
