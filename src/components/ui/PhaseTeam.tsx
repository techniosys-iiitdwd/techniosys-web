'use client';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


interface PhaseTeamProps {
  onRestart?: () => void;
}

function DiscordIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const CLUB_DOMAINS = [
  // {
  //   id: "app-development",
  //   eyebrow: "MOBILE & APPS",
  //   title: "App Development",
  //   description:
  //     "Building innovative mobile and cross-platform applications that solve real-world problems.",
  //   accent: "pink",
  //   icon: "▣",
  //   image:
  //     "/images/app.png",
  //   alt: "App Development",
  // },
  {
    id: "web-development",
    eyebrow: "WEB & PLATFORMS",
    title: "Web Development",
    description:
      "Creating modern, scalable web applications and immersive digital experiences for the community.",
    accent: "cyan",
    icon: "</>",
    image:
      "/images/web.png",
    alt: "Web Development",
  },
  {
    id: "deep-learning",
    eyebrow: "AI & RESEARCH",
    title: "Deep Learning",
    description:
      "Exploring the frontiers of artificial intelligence and building intelligent solutions for the future.",
    accent: "pink",
    icon: "◎",
    image:
      "/images/dl.png",
    alt: "Deep Learning Domain",
  },
  {
    id: "esports",
    eyebrow: "GAMING & EVENTS",
    title: "Esports",
    description:
      "Organizing tournaments, fostering competitive gaming, and building a vibrant esports community.",
    accent: "cyan",
    icon: "⌁",
    image:
      "/images/esports.png",
    alt: "Esports Domain",
  },
];

export function PhaseTeam({ onRestart }: PhaseTeamProps) {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pb-14 pt-24 sm:px-6 md:px-10">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-cyan-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-pink-500/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 border-l border-t border-cyan-400/20" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-44 w-44 border-b border-r border-pink-500/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <header className="text-center">
          <h2 className="font-sans text-4xl font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl">
            CLUB{" "}
            <span className="bg-gradient-to-r from-[#ff2d83] via-[#d78bd9] to-[#00e5ff] bg-clip-text text-transparent">
              DOMAINS
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white font-medium sm:text-lg">
            Explore the domains that power Techniosys.
          </p>
        </header>

        <div className="mt-9 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {CLUB_DOMAINS.map((domain) => {
            const accent =
              domain.accent === "pink"
                ? {
                    border: "border-[#ff2d83]/70",
                    text: "text-[#ff2d83]",
                    glow: "group-hover:shadow-[0_8px_30px_rgba(255,45,131,0.09)]",
                  }
                : {
                    border: "border-[#00e5ff]/70",
                    text: "text-[#00e5ff]",
                    glow: "group-hover:shadow-[0_8px_30px_rgba(0,229,255,0.09)]",
                  };

            return (
              <article
                key={domain.id}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#090e18]/90  transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_8px_30px_rgba(0,229,255,0.12)] ${accent.glow}`}
              >
                <div className="relative h-48 overflow-hidden bg-slate-950 sm:h-52">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={domain.image}
                    alt={domain.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e18] via-[#090e18]/10 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
                </div>

                <div className={`flex flex-1 flex-col p-5 ${inter.className}`}>
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-slate-950/70 font-sans text-sm ${accent.border} ${accent.text}`}
                      aria-hidden="true"
                    >
                      {domain.icon}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
                      {domain.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold font-sans tracking-wide text-white sm:text-[22px]">
                    {domain.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-[1.8] text-slate-400">
                    {domain.description}
                  </p>
                  <span className={`mt-4 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14 ${domain.accent === "pink" ? "bg-[#ff2d83]" : "bg-[#00e5ff]"}`} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
