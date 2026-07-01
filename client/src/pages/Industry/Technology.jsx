import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles, ChevronDown, Cloud, MonitorSmartphone, Cpu, Laptop, 
  ArrowRight, ShieldCheck, TrendingUp, Timer, Zap, Users, 
  Layers, Database, Smartphone, Globe, Settings, Activity
} from "lucide-react";

/* ==================================================================
   Technology — Industry Solutions page
   ------------------------------------------------------------------
   Mirrors the premium 3D light-theme design system:
   - Interactive glass cards with perspective tilt
   - Floating 3D elements (cube, sphere, badges)
   - Soft blue and gold accents, avoiding heavy dark colors
   ================================================================== */

/* ── 1. CONTENT DATA ──────────────────────────────────────────── */

const stats = [
  { value: "40%",  label: "Faster Time-to-Market", icon: Timer },
  { value: "99%",  label: "System Uptime",         icon: Activity },
  { value: "2.5x", label: "ROI Acceleration",      icon: TrendingUp },
  { value: "360°", label: "Digital Transformation",icon: Globe },
];

const sectors = [
  {
    id: "enterprise-software", side: "right", bg: "tint",
    eyebrow: "Enterprise Software",
    title: "SaaS-Based Agility",
    paragraphs: [
      "Enterprise software expectations have undergone a profound transformation in the past few years. Recent technological breakthroughs, including the Cloud, mobility, and AI, have triggered a significant transition toward SaaS-based models. As a result, enterprise purchasers now anticipate achieving a favorable return on investment in a matter of months.",
      "To thrive in the contemporary enterprise environment, Independent Software Vendors must embrace agile development methodologies to guarantee their products remain current with the latest features.",
      "Given our deep comprehension of evolving technology landscapes and extensive expertise in Product Engineering, TechHansa is the perfect ally for your enterprise software development needs."
    ]
  },
  {
    id: "consumer-software", side: "left", bg: "white",
    eyebrow: "Consumer Software",
    title: "Data-Driven UX Engineering",
    paragraphs: [
      "The constant quest for enhanced User Experiences serves as the driving force behind innovation in consumer software. Contemporary users anticipate applications to offer extensive personalization, mobility, immediate support, and top-tier security.",
      "In light of the demanding nature of today's software landscape, providers must take proactive rather than reactive approaches.",
      "As a frontrunner in data-driven UX Engineering, TechHansa equips you to confront these challenges directly and deliver software that surpasses consumer expectations."
    ]
  },
  {
    id: "semiconductors", side: "right", bg: "tint",
    eyebrow: "Semiconductors",
    title: "Adapting to the Digital Age",
    paragraphs: [
      "The rise of the Internet of Things (IoT) and the increasing digitization of sensors have thrust the semiconductor industry into the spotlight.",
      "Hardware manufacturers are recognizing that the seamless integration of modern software into their value chain presents the most significant challenge in adapting to the digital age.",
      "As a pioneering force in software engineering, TechHansa empowers semiconductor companies to proactively embrace digital innovation and effectively address user interface requirements."
    ]
  },
  {
    id: "consumer-electronics", side: "left", bg: "white",
    eyebrow: "Consumer Electronics",
    title: "Full-Stack Smart Device Ecosystems",
    paragraphs: [
      "AI and the Internet of Things (IoT) have given rise to futuristic expectations in the realm of consumer electronics. This has placed hardware manufacturers in the position where they must acknowledge that \"smart\" software is the linchpin of their survival in this digital era.",
      "The primary challenges center on effectively overseeing full-stack development to fulfill the growing requirements for device connectivity and UX design.",
      "Drawing upon our extensive experience as leaders in digital product engineering, TechHansa stands ready to collaborate with you in crafting a user interface that complements the sophistication of your electronic hardware."
    ]
  }
];

/* ── 2. SECTOR VISUAL PANELS ──────────────────────────────────── */

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

