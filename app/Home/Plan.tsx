"use client";

import React from "react";
import SectionHeading from "../common/SectionHeading";
import { HomePlanSection, HomePlans } from "@/data/Index";
import { MdDone } from "react-icons/md";
import MainButton from "../common/MainButton";
import SecondButton from "../common/SecondButton";

const Plan = () => {
  const content = HomePlanSection;

  return (
    <section id="plan" className="w-full pt-14 flex flex-col gap-10">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          title={content.title}
          description={content.description}
        />
      </header>

      <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HomePlans.map((plan) => (
          <article
            key={plan.id}
            className="bg-neutral-900 p-5 rounded-2xl w-full hover:scale-105 duration-300 transition cursor-pointer"
          >
            <h3 className="mb-4 text-2xl">{plan.name}</h3>
            <p className="mb-5 text-muted text-sm">{plan.description}</p>

            <div className="mb-5 flex items-end gap-2">
              <span className="text-3xl">${plan.price}</span>
              <span className="text-muted text-sm">/Month</span>
            </div>

            <ul className="mb-6 flex flex-col gap-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MdDone size={22} className="text-primary-light" />
                  <span className="text-muted text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <SecondButton
                label="Start Free Trial"
                className="px-4 py-2 w-full sm:w-auto"
              />
              <MainButton
                label="Choose Plan"
                className="px-4 py-2 w-full sm:w-auto"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Plan;
