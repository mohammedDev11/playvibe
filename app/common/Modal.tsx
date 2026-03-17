"use client";

import React, { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

type ModalSize = "sm" | "md" | "lg" | "xl";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: ModalSize;
};

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  className = "",
  size = "md",
}: ModalProps) {
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
        aria-label="Close modal backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Centered container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className={`
            relative flex w-full max-h-[85vh] flex-col
            ${sizeClasses[size]}
            rounded-3xl border border-white/15
            bg-neutral-950
            shadow-[0_25px_80px_rgba(0,0,0,0.75)]
            backdrop-blur-xl
            p-4
            ${className}
          `}
        >
          {/* Header */}
          <div className="shrink-0 border-b border-white/10 bg-black/80 px-6 py-5 mb-4 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {title ? (
                  <h2 className="truncate text-xl font-semibold text-foreground">
                    {title}
                  </h2>
                ) : (
                  <div className="h-6" />
                )}
              </div>

              <button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                className="shrink-0 rounded-xl p-2 text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
              >
                <HiXMark size={22} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="scrollbar-hide overflow-y-auto text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
