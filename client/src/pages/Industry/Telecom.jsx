import React, { useEffect, useRef } from "react";
import {
  Sparkles, ChevronDown, RadioTower, Signal, Smartphone, Wifi,
  Satellite, Cpu, Brain, Database, RefreshCcw, ShieldCheck, Users,
  Cloud, Tv, Film, AlertCircle, PlayCircle, TrendingUp, Timer, Zap,
} from "lucide-react";

/* ==================================================================
   Telecom — Industry Solutions page
   ------------------------------------------------------------------
   Shares the Healthcare.jsx / Retail.jsx design system so all three
   read as one consistent product, with extra 3D flourishes specific
   to this page:
   - a signature "signal orbit" hero centerpiece (tilted, counter-
     rotating rings — orbiting towers/devices around a network core)
   - scroll parallax on the hero's ambient glows + orbit
   - mouse-tilt on stat cards (not just sector panels)
   - a slow spinning accent ring behind every panel-header icon
   ------------------------------------------------------------------
   File map:
   1) Content data (stats, sectors)
   2) Four sector visual panels
   3) Shared helpers (GlassCard, PanelHeader, RingGauge, PanelRow, SectionBlock)
   4) Main page component
   ================================================================== */

/* ── 1. CONTENT DATA ──────────────────────────────────────────── */

const stats = [
  { value: "99%",  label: "On-time Delivery",     icon: Timer },
  { value: "30%",  label: "Faster Development",   icon: Zap },
  { value: "40%",  label: "Average Cost Savings",  icon: TrendingUp },
  { value: "100%", label: "Client Retention",      icon: Users },
];

const sectors = [
  {
    id: "operators", side: "right", bg: "tint",
    eyebrow: "Operators",
    title: "Reinventing the Operator Experience",
    paragraphs: [
      "The digital transformation has placed significant demands on Telecom operators to completely overhaul the customer experience.",
      "Today's consumers have unparalleled access to communication technology, making convenience and personalization their primary concerns.",
      "TechHansa empowers you to harness the advancements in computer science to seamlessly connect network and customer data. Additionally, we help you leverage the capabilities of 5G and VoLTE to deliver experiences that exceed consumer expectations.",
    ],
  },
  {
    id: "oems", side: "left", bg: "white",
    eyebrow: "Original Equipment Manufacturers",
    title: "Future-Ready Product Lifecycles for OEMs",
    paragraphs: [
      "The ever-evolving Telecom industry demands a continuous stream of innovation from Original Equipment Manufacturers (OEMs).",
      "In order to thrive in today's digital landscape, having a dependable playbook to address the demands of rapid data-driven product lifecycle management is imperative for the survival of OEMs.",
      "TechHansa has a proven track record as a development partner, guiding Telco OEMs to adopt Big Data analytics, AI, and machine learning to stay aligned with industry advancements. Our services guarantee that your OEMs are well-prepared for the future and can proactively evolve alongside evolving consumer expectations, rather than reacting to them.",
    ],
  },
  {
    id: "isvs", side: "right", bg: "tint",
    eyebrow: "Telecom ISVs",
    title: "Independent Innovation at Telecom Scale",
    paragraphs: [
      "Rising consumer expectations from both Telecom operators and OEMs have created an ongoing demand for cutting-edge solutions from Independent Software Vendors.",
      "Sustaining a competitive advantage hinges on comprehending the intricacies of the evolving Telecom landscape and recognizing how innovations in fields like AI, Big Data, and the Internet of Things can provide substantial value to both OEMs and Operators.",
      "Backed by a profound understanding of technology trends and the ever-changing Telecom market, TechHansa stands as your development partner to uncover fresh avenues for business value.",
    ],
  },
  {
    id: "ott", side: "left", bg: "white",
    eyebrow: "Over-The-Top (OTT)",
    title: "Turning OTT Disruption Into Opportunity",
    paragraphs: [
      "Over-the-top services present a dual perspective for the Telecom industry, as they can be perceived as both a threat and an opportunity. The widespread availability of the internet has enabled various entities to bypass sluggish operator networks, thereby encroaching upon Telecom profit margins.",
      "Forward-thinking operators, OEMs, and ISVs must harness this innovation to unveil modernized business models and generate value-added services and solutions.",
      "Armed with profound expertise in Product Engineering, particularly in areas such as IPTV and Digital Media, TechHansa stands as your ally to capitalize on these trends and maintain competitiveness.",
    ],
  },
];

