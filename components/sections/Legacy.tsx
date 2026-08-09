import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const STATS = [
  { value: 20, suffix: "+", label: "Years in Practice" },
  { value: 450, suffix: "+", label: "Transactions Closed" },
  { value: 3, suffix: "B", label: "PKR in Portfolio Value", prefix: "" },
  { value: 100, suffix: "%", label: "Referral-Driven Clientele" },
];

export default function Legacy() {
  return (
    <section id="legacy" className="relative bg-porcelain text-ink py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-teal">The Firm</span>
              <h2 className="font-display font-light text-[10vw] lg:text-[3.6vw] leading-[1.02] mt-6 tracking-tight">
                Two decades of
                <br />
                <span className="italic text-teal">quiet authority.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-ink/80 max-w-2xl">
                AB Associates was founded on one belief: that Karachi&rsquo;s
                finest addresses deserve advisors who treat every acquisition
                as a legacy, not a transaction. For over twenty years,
                we&rsquo;ve guided discerning families, investors, and
                institutions through the city&rsquo;s most consequential real
                estate, entirely on their terms.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg font-light leading-relaxed text-ink/60 max-w-xl">
                We work in three addresses, not thirty — HMR Waterfront,
                Phase 8, and DHA City — because depth beats breadth when the
                stakes are this high.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="hairline mt-20 md:mt-28 opacity-30" />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="font-display font-light text-[2.6rem] md:text-[3.4rem] leading-none text-ink">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="eyebrow mt-3 text-ink/50 text-[0.65rem]!">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
