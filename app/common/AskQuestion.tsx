"use client";

import React, { useState } from "react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
  HiOutlineTag,
  HiOutlineUser,
} from "react-icons/hi2";
import FloatingInput from "@/app/common/FloatingInput";
import MainButton from "@/app/common/MainButton";
import ThirdButton from "@/app/common/ThirdButton";

const AskQuestion = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    question: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Question submitted:", form);
  };

  return (
    <section className="w-full py-4 px-6">
      <div className="mb-4">
        <p className="mt-1 text-sm leading-relaxed text-white/60">
          Send us your question and we’ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FloatingInput
          type="text"
          name="name"
          id="ask-name"
          label="Your Name"
          icon={<HiOutlineUser size={18} />}
          value={form.name}
          onChange={handleChange("name")}
          className="bg-black"
        />

        <FloatingInput
          type="email"
          name="email"
          id="ask-email"
          label="Email Address"
          icon={<HiOutlineEnvelope size={18} />}
          value={form.email}
          onChange={handleChange("email")}
          className="bg-black"
        />

        <FloatingInput
          type="text"
          name="subject"
          id="ask-subject"
          label="Subject"
          icon={<HiOutlineTag size={18} />}
          value={form.subject}
          onChange={handleChange("subject")}
          className="bg-black"
        />

        <div className="rounded-[22px] border border-white/10 bg-black px-4 py-4 transition focus-within:border-primary/60">
          <label
            htmlFor="ask-question"
            className="mb-2 block text-sm font-medium text-white/70"
          >
            Your Question
          </label>
          <textarea
            id="ask-question"
            name="question"
            rows={5}
            value={form.question}
            onChange={handleChange("question")}
            placeholder="Write your question here..."
            className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-white/30"
          />
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <MainButton
            type="submit"
            label="Send Question"
            icon={<HiOutlineChatBubbleLeftRight size={18} />}
            className="px-5 py-3"
          />

          <ThirdButton
            type="button"
            label="Clear"
            onClick={() =>
              setForm({
                name: "",
                email: "",
                subject: "",
                question: "",
              })
            }
            className="rounded-2xl bg-neutral-800 px-5 py-3 hover:bg-neutral-700"
          />
        </div>
      </form>
    </section>
  );
};

export default AskQuestion;
