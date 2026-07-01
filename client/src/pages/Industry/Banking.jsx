import React, { useEffect, useRef } from "react";
import {
  Landmark, Shield, CreditCard, Zap, ArrowUp, ChevronDown,
  Sparkles, ShieldCheck, Smartphone, Users, Settings2, Globe,
  CheckCircle2, TrendingUp, Lock, Cloud, Wifi, BarChart3,
  Activity, Layers, Brain, Wallet, Bitcoin, LineChart,
  Gauge, FileText, RefreshCcw, Target,
} from "lucide-react";

/* ==================================================================
   Banking & Finance — Industry Solutions page
   ------------------------------------------------------------------
   File map:
   1) Content data (stats, sectors array)
   2) Four sector visual panels (BankingVisual, InsuranceVisual,
      PaymentVisual, FintechVisual) — purely presentational, props-only
   3) Small shared helpers (SectionIntro, SectionBlock)
   4) Main page component — owns scroll/tilt behaviour, maps data
   ================================================================== */

/* ── 1. CONTENT DATA ──────────────────────────────────────────── */

const stats = [
  { value: "25+", label: "Years in Insurance", icon: Shield },
  { value: "4",   label: "Core Financial Domains", icon: Layers },
  { value: "100+", label: "Banking Clients", icon: Users },
  { value: "Digital-First", label: "Transformation Approach", icon: TrendingUp },
];

const sectors = [
  {
    id: "banking", side: "right", bg: "white",
    eyebrow: "Banking",
    title: "Reimagining Banking for the Digital Age",
    paragraphs: [
      "Heightened competition from FinTech companies and the prevalence of online mobility have compelled banking institutions to reimagine their strategies. The contemporary challenges confronting the banking sector center on proactively enhancing security measures and modernizing digital interfaces.",
      "Leveraging our strong foundation in digital innovation, TechHansa empowers banking enterprises to transition to ecosystems that prioritize customer convenience, robust security measures, and flexibility to accommodate evolving industry regulations.",
    ],
  },
  {
    id: "insurance", side: "left", bg: "tint",
    eyebrow: "Insurance",
    title: "25+ Years of Insurance Expertise",
    paragraphs: [
      "With over 25 years of experience in the insurance industry, TechHansa possesses unparalleled expertise across various domains — including Personal, Commercial, E&S, MGA, Life, Claims, and Financial Services. Our proficiency encompasses innovative underwriting practices, process optimization, automation enhancements, advanced analytics, and the eradication of manual processes and duplicate data entry.",
      "Our state-of-the-art digital solutions are meticulously crafted to eradicate manual procedures, expedite time-to-market, reduce risk exposure, and enhance overall quality. We prioritize the enhancement of \"smart risk\" selection, ensuring a comprehensive approach to insurance operations.",
    ],
  },
  {
    id: "payment", side: "right", bg: "white",
    eyebrow: "Payment Processing",
    title: "Swift, Seamless, Future-Ready Payments",
    paragraphs: [
      "Consumers now have a plethora of payment choices at their disposal, fueling an increasing desire for swift and seamless transactions.",
      "In the contemporary landscape, financial institutions face the task of swiftly integrating processing portals that align with the latest developments in cloud technology, mobile platforms, and contactless capabilities. TechHansa empowers financial organizations to not only meet but exceed customer expectations for rapid processing while staying adaptable to emerging payment technologies.",
    ],
  },
  {
    id: "fintech", side: "left", bg: "tint",
    eyebrow: "FinTech",
    title: "Embrace FinTech. Lead the Market.",
    paragraphs: [
      "Many traditional financial institutions are apprehensive about the growing influence of FinTech services. The emergence of blockchain, robo-advisors, and mobile accessibility has empowered consumers to bypass conventional banks, eroding the traditional value proposition. Instead of resisting the transformation in the financial landscape, organizations should wholeheartedly embrace FinTech innovations to deliver forward-thinking solutions and services that enhance their brand's reputation.",
      "Leveraging our extensive expertise in blockchain and mobile banking, TechHansa empowers you to embrace cutting-edge financial technology, enabling the expansion of your revenue model and the delivery of exceptional value to your customers.",
    ],
  },
];

