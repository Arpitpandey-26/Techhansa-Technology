import { useEffect, useRef, useState } from "react";
import {
  Activity, AlertCircle, ArrowRight, BarChart3,
  CheckCircle2, Clock, Cloud, Cpu, Database,
  Globe, HardDrive, Layers, Monitor, RefreshCw,
  Server, Settings, Shield, Users, Wifi, Zap,
  TrendingUp, Eye, Lock, BookOpen,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   GLOBAL STYLES
   — Removed @import font to prevent global Navbar layout shifts
═══════════════════════════════════════════════ */
function GlobalStyles() {
  return (
    <style>{`
      /* ── keyframes ── */
      @keyframes floatUp   { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-14px)} }
      @keyframes floatUpB  { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-9px)}  }
      @keyframes floatUpC  { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-18px)} }
      @keyframes shimmer   { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
      @keyframes pulseRing { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.18);opacity:.15} }
      @keyframes spinSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes tickerMove{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      @keyframes barGrow   { from{width:0%} to{width:var(--w)} }
      @keyframes fadeUp    { from{opacity:0;transform:translateY(44px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeLeft  { from{opacity:0;transform:translateX(-50px)} to{opacity:1;transform:translateX(0)} }
      @keyframes fadeRight { from{opacity:0;transform:translateX(50px)}  to{opacity:1;transform:translateX(0)} }
      @keyframes scaleIn   { from{opacity:0;transform:scale(.82)}        to{opacity:1;transform:scale(1)} }
      @keyframes blinkDot  { 0%,100%{opacity:1} 50%{opacity:.2} }
      @keyframes borderGlow{ 0%,100%{box-shadow:0 0 0 0 rgba(212,170,46,.3)} 50%{box-shadow:0 0 0 6px rgba(212,170,46,.06)} }

      .afu { animation:fadeUp   .7s cubic-bezier(.22,1,.36,1) both; }
      .afl { animation:fadeLeft .7s cubic-bezier(.22,1,.36,1) both; }
      .afr { animation:fadeRight.7s cubic-bezier(.22,1,.36,1) both; }
      .asi { animation:scaleIn  .6s cubic-bezier(.22,1,.36,1) both; }

      .d1{animation-delay:.05s}.d2{animation-delay:.12s}.d3{animation-delay:.19s}
      .d4{animation-delay:.26s}.d5{animation-delay:.33s}.d6{animation-delay:.40s}
      .d7{animation-delay:.47s}.d8{animation-delay:.54s}

      /* ── 3-D card — light surface, strong shadow lift ── */
      .rim-card {
        transition: transform .42s cubic-bezier(.25,.46,.45,.94), box-shadow .42s ease;
        transform-style: preserve-3d;
        will-change: transform;
      }
      .rim-card:hover {
        transform: perspective(800px) rotateX(3deg) rotateY(-3deg) translateY(-10px) scale(1.02);
        box-shadow:
          0 32px 64px -8px rgba(0,0,0,.12),
          0  8px 20px -4px rgba(212,170,46,.12),
          inset 0 1px 0 rgba(255,255,255,.9);
      }
      .rim-card:hover .ricon { transform: translateZ(16px) scale(1.12) rotate(-4deg); }
      .ricon { transition: transform .32s ease; display:inline-flex; }

      /* ── gold gradient text ── */
      .gold {
        background: linear-gradient(135deg,#D4A22E,#f0c84a,#b8860b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* ── pill label ── */
      .rpill {
        display:inline-flex; align-items:center; gap:7px;
        padding:5px 15px; border-radius:999px;
        background:linear-gradient(135deg,rgba(212,170,46,.13),rgba(212,170,46,.03));
        color:#b8860b;
        border:1px solid rgba(212,170,46,.3);
        font-size:.68rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
      }
      .rpill-dot {
        width:6px;height:6px;border-radius:50%;background:#D4A22E;
        animation:blinkDot 2s ease infinite;
      }

      /* ── light glass card ── */
      .lglass {
        background:rgba(255,255,255,.82);
        backdrop-filter:blur(24px);
        -webkit-backdrop-filter:blur(24px);
        border:1px solid rgba(255,255,255,.75);
        box-shadow:0 4px 28px rgba(0,0,0,.06);
      }

      /* ── gold border card ── */
      .gold-border {
        border:1px solid rgba(212,170,46,.22);
        box-shadow:0 4px 28px rgba(212,170,46,.06), 0 1px 4px rgba(0,0,0,.04);
      }

      /* ── soft slot bg ── */
      .slot-bg {
        background:linear-gradient(135deg,rgba(212,170,46,.06) 0%,rgba(212,170,46,.02) 100%);
      }

      /* ── isometric 3-layer hero panels ── */
      .iso-wrap {
        transform: rotateX(22deg) rotateZ(-10deg);
        transform-style: preserve-3d;
        perspective: 900px;
      }
      .iso-panel {
        border-radius:20px;
        border:1px solid rgba(212,170,46,.22);
        background:#fff;
        box-shadow:
          0 24px 56px rgba(0,0,0,.09),
          0  4px 12px rgba(212,170,46,.08),
          inset 0 1px 0 rgba(255,255,255,.9);
      }
      .iso-panel:nth-child(1){ transform:translateZ(40px); }
      .iso-panel:nth-child(2){ transform:translateZ(20px) translateY(16px) scale(.97); }
      .iso-panel:nth-child(3){ transform:translateZ(0px)  translateY(30px) scale(.93); }

      /* ── subtle grid bg pattern ── */
      .grid-bg {
        background-color:#f8fafc;
        background-image:
          linear-gradient(rgba(212,170,46,.05) 1px,transparent 1px),
          linear-gradient(90deg,rgba(212,170,46,.05) 1px,transparent 1px);
        background-size:48px 48px;
      }

      /* ── warm stripe bg ── */
      .warm-bg {
        background:linear-gradient(135deg,#fffdf5 0%,#fafaf7 50%,#f8fafc 100%);
      }

      /* ── ticker strip ── */
      .ticker-track {
        display:flex;
        animation:tickerMove 22s linear infinite;
        width:max-content;
      }

      /* ── shimmer skeleton ── */
      .shimmer {
        background:linear-gradient(90deg,#f0f0f0 25%,#fafafa 50%,#f0f0f0 75%);
        background-size:400px 100%;
        animation:shimmer 1.6s ease-in-out infinite;
        border-radius:6px;
      }
    `}</style>
  );
}

/* ── hook: scroll reveal ── */
function useInView(t = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: t });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [t]);
  return [ref, vis];
}

