"use client";

import React, { useState } from "react";
import { HiCheck, HiFilm, HiTv, HiTrash } from "react-icons/hi2";
import SectionHeading from "@/app/common/SectionHeading";
import ThirdButton from "@/app/common/ThirdButton";

type NotificationItem = {
  id: number;
  title: string;
  message: string;
  time: string;
  type: "movie" | "tv";
  read: boolean;
};

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: "New Episode Released",
    message: "Stranger Things S5 Episode 1 is now available.",
    time: "2h ago",
    type: "tv",
    read: false,
  },
  {
    id: 2,
    title: "Trending Now",
    message: "John Wick is trending worldwide today.",
    time: "5h ago",
    type: "movie",
    read: false,
  },
  {
    id: 3,
    title: "New Recommendation",
    message: "Based on your watch history, we recommend Interstellar.",
    time: "1d ago",
    type: "movie",
    read: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <section className="mx-auto w-full max-w-[800px] px-4 py-4">
      <div className="mt-6 flex flex-col gap-4">
        {/* Actions */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/60">
            {notifications.length} notification
            {notifications.length !== 1 ? "s" : ""}
          </p>

          <ThirdButton
            label="Clear All"
            onClick={clearAll}
            className="rounded-xl bg-neutral-800 px-4 py-2 text-sm hover:bg-neutral-700"
          />
        </div>

        {/* List */}
        {notifications.length > 0 ? (
          <div className="flex flex-col gap-3">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`flex items-start justify-between gap-4 rounded-2xl border p-4 transition ${
                  item.read
                    ? "border-white/5 bg-neutral-900/40"
                    : "border-primary/30 bg-neutral-900/80"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="mt-1 text-primary">
                    {item.type === "movie" ? (
                      <HiFilm size={18} />
                    ) : (
                      <HiTv size={18} />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/70">{item.message}</p>
                    <span className="text-xs text-white/40">{item.time}</span>
                  </div>
                </div>

                {/* Actions */}
                {!item.read && (
                  <button
                    onClick={() => markAsRead(item.id)}
                    className="flex items-center gap-1 rounded-xl bg-primary/20 px-3 py-1 text-xs text-primary hover:bg-primary/30 transition cursor-pointer"
                  >
                    <HiCheck size={14} />
                    Read
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-neutral-900/40 text-center">
            <p className="text-sm text-white/60">No notifications yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notifications;
