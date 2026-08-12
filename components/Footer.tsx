import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-porcelain px-6 md:px-12 py-14 pr-26 md:pr-28 border-t border-line">
      <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/media/logo-mark.png"
            alt="AB Associates logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base tracking-[0.06em]">
              AB Associates
            </span>
            <span className="eyebrow text-[0.55rem] mt-1 text-brass/70">
              Real Estate Consultants
            </span>
          </div>
        </div>

        <a
          href="https://wearestudio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="text-sm text-porcelain-dim font-light hover:text-brass transition-colors"
        >
          Built by wearestudio.netlify.app
        </a>

        <div className="text-xs text-porcelain-dim/50 font-light">
          &copy; {new Date().getFullYear()} AB Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
