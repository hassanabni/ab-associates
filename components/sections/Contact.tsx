"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          data?.error || "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage(
        "We couldn't reach our server. Please check your connection and try again."
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-ink text-porcelain py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow text-brass">Private Enquiry</span>
            <h2 className="font-display font-light text-[10vw] lg:text-[3.6vw] leading-[1.02] mt-6 tracking-tight">
              Begin the
              <br />
              <span className="italic text-gradient-brand">conversation.</span>
            </h2>
            <p className="mt-8 text-porcelain-dim font-light leading-relaxed max-w-md">
              Every conversation stays confidential. Share a few details
              and a principal will respond to you personally within one
              business day.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-14 space-y-6">
              <div>
                <div className="eyebrow text-porcelain-dim/60 text-[0.62rem]!">Office</div>
                <div className="font-display text-lg mt-1">
                  Office no M4, teen talwar, Yousuf Grand Square, Khayaban-e-Iqbal Rd, Block 8 Clifton, Karachi, 75600
                </div>
              </div>
              <div>
                <div className="eyebrow text-porcelain-dim/60 text-[0.62rem]!">Direct</div>
                <a
                  href="tel:+923012685000"
                  data-cursor-hover
                  className="font-display text-lg mt-1 inline-block border-b border-transparent hover:border-brass hover:text-brass transition-colors"
                >
                  +92 301 2685000
                </a>
              </div>
              <div>
                <div className="eyebrow text-porcelain-dim/60 text-[0.62rem]!">Instagram</div>
                <a
                  href="https://instagram.com/abassociates.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="font-display text-lg mt-1 inline-block border-b border-line hover:border-brass hover:text-brass transition-colors"
                >
                  @abassociates.co
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24 border border-line">
                <span className="font-display italic text-3xl text-brass">Thank you.</span>
                <p className="mt-4 text-porcelain-dim font-light max-w-sm">
                  Your message is on its way. We look forward to speaking
                  with you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" "
                      id="name"
                      className="peer w-full bg-transparent border-b border-line py-3 outline-none focus:border-brass transition-colors font-light text-porcelain"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-porcelain-dim/60 text-sm transition-all pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brass peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" "
                      id="email"
                      className="peer w-full bg-transparent border-b border-line py-3 outline-none focus:border-brass transition-colors font-light text-porcelain"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-porcelain-dim/60 text-sm transition-all pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brass peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    id="message"
                    className="peer w-full bg-transparent border-b border-line py-3 outline-none focus:border-brass transition-colors font-light resize-none text-porcelain"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-porcelain-dim/60 text-sm transition-all pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brass peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    What are you looking to achieve?
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400 font-light" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  data-cursor-hover
                  disabled={status === "submitting"}
                  className="group flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-[0.8rem] tracking-[0.15em] uppercase border border-brass/50 text-porcelain px-8 py-4 group-hover:bg-brass group-hover:text-ink group-hover:border-brass transition-all duration-400">
                    {status === "submitting" ? "Sending…" : "Send Enquiry"}
                  </span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
