"use client";

import React, { createContext, useContext, useState } from "react";
import { IoIosAdd } from "react-icons/io";

type FaqRootProps = {
  children: React.ReactNode;
  className?: string;
  allowMultiple?: boolean;
};

type FaqItemProps = {
  id: string; // ✅ stable id from data
  title: string;
  children: React.ReactNode;
  className?: string;
};

type FaqContextType = {
  openIds: Set<string>;
  toggle: (id: string) => void;
  allowMultiple: boolean;
};

const FaqContext = createContext<FaqContextType | null>(null);

function useFaqContext() {
  const ctx = useContext(FaqContext);
  if (!ctx) throw new Error("Faq.Item must be used inside <Faq />");
  return ctx;
}

const FaqRoot = ({
  children,
  className = "",
  allowMultiple = false,
}: FaqRootProps) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(id);

      if (allowMultiple) {
        if (isOpen) next.delete(id);
        else next.add(id);
        return next;
      }

      // ✅ only one open at a time
      if (isOpen) return new Set();
      return new Set([id]);
    });
  };

  return (
    <FaqContext.Provider value={{ openIds, toggle, allowMultiple }}>
      <section className={`w-full ${className}`}>
        <div className="grid items-start gap-5"> {children}</div>
      </section>
    </FaqContext.Provider>
  );
};

const FaqItem = ({ id, title, children, className = "" }: FaqItemProps) => {
  const { openIds, toggle } = useFaqContext();
  const isOpen = openIds.has(id);

  return (
    <article
      className={`relative h-full rounded-2xl bg-neutral-900/60 backdrop-blur transition hover:border-primary/40 flex flex-col overflow-hidden ${className}`}
    >
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 blur-[1px]" />
      <button
        type="button"
        onClick={() => toggle(id)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <div className="flex items-center gap-3">
          <span
            className={[
              "hover:scale-110 duration-300 grid h-9 w-9 place-items-center rounded-xl transition",
              isOpen
                ? "bg-foreground text-primary hover:bg-white"
                : "bg-primary text-foreground hover:bg-primary-dark",
            ].join(" ")}
          >
            <span
              className={[
                "block text-lg leading-none transition-transform",
                isOpen ? "rotate-45" : "rotate-0",
              ].join(" ")}
            >
              <IoIosAdd />
            </span>
          </span>

          <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
        </div>

        <span className="text-xs text-muted-foreground">
          {isOpen ? "Hide" : "Show"}
        </span>
      </button>

      <div
        id={`${id}-content`}
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5 sm:pb-5">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};

export const Faq = Object.assign(FaqRoot, {
  Item: FaqItem,
});