function PanelHeader({ icon: Icon, title, liveLabel = "Active" }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
          style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
          <Icon size={18} />
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

/* Specific Panels for each Technology Sector */

function EnterpriseVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Cloud} title="Enterprise Product Engineering" liveLabel="Deploying" />
      <RingGauge value="98%" label="Agile Methodology Score" pct={98} />
      <div className="space-y-2">
        <PanelRow icon={Cloud}       label="Cloud Migration"   val="SaaS Model" />
        <PanelRow icon={Smartphone}  label="Enterprise Mobility" val="Optimized" />
        <PanelRow icon={Zap}         label="AI Integration"    val="Active" />
        <PanelRow icon={TrendingUp}  label="ROI Acceleration"  val="Favorable" />
      </div>
    </GlassCard>
  );
}

function ConsumerSoftwareVisual({ onTilt, onReset }) {
  const items = [
    { icon: Users,       label: "Personalization", sub: "Deep user profiling" },
    { icon: Smartphone,  label: "Mobility",        sub: "Cross-platform reach" },
    { icon: ShieldCheck, label: "Top-Tier Security",sub: "Data protection" },
    { icon: Settings,    label: "Immediate Support",sub: "Proactive care" },
  ];
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={MonitorSmartphone} title="UX Engineering Matrix" liveLabel="Optimizing" />
      <RingGauge value="94%" label="Consumer Satisfaction Engine" pct={94} />
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

function SemiconductorsVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Cpu} title="Hardware-Software Integration" liveLabel="Syncing" />
      <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-none"
          style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
          <Cpu size={28} className="text-gray-800" />
        </div>
        <div>
          <div className="font-bold text-sm text-gray-700">Digital Value Chain</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--ink-faint)" }}>Seamless integration for the digital age</div>
        </div>
      </div>
      <div className="space-y-2">
        <PanelRow icon={Activity} label="Sensor Digitization" val="Connected" />
        <PanelRow icon={Globe}    label="IoT Scaling"         val="Enabled" />
        <PanelRow icon={Layers}   label="UI Requirements"     val="Addressed" />
      </div>
    </GlassCard>
  );
}

function ConsumerElectronicsVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Laptop} title="Smart Device Architecture" liveLabel="Connecting" />
      <RingGauge value="96%" label="Full-Stack Readiness" pct={96} />
      <div className="space-y-2">
        <PanelRow icon={Database} label="Device Connectivity" val="Secured" />
        <PanelRow icon={Zap}      label="AI Capabilities"     val="Embedded" />
        <PanelRow icon={Layers}   label="UX Design"           val="Sophisticated" />
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
        
        {/* Copy Area */}
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

        {/* Visual Area */}
        <div data-reveal style={{ transitionDelay: "100ms" }}
          className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${side === "left" ? "lg:order-1" : ""}`}>
          {visual}
        </div>

      </div>
    </section>
  );
}

/* ── 4. MAIN PAGE COMPONENT ───────────────────────────────────── */

export default function Technology() {
  const rootRef       = useRef(null);
  const heroRef       = useRef(null);
  const panelRef      = useRef(null);
  const allowTiltRef  = useRef(false);

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
    "enterprise-software":  <EnterpriseVisual onTilt={handleTilt} onReset={resetTilt} />,
    "consumer-software":    <ConsumerSoftwareVisual onTilt={handleTilt} onReset={resetTilt} />,
    "semiconductors":       <SemiconductorsVisual onTilt={handleTilt} onReset={resetTilt} />,
    "consumer-electronics": <ConsumerElectronicsVisual onTilt={handleTilt} onReset={resetTilt} />,
  };

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink-soft)" }}>
      <style>{`
        :root, .rt-page {
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
          --heading:#374151; 
        }
        @keyframes floatSlow { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-16px); } }
        @keyframes cubeSpin  { from{ transform:rotateX(0deg) rotateY(0deg); } to{ transform:rotateX(360deg) rotateY(360deg); } }
        @keyframes pulseSoft { 0%,100%{ opacity:.55; } 50%{ opacity:1; } }
        .animate-float-slow  { animation: floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin   { animation: cubeSpin 18s linear infinite; }
        .animate-pulse-soft  { animation: pulseSoft 2.4s ease-in-out infinite; }
      `}</style>

      <div className="rt-page font-['Inter',sans-serif]">

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">

          {/* Ambient glows */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }}></div>
            <div className="absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}></div>
          </div>

          {/* Floating 3D cube */}
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

          {/* Floating glass sphere */}
          <div className="hidden md:block absolute bottom-8 left-[6%] w-24 h-24 rounded-full backdrop-blur-md border shadow-xl animate-float-slow"
            style={{ background:"linear-gradient(155deg,rgba(30,58,138,.18),rgba(255,255,255,.5),rgba(212,162,46,.18))", borderColor:"rgba(255,255,255,.7)" }}
            aria-hidden="true"
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                style={{ color:"var(--blue)" }}>
                <Sparkles size={14} style={{ color:"var(--gold)" }} /> Industry Focus
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-700">
                Technology{" "}
                <span style={{ background:"linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>
                  Sector
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[52ch] mb-8" style={{ color:"var(--ink-soft)" }}>
                The technology sector is undergoing rapid evolution with each passing hour. Progress in fields such as Artificial Intelligence, machine learning, and the Internet of Things is compelling organizations to update their operational foundations in order to meet increasingly elevated consumer demands. Today, technology companies must view the challenges of digital transformation as avenues for growth rather than as potential threats. TechHansa stands ready to bridge this gap.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color:"var(--ink)", background:"linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow:"0 14px 30px rgba(212,162,46,.32)" }}>
                  Consult Tech Experts
                </button>
                <button
                  onClick={() => document.getElementById("enterprise-software")?.scrollIntoView({ behavior:"smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor:"var(--line)", color:"#374151" }}>
                  Explore Divisions ↓
                </button>
              </div>
            </div>

            {/* Hero panel — Sector Overview */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{ perspective: 1200 }}>
              {/* Floating badge icons */}
              {[
                { icon: Cloud,              pos:"-top-6 left-6",     delay:"0s",   col:"var(--blue)" },
                { icon: MonitorSmartphone,  pos:"top-10 -right-6",   delay:"1s",   col:"var(--gold)" },
                { icon: Cpu,                pos:"bottom-10 -left-6", delay:"1.6s", col:"var(--blue)" },
                { icon: Laptop,             pos:"-bottom-6 right-8", delay:"2.2s", col:"var(--gold)" },
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
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color:"var(--ink-faint)" }}>Digital Tech Overview</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Live
                  </span>
                </div>
                {[
                  { icon: Cloud,              label: "Enterprise Software", val: "SaaS-Based" },
                  { icon: MonitorSmartphone,  label: "Consumer Software",   val: "Data-Driven" },
                  { icon: Cpu,                label: "Semiconductors",      val: "IoT Ready" },
                  { icon: Laptop,             label: "Consumer Electronics",val: "Smart Enabled" },
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

        {/* ── STATS STRIP ── */}
        <section className="px-6 md:px-10 py-10" style={{ background:"var(--paper-dim)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} data-reveal style={{ transitionDelay:`${i * 70}ms` }}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out rounded-2xl border bg-white shadow-sm p-5 flex flex-col items-center text-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all"
                style={{ borderColor:"var(--line)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background:"var(--blue-soft)", color:"var(--blue)" }}>
                  <s.icon size={18} />
                </div>
                <div className="text-2xl font-extrabold" style={{ color:"var(--gold)" }}>{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTOR SECTIONS ── */}
        {sectors.map((s) => (
          <SectionBlock key={s.id} {...s} visual={visuals[s.id]} />
        ))}

      </div>
    </div>
  );
}