import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-ink text-porcelain px-6 text-center">
      <Image
        src="/media/logo-mark.png"
        alt="AB Associates"
        width={48}
        height={48}
        className="rounded-sm mb-10"
      />
      <span className="eyebrow text-brass mb-6">404</span>
      <h1 className="font-display font-light text-[13vw] sm:text-6xl leading-[1.02] tracking-tight">
        This address
        <br />
        <span className="italic text-gradient-brand">isn&rsquo;t listed.</span>
      </h1>
      <p className="mt-8 text-porcelain-dim font-light leading-relaxed max-w-sm">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        Let&rsquo;s get you back on track.
      </p>
      <Link
        href="/"
        data-cursor-hover
        className="group mt-12 inline-flex items-center gap-4"
      >
        <span className="text-[0.75rem] tracking-[0.15em] uppercase border border-brass/50 text-porcelain px-8 py-4 group-hover:bg-brass group-hover:text-ink group-hover:border-brass transition-all duration-400">
          Back to Home
        </span>
      </Link>
    </main>
  );
}
