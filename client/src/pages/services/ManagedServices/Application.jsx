import React, { useEffect, useRef } from "react";
import {
  Search,
  Eye,
  Route,
  Stethoscope,
  Globe,
  Cpu,
  Database,
  Code2,
  Gauge,
  ChevronDown,
  ArrowUp,
  Sparkles,
  Layers,
} from "lucide-react";


const diagnosticRows = [
  { icon: Globe, label: "Network", value: 98 },
  { icon: Cpu, label: "OS", value: 95 },
  { icon: Database, label: "Database", value: 90 },
  { icon: Code2, label: "Application", value: 92 },
];

const features = [
  { icon: Search, title: "Transaction Discovery", desc: "Identifying transactions critical to your business." },
  { icon: Eye, title: "User Experience Monitoring", desc: "Monitoring the end-user experience for a comprehensive view." },
  { icon: Route, title: "Transaction Tracing", desc: "Tracking transactions across the entire application stack." },
  { icon: Stethoscope, title: "Diagnostic Features", desc: "In-depth diagnostics to quickly identify and resolve issues." },
];

const stackLayers = [
  { label: "Network", icon: Globe, dx: -42, dy: -38, rot: -8 },
  { label: "OS", icon: Cpu, dx: -14, dy: -12, rot: -3 },
  { label: "Database", icon: Database, dx: 14, dy: 12, rot: 3 },
  { label: "Application", icon: Code2, dx: 42, dy: 38, rot: 8 },
];

