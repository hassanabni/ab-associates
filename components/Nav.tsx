"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Legacy", href: "#legacy" },
  { label: "Where We Work", href: "#where-we-work" },
  { label: "Advisory", href: "#services" },
  { label: "Enquire", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-md border-b border-line py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between">
          <a
            href="#top"
            data-cursor-hover
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/media/logo-mark.png"
              alt="AB Associates logo"
              width={36}
              height={36}
              className="rounded-sm"
              priority
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg tracking-[0.08em] text-porcelain">
                AB Associates
              </span>
              <span className="eyebrow text-[0.55rem] tracking-[0.28em] mt-1 text-brass/80">
                Real Estate Consultants
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[0.8rem] tracking-[0.12em] uppercase text-porcelain-dim hover:text-porcelain transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            data-cursor-hover
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] items-end p-2"
            aria-label="Open menu"
          >
            <span className="w-7 h-px bg-porcelain" />
            <span className="w-5 h-px bg-porcelain" />
          </button>

          <a
            href="#contact"
            data-cursor-hover
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="hidden lg:inline-block text-[0.75rem] tracking-[0.15em] uppercase border border-brass/50 text-porcelain px-6 py-3 hover:bg-brass hover:text-ink hover:border-brass transition-all duration-400"
          >
            Private Enquiry
          </a>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Image
                src="/media/logo-mark.png"
                alt="AB Associates logo"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-porcelain text-3xl leading-none p-2"
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-display text-4xl py-3 text-porcelain border-b border-line"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