/* ── 2. SECTOR VISUAL PANELS ──────────────────────────────────── */

/* Reusable base glass card so each visual panel shares the same
   border-radius, backdrop, shadow, and mouse-tilt surface. */
function GlassCard({ onTilt, onReset, children }) {
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-50"
        style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}
        aria-hidden="true"
      ></div>
      <div
        onMouseMove={onTilt} onMouseLeave={onReset}
        className="relative z-10 rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.92)", borderColor: "var(--line)" }}
      >
        {children}
      </div>
    </div>
  );
}

/* Shared header row used inside every visual panel — icon box now
   carries a slow spinning dashed accent ring for extra 3D texture. */
function PanelHeader({ icon: Icon, title, liveLabel = "Active" }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-none">
          <div className="absolute rounded-full border border-dashed animate-ring-spin"
            style={{ top: -6, left: -6, right: -6, bottom: -6, borderColor: "var(--gold-soft)" }}
            aria-hidden="true"
          ></div>
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
            <Icon size={18} />
          </div>
        </div>
        <span className="font-semibold text-sm text-gray-700">{title}</span>
      </div>
      <span className="flex items-center gap-1.5 text-xs text-emerald-600">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span>
        {liveLabel}
      </span>
    </div>
  );
}

/* Ring gauge (reused across multiple panels). */
function RingGauge({ value, label, pct }) {
  return (
    <div className="flex items-center gap-5 mb-5">
      <svg width="80" height="80" viewBox="0 0 100 100" className="-rotate-90 flex-none">
        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--blue-soft)" strokeWidth="10" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="10"
          strokeLinecap="round" pathLength="100" strokeDasharray={`${pct} 100`} />
      </svg>
      <div>
        <div className="text-2xl font-extrabold text-gray-700">{value}</div>
        <div className="text-xs mt-1" style={{ color: "var(--ink-faint)" }}>{label}</div>
      </div>
    </div>
  );
}

/* Small status row inside a panel. */
function PanelRow({ icon: Icon, label, val, good = true }) {
  return (
    <div className="rounded-xl px-3 py-2.5 border flex items-center justify-between"
      style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
      <div className="flex items-center gap-2">
        <Icon size={14} style={{ color: "var(--blue)" }} />
        <span className="text-sm text-gray-700">{label}</span>
      </div>
      <span className={`text-xs font-semibold ${good ? "text-emerald-600" : "text-amber-600"}`}>{val}</span>
    </div>
  );
}

/* 1 — Operators: network/customer-data sync gauge + rollout rows */
function OperatorsVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={RadioTower} title="Operator Network Console" liveLabel="Connected" />
      <RingGauge value="97%" label="Network & Customer Data Sync" pct={97} />
      <div className="space-y-2">
        <PanelRow icon={Wifi}       label="5G Rollout"              val="Accelerating" />
        <PanelRow icon={Smartphone} label="VoLTE Delivery"          val="Enabled" />
        <PanelRow icon={Users}      label="Personalization Engine"  val="Active" />
        <PanelRow icon={Database}   label="Customer Data Fusion"    val="Unified" />
      </div>
    </GlassCard>
  );
}

/* 2 — OEMs: lifecycle readiness gauge + innovation-stack grid */
function OEMVisual({ onTilt, onReset }) {
  const items = [
    { icon: Brain,      label: "AI & Machine Learning", sub: "Embedded in the stack" },
    { icon: Database,   label: "Big Data Analytics",    sub: "Operational insight" },
    { icon: RefreshCcw, label: "Lifecycle Management",  sub: "Data-driven cycles" },
    { icon: ShieldCheck,label: "Quality Assurance",     sub: "Validated at scale" },
  ];
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Cpu} title="OEM Innovation Stack" liveLabel="Evolving" />
      <RingGauge value="90%" label="Product Lifecycle Readiness" pct={90} />
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border px-3 py-2.5"
            style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <div className="flex items-center gap-2 mb-1">
              <item.icon size={13} style={{ color: "var(--gold)" }} />
              <span className="text-xs font-semibold text-gray-700">{item.label}</span>
            </div>
            <p className="text-[11px] leading-snug" style={{ color: "var(--ink-faint)" }}>{item.sub}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* 3 — Telecom ISVs: hub-and-spoke value diagram (AI / Big Data / IoT
   feeding both Operators and OEMs), with pulsing satellite nodes. */
