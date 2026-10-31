'use client';

import { Users, Gamepad2, Trophy, Code2 } from 'lucide-react';
import { CLUB_STATS } from '../utils/constants';


interface PhaseHeroProps {
  onExplore: () => void;
}

export function PhaseHero(_props: PhaseHeroProps) {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-24 pb-12 relative select-none">
      {/* Main Hero Centerpiece */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto py-6 relative z-10">
        {/* Soft Radial Dark Backdrop to ensure text legibility over the 3D background */}
        <div className="absolute -inset-10 -z-10 bg-radial from-[#07090e]/80 via-[#07090e]/50 to-transparent blur-2xl pointer-events-none rounded-3xl" />

        {/* Title: TECHNIOSYS */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading tracking-wider uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          TECHNIO<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#ff0055]">SYS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-mono font-medium tracking-wide text-slate-100 max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Feel The Rush <span className="text-[#00f0ff]">|</span> The Tech &amp; Esports Club
        </p>

        {/* Social links */}
        <div className="mt-9 flex items-center justify-center gap-5 pointer-events-auto">
          <a
            href="https://discord.gg/X2Hj3MDeqV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            title="Discord"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-[#5865F2]/35 bg-[#0b1020]/65 text-[#8ea1ff] shadow-[0_0_18px_rgba(88,101,242,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5865F2]/80 hover:bg-[#5865F2]/15 hover:shadow-[0_0_22px_rgba(88,101,242,0.22)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
              <path d="M19.73 5.2a18.2 18.2 0 0 0-4.48-1.4.07.07 0 0 0-.08.04c-.2.36-.42.83-.58 1.2a16.8 16.8 0 0 0-5.18 0c-.16-.38-.39-.84-.59-1.2a.08.08 0 0 0-.08-.04A18.1 18.1 0 0 0 4.26 5.2a.07.07 0 0 0-.03.03C1.38 9.43.6 13.53.99 17.58c0 .02.01.04.03.05a18.3 18.3 0 0 0 5.49 2.78.08.08 0 0 0 .09-.03c.42-.58.8-1.2 1.12-1.85a.08.08 0 0 0-.04-.11 12 12 0 0 1-1.72-.82.08.08 0 0 1-.01-.13l.35-.27a.08.08 0 0 1 .08-.01c3.61 1.65 7.52 1.65 11.09 0a.08.08 0 0 1 .08.01l.35.27a.08.08 0 0 1-.01.13c-.55.32-1.13.59-1.72.82a.08.08 0 0 0-.04.11c.33.65.7 1.27 1.12 1.85a.08.08 0 0 0 .09.03 18.2 18.2 0 0 0 5.5-2.78.08.08 0 0 0 .03-.05c.46-4.68-.78-8.74-3.25-12.35a.06.06 0 0 0-.03-.03ZM8.2 14.7c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2c1.1 0 1.99 1 1.97 2.2 0 1.21-.87 2.2-1.97 2.2Zm7.6 0c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2c1.1 0 1.99 1 1.97 2.2 0 1.21-.87 2.2-1.97 2.2Z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/techniosys.iiitdwd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e1306c]/35 bg-[#0b1020]/65 text-[#f472b6] shadow-[0_0_18px_rgba(225,48,108,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e1306c]/80 hover:bg-[#e1306c]/10 hover:shadow-[0_0_22px_rgba(225,48,108,0.2)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/techniosys/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0a66c2]/35 bg-[#0b1020]/65 text-[#38bdf8] shadow-[0_0_18px_rgba(10,102,194,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0a66c2]/80 hover:bg-[#0a66c2]/15 hover:shadow-[0_0_22px_rgba(10,102,194,0.2)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
              <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8v11H3.3v-11Zm6.2 0h3.6V11h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v5.7h-3.8v-5.1c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.2H9.5v-11Z" />
            </svg>
          </a>
        </div>

        {/* Register for the upcoming mega rush event */}
        <div className="flex items-center justify-center gap-5 pointer-events-auto">
        <a
          href="/techno-rush"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-5 py-3 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#ff0055] text-white font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_18px_rgba(0,240,255,0.2)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_22px_rgba(0,240,255,0.3)]"
        >
          Register for TechnoRush4.0!
        </a>
        </div>
        

{/* Key Club Stats Bar */}
<div className="mt-12 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 pointer-events-auto">
  {CLUB_STATS.map((stat, idx) => (
    <div
      key={stat.label}
      className={`group flex flex-col items-center justify-center py-4 px-2 sm:px-4 transition-all duration-300 ${
        idx % 2 === 0 ? 'border-r-2 border-white/30 md:border-r' : ''
      } ${
        idx < 2 ? 'border-b-2 border-white/30 md:border-b-0' : ''
      } ${
        idx !== CLUB_STATS.length - 1 ? 'md:border-r-2 md:border-white/30' : ''
      }`}
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        {idx === 0 ? (
          <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#00f0ff] shrink-0" />
        ) : idx === 1 ? (
          <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff0055] shrink-0" />
        ) : idx === 2 ? (
          <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-[#00f0ff] shrink-0" />
        ) : (
          <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff0055] shrink-0" />
        )}

        <span className="font-heading text-xl sm:text-2xl font-black text-white whitespace-nowrap group-hover:text-glow-cyan transition-all">
          {stat.value}
        </span>
      </div>

      <p className="text-[9px] sm:text-[13px] font-mono text-white tracking-widest  uppercase text-center">
        {stat.label}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
