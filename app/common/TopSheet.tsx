"use client";

import React, { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

type TopSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function TopSheet({
  open,
  onClose,
  title,
  children,
}: TopSheetProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        aria-label="Close menu backdrop"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-md"
      />

      {/* Sheet */}
      <div
        className="
          absolute left-1/2 top-0 w-full -translate-x-1/2
          max-w-[720px]
          rounded-b-3xl
          border-x border-b border-white/15
          bg-black/60
          backdrop-blur-xl
          shadow-[0_25px_80px_rgba(0,0,0,0.75)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-foreground">
            {title ?? "Menu"}
          </h3>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-foreground/80 hover:bg-white/10 hover:text-foreground transition"
            aria-label="Close menu"
          >
            <HiXMark size={22} />
          </button>
        </div>

        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}
