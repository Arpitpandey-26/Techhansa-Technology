import React, { useEffect, useRef } from "react";
import {
  ExternalLink, Globe, Landmark, Shirt,
  Handshake, Users, TrendingUp, Award, Building2,
  CheckCircle2, Star, Network, ChevronDown,
} from "lucide-react";

// Import logos
import techhansaLogo from "../assets/logo.png";
import shaatikaLogo from "../assets/Shaatika-vastram.png";

/* ==================================================================
   Investors & Strategic Partners page
   ------------------------------------------------------------------
   - No header / footer / scroll-progress rail
   - Gray-700 (#374151) for all headings
   - White background, gold + blue accents only
   - Three premium 3D investor cards as the centrepiece
   ================================================================== */

/* ── 1. CONTENT DATA ──────────────────────────────────────────── */

const investors = [
  {
    id:          "techhansa-solutions",
    initials:    "TS",
    abbrev:      "TECHHANSA SOLUTIONS",
    accentFrom:  "#1e3a8a",    /* brand blue */
    accentTo:    "#2563eb",
    name:        "Techhansa Solutions Pvt. Ltd.",
    industry:    "Digital Transformation & IT Services",
    IndustryIcon: Globe,
    logo:        techhansaLogo,
    tags:        ["Cloud", "Automation", "Managed Services", "Enterprise IT"],
    description: "A global technology company specialising in cloud services, automation, managed services, digital workplace solutions, and enterprise IT transformation.",
    website:     "https://techhansa.com",
  },
  {
    id:          "techhansa-finance",
    initials:    "TF",
    abbrev:      "TECHHANSA FINANCE",
    accentFrom:  "#92400e",
    accentTo:    "#d4a22e",    /* brand gold */
    name:        "Techhansa Finance",
    industry:    "Financial Services",
    IndustryIcon: Landmark,
    logo:        techhansaLogo,
    tags:        ["Investments", "Financial Planning", "Sustainable Growth"],
    description: "Providing innovative financial solutions that empower businesses and individuals through strategic investments, financial planning, and sustainable growth initiatives.",
    website:     "#",
  },
  {
    id:          "shaatika-vastram",
    initials:    "SV",
    abbrev:      "SHAATIKA VASTRAM",
    accentFrom:  "#065f46",
    accentTo:    "#10b981",
    name:        "Shaatika Vastram Enterprises",
    industry:    "Textile & Apparel",
    IndustryIcon: Shirt,
    logo:        shaatikaLogo,
    tags:        ["Textile", "Apparel", "Craftsmanship", "Innovation"],
    description: "A business focused on quality textile and apparel solutions, contributing to innovation, craftsmanship, and customer excellence across the fashion and textile industry.",
    website:     "#",
  },
];

const heroStats = [
  { value: "3",       label: "Strategic Investors",   icon: Building2 },
  { value: "Global",  label: "Combined Reach",         icon: Globe },
  { value: "Multi",   label: "Industry Presence",      icon: Network },
  { value: "Long-Term", label: "Partnership Vision",   icon: Handshake },
];

/* ── 2. INVESTOR CARD ─────────────────────────────────────────── */

