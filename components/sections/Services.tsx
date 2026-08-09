"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Acquisition Advisory",
    body: "We handle every step of a purchase on your behalf — due diligence, negotiation, and closing — so you only see the decisions that matter.",
  },
  {
    n: "02",
    title: "Portfolio Strategy",
    body: "For clients holding property across Phase 8, HMR Waterfront, and DHA City, we structure and rebalance portfolios around long-term value.",
  },
  {
    n: "03",
    title: "Off-Market Sourcing",
    body: "Inventory that never reaches public listings, sourced through twenty years of direct relationships with developers and owners.",
  },
  {
    n: "04",
    title: "Sale & Disposition",
    body: "Discreet, unhurried marketing to a qualified private network that protects both your price and your privacy.",
  },
  {
    n: "05",
    title: "Investment Analysis",
    body: "Valuation, yield modelling, and timing counsel for investors who treat Karachi real estate as a serious asset class.",
  },
];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="relative bg-porcelain text-ink py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div>
              <span className="eyebrow text-teal">Advisory</span>
              <h2 className="font-display font-light text-[10vw] md:text-[4vw] leading-[1.02] mt-6 tracking-tight">
                What we do,
                <br />
                <span className="italic text-teal">precisely.</span>
              </h2>
            </div>
            <p className="max-w-sm text-ink/60 font-light leading-relaxed">
              Every engagement starts with listening. What follows is
              built around you — never off the shelf.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-ink/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div
                onMouseEnter={() => setActive(s.n)}
                onMouseLeave={() => setActive(null)}
                data-cursor-hover
                className="group relative border-b border-ink/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start cursor-default transition-colors duration-500"
              >
                <div
                  className={`absolute inset-0 bg-ink -z-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active === s.n ? "scale-x-100" : ""
                  }`}
                />
                <div className="relative z-10 md:col-span-1 font-display italic text-xl text-teal group-hover:text-brass transition-colors duration-500">
                  {s.n}
                </div>
                <h3
                  className={`relative z-10 md:col-span-4 font-display font-light text-2xl md:text-3xl tracking-tight transition-colors duration-500 ${
                    active === s.n ? "text-porcelain" : "text-ink"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`relative z-10 md:col-span-6 font-light leading-relaxed transition-colors duration-500 ${
                    active === s.n ? "text-porcelain-dim" : "text-ink/60"
                  }`}
                >
                  {s.body}
                </p>
                <div
                  className={`relative z-10 md:col-span-1 flex md:justify-end transition-all duration-500 ${
                    active === s.n ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 8H14M14 8L9 3M14 8L9 13"
                      stroke="#b89968"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
