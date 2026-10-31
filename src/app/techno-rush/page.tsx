'use client';

import Navbar from '@/components/ui/Navbar';
import React, { useState } from 'react';
import { Press_Start_2P, VT323 } from 'next/font/google';

// Arcade fonts: Press Start 2P for headings, VT323 for readable body text
const arcade = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const terminal = VT323({ weight: '400', subsets: ['latin'], display: 'swap' });

// Pac-Man palette
const YELLOW = '#FFE000';
const WALL = '#2121FF';
const DOT = '#FFB8AE';
const RED = '#FF2A2A';
const PINK = '#FFB8FF';
const CYAN = '#00FFFF';
const ORANGE = '#FFB852';

// TODO: put the real registration link here
const REGISTER_URL = '#register';

const concepts = [
  { name: 'HTTP / HTTPS', desc: 'The web foundation', color: RED },
  { name: 'REST APIs', desc: 'Build & consume', color: CYAN },
  { name: 'Auth', desc: 'Authentication & authorization. Secure your app', color: PINK },
  { name: 'Databases', desc: 'Store your data', color: ORANGE },
  { name: 'Redis Caching', desc: 'Faster responses', color: '#4D6BFF' },
  { name: 'Rate Limiting', desc: 'Prevent abuse', color: '#DEDEFF' },
];

const days = [
  { label: 'DAY 1', date: '03 NOV 2026' },
  { label: 'DAY 2', date: '04 NOV 2026' },
];

const todo = [
  'Work with real tools',
  'Debug & solve problems',
];

const responses = [
  {
    status: '200 OK',
    color: CYAN,
    body: '{\n  "clue": "Look in the headers, hunter",\n  "next": "/api/level/2"\n}',
  },
  {
    status: '401 UNAUTHORIZED',
    color: ORANGE,
    body: '{\n  "error": "Token missing. Log in first."\n}',
  },
  {
    status: '429 TOO MANY REQUESTS',
    color: RED,
    body: '{\n  "error": "Slow down, hunter."\n}',
  },
];

/* ---------- small pixel pieces ---------- */

const Pac = ({ size = 40 }: { size?: number }) => (
  <div className="pac" style={{ width: size, height: size }} aria-hidden="true">
    <div className="pac-top" />
    <div className="pac-bottom" />
  </div>
);