function InvestorCard({ investor, onTilt, onReset }) {
  const {
    initials, abbrev, accentFrom, accentTo, logo,
    name, industry, IndustryIcon, tags, description, website,
  } = investor;

  return (
    <div
      onMouseMove={onTilt}
      onMouseLeave={onReset}
      style={{ transformStyle: "preserve-3d", perspective: 1000, borderColor: "var(--line)" }}
      className="group h-full flex flex-col rounded-3xl border bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* ── Logo Header Area ── */}
      <div
        className="relative h-48 flex flex-col items-center justify-center overflow-hidden bg-white"
        style={{ borderBottom: "1px solid var(--line)" }}
      >
        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        ></div>

        {/* Logo Placeholder / Actual Logo */}
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="relative z-10 h-32 w-auto max-w-[90%] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            style={{ transformOrigin: "center" }}
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center gap-2">
            {/* Placeholder logo area with icon */}
            <div
              className="w-32 h-32 rounded-2xl flex items-center justify-center border-2 border-dashed"
              style={{ borderColor: "var(--line)", background: "var(--paper-dim)" }}
            >
              <svg className="w-16 h-16 text-gray-300 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Logo Placeholder</span>
          </div>
        )}

        {/* Show initials/abbrev as fallback below logo */}
        {!logo && (
          <>
            <span className="relative z-10 text-4xl font-extrabold text-gray-400 tracking-tight mt-2">
              {initials}
            </span>
            <span className="relative z-10 text-[8px] font-semibold tracking-[0.22em] uppercase text-gray-300">
              {abbrev}
            </span>
          </>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="flex-1 flex flex-col p-6">
        {/* Industry badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-none"
            style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
            <IndustryIcon size={12} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blue)" }}>
            {industry}
          </span>
        </div>

        {/* Company name */}
        <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#D4A22E" }}>{name}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--ink-soft)" }}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border font-medium"
              style={{ background: "var(--paper)", borderColor: "var(--line)", color: "var(--ink-soft)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          style={{
            background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)",
            color: "var(--ink)",
            boxShadow: "0 8px 20px rgba(212,162,46,.25)",
          }}
        >
          ➡ Visit Website
          <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

/* ── 3. HERO PARTNERSHIP NETWORK (decorative SVG panel) ───────── */

function PartnershipPanel({ tiltRef }) {
  return (
    <div
      ref={tiltRef}
      className="relative mx-auto max-w-sm rounded-3xl border backdrop-blur-xl shadow-2xl p-6 transition-transform duration-300 ease-out"
      style={{
        background: "rgba(255,255,255,.90)",
        borderColor: "var(--line)",
        boxShadow: "0 30px 60px rgba(15,23,42,.12)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>
          Partnership Overview
        </span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Active
        </span>
      </div>

      {/* Central "TH" hub */}
      <div className="flex flex-col items-center mb-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-lg"
          style={{ background: "linear-gradient(155deg,var(--blue),#2563eb)" }}
        >
          <span className="text-xl font-extrabold text-white">TH</span>
        </div>
        <span className="text-xs font-semibold text-gray-500">Techhansa Technology</span>
      </div>

      {/* Three investor rows */}
      {[
        { color: "#1e3a8a", bg: "rgba(30,58,138,.10)", initials: "TS", label: "Techhansa Solutions", role: "IT Services" },
        { color: "#d4a22e", bg: "rgba(212,162,46,.14)", initials: "TF", label: "Techhansa Finance",   role: "Financial Services" },
        { color: "#10b981", bg: "rgba(16,185,129,.12)", initials: "SV", label: "Shaatika Vastram",    role: "Textile & Apparel" },
      ].map((row) => (
        <div
          key={row.initials}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 border mb-2 last:mb-0"
          style={{ background: "var(--paper)", borderColor: "var(--line)" }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-none text-white text-xs font-bold"
            style={{ background: `linear-gradient(155deg, ${row.color}cc, ${row.color})` }}
          >
            {row.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-700 truncate">{row.label}</div>
            <div className="text-[11px]" style={{ color: "var(--ink-faint)" }}>{row.role}</div>
          </div>
          <CheckCircle2 size={14} className="flex-none" style={{ color: row.color }} />
        </div>
      ))}
    </div>
  );
}

/* ── 4. MAIN PAGE COMPONENT ───────────────────────────────────── */

export default function InvestorsPartners() {
  const rootRef      = useRef(null);
  const heroRef      = useRef(null);
  const panelRef     = useRef(null);
  const allowTiltRef = useRef(false);

  /* Fade-up on scroll for [data-reveal] elements */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.remove("opacity-0", "translate-y-8"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Hero panel 3D mouse-tilt */
  useEffect(() => {
    allowTiltRef.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero  = heroRef.current;
    const panel = panelRef.current;
    if (!allowTiltRef.current || !hero || !panel) return;
    function move(e) {
      const r  = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;
      const py = (e.clientY - r.top)  / r.height - 0.5;
      panel.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 12}deg)`;
    }
    function leave() { panel.style.transform = "rotateY(0deg) rotateX(0deg)"; }
    hero.addEventListener("mousemove", move);
    hero.addEventListener("mouseleave", leave);
    return () => {
      hero.removeEventListener("mousemove", move);
      hero.removeEventListener("mouseleave", leave);
    };
  }, []);

  /* Shared card-tilt handler */
  function handleTilt(e) {
    if (!allowTiltRef.current) return;
    const card = e.currentTarget;
    const r    = card.getBoundingClientRect();
    const px   = (e.clientX - r.left) / r.width;
    const py   = (e.clientY - r.top)  / r.height;
    card.style.transform =
      `translateZ(10px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 10}deg)`;
  }
  function resetTilt(e) { e.currentTarget.style.transform = ""; }

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink-soft)" }}>
      <style>{`
       
        :root, .ip-page {
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
        }
        @keyframes floatSlow { 0%,100%{ transform:translateY(0);    } 50%{ transform:translateY(-16px); } }
        @keyframes cubeSpin  { from{ transform:rotateX(0) rotateY(0); } to{ transform:rotateX(360deg) rotateY(360deg); } }
        @keyframes ringSpin  { to{ transform:rotate(360deg); } }
        @keyframes pulseSoft { 0%,100%{ opacity:.55; } 50%{ opacity:1; } }
        .animate-float-slow  { animation: floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin   { animation: cubeSpin  18s linear infinite; }
        .animate-ring-spin   { animation: ringSpin  50s linear infinite; }
        .animate-pulse-soft  { animation: pulseSoft 2.4s ease-in-out infinite; }
      `}</style>

      <div className="ip-page">

        {/* ──────────────────── HERO ──────────────────── */}
        <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">

          {/* Ambient glows */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }}></div>
            <div className="absolute top-10 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}></div>
          </div>

          {/* Floating 3D cube */}
          <div className="hidden md:block absolute top-14 right-[8%] w-20 h-20"
            style={{ perspective: 800 }} aria-hidden="true">
            <div className="relative w-full h-full animate-cube-spin"
              style={{ transformStyle: "preserve-3d" }}>
              {[
                { t: "translateZ(40px)",               bg: "rgba(212,162,46,.30)", bc: "rgba(212,162,46,.45)" },
                { t: "rotateY(180deg) translateZ(40px)",bg: "rgba(30,58,138,.28)", bc: "rgba(30,58,138,.4)"   },
                { t: "rotateY(90deg) translateZ(40px)", bg: "rgba(212,162,46,.2)", bc: "rgba(212,162,46,.35)" },
                { t: "rotateY(-90deg) translateZ(40px)",bg: "rgba(30,58,138,.2)",  bc: "rgba(30,58,138,.3)"   },
                { t: "rotateX(90deg) translateZ(40px)", bg: "rgba(255,255,255,.7)", bc: "rgba(255,255,255,.7)" },
                { t: "rotateX(-90deg) translateZ(40px)",bg: "rgba(148,163,184,.3)", bc: "rgba(148,163,184,.3)" },
              ].map((f, i) => (
                <div key={i} className="absolute inset-0 rounded-md border backdrop-blur-sm"
                  style={{ transform: f.t, background: f.bg, borderColor: f.bc }}></div>
              ))}
            </div>
          </div>

          {/* Floating glass sphere */}
          <div className="hidden md:block absolute bottom-8 left-[5%] w-24 h-24 rounded-full backdrop-blur-md border shadow-xl animate-float-slow"
            style={{ background: "linear-gradient(155deg,rgba(30,58,138,.18),rgba(255,255,255,.5),rgba(212,162,46,.18))", borderColor: "rgba(255,255,255,.7)" }}
            aria-hidden="true"></div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--blue)" }}>
                 Company · Investors
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-700">
                Our Investors &amp;{" "}
                <span style={{ background: "linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Strategic Partners
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[50ch] mb-8" style={{ color: "var(--ink-soft)" }}>
                We are backed by trusted organisations that share our vision of innovation, sustainable growth, and digital transformation. Together, we build stronger businesses and create long-term value for our clients and stakeholders.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById("investors")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow: "0 14px 30px rgba(212,162,46,.32)" }}>
                  Meet Our Partners ↓
                </button>
                <button
                  onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor: "var(--line)", color: "#374151" }}>
                  Contact Us
                </button>
              </div>
            </div>

            {/* Partnership panel */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative"
              style={{ perspective: 1200 }}>
              {/* Floating corner badges */}
              {[
                { icon: Award,     pos: "-top-6 left-6",     delay: "0s",   col: "var(--blue)" },
                { icon: Handshake, pos: "top-10 -right-6",   delay: "1s",   col: "var(--gold)" },
                { icon: TrendingUp,pos: "bottom-10 -left-6", delay: "1.6s", col: "var(--blue)" },
                { icon: Users,     pos: "-bottom-6 right-8", delay: "2.2s", col: "var(--gold)" },
              ].map(({ icon: Icon, pos, delay, col }) => (
                <div key={pos}
                  className={`hidden md:flex absolute ${pos} w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20`}
                  style={{ background: "#fff", borderColor: "var(--line)", color: col, animationDelay: delay }}>
                  <Icon size={20} />
                </div>
              ))}
              <PartnershipPanel tiltRef={panelRef} />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 mt-14 text-xs uppercase tracking-widest"
            style={{ color: "var(--ink-faint)" }}>
            <span>Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* ── HERO STATS STRIP ── */}
        <section className="px-6 md:px-10 py-10" style={{ background: "var(--paper-dim)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroStats.map((s, i) => (
              <div key={s.label} data-reveal
                style={{ transitionDelay: `${i * 70}ms`, borderColor: "var(--line)" }}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out rounded-2xl border bg-white shadow-sm p-5 flex flex-col items-center text-center gap-2 hover:shadow-xl hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
                  <s.icon size={18} />
                </div>
                <div className="text-lg font-extrabold" style={{ color: "var(--gold)" }}>{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MEET OUR INVESTORS ── */}
        <section id="investors" className="px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">

            {/* Section intro */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-2xl mx-auto text-center mb-14">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--blue)" }}>
                Strategic Investment
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700"><span className="text-techGolden">M</span>eet Our Investors</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Our strategic investors bring industry expertise, financial strength, and business excellence that enable Techhansa Technology to innovate, expand, and deliver world-class technology solutions. Click on any organisation below to learn more.
              </p>
            </div>

            {/* Three investor cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {investors.map((inv, i) => (
                <div key={inv.id} data-reveal
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out h-full">
                  <InvestorCard investor={inv} onTilt={handleTilt} onReset={resetTilt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES ROW ── */}
        <section className="px-6 md:px-10 py-10" style={{ background: "var(--paper-dim)" }}>
          <div className="max-w-5xl mx-auto">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6 text-gray-400">
                What our partnership stands for
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Award,      label: "Certified Excellence" },
                  { icon: Handshake,  label: "Trusted Partnership" },
                  { icon: TrendingUp, label: "Sustainable Growth" },
                  { icon: Star,       label: "Innovation-Driven" },
                  { icon: Users,      label: "Client-Centric" },
                  { icon: Building2,  label: "Multi-Industry Reach" },
                ].map((b) => (
                  <div key={b.label}
                    className="flex items-center gap-2.5 rounded-full border bg-white px-4 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ borderColor: "var(--line)" }}>
                    <b.icon size={15} style={{ color: "var(--gold)" }} />
                    <span className="text-sm font-medium text-gray-600">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

 

      </div>
    </div>
  );
}