import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build Guide — AB Associates",
  description:
    "How this site was designed and built: stack, motion system, and asset workflow.",
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: "Build Guide — AB Associates",
    description:
      "How this site was designed and built: stack, motion system, and asset workflow.",
    type: "article",
  },
};

const STACK = [
  ["Framework", "Next.js 16 (App Router) + TypeScript"],
  ["Styling", "Tailwind CSS v4 (CSS-native @theme tokens)"],
  ["Smooth scroll", "Lenis"],
  ["Scroll choreography", "GSAP + ScrollTrigger (parallax, pinned reveals, word-mask headline)"],
  ["Micro-interactions", "Framer Motion (viewport reveals, menu transitions, form states)"],
  ["3D accent", "React Three Fiber + drei (glass tower cluster, lazy-loaded, WebGL-gated)"],
  ["Typography", "Cormorant Garamond (display serif) + Manrope (geometric sans), via next/font"],
];

const STEPS = [
  {
    n: "01",
    title: "Start from a real reference, not a vibe",
    body: "The brief named 111west57th.com explicitly. Before writing any code, the goal was distilled into concrete traits: full-bleed cinematic hero, transparent nav that solidifies on scroll, oversized editorial serif type, restrained color, and scroll-scrubbed parallax rather than autoplay animation. Naming the traits up front kept later decisions (fonts, easing, section pacing) anchored to something specific instead of generic 'luxury site' defaults.",
  },
  {
    n: "02",
    title: "Build the palette from the brand, not a swatch library",
    body: "The client's existing logo — a teal-to-cyan gradient monogram — became the single source of truth for color. Rather than inventing a new palette, the teal/cyan range was sampled directly and paired with a near-black ink base, warm porcelain for light sections, and a muted brass accent for hairlines and hover states. This is what makes the site read as one brand rather than a template with a logo dropped on top.",
  },
  {
    n: "03",
    title: "Use real assets wherever they exist",
    body: "The client supplied two waterfront photographs and a short video. Those became the hero background and the flagship 'Featured Address' gallery — real material outranks generated material whenever it exists. AI image generation was intentionally skipped here since authentic assets were already on hand; the guidance is to reach for generation only to fill genuine gaps, not to replace real photography by default.",
  },
  {
    n: "04",
    title: "Typography does the 'legacy' work",
    body: "A high-contrast display serif (Cormorant Garamond) paired with a tight geometric sans (Manrope) does most of the heavy lifting for perceived prestige — large italic serif accents on key words, uppercase tracked-out eyebrows, and generous line-height throughout. No decorative or novelty fonts: restraint reads as more expensive than variety.",
  },
  {
    n: "05",
    title: "Layer three motion systems, each with a job",
    body: "Lenis handles inertial smooth-scroll globally. GSAP + ScrollTrigger drives anything tied to scroll position — the hero's word-mask headline reveal, parallax offsets on the gallery images, pinned/scrubbed transforms. Framer Motion handles anything viewport- or state-triggered — section reveals, the mobile menu's clip-path takeover, form label transitions. Keeping these responsibilities separate (position-driven vs. state-driven) avoids the jank that comes from fighting scroll libraries against each other.",
  },
  {
    n: "06",
    title: "Let 3D be an accent, not a stunt",
    body: "A single React Three Fiber scene — an abstracted glass tower cluster with a transmission material — sits in the Phase 8 section. It's lazy-loaded with next/dynamic (ssr: false), gated behind a WebGL feature check with a silent no-op fallback, and kept small in geometry so it never becomes the site's bottleneck. One well-placed 3D moment reads as craft; three or four would read as showing off.",
  },
  {
    n: "07",
    title: "Design for reduced motion and slow connections from day one",
    body: "prefers-reduced-motion is honored globally (Lenis and GSAP effects short-circuit), the custom cursor only renders on fine-pointer devices, and the hero video ships with a poster image fallback. None of this was retrofitted — building it in from the first section made every later section cheaper to make accessible.",
  },
  {
    n: "08",
    title: "Iterate with a real critique pass, not just a build-and-ship",
    body: "After the initial build, the site went through structured review passes: one for structural/design cohesion, one for motion and interaction refinement (easing, timing, missing micro-interactions), and one for content, responsiveness edge cases, and performance. Treating polish as a distinct phase — not something squeezed into the original build — is what separates a finished site from a first draft.",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-porcelain text-ink px-6 md:px-12 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="eyebrow text-teal hover:text-brass transition-colors inline-flex items-center gap-2"
        >
          &larr; Back to site
        </Link>

        <h1 className="font-display font-light text-[12vw] md:text-6xl leading-[1.02] mt-8 tracking-tight">
          How this site
          <br />
          <span className="italic text-teal">was built.</span>
        </h1>

        <p className="mt-8 text-lg font-light leading-relaxed text-ink/70">
          A short, honest account of the stack, decisions, and workflow
          behind this site — written so anyone can replicate the approach
          for their own brand.
        </p>

        <div className="hairline my-14 opacity-40" />

        <section>
          <h2 className="eyebrow text-brass mb-6">Stack</h2>
          <div className="border-t border-ink/10">
            {STACK.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 py-4 border-b border-ink/10 text-sm md:text-base"
              >
                <div className="text-ink/50 font-light">{label}</div>
                <div className="col-span-2 font-medium">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline my-14 opacity-40" />

        <section>
          <h2 className="eyebrow text-brass mb-10">Approach</h2>
          <div className="space-y-12">
            {STEPS.map((step) => (
              <div key={step.n}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display italic text-2xl text-teal">
                    {step.n}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-ink/65 font-light leading-relaxed max-w-2xl">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline my-14 opacity-40" />

        <section className="pb-10">
          <h2 className="eyebrow text-brass mb-6">Replicate it yourself</h2>
          <ol className="space-y-3 text-ink/70 font-light leading-relaxed list-decimal list-inside">
            <li>Scaffold with <code className="text-teal">create-next-app</code> (TypeScript, Tailwind, App Router).</li>
            <li>Install <code className="text-teal">framer-motion gsap lenis three @react-three/fiber @react-three/drei</code>.</li>
            <li>Pull your palette from an existing brand asset (logo, packaging, signage) rather than inventing one.</li>
            <li>Pick one display font and one workhorse sans — commit to the pairing everywhere.</li>
            <li>Wire Lenis + GSAP ScrollTrigger globally; use Framer Motion for viewport/state-triggered moments.</li>
            <li>Add exactly one 3D or standout motion moment — lazy-loaded, with a graceful fallback.</li>
            <li>Respect <code className="text-teal">prefers-reduced-motion</code> and test on a real mobile viewport before calling it done.</li>
            <li>Run at least two or three critique passes before shipping — treat polish as its own phase.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