export default function ApplicationManagement() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const panelRef = useRef(null);
  const progressRef = useRef(null);
  const allowTiltRef = useRef(false);

  /* Fade-up on scroll for anything marked data-reveal. */
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
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

 

  /* Mouse-follow 3D tilt for the hero diagnostics panel (signature element). */
  useEffect(() => {
    allowTiltRef.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = heroRef.current;
    const panel = panelRef.current;
    if (!allowTiltRef.current || !hero || !panel) return;
    function move(e) {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      panel.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 12}deg)`;
    }
    function leave() {
      panel.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
    hero.addEventListener("mousemove", move);
    hero.addEventListener("mouseleave", leave);
    return () => {
      hero.removeEventListener("mousemove", move);
      hero.removeEventListener("mouseleave", leave);
    };
  }, []);

  /* Shared 3D tilt handler reused by every card on the page. */
  function handleTilt(e) {
    if (!allowTiltRef.current) return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `translateZ(8px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg)`;
  }
  function resetTilt(e) {
    e.currentTarget.style.transform = "";
  }
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink)" }}>
      {/* Brand tokens pulled straight from index.css, plus the handful
          of slow keyframes Tailwind's core can't express on its own.
          Everything else on the page is plain Tailwind utility classes. */}
      <style>{`
      
        .am-page, .am-page * { font-family: 'Inter', system-ui, sans-serif; }
        :root, .am-page{
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09);
        }
        @keyframes floatSlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        @keyframes cubeSpin { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes ringSpin { to { transform: rotate(360deg); } }
        @keyframes pulseSoft { 0%,100% { opacity:.55; } 50% { opacity:1; } }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin { animation: cubeSpin 18s linear infinite; }
        .animate-ring-spin { animation: ringSpin 50s linear infinite; }
        .animate-pulse-soft { animation: pulseSoft 2.4s ease-in-out infinite; }
      `}</style>

      <div className="am-page">
        {/* Fixed scroll-progress rail */}
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div ref={progressRef} className="h-full" style={{ width: "0%", background: "linear-gradient(90deg,var(--blue),var(--gold))" }}></div>
        </div>

      
        {/* HERO */}
        <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-70" style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 70%)" }}></div>
            <div className="absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-70" style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}></div>
          </div>

          {/* floating 3D cube */}
          <div className="hidden md:block absolute top-16 right-[8%] w-20 h-20" style={{ perspective: 800 }} aria-hidden="true">
            <div className="relative w-full h-full animate-cube-spin" style={{ transformStyle: "preserve-3d" }}>
              {[0, 60, 120, 180, 240, 300].slice(0, 6).map((_, i) => null)}
              <div className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: "translateZ(40px)", background: "linear-gradient(155deg, rgba(212,162,46,.30), rgba(212,162,46,.05))", borderColor: "rgba(212,162,46,.45)" }}></div>
              <div className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: "rotateY(180deg) translateZ(40px)", background: "linear-gradient(155deg, rgba(30,58,138,.28), rgba(30,58,138,.05))", borderColor: "rgba(30,58,138,.4)" }}></div>
              <div className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(40px)", background: "linear-gradient(155deg, rgba(212,162,46,.2), transparent)", borderColor: "rgba(212,162,46,.35)" }}></div>
              <div className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(40px)", background: "linear-gradient(155deg, rgba(30,58,138,.2), transparent)", borderColor: "rgba(30,58,138,.3)" }}></div>
              <div className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(40px)", background: "linear-gradient(155deg, rgba(255,255,255,.7), transparent)", borderColor: "rgba(255,255,255,.7)" }}></div>
              <div className="absolute inset-0 rounded-md border backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(40px)", background: "linear-gradient(155deg, rgba(148,163,184,.3), transparent)", borderColor: "rgba(148,163,184,.3)" }}></div>
            </div>
          </div>

          {/* floating glass sphere */}
          <div
            className="hidden md:block absolute bottom-10 left-[6%] w-28 h-28 rounded-full backdrop-blur-md border shadow-xl animate-float-slow"
            style={{ background: "linear-gradient(155deg, rgba(30,58,138,.18), rgba(255,255,255,.5), rgba(212,162,46,.18))", borderColor: "rgba(255,255,255,.7)" }}
            aria-hidden="true"
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--blue)" }}>
                <Sparkles size={14} style={{ color: "var(--gold)" }} /> Managed Services &middot; Application Management
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]" style={{ color: "var(--ink)" }}>
                Application{" "}
                <span style={{ background: "linear-gradient(100deg,var(--blue) 25%, var(--gold) 95%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Management
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[48ch] mb-8" style={{ color: "var(--ink-soft)" }}>
                Application Performance Management (APM) is critical to business success. With enterprises running SAP, Java, .NET, Windows, and Linux alongside diverse databases and middleware, pinpointing the source of a performance bottleneck becomes a genuinely complex challenge.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow: "0 14px 30px rgba(212,162,46,.32)" }}
                >
                  Talk to a Specialist
                </button>
                <button
                  onClick={() => scrollToId("unified-apm")}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor: "var(--line)", color: "var(--ink)" }}
                >
                  See How It Works ↓
                </button>
              </div>
            </div>

            {/* Live diagnostics panel — signature 3D element (light glass, no dark fills) */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ perspective: 1200 }}>
              <div
                ref={panelRef}
                className="relative mx-auto max-w-sm rounded-3xl p-6 border backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out"
                style={{ background: "rgba(255,255,255,.86)", borderColor: "var(--line)", boxShadow: "0 30px 60px rgba(15,23,42,.12)", transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>Live Diagnostics</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> All systems healthy
                  </span>
                </div>

                <div className="flex items-center gap-5 mb-6">
                  <svg width="92" height="92" viewBox="0 0 100 100" className="-rotate-90 flex-none">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--blue-soft)" strokeWidth="10" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="10" strokeLinecap="round" pathLength="100" strokeDasharray="92 100" />
                  </svg>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold" style={{ color: "var(--ink)" }}>92</span>
                      <span className="text-lg font-bold" style={{ color: "var(--ink-soft)" }}>%</span>
                    </div>
                    <div className="text-xs mt-1" style={{ color: "var(--ink-faint)" }}>Application Health Score</div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {diagnosticRows.map((row) => (
                    <div key={row.label} className="rounded-xl px-3 py-2.5 border" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <row.icon size={14} style={{ color: "var(--blue)" }} />
                          <span className="text-sm" style={{ color: "var(--ink)" }}>{row.label}</span>
                        </div>
                        <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>{row.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--blue-soft)" }}>
                        <div className="h-full rounded-full" style={{ width: `${row.value}%`, background: "linear-gradient(90deg,var(--blue),var(--gold))" }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 mt-16 text-xs uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>
            <span>Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1.5 h-6 rounded" style={{ background: "linear-gradient(180deg,var(--gold),var(--gold-hover))" }}></span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blue)" }}>The Challenge</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--ink)" }}>Where's the bottleneck, really?</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>
                Frequently, end users complain about slow-running applications, leaving us to grapple with the daunting task of identifying the root cause. These issues could stem from application configuration, OS settings, database configurations, or network setups.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Without an integrated monitoring approach, blame-shifting between different service groups often occurs, and capacity enhancement decisions tend to be ad hoc. Our services offer a <b style={{ color: "var(--ink)" }}>Unified Application Performance</b> approach to address these challenges.
              </p>
            </div>

            {/* "Where's the bottleneck" stacked-layer visual */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <div className="relative mx-auto" style={{ width: "min(100%,320px)", height: 280, perspective: 1000 }}>
                {stackLayers.map((layer, i) => (
                  <div
                    key={layer.label}
                    className="absolute left-1/2 top-1/2 w-48 h-24 rounded-2xl border flex items-center gap-3 px-4 backdrop-blur-md transition-transform duration-500"
                    style={{
                      background: i === stackLayers.length - 1 ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.85)",
                      borderColor: i === stackLayers.length - 1 ? "rgba(212,162,46,.5)" : "var(--line)",
                      boxShadow: `0 ${14 + i * 6}px ${24 + i * 6}px rgba(15,23,42,.12)`,
                      transform: `translate(-50%,-50%) translate(${layer.dx}px,${layer.dy}px) rotate(${layer.rot}deg)`,
                      zIndex: i,
                    }}
                  >
                    <div className="flex-none rounded-lg p-2" style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
                      <layer.icon size={18} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{layer.label}</span>
                  </div>
                ))}
                <div
                  className="absolute rounded-full flex items-center justify-center shadow-lg animate-float-slow"
                  style={{ top: "14%", right: "8%", width: 46, height: 46, background: "linear-gradient(160deg,var(--gold-hover),var(--gold))", zIndex: stackLayers.length + 1 }}
                >
                  <Search size={20} color="var(--ink)" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNIFIED APPLICATION PERFORMANCE MANAGEMENT */}
        <section id="unified-apm" className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--paper)" }}>
          <div className="max-w-6xl mx-auto">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-1.5 h-6 rounded" style={{ background: "linear-gradient(180deg,var(--gold),var(--gold-hover))" }}></span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blue)" }}>Our Solution</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: "var(--ink)" }}>
                Unified Application Performance Management
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Unified Application Performance Management presents a dashboard that provides real-time insights into your applications, featuring a drill-down capability to pinpoint bottlenecks — whether they reside in the network, OS, database, or application code itself.
              </p>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--blue)" }}>
              The dashboard, in addition, covers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {features.map((f, i) => (
                <div key={f.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                  <div
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                    style={{ transformStyle: "preserve-3d", perspective: 800, background: "#fff", borderColor: "var(--line)" }}
                    className="h-full flex items-start gap-4 rounded-2xl border shadow-md px-5 py-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex-none rounded-xl p-2.5" style={{ background: "var(--gold-soft)", color: "var(--gold)" }}>
                      <f.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: "var(--ink)" }}>{f.title}</div>
                      <div className="text-sm leading-relaxed mt-0.5" style={{ color: "var(--ink-soft)" }}>{f.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-3xl space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Our solution diligently monitors and manages systems, application servers, and database servers. It tracks their availability and performance and offers detailed reports through a user-friendly, browser-based interface — one that also provides expert advice on alerts and corrective actions.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                IT operations and administrators can leverage our Application Performance Management solution to uphold high-performance standards and ensure system availability, optimizing service levels across every critical application resource in the enterprise.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>Our expertise extends to</span>
                {["IBM Application Performance Management", "AppDynamics"].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
                    style={{ background: "#fff", borderColor: "var(--line)", color: "var(--ink)" }}
                  >
                    <Layers size={14} style={{ color: "var(--blue)" }} /> {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 md:px-10 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
            <div className="w-[34rem] h-[34rem] rounded-full blur-3xl opacity-80" style={{ background: "radial-gradient(circle, var(--blue-soft), var(--gold-soft), transparent 70%)" }}></div>
          </div>
          <div className="hidden md:block absolute top-10 right-[10%] w-16 h-16 rounded-full border-2 border-dashed animate-ring-spin" style={{ borderColor: "var(--blue-soft)" }} aria-hidden="true"></div>

          <div
            data-reveal
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative z-10 max-w-2xl mx-auto text-center rounded-3xl border backdrop-blur-xl shadow-2xl px-8 py-12"
            style={{ background: "rgba(255,255,255,.85)", borderColor: "var(--line)" }}
          >
            <div className="w-12 h-12 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: "var(--gold-soft)", color: "var(--gold)" }}>
              <Gauge size={22} />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: "var(--ink)" }}>Stop guessing where it broke.</h2>
            <p className="text-base leading-relaxed mb-7 max-w-[46ch] mx-auto" style={{ color: "var(--ink-soft)" }}>
              One dashboard, full-stack visibility, and a team that can tell you exactly where performance is slipping — before your users do.
            </p>
            <button
              className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
              style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow: "0 14px 30px rgba(212,162,46,.32)" }}
            >
              Talk to a Specialist
            </button>
          </div>
        </section>

      
      </div>
    </div>
  );
}