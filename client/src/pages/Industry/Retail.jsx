import React, { useEffect, useRef } from "react";
import {
  Sparkles, ChevronDown, ShoppingCart, Package, Store, Globe,
  ShieldCheck, CreditCard, ShoppingBag, Cpu, Factory, Truck,
  Layers, Database, Percent, BarChart3, TrendingUp, Timer,
  Zap, Users,
} from "lucide-react";

/* ==================================================================
   Retail — Industry Solutions page
   ------------------------------------------------------------------
   Mirrors the Healthcare.jsx design system so both pages read as one
   consistent product:
   - NO header, footer, or scroll-progress rail
   - Headings use --heading (#374151, gray-700) instead of --ink
   - White background throughout, gold/blue accents only
   ------------------------------------------------------------------
   File map:
   1) Content data (stats, sectors)
   2) Three sector visual panels
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
    id: "cpg", side: "right", bg: "tint",
    eyebrow: "Consumer Packaged Goods",
    title: "Agile Engineering for CPG Innovation",
    paragraphs: [
      "The rapidly evolving landscape of the CPG (Consumer Packaged Goods) Industry demands organizations to possess remarkable agility. Besides elevating the benchmarks for efficient manufacturing and supply chain management, the progress in AI and the Internet of Things has presented CPG companies with the challenge of providing extensive product customization.",
      "As specialists in Product Engineering, TechHansa stands alongside you as your partner in meeting the expectations for customer convenience and revamping your supply chain infrastructure to align with modern requirements.",
    ],
  },
  {
    id: "ecommerce", side: "left", bg: "white",
    eyebrow: "E-commerce",
    title: "Full-Stack Commerce, Built to Convert",
    paragraphs: [
      "Tech behemoths such as Amazon have dramatically raised the bar for how e-commerce stores should function and the level of value they should offer customers. The integration of automation and AI technology has compelled e-tailers to offer comprehensive brand experiences, going beyond mere product sales. Key challenges encompass strategic global expansion, meticulous consumer data management and security, and navigating intense competition on pricing and shipping.",
      "Leveraging our well-established expertise in full-stack e-commerce development, TechHansa empowers online enterprises to construct extraordinary customer journeys, centered on the core principles of simplicity and convenience.",
    ],
  },
  {
    id: "specialty", side: "right", bg: "tint",
    eyebrow: "Specialty, Department & Discount",
    title: "Adaptive Journeys for Specialty Retail",
    paragraphs: [
      "Specialty retailers are facing an array of challenges brought about by the presence of massive e-commerce platforms and the ever-evolving trends in shopping mobility. These digital transformation hurdles, such as effective data mining and seamless omni-channel connectivity, have prompted numerous organizations to reevaluate their business strategies.",
      "Thriving in the realm of specialty retail hinges on the ability to satisfy customer demands for convenience and deliver customized shopping experiences that showcase industry expertise. As a frontrunner in data science and retail management, TechHansa equips you to provide adaptable buyer journeys that align with contemporary digital standards.",
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

/* Shared header row used inside every visual panel. */
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

/* 1 — CPG: supply chain efficiency gauge + engineering rows */
function CPGVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Package} title="CPG Product Engineering" liveLabel="Optimizing" />
      <RingGauge value="94%" label="Supply Chain Efficiency Score" pct={94} />
      <div className="space-y-2">
        <PanelRow icon={Cpu}     label="AI & IoT Integration"     val="Deployed" />
        <PanelRow icon={Factory} label="Manufacturing Agility"    val="Elevated" />
        <PanelRow icon={Truck}   label="Supply Chain Management"  val="Modernized" />
        <PanelRow icon={Layers}  label="Product Customization"    val="Scalable" />
      </div>
    </GlassCard>
  );
}

