const ITEMS = ["Phase 8", "HMR Waterfront", "Emaar Karachi", "DHA City"];

export default function Marquee() {
  const repeats = 8;
  const track = Array.from({ length: repeats }).flatMap(() => ITEMS);

  return (
    <div className="relative bg-ink-2 border-y border-line py-5 overflow-hidden">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ ["--marquee-distance" as string]: `${100 / repeats}%` }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-display italic text-xl md:text-2xl text-porcelain-dim/50"
          >
            {item}
            <span className="text-brass/40 not-italic text-sm">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
