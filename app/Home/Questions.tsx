"use client";

import React, { useState } from "react";
import { Faq } from "../common/Faq";
import SectionHeading from "../common/SectionHeading";
import {
  HomeFaqQuestions1,
  HomeFaqQuestions2,
  HomeQuestionsSection,
} from "@/data/Index";
import MainButton from "../common/MainButton";
import Modal from "../common/Modal";
import AskQuestion from "../common/AskQuestion";

type ModalType = "ask" | null;

const Questions = () => {
  const content = HomeQuestionsSection;
  const [openModal, setOpenModal] = useState<ModalType>(null);
  const close = () => setOpenModal(null);

  return (
    <section id="questions" className="w-full pt-28 flex flex-col gap-10">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          title={content.title}
          description={content.description}
        />
        <MainButton
          label={content.buttonText ?? "Ask a Question"}
          className="px-5 py-3"
          onClick={() => setOpenModal("ask")}
        />
      </header>

      <Faq allowMultiple={false}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col items-center gap-3">
            {HomeFaqQuestions1.map((q) => (
              <Faq.Item key={q.id} id={`faq-${q.id}`} title={q.question}>
                {q.answer}
              </Faq.Item>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            {HomeFaqQuestions2.map((q) => (
              <Faq.Item key={q.id} id={`faq-${q.id}`} title={q.question}>
                {q.answer}
              </Faq.Item>
            ))}
          </div>
        </div>
      </Faq>
      {/* Modal */}
      <Modal open={openModal !== null} onClose={close} title="Ask Question">
        <AskQuestion />
      </Modal>
    </section>
  );
};

export default Questions;