/* ── 2. SECTOR VISUAL PANELS ──────────────────────────────────── */

/* Banking: digital-readiness gauge + 4 capability rows */
function BankingVisual({ onTilt, onReset }) {
  const rows = [
    { icon: ShieldCheck, label: "Security Enhancement",          val: "Active" },
    { icon: Smartphone,  label: "Digital Interface Modernization", val: "Deployed" },
    { icon: Users,       label: "Customer-Centric Design",        val: "Adopted" },
    { icon: Settings2,   label: "Regulatory Compliance",          val: "Aligned" },
  ];
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }} aria-hidden="true"></div>
      <div
        onMouseMove={onTilt} onMouseLeave={onReset}
        className="relative z-10 rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.90)", borderColor: "var(--line)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
              <Landmark size={18} />
            </div>
            <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Banking Transformation</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Live
          </span>
        </div>
        <div className="flex items-center gap-5 mb-5">
          <svg width="80" height="80" viewBox="0 0 100 100" className="-rotate-90 flex-none">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--blue-soft)" strokeWidth="10" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="10" strokeLinecap="round" pathLength="100" strokeDasharray="85 100" />
          </svg>
          <div>
            <div className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>85%</div>
            <div className="text-xs mt-1" style={{ color: "var(--ink-faint)" }}>Digital Readiness Score</div>
          </div>
        </div>
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.label} className="rounded-xl px-3 py-2.5 border flex items-center justify-between" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
              <div className="flex items-center gap-2">
                <r.icon size={14} style={{ color: "var(--blue)" }} />
                <span className="text-sm" style={{ color: "var(--ink)" }}>{r.label}</span>
              </div>
              <span className="text-xs font-semibold text-emerald-600">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Insurance: 25-year badge + domain chips grid + key capabilities */