/* ── hook: mouse tilt on element ── */
function useTilt(strength = 8) {
  const ref = useRef(null);
  const handler = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - .5) * strength;
    const y = ((e.clientY - rect.top)  / rect.height - .5) * strength;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateY(0)";
  };
  return { ref, onMouseMove: handler, onMouseLeave: reset };
}

/* ═══════════════════════════════════════════════
   SIGNATURE HERO ELEMENT
   — Isometric floating RIM dashboard panels (all white/light)
═══════════════════════════════════════════════ */
function IsoDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(v => v + 1), 1800); return () => clearInterval(t); }, []);

  const metrics = [
    { label: "CPU",    val: [62,71,58,80,74][tick % 5], color: "#D4A22E" },
    { label: "MEM",    val: [81,78,84,79,83][tick % 5], color: "#60a5fa" },
    { label: "DISK",   val: [44,47,45,50,43][tick % 5], color: "#34d399" },
    { label: "NET",    val: [91,88,94,89,92][tick % 5], color: "#a78bfa" },
  ];
  const alerts = [
    { s: "ok",   m: "SRV-PROD-01 — All systems normal" },
    { s: "warn", m: "DISK-ARRAY-3 — 82% capacity" },
    { s: "ok",   m: "Backup job completed — 04:30 UTC" },
  ];
  const alertColor = { ok: "#34d399", warn: "#f59e0b" };

  return (
    <div className="relative" style={{ perspective: "900px" }}>
      {/* Main isometric stack */}
      <div style={{ transform: "rotateX(12deg) rotateZ(-6deg)", transformStyle: "preserve-3d", animation: "floatUp 7s ease-in-out infinite" }}>

        {/* Panel 1 — front (metrics) */}
        <div className="iso-panel p-5" style={{ position: "relative", zIndex: 3 }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">RIM Dashboard</p>
              <p className="font-bold text-sm" style={{ color: "#0f172a" }}>Live System Health</p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "#34d399" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "blinkDot 1.3s ease infinite" }} />
              Connected
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {metrics.map(m => (
              <div key={m.label} className="rounded-xl p-2.5 text-center slot-bg">
                <p className="text-xs font-black mb-1" style={{ color: m.color }}>{m.val}%</p>
                <p className="text-[9px] text-slate-400">{m.label}</p>
                <div className="mt-1.5 h-1 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${m.val}%`, background: m.color }} />
                </div>
              </div>
            ))}
          </div>
          {/* Alert feed */}
          <div className="space-y-1.5">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: alertColor[a.s] }} />
                <span className="text-[10px] text-slate-600 truncate">{a.m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2 — mid shadow (blurred data) */}
        <div className="iso-panel p-4 absolute inset-0" style={{ zIndex: 2, marginTop: "16px", opacity: .65 }}>
          <div className="space-y-2">
            {["Network latency: 8ms", "Uptime: 99.98%", "Active nodes: 42"].map(t => (
              <div key={t} className="h-5 rounded-lg shimmer w-full" />
            ))}
          </div>
        </div>

        {/* Panel 3 — back shadow */}
        <div className="iso-panel absolute inset-0" style={{ zIndex: 1, marginTop: "30px", opacity: .35 }} />
      </div>

      {/* Floating badge chips */}
      <div className="absolute -top-6 -right-4 lglass rounded-2xl px-4 py-2.5 shadow-lg hidden sm:block z-20"
        style={{ animation: "floatUpC 5.5s ease-in-out infinite" }}>
        <p className="text-[9px] text-slate-400">NOC Coverage</p>
        <p className="font-black text-base" style={{ color: "#0f172a" }}>24 × 7</p>
      </div>
      <div className="absolute -bottom-4 -left-4 lglass rounded-2xl px-4 py-2.5 shadow-lg hidden sm:block z-20"
        style={{ animation: "floatUpB 7s ease-in-out infinite 1.2s" }}>
        <p className="text-[9px] text-slate-400">Uptime SLA</p>
        <p className="font-black text-base gold">99.99%</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  const benefits = [
    { icon: <CheckCircle2 size={13} />, label: "Greater Agility" },
    { icon: <CheckCircle2 size={13} />, label: "Cost Savings" },
    { icon: <CheckCircle2 size={13} />, label: "Industrialized Services" },
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-28 px-4 warm-bg">
      {/* Subtle decorative shapes — light only */}
      <div className="absolute top-8 left-8 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(212,170,46,.09) 0%,transparent 70%)", animation: "floatUpC 14s ease-in-out infinite" }} />
      <div className="absolute bottom-12 right-16 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(212,170,46,.07) 0%,transparent 70%)", animation: "floatUp 18s ease-in-out infinite 2s" }} />

      {/* Decorative ring — top right, light stroke */}
      <div className="absolute top-6 right-6 hidden xl:block pointer-events-none"
        style={{ width: 180, height: 180, opacity: .18 }}>
        <svg viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="80" stroke="#D4A22E" strokeWidth="1" fill="none" strokeDasharray="5 10" style={{ animation: "spinSlow 20s linear infinite" }} />
          <circle cx="90" cy="90" r="50" stroke="#D4A22E" strokeWidth="1" fill="none" strokeDasharray="3 8" style={{ animation: "spinSlow 14s linear infinite reverse" }} />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — copy */}
          <div className="afu d1" style={{ opacity: 0 }}>
            <span className="rpill"><span className="rpill-dot" />Remote Infrastructure Management</span>
            <h1 className="mt-6 font-black leading-none"
              style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)", color: "#0f172a", letterSpacing: "-0.025em" }}>
              RIM Services That
              <br />
              <span className="gold">Scale With You.</span>
            </h1>
            <p className="mt-5 text-slate-500 leading-relaxed" style={{ maxWidth: 500, fontSize: "1.05rem" }}>
              Companies increasingly turn to public cloud solutions in pursuit of greater agility and
              cost savings. At TechHansa, our RIM services offer customers a cost-effective avenue
              to industrialized, enterprise-grade managed services.
            </p>

            {/* Benefit tags */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {benefits.map(b => (
                <span key={b.label} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white gold-border"
                  style={{ color: "#b8860b" }}>
                  {b.icon} {b.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", boxShadow: "0 8px 26px rgba(212,170,46,.38)", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(212,170,46,.48)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 26px rgba(212,170,46,.38)"; }}>
                Explore RIM <ArrowRight size={15} />
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm"
                style={{ background: "#fff", color: "#0f172a", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,.06)", transition: "all .3s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.1)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.06)"}>
                Talk to an Expert <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* RIGHT — signature isometric dashboard */}
          <div className="afr d3 flex justify-center" style={{ opacity: 0 }}>
            <div className="w-full max-w-sm">
              <IsoDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   LIVE TICKER STRIP — between hero and sections
═══════════════════════════════════════════════ */
function TickerStrip() {
  const items = [
    "24×7 Remote Monitoring", "Proactive Diagnostics", "Automated Alerting",
    "Shared Services Model", "Subject Matter Experts", "Steady State Support",
    "IBM Netcool NMS", "Cost-Effective RIM", "99.99% Uptime SLA",
    "24×7 Remote Monitoring", "Proactive Diagnostics", "Automated Alerting",
    "Shared Services Model", "Subject Matter Experts", "Steady State Support",
    "IBM Netcool NMS", "Cost-Effective RIM", "99.99% Uptime SLA",
  ];
  return (
    <div className="overflow-hidden py-4 border-y" style={{ borderColor: "rgba(212,170,46,.18)", background: "rgba(212,170,46,.03)" }}>
      <div className="ticker-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-6 whitespace-nowrap">
            <span className="w-1 h-1 rounded-full" style={{ background: "#D4A22E" }} />
            <span className="text-xs font-semibold" style={{ color: "#b8860b" }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   REMOTE MONITORING & DIAGNOSTICS
═══════════════════════════════════════════════ */
function MonitoringSection() {
  const [ref, vis] = useInView();
  const tilt = useTilt(6);

  const benefits = [
    { icon: <BarChart3 size={18} />,    title: "Automated Performance Monitoring",   desc: "Track critical system performance trends automatically — no manual checks, no gaps." },
    { icon: <Zap size={18} />,          title: "Swift Identification & Response",    desc: "Detect and respond to both existing and potential problems before they cause disruption." },
    { icon: <Clock size={18} />,        title: "Eliminate Trial-and-Error",          desc: "Remove guesswork from troubleshooting, saving your specialist staff valuable time." },
    { icon: <Shield size={18} />,       title: "Critical Data Safeguarding",         desc: "Protect critical data from loss or corruption with proactive backup monitoring." },
    { icon: <TrendingUp size={18} />,   title: "Tailored Reporting",                 desc: "Enhanced efficiency through custom insights into productivity and performance metrics." },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — copy + benefit list */}
          <div>
            <div className={vis ? "afl d1" : "opacity-0"}>
              <span className="rpill"><span className="rpill-dot" />Remote Monitoring &amp; Diagnostics</span>
              <h2 className="mt-4 font-extrabold leading-snug"
                style={{ fontSize: "clamp(1.75rem,4vw,2.7rem)", color: "#0f172a", letterSpacing: "-0.018em" }}>
                Track. Detect.<br /><span className="gold">Resolve Remotely.</span>
              </h2>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed" style={{ maxWidth: 500 }}>
                Our Remote Monitoring and Diagnostics Services empower us to proactively track critical
                system parameters remotely, detecting potential issues before they disrupt your business
                operations — delivering increased efficiency, maximum uptime, and reduced costs.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {benefits.map((b, i) => (
                <div key={b.title}
                  className={`rim-card flex items-start gap-4 p-5 rounded-2xl bg-white gold-border ${vis ? `afl d${i + 2}` : "opacity-0"}`}>
                  <div className="ricon w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,rgba(212,170,46,.18),rgba(212,170,46,.05))", color: "#ededed" }}>
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-xs mb-1" style={{ color: "#0f172a" }}>{b.title}</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3-D monitoring stats panel (all light) */}
          <div className={`${vis ? "afr d3" : "opacity-0"}`}
            {...tilt} style={{ transition: "transform .35s ease", cursor: "pointer" }}>
            <div ref={tilt.ref}
              className="rounded-3xl overflow-hidden"
              style={{ background: "#fff", border: "1px solid rgba(212,170,46,.18)", boxShadow: "0 32px 80px -8px rgba(0,0,0,.1), 0 8px 24px rgba(212,170,46,.06)" }}>

              {/* Header bar */}
              <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ borderColor: "#f1f5f9", background: "#fafbff" }}>
                <Eye size={14} style={{ color: "#D4A22E" }} />
                <span className="text-xs font-semibold" style={{ color: "#0f172a" }}>Monitoring Dashboard</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px]" style={{ color: "#34d399" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "blinkDot 1.4s ease infinite" }} />
                  Live
                </span>
              </div>

              <div className="p-6 space-y-5">
                {/* System health row */}
                {[
                  { label: "CPU Utilisation",     val: 74, color: "#D4A22E" },
                  { label: "Memory Usage",        val: 81, color: "#60a5fa" },
                  { label: "Network Throughput",  val: 93, color: "#34d399" },
                  { label: "Disk I/O",            val: 55, color: "#a78bfa" },
                  { label: "Backup Integrity",    val: 100, color: "#34d399" },
                ].map((r, i) => (
                  <div key={r.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-500">{r.label}</span>
                      <span className="font-bold" style={{ color: r.val === 100 ? "#34d399" : r.color }}>{r.val}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "#f1f5f9" }}>
                      <div className="h-full rounded-full"
                        style={{ width: vis ? `${r.val}%` : "0%", background: `linear-gradient(90deg,${r.color},${r.color}99)`, transition: `width 1s ease ${i * .15}s` }} />
                    </div>
                  </div>
                ))}

                {/* Proactive alert summary */}
                <div className="mt-2 rounded-2xl p-4" style={{ background: "linear-gradient(135deg,rgba(212,170,46,.07),rgba(212,170,46,.02))", border: "1px solid rgba(212,170,46,.18)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle size={13} style={{ color: "#D4A22E" }} />
                    <span className="text-xs font-semibold" style={{ color: "#0f172a" }}>Proactive Alerts Today</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[{ v: "3", l: "Prevented" }, { v: "0", l: "Downtime" }, { v: "12", l: "Auto-Fixed" }].map(s => (
                      <div key={s.l} className="rounded-xl py-2" style={{ background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
                        <p className="text-sm font-black" style={{ color: "#0f172a" }}>{s.v}</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SHARED SERVICES
═══════════════════════════════════════════════ */
function SharedServicesSection() {
  const [ref, vis] = useInView();

  const pressures = [
    { icon: <TrendingUp size={18} />, label: "Innovation Pressure",    desc: "CIOs face constant demand to introduce capabilities that bolster their organization's competitive edge." },
    { icon: <Users size={18} />,      label: "Resource Constraints",   desc: "Budget and manpower are consumed by daily operations, leaving little room for technology experimentation." },
    { icon: <Users size={18} />,      label: "Personnel Challenges",   desc: "Attrition, training, and skill gaps further complicate the situation for in-house IT teams." },
  ];

  const offerings = [
    { icon: <Layers size={18} />,    title: "Skill Investment Sharing",  desc: "Leverage our existing investments in skill development and specialized knowledge without bearing the full cost." },
    { icon: <Globe size={18} />,     title: "Shared Costs Model",        desc: "Share resources and infrastructure costs while ensuring unwavering quality of support and delivery." },
    { icon: <Settings size={18} />,  title: "Flexibility & Custom Fit",  desc: "Our Shared Services model is designed with flexibility and customization in mind — tailored to your specific requirements." },
    { icon: <Shield size={18} />,    title: "Unwavering Quality",        desc: "Despite shared economies, quality is never compromised. Every engagement meets the same enterprise-grade standards." },
  ];

  return (
    <section className="py-24 px-4 grid-bg">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 ${vis ? "afu d1" : "opacity-0"}`}>
          <span className="rpill"><span className="rpill-dot" />Shared Services</span>
          <h2 className="mt-4 font-extrabold leading-snug"
            style={{ fontSize: "clamp(1.75rem,4vw,2.7rem)", color: "#0f172a", letterSpacing: "-0.018em" }}>
            Share Resources.<br /><span className="gold">Multiply Capabilities.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed mx-auto" style={{ maxWidth: 580 }}>
            The ever-growing pressure on CIOs to introduce innovative IT capabilities is undeniable.
            Our Shared Services model addresses this directly — providing shared skill investment
            and resources while ensuring unwavering quality support.
          </p>
        </div>

        {/* Two-column: CIO Pressures | Offerings */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT — problem cards (warm tint) */}
          <div className={vis ? "afl d2" : "opacity-0"}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">The Challenge</p>
            <div className="space-y-4">
              {pressures.map((p, i) => (
                <div key={p.label}
                  className={`rim-card flex gap-4 items-start p-5 rounded-2xl ${vis ? `afl d${i + 2}` : "opacity-0"}`}
                  style={{ background: "#fff", border: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}>
                  <div className="ricon w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(248,113,113,.1)", color: "#f87171" }}>
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#0f172a" }}>{p.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — solution cards (gold accent) */}
          <div className={vis ? "afr d3" : "opacity-0"}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Our Solution</p>
            <div className="grid grid-cols-2 gap-4">
              {offerings.map((o, i) => (
                <div key={o.title}
                  className={`rim-card p-5 rounded-2xl bg-white gold-border ${vis ? `asi d${i + 3}` : "opacity-0"}`}>
                  <div className="ricon w-11 h-11 rounded-2xl flex items-center justify-center mb-3"
                    style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", color: "#fff", boxShadow: "0 6px 18px rgba(212,170,46,.35)" }}>
                    {o.icon}
                  </div>
                  <p className="font-bold text-xs mb-1.5" style={{ color: "#0f172a" }}>{o.title}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

     </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   STEADY STATE — REMOTE SUPPORT
═══════════════════════════════════════════════ */
function SteadyStateSection() {
  const [ref, vis] = useInView();

  const capabilities = [
    { icon: <Monitor size={20} />,    title: "Remote Administration",      desc: "Full remote management and administration of IT infrastructure — same as being on-site." },
    { icon: <Server size={20} />,     title: "IT Infrastructure Support",  desc: "Comprehensive support covering servers, storage, networks, and all connected systems." },
    { icon: <Clock size={20} />,      title: "24×7 Availability",         desc: "Around-the-clock support from dedicated specialists and Subject Matter Experts (SMEs)." },
    { icon: <Users size={20} />,      title: "SME-Led Delivery",           desc: "Our team of Specialists and SMEs ensures uninterrupted, expert-grade service delivery." },
    { icon: <Lock size={20} />,       title: "Secure Network Infrastructure", desc: "Fully equipped, highly secure network infrastructure backing every remote support engagement." },
    { icon: <Globe size={20} />,      title: "Reliable Remote Support",    desc: "Consistent, dependable remote support delivered to valued customers across the globe." },
  ];

  const smeStats = [
    { v: "24×7", l: "Availability" },
    { v: "SMEs", l: "Specialist Team" },
    { v: "100%", l: "Secure Infra" },
    { v: "< 15m", l: "Response Time" },
  ];

  return (
    <section className="py-24 px-4 warm-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — NOC visual panel (all light) */}
          <div className={vis ? "afl d2" : "opacity-0"}>
            <div className="relative">
              {/* Main panel */}
              <div className="rounded-3xl overflow-hidden"
                style={{ background: "#fff", border: "1px solid rgba(212,170,46,.18)", boxShadow: "0 32px 80px -8px rgba(0,0,0,.1), 0 8px 24px rgba(212,170,46,.06)" }}>
                {/* Window bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: "#f1f5f9", background: "#fafbff" }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#fca5a5" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#fcd34d" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#6ee7b7" }} />
                  <span className="ml-3 text-[11px] font-mono text-slate-400">Steady State — Remote NOC</span>
                  <span className="ml-auto text-[10px] font-semibold" style={{ color: "#34d399" }}>● Operational</span>
                </div>

                <div className="p-6">
                  {/* Stat bar */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {smeStats.map(s => (
                      <div key={s.l} className="text-center p-3 rounded-2xl slot-bg gold-border">
                        <p className="text-sm font-black gold">{s.v}</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>

                  {/* Live support queue */}
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Active Support Tickets</p>
                  {[
                    { id: "SS-4291", sys: "Linux SRV-07", sme: "R. Sharma",   status: "In Progress", p: "P2" },
                    { id: "SS-4290", sys: "Oracle DB-3",  sme: "A. Kapoor",   status: "Resolved",    p: "P1" },
                    { id: "SS-4289", sys: "Network-Edge", sme: "M. Verma",    status: "Monitoring",  p: "P3" },
                  ].map((t, i) => (
                    <div key={t.id}
                      className={`flex items-center gap-3 p-3 rounded-xl mb-2 ${vis ? `afu d${i + 3}` : "opacity-0"}`}
                      style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>
                      <span className="text-[9px] font-black px-2 py-0.5 rounded-lg shrink-0"
                        style={{ background: t.p === "P1" ? "rgba(248,113,113,.12)" : t.p === "P2" ? "rgba(251,191,36,.12)" : "rgba(99,102,241,.1)", color: t.p === "P1" ? "#f87171" : t.p === "P2" ? "#D4A22E" : "#818cf8" }}>
                        {t.p}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold truncate" style={{ color: "#0f172a" }}>{t.id} · {t.sys}</p>
                        <p className="text-[10px] text-slate-400">{t.sme}</p>
                      </div>
                      <span className="text-[10px] font-semibold shrink-0"
                        style={{ color: t.status === "Resolved" ? "#34d399" : t.status === "In Progress" ? "#D4A22E" : "#60a5fa" }}>
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating annotation */}
              <div className="absolute -bottom-5 -right-5 lglass rounded-2xl px-4 py-2.5 shadow-lg hidden sm:block"
                style={{ animation: "floatUpB 6s ease-in-out infinite .5s" }}>
                <p className="text-[9px] text-slate-400">Support Mode</p>
                <p className="text-sm font-bold" style={{ color: "#0f172a" }}>Remote · Secure</p>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div>
            <div className={vis ? "afr d1" : "opacity-0"}>
              <span className="rpill"><span className="rpill-dot" />Steady State Remote Support</span>
              <h2 className="mt-4 font-extrabold leading-snug"
                style={{ fontSize: "clamp(1.75rem,4vw,2.7rem)", color: "#0f172a", letterSpacing: "-0.018em" }}>
                SME-Powered,<br /><span className="gold">Always Available.</span>
              </h2>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed" style={{ maxWidth: 500 }}>
                TechHansa delivers Steady State Support services through remote administration and
                management of IT Infrastructure support, available 24×7. Our dedicated team of
                Specialists and Subject Matter Experts (SMEs) ensures uninterrupted service delivery
                through a fully equipped, highly secure network infrastructure.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {capabilities.map((c, i) => (
                <div key={c.title}
                  className={`rim-card rounded-2xl p-4 bg-white gold-border ${vis ? `asi d${i + 2}` : "opacity-0"}`}>
                  <div className="ricon w-9 h-9 rounded-xl flex items-center justify-center mb-2.5"
                    style={{ background: "linear-gradient(135deg,rgba(212,170,46,.16),rgba(212,170,46,.04))", color: "#D4A22E" }}>
                    {c.icon}
                  </div>
                  <p className="font-semibold text-xs mb-1" style={{ color: "#0f172a" }}>{c.title}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE RIM — value summary strip
═══════════════════════════════════════════════ */
function ValueStrip() {
  const [ref, vis] = useInView();
  const values = [
    { icon: <Cloud size={22} />,       title: "Public Cloud Ready",       desc: "Seamlessly manage workloads across on-premise and public cloud environments." },
    { icon: <Cpu size={22} />,         title: "Proactive Monitoring",     desc: "Critical parameters tracked remotely before they impact operations." },
    { icon: <Database size={22} />,   title: "Shared Infrastructure",    desc: "Share the cost of enterprise-grade infrastructure without compromising quality." },
    { icon: <RefreshCw size={22} />,  title: "Continuous Service",       desc: "No gaps, no downtime — always-on support from a dedicated RIM team." },
    { icon: <Wifi size={22} />,       title: "Secure Remote Access",     desc: "Highly secure, encrypted remote access to every managed infrastructure layer." },
    { icon: <Activity size={22} />,   title: "Cost Optimization",        desc: "Industrialized services at a fraction of the cost of building in-house teams." },
  ];

  return (
    <section className="py-24 px-4 bg-white relative z-10">
      
      {/* ── Optional: Add this style block inside the component or your global CSS ── */}
      <style>{`
        .rim-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 24px rgba(0,0,0,.05);
          transition: transform 0.4s cubic-bezier(.25,.46,.45,.94), box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
          will-change: transform;
          transform-style: preserve-3d;
        }
        .rim-card:hover {
          transform: translateY(-8px) rotateX(2deg) rotateY(-2deg) scale(1.02);
          background: linear-gradient(135deg, rgba(212,162,46,.08), rgba(212,162,46,.02));
          border-color: rgba(212,162,46,.3);
          box-shadow: 0 20px 40px -10px rgba(17,58,113,.1), 0 10px 20px -5px rgba(212,162,46,.1);
        }
        
        .ricon {
          background: linear-gradient(135deg, rgba(212,162,46,.15), rgba(212,162,46,.04));
          color: #D4A22E;
          transition: transform 0.35s ease, background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
        }
        
        .rim-card:hover .ricon {
          transform: translateZ(20px) scale(1.1);
          background: linear-gradient(135deg, #D4A22E, #b8860b);
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(212,162,46,.35);
        }
      `}</style>

      <div ref={ref} className="max-w-7xl mx-auto perspective">
        <div className={`text-center mb-14 ${vis ? "afu d1" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white border border-gray-200 text-[#113a71] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A22E]" style={{ animation: "pulse3d 2s ease infinite" }} />
            Why TechHansa RIM
          </span>
          <h2 className="mt-4 font-extrabold leading-snug"
            style={{ fontSize: "clamp(1.75rem,4vw,2.7rem)", color: "#113a71", letterSpacing: "-0.018em" }}>
            The RIM Advantage<br />
            <span className="gold-text" style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              In Six Dimensions
            </span>
          </h2>
        </div>

        {/* Bento-asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.title}
              className={`rim-card rounded-3xl p-8 ${vis ? `asu d${(i % 6) + 2}` : "opacity-0"}`}
            >
              <div className="ricon w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <div style={{ transform: 'translateZ(10px)' }}>
                <p className="font-extrabold text-[#113a71] text-base mb-2">{v.title}</p>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CTA — light, gold-accented (NO dark bg)
═══════════════════════════════════════════════ */
function CtaSection() {
  const [ref, vis] = useInView();
  return (
    <section className="py-24 px-4 grid-bg">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`rounded-3xl p-12 text-center relative overflow-hidden ${vis ? "afu d1" : "opacity-0"}`}
          style={{ background: "linear-gradient(135deg,#fffdf5,#fafaf7)", border: "1px solid rgba(212,170,46,.28)", boxShadow: "0 32px 80px -8px rgba(212,170,46,.12), 0 8px 24px rgba(0,0,0,.06)" }}>

          {/* Decorative background rings — light */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {[200, 320, 440].map((r, i) => (
              <div key={r} className="absolute rounded-full"
                style={{ width: r, height: r, border: "1px solid rgba(212,170,46,.1)", animation: `floatUpB ${10 + i * 3}s ease-in-out infinite ${i * .8}s` }} />
            ))}
          </div>

          <div className="relative z-10">
            <span className="rpill"><span className="rpill-dot" />Start Today</span>
            <h2 className="mt-5 font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.9rem,4.5vw,3rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
              Ready to Industrialize<br /><span className="gold">Your Infrastructure?</span>
            </h2>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              From remote monitoring and diagnostics to shared services and steady state support —
              our RIM specialists are ready to take the operational burden off your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", boxShadow: "0 8px 28px rgba(212,170,46,.42)", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(212,170,46,.52)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(212,170,46,.42)"; }}>
                Schedule a Consultation <ArrowRight size={16} />
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function RemoteInfrastructurePage() {
  return (
    /* Removed inline fontFamily style to allow inheritance of default project fonts */
    <div className="min-h-screen bg-white overflow-x-hidden">
      <GlobalStyles />
      <Hero />
      <TickerStrip />
      <MonitoringSection />
      <SharedServicesSection />
      <SteadyStateSection />
      <ValueStrip />
      <CtaSection />
    </div>
  );
}