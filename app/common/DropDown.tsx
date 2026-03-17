"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiChevronDown } from "react-icons/hi2";

type DropDownProps = {
  label: string;
  list: string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function DropDown({
  label,
  list,
  value,
  onChange,
  className = "",
}: DropDownProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});

  const id = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const updateMenuPosition = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const menuWidth = 256; // w-64
    const gap = 10;

    let left = rect.left;
    let top = rect.bottom + gap;

    const maxLeft = window.innerWidth - menuWidth - 12;
    if (left > maxLeft) left = maxLeft;
    if (left < 12) left = 12;

    const estimatedHeight = 260;
    const wouldOverflowBottom = top + estimatedHeight > window.innerHeight - 12;

    if (wouldOverflowBottom) {
      top = rect.top - gap;
      setMenuStyle({
        position: "fixed",
        left,
        top,
        width: menuWidth,
        zIndex: 9999,
        transform: "translateY(-100%)",
      });
      return;
    }

    setMenuStyle({
      position: "fixed",
      left,
      top,
      width: menuWidth,
      zIndex: 9999,
    });
  };

  useEffect(() => {
    if (!open) return;

    updateMenuPosition();

    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        wrapperRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handleReposition = () => updateMenuPosition();

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [open]);

  const selected = internalValue ?? "";

  const pick = (opt: string) => {
    setInternalValue(opt);
    onChange?.(opt);
    setOpen(false);
  };

  const menu = (
    <div
      ref={menuRef}
      style={menuStyle}
      className={`
        rounded-2xl border border-white/10
        bg-neutral-950/95 backdrop-blur-xl
        shadow-2xl shadow-black/60
        transition-all duration-200 ease-out
        ${open ? "translate-y-0 opacity-100" : "pointer-events-none opacity-0"}
      `}
    >
      <ul
        id={`${id}-listbox`}
        role="listbox"
        className="scrollbar-hide flex max-h-64 flex-col gap-2 overflow-auto p-2"
      >
        {list.map((opt) => {
          const active = opt === selected;

          return (
            <li key={opt} role="option" aria-selected={active}>
              <button
                type="button"
                onClick={() => pick(opt)}
                className={`
                  flex w-full items-center justify-between rounded-xl
                  px-3 py-2 text-left text-sm transition cursor-pointer
                  ${
                    active
                      ? "bg-primary-dark text-foreground"
                      : "text-foreground hover:bg-primary-dark"
                  }
                `}
              >
                <span className="truncate">{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      <div ref={wrapperRef} className={`relative ${className}`}>
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-listbox`}
          onClick={() => setOpen((v) => !v)}
          className="
            flex h-12 items-center gap-3
            rounded-full border border-white/10
            bg-neutral-900 px-5 text-white
            backdrop-blur-md transition
            hover:bg-neutral-800 cursor-pointer
          "
        >
          <span className="text-sm font-semibold">
            {selected ? `${label}: ${selected}` : label}
          </span>

          <HiChevronDown
            className={`ml-1 transition duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            size={18}
          />
        </button>
      </div>

      {mounted && open ? createPortal(menu, document.body) : null}
    </>
  );
}