function InsuranceVisual({ onTilt, onReset }) {
  const domains = ["Personal","Commercial","E&S","MGA","Life","Claims","Financial Services"];
  const caps = [
    { icon: FileText, label: "Innovative Underwriting" },
    { icon: RefreshCcw, label: "Process Optimization" },
    { icon: Zap, label: "Automation" },
    { icon: BarChart3, label: "Advanced Analytics" },
  ];
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }} aria-hidden="true"></div>
      <div
        onMouseMove={onTilt} onMouseLeave={onReset}
        className="relative z-10 rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.90)", borderColor: "var(--line)" }}
      >
        {/* 25-year badge */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: "var(--line)" }}>
          <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-none" style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
            <span className="text-2xl font-extrabold leading-none" style={{ color: "var(--ink)" }}>25+</span>
            <span className="text-[10px] font-semibold" style={{ color: "var(--ink)" }}>YEARS</span>
          </div>
          <div>
            <div className="font-bold text-sm" style={{ color: "var(--ink)" }}>Insurance Industry Expertise</div>
            <div className="text-xs mt-0.5" style={{ color: "var(--ink-faint)" }}>Across 7 specialised domains</div>
          </div>
        </div>
        {/* Domain chips */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: "var(--ink-faint)" }}>Domains</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {domains.map((d) => (
            <span key={d} className="rounded-full border px-3 py-1 text-xs font-medium" style={{ background: "var(--paper)", borderColor: "var(--line)", color: "var(--ink)" }}>{d}</span>
          ))}
        </div>
        {/* Capabilities grid */}
        <div className="grid grid-cols-2 gap-2">
          {caps.map((c) => (
            <div key={c.label} className="rounded-xl border px-3 py-2.5 flex items-center gap-2" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
              <c.icon size={13} style={{ color: "var(--gold)" }} />
              <span className="text-xs" style={{ color: "var(--ink-soft)" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Payment Processing: 3-step flow card (Cloud → Mobile → Contactless) */
function PaymentVisual({ onTilt, onReset }) {
  const steps = [
    { icon: Cloud,      label: "Cloud Portal",      sub: "Scalable processing infrastructure" },
    { icon: Smartphone, label: "Mobile Platform",   sub: "Any device, anytime" },
    { icon: Wifi,       label: "Contactless",       sub: "Tap-to-pay & beyond" },
  ];
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }} aria-hidden="true"></div>
      <div
        onMouseMove={onTilt} onMouseLeave={onReset}
        className="relative z-10 rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.90)", borderColor: "var(--line)" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
            <CreditCard size={18} />
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Payment Flow</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>End-to-end processing</div>
          </div>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Live
          </span>
        </div>

        {/* Flow steps connected by a thin line */}
        <div className="relative space-y-1">
          <div className="absolute left-[22px] top-8 bottom-8 w-0.5" style={{ background: "linear-gradient(180deg, var(--blue-soft), var(--gold-soft))" }} aria-hidden="true"></div>
          {steps.map((s, i) => (
            <div key={s.label} className="relative flex gap-4 items-start p-3 rounded-2xl border" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
              <div className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center flex-none" style={{ background: i === 1 ? "linear-gradient(160deg,var(--gold-hover),var(--gold))" : "var(--blue-soft)", color: i === 1 ? "var(--ink)" : "var(--blue)" }}>
                <s.icon size={16} />
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{s.label}</div>
                <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border px-4 py-3 flex items-center gap-3" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
          <Activity size={16} style={{ color: "var(--gold)" }} />
          <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Adapts to emerging payment technologies in real-time</span>
        </div>
      </div>
    </div>
  );
}

/* FinTech: blockchain/innovation cluster card */
function FintechVisual({ onTilt, onReset }) {
  const nodes = [
    { icon: Bitcoin,   label: "Blockchain",    sub: "Distributed ledger solutions" },
    { icon: BarChart3, label: "Robo-Advisors", sub: "Intelligent wealth management" },
    { icon: Smartphone,label: "Mobile Banking",sub: "Next-gen banking apps" },
    { icon: Brain,     label: "AI-Driven",     sub: "Smart financial services" },
  ];
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-60" style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }} aria-hidden="true"></div>
      <div
        onMouseMove={onTilt} onMouseLeave={onReset}
        className="relative z-10 rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.90)", borderColor: "var(--line)" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
            <Zap size={18} color="var(--ink)" />
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>FinTech Innovation Index</div>
            <div className="text-xs" style={{ color: "var(--ink-faint)" }}>Disruption &amp; growth drivers</div>
          </div>
        </div>

        {/* Ring gauge */}
        <div className="flex items-center gap-5 mb-5">
          <svg width="80" height="80" viewBox="0 0 100 100" className="-rotate-90 flex-none">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--blue-soft)" strokeWidth="10" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="10" strokeLinecap="round" pathLength="100" strokeDasharray="92 100" />
          </svg>
          <div>
            <div className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>92%</div>
            <div className="text-xs mt-1" style={{ color: "var(--ink-faint)" }}>FinTech Adoption Readiness</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {nodes.map((n) => (
            <div key={n.label} className="rounded-xl border px-3 py-2.5" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
              <div className="flex items-center gap-2 mb-1">
                <n.icon size={13} style={{ color: "var(--gold)" }} />
                <span className="text-xs font-semibold" style={{ color: "var(--ink)" }}>{n.label}</span>
              </div>
              <p className="text-[11px] leading-snug" style={{ color: "var(--ink-faint)" }}>{n.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 3. SHARED HELPERS ────────────────────────────────────────── */

function SectionIntro({ eyebrow, title, sub }) {
  return (
    <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-2xl mx-auto text-center mb-12">
      <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>
        <Sparkles size={14} style={{ color: "var(--gold)" }} /> {eyebrow}
      </span>
      <h2 className="text-2xl md:text-4xl font-bold mb-3" style={{ color: "var(--ink)" }}>{title}</h2>
      {sub && <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>{sub}</p>}
    </div>
  );
}

/* Alternating text + visual layout. side="right" → visual on the
   right at large breakpoints; side="left" → visual on the left. */
function SectionBlock({ id, bg, side, eyebrow, title, paragraphs, visual }) {
  return (
    <section id={id} className="px-6 md:px-10 py-16 md:py-20" style={{ background: bg === "tint" ? "var(--paper-dim)" : "#fff" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Copy — always first in DOM order; CSS order changed by class */}
        <div
          data-reveal
          className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${side === "left" ? "lg:order-2" : ""}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded flex-none" style={{ background: "linear-gradient(180deg,var(--gold),var(--gold-hover))" }}></span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blue)" }}>{eyebrow}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--ink)" }}>{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: "var(--ink-soft)" }}>{p}</p>
          ))}
        </div>

        {/* Visual */}
        <div
          data-reveal
          style={{ transitionDelay: "100ms" }}
          className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${side === "left" ? "lg:order-1" : ""}`}
        >
          {visual}
        </div>

      </div>
    </section>
  );
}

/* ── 4. MAIN PAGE COMPONENT ───────────────────────────────────── */

export default function BankingFinance() {
  const rootRef    = useRef(null);
  const heroRef    = useRef(null);
  const panelRef   = useRef(null);
  const progressRef = useRef(null);
  const allowTiltRef = useRef(false);

  /* Fade-up on scroll */
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

 

  /* Hero panel mouse-follow 3D tilt */
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
      `translateZ(8px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg)`;
  }
  function resetTilt(e) { e.currentTarget.style.transform = ""; }

  /* Map sector id → visual component */
  const visuals = {
    banking:  <BankingVisual  onTilt={handleTilt} onReset={resetTilt} />,
    insurance:<InsuranceVisual onTilt={handleTilt} onReset={resetTilt} />,
    payment:  <PaymentVisual  onTilt={handleTilt} onReset={resetTilt} />,
    fintech:  <FintechVisual  onTilt={handleTilt} onReset={resetTilt} />,
  };

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink)" }}>
      <style>{`
      
        :root, .bf-page{
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
        }
        @keyframes floatSlow { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-16px); } }
        @keyframes cubeSpin  { from{ transform:rotateX(0deg) rotateY(0deg); } to{ transform:rotateX(360deg) rotateY(360deg); } }
        @keyframes ringSpin  { to{ transform:rotate(360deg); } }
        @keyframes pulseSoft { 0%,100%{ opacity:.55; } 50%{ opacity:1; } }
        .animate-float-slow  { animation: floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin   { animation: cubeSpin 18s linear infinite; }
        .animate-ring-spin   { animation: ringSpin 50s linear infinite; }
        .animate-pulse-soft  { animation: pulseSoft 2.4s ease-in-out infinite; }
      `}</style>

      <div className="bf-page">

        {/* Scroll-progress rail */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div ref={progressRef} className="h-full" style={{ width: "0%", background: "linear-gradient(90deg,var(--blue),var(--gold))" }}></div>
        </div>

      

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">

          {/* ambient glows */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-70" style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }}></div>
            <div className="absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-70" style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}></div>
          </div>

          {/* floating 3D cube */}
          <div className="hidden md:block absolute top-16 right-[8%] w-20 h-20" style={{ perspective: 800 }} aria-hidden="true">
            <div className="relative w-full h-full animate-cube-spin" style={{ transformStyle: "preserve-3d" }}>
              {[
                { t: "translateZ(40px)",              bg: "rgba(212,162,46,.30)", bc: "rgba(212,162,46,.45)" },
                { t: "rotateY(180deg) translateZ(40px)", bg: "rgba(30,58,138,.28)", bc: "rgba(30,58,138,.4)" },
                { t: "rotateY(90deg) translateZ(40px)",  bg: "rgba(212,162,46,.2)", bc: "rgba(212,162,46,.35)" },
                { t: "rotateY(-90deg) translateZ(40px)", bg: "rgba(30,58,138,.2)",  bc: "rgba(30,58,138,.3)" },
                { t: "rotateX(90deg) translateZ(40px)",  bg: "rgba(255,255,255,.7)", bc: "rgba(255,255,255,.7)" },
                { t: "rotateX(-90deg) translateZ(40px)", bg: "rgba(148,163,184,.3)", bc: "rgba(148,163,184,.3)" },
              ].map((f, i) => (
                <div key={i} className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: f.t, background: f.bg, borderColor: f.bc }}></div>
              ))}
            </div>
          </div>

          {/* floating glass sphere */}
          <div className="hidden md:block absolute bottom-10 left-[6%] w-28 h-28 rounded-full backdrop-blur-md border shadow-xl animate-float-slow"
            style={{ background: "linear-gradient(155deg,rgba(30,58,138,.18),rgba(255,255,255,.5),rgba(212,162,46,.18))", borderColor: "rgba(255,255,255,.7)" }}
            aria-hidden="true"
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* copy */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--blue)" }}>
                <Sparkles size={14} style={{ color: "var(--gold)" }} /> Industry Solutions
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]" style={{ color: "var(--ink)" }}>
                Banking &amp;{" "}
                <span style={{ background: "linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Finance
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[50ch] mb-8" style={{ color: "var(--ink-soft)" }}>
                The Banking, Finance, and Insurance sectors are experiencing profound digital disruption across all facets. The prevalence of mobile convenience and online banking has exerted significant pressure on these institutions to shift focus towards customer-centricity. The future viability of BFI providers hinges on their ability to navigate the digital transformation journey with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow: "0 14px 30px rgba(212,162,46,.32)" }}>
                  Talk to a Specialist
                </button>
                <button onClick={() => document.getElementById("banking")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor: "var(--line)", color: "var(--ink)" }}>
                  Explore Solutions ↓
                </button>
              </div>
            </div>

            {/* hero panel */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{ perspective: 1200 }}>
              {/* floating badge icons */}
              {[
                { icon: Landmark,  pos: "-top-6 left-6",    delay: "0s",    col: "var(--blue)" },
                { icon: Shield,    pos: "top-10 -right-6",  delay: "1s",    col: "var(--gold)" },
                { icon: CreditCard,pos: "bottom-10 -left-6",delay: "1.6s",  col: "var(--blue)" },
                { icon: Zap,       pos: "-bottom-6 right-8",delay: "2.2s",  col: "var(--gold)" },
              ].map(({ icon: Icon, pos, delay, col }) => (
                <div key={pos} className={`hidden md:flex absolute ${pos} w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20`}
                  style={{ background: "#fff", borderColor: "var(--line)", color: col, animationDelay: delay }}>
                  <Icon size={20} />
                </div>
              ))}

              <div ref={panelRef}
                className="relative z-10 mx-auto max-w-sm rounded-3xl p-7 border backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out"
                style={{ background: "rgba(255,255,255,.88)", borderColor: "var(--line)", boxShadow: "0 30px 60px rgba(15,23,42,.12)", transformStyle: "preserve-3d" }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>BFI Transformation Overview</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Live
                  </span>
                </div>

                {/* 4 sector indicators */}
                {[
                  { icon: Landmark,   label: "Banking",            val: "Modernizing" },
                  { icon: Shield,     label: "Insurance",          val: "Automating" },
                  { icon: CreditCard, label: "Payment Processing", val: "Scaling" },
                  { icon: Zap,        label: "FinTech",            val: "Innovating" },
                ].map((row) => (
                  <div key={row.label} className="rounded-xl px-3 py-2.5 border flex items-center justify-between mb-2 last:mb-0"
                    style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
                    <div className="flex items-center gap-2">
                      <row.icon size={14} style={{ color: "var(--blue)" }} />
                      <span className="text-sm" style={{ color: "var(--ink)" }}>{row.label}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--gold)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 mt-16 text-xs uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>
            <span>Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* ── KEY STATS STRIP ── */}
        <section className="px-6 md:px-10 py-10" style={{ background: "var(--paper-dim)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} data-reveal style={{ transitionDelay: `${i * 70}ms` }}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out rounded-2xl border bg-white shadow-sm p-5 flex flex-col items-center text-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all"
                style={{ borderColor: "var(--line)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
                  <s.icon size={18} />
                </div>
                <div className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "var(--ink-faint)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOUR SECTOR SECTIONS ── */}
        {sectors.map((s) => (
          <SectionBlock key={s.id} {...s} visual={visuals[s.id]} />
        ))}

  


      </div>
    </div>
  );
}