/* 2 — E-commerce: full-stack readiness gauge + brand-experience grid */
function EcommerceVisual({ onTilt, onReset }) {
  const items = [
    { icon: Globe,       label: "Global Expansion",  sub: "Strategic scaling" },
    { icon: ShieldCheck, label: "Data Security",     sub: "Consumer protection" },
    { icon: CreditCard,  label: "Pricing & Shipping", sub: "Competitive edge" },
    { icon: ShoppingBag, label: "Brand Experience",  sub: "Beyond product sales" },
  ];
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={ShoppingCart} title="E-commerce Growth Engine" liveLabel="Scaling" />
      <RingGauge value="92%" label="Full-Stack Development Readiness" pct={92} />
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

/* 3 — Specialty, Department & Discount: omni-channel badge + data rows */
function SpecialtyVisual({ onTilt, onReset }) {
  return (
    <GlassCard onTilt={onTilt} onReset={onReset}>
      <PanelHeader icon={Store} title="Specialty Retail Console" liveLabel="Adapting" />
      {/* omni-channel score badge */}
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
        <PanelRow icon={Database}  label="Data Mining"               val="Actionable" />
        <PanelRow icon={Layers}    label="Omni-Channel Connectivity" val="Seamless" />
        <PanelRow icon={Percent}   label="Personalized Offers"       val="Customized" />
        <PanelRow icon={BarChart3} label="Retail Management"         val="Data-Driven" />
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

export default function Retail() {
  const rootRef       = useRef(null);
  const heroRef        = useRef(null);
  const panelRef        = useRef(null);
  const allowTiltRef   = useRef(false);

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
    "cpg":        <CPGVisual       onTilt={handleTilt} onReset={resetTilt} />,
    "ecommerce":  <EcommerceVisual onTilt={handleTilt} onReset={resetTilt} />,
    "specialty":  <SpecialtyVisual onTilt={handleTilt} onReset={resetTilt} />,
  };

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink-soft)" }}>
      <style>{`

        :root, .rt-page {
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
          --heading:#374151; /* gray-700 — no pure black for headings */
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

      <div className="rt-page">

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
                <Sparkles size={14} style={{ color:"var(--gold)" }} /> Industry Solutions
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-700">
                Retail{" "}
                <span style={{ background:"linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>
                  Redefined
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[52ch] mb-8" style={{ color:"var(--ink-soft)" }}>
                The digital revolution has brought about a profound transformation in the buying and selling process. The surge in online commerce has led consumers to flock to retailers that provide the utmost convenience, and the widespread adoption of machine learning and AI is compelling businesses to cater to growing expectations around data connectivity, mobility, and platform performance. Thriving in this demanding "Age of the Customer" hinges on the technology infrastructure you have in position — and TechHansa equips you to confront these challenges head-on and rise above the competition.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color:"var(--ink)", background:"linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow:"0 14px 30px rgba(212,162,46,.32)" }}>
                  Talk to a Specialist
                </button>
                <button
                  onClick={() => document.getElementById("cpg")?.scrollIntoView({ behavior:"smooth" })}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor:"var(--line)", color:"#374151" }}>
                  Explore Solutions ↓
                </button>
              </div>
            </div>

            {/* hero panel — Digital Retail Overview */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{ perspective: 1200 }}>
              {/* floating badge icons */}
              {[
                { icon: ShoppingCart, pos:"-top-6 left-6",     delay:"0s",   col:"var(--blue)" },
                { icon: Package,      pos:"top-10 -right-6",   delay:"1s",   col:"var(--gold)" },
                { icon: Store,        pos:"bottom-10 -left-6", delay:"1.6s", col:"var(--blue)" },
                { icon: CreditCard,   pos:"-bottom-6 right-8", delay:"2.2s", col:"var(--gold)" },
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
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color:"var(--ink-faint)" }}>Digital Retail Overview</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Live
                  </span>
                </div>
                {[
                  { icon: Package,      label: "CPG",                    val: "AI-Enabled" },
                  { icon: ShoppingCart, label: "E-commerce",             val: "Full-Stack" },
                  { icon: Store,        label: "Specialty & Discount",   val: "Omni-Channel" },
                  { icon: Globe,        label: "Global Expansion",       val: "Scaling" },
                  { icon: ShieldCheck,  label: "Consumer Data",          val: "Secured" },
                  { icon: TrendingUp,   label: "Pricing Engine",         val: "Optimized" },
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

        {/* ── THREE SECTOR SECTIONS ── */}
        {sectors.map((s) => (
          <SectionBlock key={s.id} {...s} visual={visuals[s.id]} />
        ))}

      </div>
    </div>
  );
}