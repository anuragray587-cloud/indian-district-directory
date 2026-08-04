"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How many States are there in India?",
    answer:
      "India has 28 States, each with its own elected government and administrative structure.",
  },
  {
    question: "How many Union Territories are there in India?",
    answer:
      "India has 8 Union Territories administered directly by the Central Government, with some having their own legislatures.",
  },
  {
    question: "How many districts are there in India?",
    answer:
      "India currently has approximately 790 districts. The number may change as new districts are created.",
  },
  {
    question: "Which is the largest State in India by area?",
    answer:
      "Rajasthan is the largest State in India by geographical area.",
  },
  {
    question: "Which State has the highest number of districts?",
    answer:
      "Uttar Pradesh has the highest number of districts among all Indian States.",
  },
  {
    question: "Where can I find district-wise information?",
    answer:
      "You can browse any State on this website and explore detailed information for each district.",
  },
];

export function StateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
          FAQ
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Answers to the most common questions about India&apos;s States,
          Union Territories and districts.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
            >
              <span className="font-semibold text-slate-900">
                {faq.question}
              </span>

              <span
  className={`text-xl transition-transform duration-300 ${
    openIndex === index ? "rotate-180" : ""
  }`}
>
  ⌄
</span>
            </button>

            <div
  className={`overflow-hidden transition-all duration-300 ${
    openIndex === index
      ? "max-h-40 border-t border-slate-100"
      : "max-h-0"
  }`}
>
  <div className="px-6 py-5 text-slate-600">
    {faq.answer}
  </div>
</div>
          </div>
        ))}
      </div>
    </section>
  );
}