function ISVVisual({ onTilt, onReset }) {
  const nodes = [
    { icon: Brain,    label: "AI",       top: "4%",  left: "50%" },
    { icon: Database, label: "Big Data", top: "50%", left: "96%" },
    { icon: Wifi,     label: "IoT",      top: "96%", left: "50%" },
    { icon: Users,    label: "Ops & OEMs", top: "50%", left: "4%" },
  ];
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Cloud} title="ISV Innovation Hub" liveLabel="Syncing" />
      <div className="relative mx-auto" style={{ width: 220, height: 220 }}>
        <svg className="absolute inset-0" viewBox="0 0 220 220" aria-hidden="true">
          <line x1="110" y1="110" x2="110" y2="16"  stroke="var(--line)" strokeWidth="1.5" />
          <line x1="110" y1="110" x2="204" y2="110" stroke="var(--line)" strokeWidth="1.5" />
          <line x1="110" y1="110" x2="110" y2="204" stroke="var(--line)" strokeWidth="1.5" />
          <line x1="110" y1="110" x2="16"  y2="110" stroke="var(--line)" strokeWidth="1.5" />
        </svg>
        <div className="absolute rounded-full flex items-center justify-center shadow-lg"
          style={{ width: 52, height: 52, top: "50%", left: "50%", marginTop: -26, marginLeft: -26,
                   background: "linear-gradient(160deg,var(--blue),var(--gold))" }}>
          <Cloud size={20} color="#fff" />
        </div>
        {nodes.map((n) => (
          <div key={n.label} className="absolute flex flex-col items-center gap-1"
            style={{ top: n.top, left: n.left, transform: "translate(-50%,-50%)" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center border shadow-sm animate-pulse-soft"
              style={{ background: "#fff", borderColor: "var(--line)", color: "var(--blue)" }}>
              <n.icon size={14} />
            </div>
            <span className="text-[10px] font-semibold text-gray-600 whitespace-nowrap">{n.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-3" style={{ color: "var(--ink-faint)" }}>
        Channeling AI, Big Data & IoT value to Operators and OEMs
      </p>
    </GlassCard>
  );
}

/* 4 — OTT: IPTV focus badge + threat-to-opportunity step flow */
function OTTVisual({ onTilt, onReset }) {
  const steps = [
    { icon: AlertCircle, label: "Bypass Risk Identified",     sub: "Legacy operator networks" },
    { icon: RefreshCcw,  label: "Business Models Modernized", sub: "Value-added services designed" },
    { icon: PlayCircle,  label: "Digital Media Launched",     sub: "Competitive edge secured" },
  ];
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Tv} title="OTT & Digital Media" liveLabel="Streaming" />
      {/* IPTV focus badge */}
      <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-none"
          style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
          <Film size={22} color="#374151" />
        </div>
        <div>
          <div className="font-bold text-sm text-gray-700">IPTV & Digital Media Focus</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--ink-faint)" }}>Core Product Engineering strength</div>
        </div>
      </div>
      {/* threat → opportunity steps */}
      <div className="relative space-y-2">
        <div className="absolute left-[18px] top-6 bottom-6 w-0.5"
          style={{ background: "linear-gradient(180deg, var(--blue-soft), var(--gold-soft))" }}
          aria-hidden="true"
        ></div>
        {steps.map((s, i) => (
          <div key={s.label} className="relative flex gap-4 items-start px-3 py-2.5 rounded-xl border"
            style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <div className="relative z-10 w-8 h-8 rounded-lg flex items-center justify-center flex-none"
              style={{ background: i === 2 ? "linear-gradient(160deg,var(--gold-hover),var(--gold))" : "var(--blue-soft)", color: i === 2 ? "var(--ink)" : "var(--blue)" }}>
              <s.icon size={14} />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700">{s.label}</div>
              <div className="text-[11px] leading-snug" style={{ color: "var(--ink-faint)" }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ── 3. SHARED HELPERS ────────────────────────────────────────── */

function SectionBlock({ id, bg, side, eyebrow, title, paragraphs, visual }) {
  return (
    <section id={id} className="px-6 md:px-10 py-16 md:py-20"
      style={{ background: bg === "tint" ? "var(--paper-dim)" : "#fff" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Copy */}
        <div data-reveal
          className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${side === "left" ? "lg:order-2" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded flex-none"
              style={{ background: "linear-gradient(180deg,var(--gold),var(--gold-hover))" }}></span>
            <span className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--blue)" }}>{eyebrow}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4 last:mb-0"
              style={{ color: "var(--ink-soft)" }}>{p}</p>
          ))}
        </div>

        {/* Visual */}
        <div data-reveal style={{ transitionDelay: "100ms" }}
          className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${side === "left" ? "lg:order-1" : ""}`}>
          {visual}
        </div>

      </div>
    </section>
  );
}

/* ── 4. MAIN PAGE COMPONENT ───────────────────────────────────── */

export default function Telecom() {
  const rootRef        = useRef(null);
  const heroRef         = useRef(null);
  const panelRef         = useRef(null);
  const orbitPlaneRef    = useRef(null);
  const glowARef         = useRef(null);
  const glowBRef         = useRef(null);
  const allowTiltRef    = useRef(false);

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

  /* Scroll parallax — hero glows drift at different rates, the
     signal orbit rises slightly, all layered for extra depth. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    function apply() {
      const y = window.scrollY;
      if (glowARef.current)      glowARef.current.style.transform      = `translate3d(0, ${y * 0.06}px, 0)`;
      if (glowBRef.current)      glowBRef.current.style.transform      = `translate3d(0, ${y * -0.05}px, 0)`;
      if (orbitPlaneRef.current) orbitPlaneRef.current.style.transform = `translateY(${y * 0.04}px) rotateX(58deg)`;
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    apply();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Shared card-tilt handler (used by sector panels AND stat cards) */
  function handleTilt(e) {
    if (!allowTiltRef.current) return;
    const card = e.currentTarget;
    const r    = card.getBoundingClientRect();
    const px   = (e.clientX - r.left) / r.width;
    const py   = (e.clientY - r.top)  / r.height;
    card.style.transform =
      `translateZ(8px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 13}deg)`;
  }
  function resetTilt(e) { e.currentTarget.style.transform = ""; }

  /* Map sector id → visual component */
  const visuals = {
    "operators": <OperatorsVisual onTilt={handleTilt} onReset={resetTilt} />,
    "oems":      <OEMVisual       onTilt={handleTilt} onReset={resetTilt} />,
    "isvs":      <ISVVisual       onTilt={handleTilt} onReset={resetTilt} />,
    "ott":       <OTTVisual       onTilt={handleTilt} onReset={resetTilt} />,
  };

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink-soft)" }}>
      <style>{`

        :root, .tc-page {
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
          --heading:#374151; /* gray-700 — no pure black for headings */
        }
        @keyframes floatSlow  { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-16px); } }
        @keyframes cubeSpin   { from{ transform:rotateX(0deg) rotateY(0deg); } to{ transform:rotateX(360deg) rotateY(360deg); } }
        @keyframes ringSpin   { to{ transform:rotate(360deg); } }
        @keyframes pulseSoft  { 0%,100%{ opacity:.55; } 50%{ opacity:1; } }
        @keyframes orbitSpin  { to{ transform:rotate(360deg); } }
        @keyframes counterSpin{ to{ transform:rotate(-360deg); } }
        .animate-float-slow  { animation: floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin   { animation: cubeSpin 18s linear infinite; }
        .animate-ring-spin   { animation: ringSpin 50s linear infinite; }
        .animate-pulse-soft  { animation: pulseSoft 2.4s ease-in-out infinite; }
        .orbit-ring       { position:absolute; top:50%; left:50%; border-radius:9999px; border:1px dashed var(--line); }
        .orbit-node       { position:absolute; width:34px; height:34px; margin:-17px; }
        .orbit-node-inner { width:100%; height:100%; border-radius:9999px; background:#fff; border:1px solid var(--line);
                             box-shadow:0 10px 20px rgba(15,23,42,.14); display:flex; align-items:center; justify-content:center; }
      `}</style>

      <div className="tc-page">

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">

          {/* ambient glows — drift on scroll for parallax depth */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div ref={glowARef} className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }}></div>
            <div ref={glowBRef} className="absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}></div>
          </div>

          {/* floating 3D cube */}
          <div className="hidden md:block absolute top-14 right-[8%] w-20 h-20" style={{ perspective: 800 }} aria-hidden="true">
            <div className="relative w-full h-full animate-cube-spin" style={{ transformStyle: "preserve-3d" }}>
              {[
                { t:"translateZ(40px)",               bg:"rgba(212,162,46,.30)", bc:"rgba(212,162,46,.45)" },
                { t:"rotateY(180deg) translateZ(40px)",bg:"rgba(30,58,138,.28)",  bc:"rgba(30,58,138,.4)"  },
                { t:"rotateY(90deg) translateZ(40px)", bg:"rgba(212,162,46,.2)",  bc:"rgba(212,162,46,.35)"},
                { t:"rotateY(-90deg) translateZ(40px)",bg:"rgba(30,58,138,.2)",   bc:"rgba(30,58,138,.3)"  },
                { t:"rotateX(90deg) translateZ(40px)", bg:"rgba(255,255,255,.7)",  bc:"rgba(255,255,255,.7)"},
                { t:"rotateX(-90deg) translateZ(40px)",bg:"rgba(148,163,184,.3)",  bc:"rgba(148,163,184,.3)"},
              ].map((f, i) => (
                <div key={i} className="absolute inset-0 rounded-md border backdrop-blur-sm"
                  style={{ transform: f.t, background: f.bg, borderColor: f.bc }}></div>
              ))}
            </div>
          </div>

          {/* floating glass sphere */}
          <div className="hidden md:block absolute bottom-8 left-[6%] w-24 h-24 rounded-full backdrop-blur-md border shadow-xl animate-float-slow"
            style={{ background:"linear-gradient(155deg,rgba(30,58,138,.18),rgba(255,255,255,.5),rgba(212,162,46,.18))", borderColor:"rgba(255,255,255,.7)" }}
            aria-hidden="true"
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* copy */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                style={{ color:"var(--blue)" }}>
                <Sparkles size={14} style={{ color:"var(--gold)" }} /> Industry Solutions
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-700">
                Telecom{" "}
                <span style={{ background:"linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>
                  Transformed
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[52ch] mb-8" style={{ color:"var(--ink-soft)" }}>
                The Telecom industry is facing a deluge of challenges propelled by technology trends and escalating consumer expectations. The ever-evolving benchmarks of customer-centricity in the digital era have resulted in diminishing Average Revenue Per User (ARPU), while the impact of process automation has necessitated a reevaluation of internal operations. With ongoing expansion in product and service innovation, Telecom organizations must embrace agile digital transformation strategies to thrive in this dynamic landscape.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color:"var(--ink)", background:"linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow:"0 14px 30px rgba(212,162,46,.32)" }}>
                  Talk to a Specialist
                </button>
                <button
                  onClick={() => document.getElementById("operators")?.scrollIntoView({ behavior:"smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor:"var(--line)", color:"#374151" }}>
                  Explore Solutions ↓
                </button>
              </div>
            </div>

            {/* hero panel — Digital Telecom Overview, with the signal
                orbit as a 3D signature layer sitting behind it */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{ perspective: 1200 }}>

              {/* ── signature 3D element: tilted, counter-rotating
                  signal orbit — towers & devices orbiting the network
                  core, two rings spinning opposite directions ── */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true">
                <div style={{ perspective: 1100, width: 320, height: 320 }}>
                  <div ref={orbitPlaneRef} className="relative w-full h-full"
                    style={{ transform: "rotateX(58deg)", transformStyle: "preserve-3d" }}>

                    {/* network core */}
                    <div className="absolute rounded-full flex items-center justify-center shadow-2xl"
                      style={{ width: 60, height: 60, top: "50%", left: "50%", marginTop: -30, marginLeft: -30,
                               background: "linear-gradient(160deg,var(--blue),var(--gold))" }}>
                      <Signal size={22} color="#fff" />
                    </div>

                    {/* inner ring — clockwise */}
                    <div className="orbit-ring" style={{ width: 190, height: 190, marginTop: -95, marginLeft: -95,
                      borderColor: "rgba(30,58,138,.32)", animation: "orbitSpin 13s linear infinite" }}>
                      <div className="orbit-node" style={{ top: "50%", left: "100%" }}>
                        <div className="orbit-node-inner" style={{ animation: "counterSpin 13s linear infinite" }}>
                          <RadioTower size={14} style={{ color: "var(--blue)" }} />
                        </div>
                      </div>
                      <div className="orbit-node" style={{ top: "50%", left: "0%" }}>
                        <div className="orbit-node-inner" style={{ animation: "counterSpin 13s linear infinite" }}>
                          <Smartphone size={14} style={{ color: "var(--blue)" }} />
                        </div>
                      </div>
                    </div>

                    {/* outer ring — counter-clockwise */}
                    <div className="orbit-ring" style={{ width: 300, height: 300, marginTop: -150, marginLeft: -150,
                      borderColor: "rgba(212,162,46,.38)", animation: "counterSpin 21s linear infinite" }}>
                      <div className="orbit-node" style={{ top: "50%", left: "100%" }}>
                        <div className="orbit-node-inner" style={{ animation: "orbitSpin 21s linear infinite" }}>
                          <Satellite size={15} style={{ color: "var(--gold)" }} />
                        </div>
                      </div>
                      <div className="orbit-node" style={{ top: "50%", left: "0%" }}>
                        <div className="orbit-node-inner" style={{ animation: "orbitSpin 21s linear infinite" }}>
                          <Wifi size={15} style={{ color: "var(--gold)" }} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* floating badge icons */}
              {[
                { icon: RadioTower, pos:"-top-6 left-6",     delay:"0s",   col:"var(--blue)" },
                { icon: Cpu,        pos:"top-10 -right-6",   delay:"1s",   col:"var(--gold)" },
                { icon: Cloud,      pos:"bottom-10 -left-6", delay:"1.6s", col:"var(--blue)" },
                { icon: Tv,         pos:"-bottom-6 right-8", delay:"2.2s", col:"var(--gold)" },
              ].map(({ icon: Icon, pos, delay, col }) => (
                <div key={pos}
                  className={`hidden md:flex absolute ${pos} w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20`}
                  style={{ background:"#fff", borderColor:"var(--line)", color:col, animationDelay:delay }}>
                  <Icon size={20} />
                </div>
              ))}

              <div ref={panelRef}
                className="relative z-10 mx-auto max-w-sm rounded-3xl p-7 border backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out"
                style={{ background:"rgba(255,255,255,.88)", borderColor:"var(--line)", boxShadow:"0 30px 60px rgba(15,23,42,.12)", transformStyle:"preserve-3d" }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color:"var(--ink-faint)" }}>Digital Telecom Overview</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Live
                  </span>
                </div>
                {[
                  { icon: RadioTower, label: "Operators",              val: "5G Ready" },
                  { icon: Cpu,        label: "OEMs",                   val: "AI-Driven" },
                  { icon: Cloud,      label: "Telecom ISVs",           val: "Innovating" },
                  { icon: Tv,         label: "Over-The-Top",           val: "IPTV Ready" },
                  { icon: Database,   label: "Network & Customer Data",val: "Unified" },
                  { icon: TrendingUp, label: "ARPU Optimization",      val: "Improving" },
                ].map((row) => (
                  <div key={row.label}
                    className="rounded-xl px-3 py-2.5 border flex items-center justify-between mb-2 last:mb-0"
                    style={{ background:"var(--paper)", borderColor:"var(--line)" }}>
                    <div className="flex items-center gap-2">
                      <row.icon size={14} style={{ color:"var(--blue)" }} />
                      <span className="text-sm text-gray-700">{row.label}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold" style={{ color:"var(--gold)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 mt-14 text-xs uppercase tracking-widest"
            style={{ color:"var(--ink-faint)" }}>
            <span>Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* ── STATS STRIP — cards now tilt in 3D on hover, too ── */}
        <section className="px-6 md:px-10 py-10" style={{ background:"var(--paper-dim)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className="relative" style={{ perspective: 800 }}>
                <div data-reveal style={{ transitionDelay:`${i * 70}ms`, transformStyle:"preserve-3d" }}
                  onMouseMove={handleTilt} onMouseLeave={resetTilt}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out rounded-2xl border bg-white shadow-sm p-5 flex flex-col items-center text-center gap-2 hover:shadow-2xl"
                  style={{ borderColor:"var(--line)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background:"var(--blue-soft)", color:"var(--blue)" }}>
                    <s.icon size={18} />
                  </div>
                  <div className="text-2xl font-extrabold" style={{ color:"var(--gold)" }}>{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
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