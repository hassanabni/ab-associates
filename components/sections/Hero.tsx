"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll(".word-mask > span");
      if (!words) return;

      gsap.set(words, { yPercent: 110 });
      gsap.to(words, {
        yPercent: 0,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.09,
        delay: 0.5,
      });

      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 1.5, stagger: 0.15 }
      );

      gsap.fromTo(
        ".hero-video-wrap",
        { scale: 1.15 },
        { scale: 1, duration: 2.4, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-svh min-h-120 w-full overflow-hidden bg-ink"
    >
      <div className="hero-video-wrap absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/waterfront-dusk.jpg"
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
      </div>

      <div className="hero-fade absolute top-24 right-6 md:right-12 z-10 hidden md:flex flex-col items-end opacity-0 text-right">
        <span className="eyebrow text-porcelain/70 text-[0.62rem]!">24.8138&deg; N, 67.0300&deg; E</span>
        <span className="eyebrow text-brass/70 text-[0.62rem]! mt-1">Karachi, Sindh</span>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-12 pb-10 sm:pb-16 md:pb-20 [@media(max-height:480px)]:justify-center [@media(max-height:480px)]:pt-20">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="hero-fade eyebrow mb-3 sm:mb-6 opacity-0 [@media(max-height:480px)]:hidden">
            AB Associates Est. 2004
          </div>

          <div ref={headlineRef} className="overflow-hidden">
            <h1 className="font-display font-light text-porcelain leading-[0.95] text-[13vw] md:text-[7.2vw] [@media(max-height:480px)]:text-[8vw] tracking-tight">
              <span className="word-mask inline-block overflow-hidden align-top">
                <span className="inline-block">Real&nbsp;Estate,</span>
              </span>
              <br />
              <span className="word-mask inline-block overflow-hidden align-top">
                <span className="inline-block italic text-gradient-brand">Considered</span>
              </span>
              <span className="word-mask inline-block overflow-hidden align-top">
                <span className="inline-block">.</span>
              </span>
            </h1>
          </div>

          <div className="hero-fade mt-4 sm:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 opacity-0 [@media(max-height:480px)]:hidden">
            <p className="max-w-md text-porcelain-dim text-base md:text-lg font-light leading-relaxed">
              A private consultancy for acquisition, advisory, and portfolio
              strategy — twenty years of hands-on experience in Karachi&rsquo;s
              real estate market.
            </p>
            <a
              href="#legacy"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#legacy")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-4 shrink-0"
            >
              <span className="text-[0.75rem] tracking-[0.15em] uppercase text-porcelain">
                Discover the Firm
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 transition-all duration-400 group-hover:bg-brass">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-400 group-hover:translate-y-1"
                >
                  <path
                    d="M8 1V15M8 15L2 9M8 15L14 9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-porcelain group-hover:text-ink"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 z-10 hidden md:flex items-center gap-3 text-porcelain-dim">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-brass/60 to-transparent" />
        <span className="eyebrow -rotate-90 origin-left translate-y-6 whitespace-nowrap">
          Scroll
        </span>
      </div>
    </section>
  );
}
