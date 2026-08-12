"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-ink text-porcelain py-28 md:py-40 px-6 md:px-12"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <span className="eyebrow text-brass">Common Questions</span>
            <h2 className="font-display font-light text-[10vw] md:text-[4vw] leading-[1.02] mt-6 tracking-tight max-w-3xl">
              Before you
              <br />
              <span className="italic text-gradient-brand">ask, an answer.</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl border-t border-line">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-cursor-hover
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-7 md:py-8 text-left"
                  >
                    <span className="font-display font-light text-xl md:text-2xl tracking-tight text-porcelain">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-brass/50 text-brass transition-transform duration-400 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-luxe ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-porcelain-dim font-light leading-relaxed max-w-2xl pb-8 md:pb-10">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
