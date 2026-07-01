import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // 🔴 Added Link import
import {
  Sparkles, ChevronDown, Monitor, Landmark, HeartPulse, ShoppingBag, 
  RadioTower, Cpu, Database, Activity, Globe, ShieldCheck, 
  CreditCard, TrendingUp, Timer, Zap, Users, Server, Smartphone, Layers, ArrowRight
} from "lucide-react";

/* ==================================================================
   Industry Solutions Main Page
   ------------------------------------------------------------------
   Mirrors the Retail/Healthcare design system:
   - Light theme throughout (white & gray-50)
   - Gold & Blue accents
   - 3D interactive glass cards for each industry section
   - Added specific redirection links for each sector
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
    id: "technology", side: "right", bg: "tint",
    eyebrow: "Technology",
    title: "Empowering Tech Innovators",
    paragraphs: [
      "The technology industry is evolving by the hour. Advancements in areas like Artificial Intelligence, machine learning, and Internet of Things are compelling organizations to update their operational foundations.",
      "TechHansa stands ready to bridge this gap, helping you view the challenges of digital transformation as avenues for growth rather than as potential threats."
    ],
    path: "/industry/technology" // 🔴 Added Path
  },
  {
    id: "banking", side: "left", bg: "white",
    eyebrow: "Banking & Finance",
    title: "Navigating Digital Disruption",
    paragraphs: [
      "Digital disruption is affecting the Banking, Finance and Insurance industries at every level. The rise of mobile convenience and online banking has completely changed how consumers interact with their financial institutions.",
      "We provide robust, secure, and highly scalable solutions that help financial entities modernize their legacy systems and stay ahead of nimble fintech competitors."
    ],
    path: "/industry/banking-finance" // 🔴 Added Path
  },
  {
    id: "healthcare", side: "right", bg: "tint",
    eyebrow: "Healthcare",
    title: "Innovating Patient Care",
    paragraphs: [
      "The Healthcare industry has always been on the forefront of innovation. Advancements in areas like Artificial Intelligence and Big Data are actively reshaping diagnostics, patient management, and operational efficiency.",
      "Our cutting-edge solutions empower healthcare providers to harness this data securely, ensuring better patient outcomes and streamlined administrative processes."
    ],
    path: "/industry/healthcare" // 🔴 Added Path
  },
  {
    id: "retail", side: "left", bg: "white",
    eyebrow: "Retail",
    title: "Transforming the Buyer Journey",
    paragraphs: [
      "The digital revolution has drastically transformed the buying-selling process. Increased competition within online commerce has raised the standard for customer convenience and supply chain agility.",
      "By integrating omni-channel strategies and data analytics, we help retail businesses construct extraordinary customer journeys built on simplicity and personalized experiences."
    ],
    path: "/industry/retail" // 🔴 Added Path
  },
  {
    id: "telecom", side: "right", bg: "tint",
    eyebrow: "Telecom",
    title: "Connecting the Digital World",
    paragraphs: [
      "Technology trends and rising consumer demands have inundated the Telecom industry with challenges. The digitally-evolving landscape requires massive infrastructure upgrades and intelligent network management.",
      "TechHansa equips telecom providers with the agile engineering and automation necessary to scale networks, improve service delivery, and maintain a competitive edge."
    ],
    path: "/industry/telecom" // 🔴 Added Path
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

/* Specific Panels for each Industry */

function TechnologyVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Monitor} title="Tech Infrastructure" liveLabel="Optimizing" />
      <RingGauge value="96%" label="AI & IoT Integration Readiness" pct={96} />
      <div className="space-y-2">
        <PanelRow icon={Cpu}     label="Machine Learning"  val="Deployed" />
        <PanelRow icon={Server}  label="Cloud Architecture" val="Scaled" />
        <PanelRow icon={Layers}  label="IoT Ecosystems"    val="Active" />
      </div>
    </GlassCard>
  );
}

function BankingVisual({ onTilt, onReset }) {
  const items = [
    { icon: Smartphone,  label: "Mobile Banking", sub: "Convenience focus" },
    { icon: ShieldCheck, label: "Fintech Security", sub: "Threat prevention" },
    { icon: CreditCard,  label: "Digital Payments", sub: "Seamless gateway" },
    { icon: Database,    label: "Core Modernization", sub: "Legacy upgrade" },
  ];
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Landmark} title="Financial Disruption Engine" liveLabel="Secured" />
      <div className="grid grid-cols-2 gap-2 mt-4">
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

function HealthcareVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={HeartPulse} title="Health Data Analytics" liveLabel="Processing" />
      <RingGauge value="92%" label="Diagnostic Efficiency Score" pct={92} />
      <div className="space-y-2">
        <PanelRow icon={Database} label="Big Data Utilization" val="Actionable" />
        <PanelRow icon={Activity} label="Patient Management"   val="Streamlined" />
        <PanelRow icon={Users}    label="Administrative Ops"   val="Automated" />
      </div>
    </GlassCard>
  );
}

function RetailVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={ShoppingBag} title="Retail Journey Map" liveLabel="Scaling" />
      <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-none"
          style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
          <span className="text-xl font-extrabold leading-none text-gray-800">360°</span>
          <span className="text-[9px] font-semibold text-gray-700">OMNI</span>
        </div>
        <div>
          <div className="font-bold text-sm text-gray-700">Omni-Channel Journey Score</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--ink-faint)" }}>Adaptable across every touchpoint</div>
        </div>
      </div>
      <div className="space-y-2">
        <PanelRow icon={Globe}    label="E-commerce Experience" val="Enhanced" />
        <PanelRow icon={TrendingUp} label="Supply Chain Agility"  val="Elevated" />
      </div>
    </GlassCard>
  );
}

function TelecomVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={RadioTower} title="Telecom Infrastructure" liveLabel="Expanding" />
      <RingGauge value="88%" label="Network Modernization Readiness" pct={88} />
      <div className="space-y-2">
        <PanelRow icon={Globe} label="Consumer Demands" val="Met" />
        <PanelRow icon={Zap}   label="Digital Evolution" val="Active" />
        <PanelRow icon={Layers} label="Bandwidth Scaling" val="Optimized" />
      </div>
    </GlassCard>
  );
}

/* ── 3. SHARED HELPERS ────────────────────────────────────────── */

// 🔴 Passed 'path' prop here for the button
function SectionBlock({ id, bg, side, eyebrow, title, paragraphs, visual, path }) {
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

          {/* 🔴 ADDED REDIRECT BUTTON 🔴 */}
          <div className="mt-8">
            <Link to={path}
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-sm border bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ borderColor:"var(--line)", color:"#374151" }}>
              Explore {eyebrow} Solutions
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" style={{ color: "var(--gold)" }} />
            </Link>
          </div>

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

export default function IndustryMain() {
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
    "technology": <TechnologyVisual onTilt={handleTilt} onReset={resetTilt} />,
    "banking":    <BankingVisual    onTilt={handleTilt} onReset={resetTilt} />,
    "healthcare": <HealthcareVisual onTilt={handleTilt} onReset={resetTilt} />,
    "retail":     <RetailVisual     onTilt={handleTilt} onReset={resetTilt} />,
    "telecom":    <TelecomVisual    onTilt={handleTilt} onReset={resetTilt} />,
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

          {/* ambient glows */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }}></div>
            <div className="absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-60"
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
                <Sparkles size={14} style={{ color:"var(--gold)" }} /> Enterprise Solutions
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-700">
                Industry{" "}
                <span style={{ background:"linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>
                  Solutions
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[52ch] mb-8" style={{ color:"var(--ink-soft)" }}>
                TechHansa empowers various industries to advance toward rapid growth and the exploration of fresh revenue opportunities through the utilization of big data and analytics. Our cutting-edge solutions are meticulously crafted to tackle the unique challenges faced by diverse sectors, thereby facilitating genuine digital transformation. We are committed to assisting our clients in maintaining an innovative mindset supported by data-informed decision-making.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color:"var(--ink)", background:"linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow:"0 14px 30px rgba(212,162,46,.32)" }}>
                  Discuss Your Needs
                </button>
                <button
                  onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior:"smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor:"var(--line)", color:"#374151" }}>
                  Explore Sectors ↓
                </button>
              </div>
            </div>

            {/* hero panel — Industries Overview */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{ perspective: 1200 }}>
              {/* floating badge icons */}
              {[
                { icon: Monitor,     pos:"-top-6 left-6",     delay:"0s",   col:"var(--blue)" },
                { icon: Landmark,    pos:"top-10 -right-6",   delay:"1s",   col:"var(--gold)" },
                { icon: HeartPulse,  pos:"bottom-10 -left-6", delay:"1.6s", col:"var(--blue)" },
                { icon: RadioTower,  pos:"-bottom-6 right-8", delay:"2.2s", col:"var(--gold)" },
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
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color:"var(--ink-faint)" }}>Sectors Overview</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Active
                  </span>
                </div>
                {[
                  { icon: Monitor,     label: "Technology",        val: "Evolving" },
                  { icon: Landmark,    label: "Banking & Finance", val: "Disrupted" },
                  { icon: HeartPulse,  label: "Healthcare",        val: "Innovating" },
                  { icon: ShoppingBag, label: "Retail",            val: "Transformed" },
                  { icon: RadioTower,  label: "Telecom",           val: "Connected" },
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

        {/* ── FIVE SECTOR SECTIONS ── */}
        {sectors.map((s) => (
          <SectionBlock key={s.id} {...s} visual={visuals[s.id]} />
        ))}

      </div>
    </div>
  );
}