const Ghost = ({ color, size = 36 }: { color: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" shapeRendering="crispEdges">
    <path d="M0 14V7a7 7 0 0 1 14 0v7l-2.33-2.33L9.33 14 7 11.67 4.67 14 2.33 11.67z" fill={color} />
    <circle cx="4.8" cy="6" r="2" fill="#fff" />
    <circle cx="9.6" cy="6" r="2" fill="#fff" />
    <circle cx="5.4" cy="6.2" r="1" fill={WALL} />
    <circle cx="10.2" cy="6.2" r="1" fill={WALL} />
  </svg>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className={`${arcade.className} mb-8 text-center text-lg leading-relaxed sm:text-2xl md:text-3xl`}
    style={{ color: YELLOW }}
  >
    {children}
  </h2>
);

/* ---------- page ---------- */

const Page = () => {
  const [hits, setHits] = useState(0);
  const res = hits > 0 ? responses[(hits - 1) % responses.length] : null;

  return (
    <div
      className={`${terminal.className} relative min-h-screen overflow-x-hidden bg-black text-white`}
      style={{ fontSize: '1.35rem' }}
    >
      <style>{`
        .wall {
          border: 4px solid ${WALL};
          border-radius: 18px;
          box-shadow: inset 0 0 0 4px #000, inset 0 0 0 6px ${WALL};
        }
        .pac { position: relative; }
        .pac-top, .pac-bottom { position: absolute; left: 0; width: 100%; height: 50%; background: ${YELLOW}; }
        .pac-top { top: 0; border-radius: 999px 999px 0 0; transform-origin: 50% 100%; animation: chomp-top .28s ease-in-out infinite alternate; }
        .pac-bottom { bottom: 0; border-radius: 0 0 999px 999px; transform-origin: 50% 0; animation: chomp-bottom .28s ease-in-out infinite alternate; }
        @keyframes chomp-top { from { transform: rotate(0deg); } to { transform: rotate(-38deg); } }
        @keyframes chomp-bottom { from { transform: rotate(0deg); } to { transform: rotate(38deg); } }

        .track {
          position: relative; height: 48px; overflow: hidden;
          background: radial-gradient(circle at center, ${DOT} 3.5px, transparent 4px) 0 50% / 28px 100% repeat-x;
        }
        .runner { position: absolute; top: 4px; left: -50px; animation: run 9s linear infinite backwards; }
        @keyframes run { from { left: -50px; } to { left: 100%; } }
        .eaten { position: absolute; right: 50%; top: -8px; bottom: -8px; width: 3000px; background: #000; }

        .blink { animation: blink 1s steps(2, start) infinite; }
        @keyframes blink { to { visibility: hidden; } }

        .btn-arcade { transition: transform .08s; box-shadow: 0 6px 0 #b39b00; }
        .btn-arcade:hover { transform: translateY(2px); box-shadow: 0 4px 0 #b39b00; }
        .btn-arcade:active { transform: translateY(6px); box-shadow: 0 0 0 #b39b00; }
        .btn-arcade:focus-visible, .btn-send:focus-visible { outline: 3px solid ${CYAN}; outline-offset: 4px; }

        @media (prefers-reduced-motion: reduce) {
          .pac-top, .pac-bottom, .runner, .blink { animation: none !important; }
          .runner { left: 40%; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <header className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center sm:pt-32">
        <p className={`${arcade.className} text-[10px] leading-relaxed sm:text-xs`} style={{ color: PINK }}>
          TECHNORUSH 4.0 &middot; TECHNIOSYS
        </p>

        <h1
          className={`${arcade.className} mt-6 leading-[1.35]`}
          style={{
            color: YELLOW,
            fontSize: 'clamp(1.7rem, 7.5vw, 4.5rem)',
            textShadow: `4px 4px 0 ${WALL}`,
          }}
        >
          BEHIND THE
          <br />
          REQUEST
        </h1>

        <p className="mt-6 max-w-xl text-2xl leading-snug sm:text-3xl" style={{ color: CYAN }}>
          A backend development workshop where the whole game is a REST API treasure hunt.
        </p>

        {/* Pac-Man chomping through dots, ghosts on its tail */}
        <div className="track mt-10 w-full" aria-hidden="true">
          <div className="runner" style={{ animationDelay: '0s' }}>
            <div className="eaten" />
            <Pac />
          </div>
          {[
            { c: RED, d: '1.2s', hide: '' },
            { c: PINK, d: '2s', hide: '' },
            { c: CYAN, d: '2.8s', hide: 'hidden sm:block' },
            { c: ORANGE, d: '3.6s', hide: 'hidden sm:block' },
          ].map((g) => (
            <div key={g.c} className={`runner ${g.hide}`} style={{ animationDelay: g.d, top: 6 }}>
              <Ghost color={g.c} />
            </div>
          ))}
        </div>

        <a
          target='_blank'
          href="https://forms.gle/GsgmGVrhBS4ztTW96"
          className={`${arcade.className} btn-arcade mt-12 inline-block rounded-lg px-6 py-4 text-sm text-black sm:text-base mb-20`}
          style={{ background: YELLOW }}
        >
          REGISTER NOW
        </a>
        {/* <p className={`${arcade.className} blink mt-6 text-[10px]`} style={{ color: RED }}>
          INSERT COIN
        </p> */}
      </header>

      {/* THE HUNT */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <SectionTitle>THE HUNT</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="wall p-6 sm:p-8">
            <p className="text-2xl leading-snug sm:text-3xl">
              The treasure is hidden behind a chain of API endpoints. Send the right request, read the
              response, pick up the clue and move to the next level.
            </p>
            <ul className="mt-6 space-y-3">
              {todo.map((t) => (
                <li key={t} className="flex items-start gap-3 text-2xl">
                  <span
                    className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: DOT }}
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* tiny live request console */}
          <div className="wall flex flex-col p-6 sm:p-8">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full" style={{ background: YELLOW }} />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <pre className="mt-4 whitespace-pre-wrap text-2xl" style={{ color: YELLOW }}>
              GET /api/treasure
            </pre>
            <div className="mt-2 min-h-[8.5rem] text-2xl" aria-live="polite">
              {res ? (
                <>
                  <p style={{ color: res.color }}>&rarr; {res.status}</p>
                  <pre className="whitespace-pre-wrap text-white">{res.body}</pre>
                </>
              ) : (
                <p className="text-gray-400">Waiting for a request...</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setHits((h) => h + 1)}
              className={`${arcade.className} btn-send mt-4 self-start rounded-md border-4 px-4 py-3 text-xs transition-colors hover:bg-[#2121FF]`}
              style={{ borderColor: WALL, color: CYAN }}
            >
              {hits === 0 ? 'SEND REQUEST' : 'SEND AGAIN'}
            </button>
          </div>
        </div>
      </section>

      {/* WHEN & WHERE */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <SectionTitle>WHEN &amp; WHERE</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {days.map((d) => (
            <div key={d.label} className="wall p-6 text-center">
              <p className={`${arcade.className} text-xs`} style={{ color: PINK }}>
                {d.label}
              </p>
              <p className={`${arcade.className} mt-4 text-base sm:text-lg`} style={{ color: YELLOW }}>
                {d.date}
              </p>
              <p className="mt-3 text-2xl text-gray-300">3 hours</p>
            </div>
          ))}
          <div className="wall p-6 text-center">
            <p className={`${arcade.className} text-xs`} style={{ color: PINK }}>
              VENUE
            </p>
            <p className={`${arcade.className} mt-4 text-base sm:text-lg`} style={{ color: YELLOW }}>
              C003
            </p>
            <p className="mt-3 text-2xl text-gray-300">120 seater, E-Block</p>
          </div>
        </div>
      </section>

      {/* PRIZES: high score table */}
      <section className="mx-auto max-w-3xl px-4 pb-20">
        <SectionTitle>HIGH SCORES</SectionTitle>
        <div className="wall p-6 sm:p-8">
          <ul className="space-y-6">
            <li className="flex items-center justify-between gap-4">
              <span className={`${arcade.className} text-sm sm:text-base`} style={{ color: YELLOW }}>
                1ST
              </span>
              <span className="flex-1 border-b-4 border-dotted" style={{ borderColor: DOT }} aria-hidden="true" />
              <span className={`${arcade.className} text-sm sm:text-base`} style={{ color: CYAN }}>
                CLAUDE PRO
              </span>
            </li>
            <li className="flex items-center justify-between gap-4">
              <span className={`${arcade.className} text-sm sm:text-base`} style={{ color: '#DEDEFF' }}>
                2ND
              </span>
              <span className="flex-1 border-b-4 border-dotted" style={{ borderColor: DOT }} aria-hidden="true" />
              <span className={`${arcade.className} text-sm sm:text-base`} style={{ color: ORANGE }}>
                EARBUDS
              </span>
            </li>
          </ul>
        </div>
      </section>


      <footer className="border-t-4 px-4 py-6 text-center" style={{ borderColor: WALL }}>
        <p className={`${arcade.className} text-[10px] leading-relaxed text-gray-400`}>
          TECHNORUSH 4.0 &middot; TECHNIOSYS &middot; BUILD. LEARN. GROW.
        </p>
      </footer>
    </div>
  );
};

export default Page;