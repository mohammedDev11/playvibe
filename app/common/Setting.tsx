"use client";

import React, { useState } from "react";
import SectionHeading from "@/app/common/SectionHeading";
import ThirdButton from "@/app/common/ThirdButton";
import MainButton from "@/app/common/MainButton";
import DropDown from "@/app/common/DropDown";

const qualityOptions = ["Auto", "4K", "1080p", "720p"];
const languageOptions = ["English", "Arabic", "French", "Spanish"];

const Setting = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [quality, setQuality] = useState("Auto");
  const [language, setLanguage] = useState("English");

  return (
    <section className="mx-auto w-full max-w-[900px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col gap-6">
        <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Playback</h3>

          <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white">
                  Autoplay Next Episode
                </p>
                <p className="text-xs text-white/60">
                  Automatically play the next episode in a series.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAutoPlay(!autoPlay)}
                className={`relative h-6 w-11 rounded-full transition cursor-pointer ${
                  autoPlay ? "bg-primary" : "bg-neutral-700"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    autoPlay ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  Streaming Quality
                </p>
                <p className="text-xs text-white/60">
                  Choose your preferred playback quality.
                </p>
              </div>

              <DropDown
                label="Quality"
                list={qualityOptions}
                value={quality}
                onChange={setQuality}
                className="md:min-w-[220px]"
              />
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-white">App Language</p>
                <p className="text-xs text-white/60">
                  Select the language used across the platform.
                </p>
              </div>

              <DropDown
                label="Language"
                list={languageOptions}
                value={language}
                onChange={setLanguage}
                className="md:min-w-[220px]"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Notifications</h3>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white">
                Enable Notifications
              </p>
              <p className="text-xs text-white/60">
                Receive updates about new releases and recommendations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative h-6 w-11 rounded-full transition cursor-pointer ${
                notifications ? "bg-primary" : "bg-neutral-700"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                  notifications ? "left-[22px]" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">Account</h3>

          <div className="mt-5 flex flex-col gap-3">
            <ThirdButton
              label="Manage Subscription"
              className="rounded-xl bg-neutral-800 px-5 py-3 hover:bg-neutral-700"
            />

            <ThirdButton
              label="Change Password"
              className="rounded-xl bg-neutral-800 px-5 py-3 hover:bg-neutral-700"
            />

            <MainButton label="Log Out" className="mt-2 px-5 py-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setting;
