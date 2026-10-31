"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="
        absolute top-5 left-0 z-50
        w-full
        px-[5vw] md:px-[8.5vw]
        font-sans
      "
    >
      {/* NAVBAR */}
      <div className="flex items-center justify-between h-18">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Techniyosis-Logo.png"
            alt="Techniosys"
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />

          <div className="flex flex-col leading-none">
            <Link href="/" className="text-white text-[18px] md:text-[21px] font-bold tracking-[0.08em]">
              TECHNIOSYS
            </Link>

            <Link href="/" className="text-[9px] md:text-[11px] text-white/40 tracking-[0.18em] mt-1">
              TECH & ESPORTS CLUB
            </Link>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden md:flex items-center gap-5">
          
          <Link
            href="/leaderboard"
            className="
              rounded-lg px-4 py-2.5
              text-sm font-medium text-white/75
              transition-all duration-200
              hover:bg-white/5 hover:text-white
            "
          >
            MEGA RUSH
          </Link>

          <Link
            href="/techno-rush"
            className="
              rounded-lg px-4 py-2.5
              text-sm font-medium text-white/75
              transition-all duration-200
              hover:bg-white/5 hover:text-white
            "
          >
            TECHNO RUSH
          </Link>

          {/* TEAM */}
          <Link
            href="/team"
            className="
              px-4 py-2.5
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            TEAM
          </Link>
          {/* Past Events */}
          <Link
            href="/#past-events"
            className="
              px-4 py-2.5
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            PAST EVENTS
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="
            md:hidden
            flex flex-col justify-center items-center
            gap-1.5
            w-10 h-10
            rounded-lg
            text-white
            hover:bg-white/5
            transition-all duration-200
          "
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden
            mt-3
            w-full
            p-3
            rounded-2xl
            bg-[#0d1117]/95
            backdrop-blur-xl
            border border-white/10
            shadow-[0_15px_35px_rgba(0,0,0,0.5)]
          "
        >
          <Link
            href="/leaderboard"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block rounded-lg px-4 py-3
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            MEGA RUSH
          </Link>

          <Link
            href="/techno-rush"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block rounded-lg px-4 py-3
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            TECHNO RUSH
          </Link>

          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block
              px-4 py-3
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            TEAM
          </Link>

          <Link
            href="/#past-events"
            onClick={() => setMobileMenuOpen(false)}
            className="
              block
              px-4 py-3
              rounded-lg
              text-sm font-medium
              text-white/75
              hover:text-white
              hover:bg-white/5
              transition-all duration-200
            "
          >
            PAST EVENTS
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;