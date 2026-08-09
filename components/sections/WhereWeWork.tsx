import Reveal from "@/components/Reveal";

const AREAS = [
  {
    n: "01",
    title: "HMR Waterfront",
    body: "Emaar's master-planned waterfront district. We hold direct developer relationships for priority floors, branded residences, and pre-launch inventory.",
  },
  {
    n: "02",
    title: "Phase 8, DHA",
    body: "Twenty years of landholding knowledge across Phase 8's most sought-after blocks — Zulfiqar, Talwar, and the Golf & Country Club corridor.",
  },
  {
    n: "03",
    title: "DHA City",
    body: "Early-phase plots for investors looking to position themselves ahead of Karachi's next wave of development.",
  },
];

export default function WhereWeWork() {
  return (
    <section
      id="where-we-work"
      className="relative bg-ink py-28 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[50vw] w-[50vw] rounded-full bg-teal/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-28">
          <Reveal>
            <span className="eyebrow text-brass">Where We Work</span>
            <h2 className="font-display font-light text-[10vw] md:text-[4.4vw] leading-[1.02] mt-6 tracking-tight text-porcelain">
              Karachi is not
              <br />
              our market.
              <br />
              <span className="italic text-gradient-brand">
                Three addresses are.
              </span>
            </h2>
          </Reveal>
          <p className="max-w-sm text-porcelain-dim font-light leading-relaxed text-base md:text-lg pb-2">
            HMR Waterfront, Phase 8, and DHA City. A deliberately narrow
            focus, so our read on the market runs deeper than any
            generalist brokerage&rsquo;s ever could.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-line pt-10">
          {AREAS.map((a, i) => (
            <Reveal key={a.n} delay={i * 0.1}>
              <span className="font-display italic text-brass/70 text-2xl">
                {a.n}
              </span>
              <h3 className="text-porcelain text-2xl md:text-[1.7rem] font-display font-light tracking-tight mt-4">
                {a.title}
              </h3>
              <p className="text-porcelain-dim font-light text-sm md:text-base mt-3 leading-relaxed max-w-md">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
