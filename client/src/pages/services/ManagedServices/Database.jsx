import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  GitMerge,
  Globe,
  HardDrive,
  Lock,
  RefreshCw,
  Server,
  Settings,
  Shield,
  Zap,
  Cloud,
  BarChart3,
  Cpu,
  Layers,
  Move,
  Package,
  AlertTriangle,
  Copy,
} from "lucide-react";

/* ─────────────────────────────────────────────
   GLOBAL STYLES + KEYFRAMES (Techhansa Theme)
───────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    @keyframes floatY    { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-18px)} }
    @keyframes floatYR   { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-14px) rotate(10deg)} }
    @keyframes floatOrb  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(25px,-35px) scale(1.06)} }
    @keyframes floatOrb2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,28px) scale(0.94)} }
    @keyframes spinSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes pulse3d   { 0%,100%{box-shadow:0 0 0 0 rgba(212,162,46,0.35)} 50%{box-shadow:0 0 22px 8px rgba(212,162,46,0.12)} }
    @keyframes pulseGreen{ 0%,100%{opacity:1} 50%{opacity:0.45} }
    @keyframes fadeUp    { from{opacity:0;transform:translateY(44px)} to{opacity:1;transform:translateY(0)} }
    @keyframes slideL    { from{opacity:0;transform:translateX(-52px)} to{opacity:1;transform:translateX(0)} }
    @keyframes slideR    { from{opacity:0;transform:translateX(52px)} to{opacity:1;transform:translateX(0)} }
    @keyframes scaleIn   { from{opacity:0;transform:scale(0.82)} to{opacity:1;transform:scale(1)} }
    @keyframes dash      { to{stroke-dashoffset:0} }
    @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }

    .anim-fadeUp  { animation:fadeUp  0.72s cubic-bezier(.22,1,.36,1) forwards; }
    .anim-slideL  { animation:slideL  0.72s cubic-bezier(.22,1,.36,1) forwards; }
    .anim-slideR  { animation:slideR  0.72s cubic-bezier(.22,1,.36,1) forwards; }
    .anim-scaleIn { animation:scaleIn 0.60s cubic-bezier(.22,1,.36,1) forwards; }

    .d1{animation-delay:.05s} .d2{animation-delay:.15s} .d3{animation-delay:.25s}
    .d4{animation-delay:.35s} .d5{animation-delay:.45s} .d6{animation-delay:.55s}
    .d7{animation-delay:.65s} .d8{animation-delay:.75s}

    .card3d {
      transition: transform .42s cubic-bezier(.25,.46,.45,.94), box-shadow .42s ease;
      will-change: transform;
    }
    .card3d:hover {
      transform: translateY(-10px) rotateX(3deg) rotateY(-2deg) scale(1.025);
      box-shadow: 0 40px 80px -12px rgba(17,58,113,.14), 0 18px 36px -6px rgba(212,162,46,.11);
    }
    .card3d:hover .icon3d { transform: scale(1.18) rotateY(14deg); }
    .icon3d { transition: transform .32s ease; }

    .glass {
      background: rgba(255,255,255,.85);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      border: 1px solid rgba(17,58,113,.08);
    }
    .glass-dark {
      background: rgba(17,58,113,.9);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      border: 1px solid rgba(255,255,255,.1);
    }
    .btn-glow {
      transition: all .3s ease;
    }
    .btn-glow:hover {
      box-shadow: 0 0 32px rgba(212,162,46,.55), 0 8px 22px rgba(0,0,0,.2);
      transform: translateY(-2px);
    }
    .perspective { perspective: 1300px; }

    .connector::after {
      content:'';
      display:block;
      width:2px;
      height:48px;
      background: linear-gradient(to bottom, rgba(212,162,46,.4), transparent);
      margin: 0 auto;
    }
  `}</style>
);

/* ─────────────────────────────────────────────
   FLOATING BG ORBS (Techhansa Colors)
───────────────────────────────────────────── */
function BgOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute" style={{ top: "-100px", left: "-80px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle,rgba(212,162,46,.06) 0%,transparent 70%)", animation: "floatOrb 16s ease-in-out infinite" }} />
      <div className="absolute" style={{ top: "35%", right: "-100px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle,rgba(17,58,113,.04) 0%,transparent 70%)", animation: "floatOrb2 20s ease-in-out infinite" }} />
      <div className="absolute" style={{ bottom: "8%", left: "18%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle,rgba(17,58,113,.03) 0%,transparent 70%)", animation: "floatOrb 24s ease-in-out infinite reverse" }} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useMouse() {
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setP({ x: (e.clientX / window.innerWidth - .5) * 2, y: (e.clientY / window.innerHeight - .5) * 2 });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return p;
}

/* ─────────────────────────────────────────────
   SHARED UI COMPONENTS
───────────────────────────────────────────── */
function Pill({ text }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
      style={{ background: "rgba(212,162,46,.1)", color: "#D4A22E", border: "1px solid rgba(212,162,46,.3)" }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4A22E", animation: "pulse3d 2.2s ease infinite" }} />
      {text}
    </span>
  );
}

function GoldText({ children }) {
  return (
    <span style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  const mouse = useMouse();

  const stats = [
    { label: "DB Platforms", value: "6+" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "NOC Coverage", value: "24×7" },
    { label: "Cloud Ready", value: "✓" },
  ];

  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden px-4 pt-16 pb-24"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 45%, #f4f7f9 100%)", position: "relative", zIndex: 1 }}>

      <div className="absolute hidden lg:block"
        style={{ top: "60px", right: "80px", width: "140px", height: "140px", borderRadius: "28px", background: "linear-gradient(135deg,#D4A22E,#C19326)", opacity: .18, transform: `rotate(${18 + mouse.x * 5}deg) translateY(${mouse.y * -18}px)`, animation: "floatY 7s ease-in-out infinite", boxShadow: "10px 10px 40px rgba(212,162,46,.3)" }} />
      <div className="absolute hidden lg:block"
        style={{ bottom: "80px", left: "60px", width: "90px", height: "90px", borderRadius: "20px", background: "linear-gradient(135deg,#113a71,#1e509c)", opacity: .12, transform: `rotate(${-22 + mouse.x * -4}deg) translateY(${mouse.y * 12}px)`, animation: "floatYR 9s ease-in-out infinite 1.2s" }} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — copy */}
          <div className="anim-fadeUp d1" style={{ opacity: 0 }}>
            <Pill text="Database Management" />
            <h1 className="mt-6 font-extrabold leading-tight"
              style={{ fontSize: "clamp(2.1rem,5vw,3.6rem)", color: "#113a71", letterSpacing: "-0.02em" }}>
              Databases Distributed.<br />
              <GoldText>Managed Flawlessly.</GoldText>
            </h1>
            <p className="mt-5 text-gray-600 font-medium leading-relaxed" style={{ fontSize: "1.05rem", maxWidth: "520px" }}>
              As organizations embrace hybrid cloud, databases span multiple environments —
              demanding meticulous tuning and management in both private and public cloud settings.
              Our experts handle every layer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#113a71,#0a192f)", boxShadow: "0 8px 28px rgba(17,58,113,.3)" }}>
                Our Expertise <ArrowRight size={15} />
              </button>
              <button className="glass flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm hover:shadow-lg transition-all"
                style={{ color: "#113a71", border: "1px solid rgba(17,58,113,0.2)" }}>
                Talk to Us <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* RIGHT — 3-D stat dashboard */}
          <div className="perspective anim-slideR d3" style={{ opacity: 0 }}>
            <div className="relative max-w-sm mx-auto"
              style={{ transform: `rotateY(${mouse.x * -5}deg) rotateX(${mouse.y * 3}deg)`, transition: "transform .35s ease" }}>

              {/* Main card */}
              <div className="glass rounded-3xl p-7 shadow-2xl"
                style={{ boxShadow: "0 32px 80px -10px rgba(17,58,113,.12),0 12px 40px rgba(212,162,46,.08)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expertise Hub</p>
                    <p className="font-extrabold text-xl mt-0.5" style={{ color: "#113a71" }}>Database Services</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", boxShadow: "0 8px 22px rgba(212,162,46,.4)" }}>
                    <Database size={20} className="text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {stats.map(({ label, value }) => (
                    <div key={label} className="rounded-2xl p-4 shadow-sm"
                      style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(17,58,113,.08)" }}>
                      <p className="text-xl font-black" style={{ color: "#113a71" }}>{value}</p>
                      <p className="text-xs font-bold text-gray-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl px-4 py-3 shadow-inner" style={{ background: "rgba(17,58,113,.03)", border: "1px solid rgba(17,58,113,.05)" }}>
                  <p className="text-[10px] font-bold text-[#113a71] uppercase tracking-wider mb-2">Supported Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {["Oracle", "MS SQL", "MySQL", "Sybase", "DB2", "PostgreSQL"].map(db => (
                      <span key={db} className="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-[#D4A22E]/20"
                        style={{ background: "rgba(212,162,46,.1)", color: "#D4A22E" }}>{db}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-2.5 shadow-xl hidden sm:block"
                style={{ animation: "floatY 5.5s ease-in-out infinite" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Monitoring</p>
                <p className="text-base font-black" style={{ color: "#D4A22E" }}>Always On</p>
              </div>
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-2.5 shadow-xl hidden sm:block"
                style={{ animation: "floatY 7s ease-in-out infinite 1s" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">DR Sites</p>
                <p className="text-base font-black" style={{ color: "#113a71" }}>Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHARED: section header
───────────────────────────────────────────── */
function SectionHeader({ pill, title, accent, body, vis, center = true }) {
  return (
    <div className={center ? "text-center mb-14" : "mb-10"}>
      <div className={vis ? "anim-fadeUp d1" : "opacity-0"}><Pill text={pill} /></div>
      <h2 className={`mt-4 font-extrabold leading-snug ${vis ? "anim-fadeUp d2" : "opacity-0"}`}
        style={{ fontSize: "clamp(1.7rem,4vw,2.7rem)", color: "#113a71", letterSpacing: "-0.015em" }}>
        {title} <GoldText>{accent}</GoldText>
      </h2>
      {body && (
        <p className={`mt-4 text-gray-600 font-medium text-sm md:text-base leading-relaxed mx-auto ${vis ? "anim-fadeUp d3" : "opacity-0"}`}
          style={{ maxWidth: "580px" }}>
          {body}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   1. DATABASE MONITORING
───────────────────────────────────────────── */
function MonitoringSection() {
  const [ref, vis] = useInView();
  const aspects = [
    { icon: <Activity size={16} />, label: "Availability" },
    { icon: <BarChart3 size={16} />, label: "Performance" },
    { icon: <HardDrive size={16} />, label: "Backup" },
    { icon: <Shield size={16} />, label: "Health Checks" },
  ];
  const metrics = [
    { name: "Query Throughput", pct: 88 },
    { name: "Cache Hit Ratio", pct: 94 },
    { name: "Disk I/O", pct: 62 },
    { name: "Connection Pool", pct: 75 },
    { name: "Replication Lag", pct: 97 },
  ];
  return (
    <section className="py-24 px-4 relative z-10 border-t border-gray-100" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#fff 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — dark monitor panel */}
          <div className={`perspective ${vis ? "anim-slideL d2" : "opacity-0"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 40px 80px -10px rgba(17,58,113,.25)" }}>
              <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,.08)" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-bold tracking-widest uppercase text-gray-300">DB Monitor — Live Dashboard</span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulseGreen 1.4s ease infinite" }} />
                  Connected
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {aspects.map(a => (
                    <span key={a.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold border border-[#D4A22E]/30"
                      style={{ background: "rgba(212,162,46,.1)", color: "#D4A22E" }}>
                      {a.icon} {a.label}
                    </span>
                  ))}
                </div>
                {metrics.map((m, i) => (
                  <div key={m.name}>
                    <div className="flex justify-between text-xs mb-1.5 font-bold">
                      <span className="text-gray-300">{m.name}</span>
                      <span style={{ color: m.pct > 85 ? "#34d399" : "#f59e0b" }}>{m.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,.1)" }}>
                      <div className="h-full rounded-full" style={{ width: vis ? `${m.pct}%` : "0%", transition: `width 1s ease ${i * .12}s`, background: m.pct > 85 ? "linear-gradient(90deg,#22c55e,#34d399)" : "linear-gradient(90deg,#D4A22E,#C19326)" }} />
                    </div>
                  </div>
                ))}
                <div className="mt-4 rounded-2xl px-4 py-3 flex items-center gap-3" style={{ background: "rgba(212,162,46,.1)", border: "1px solid rgba(212,162,46,.2)" }}>
                  <AlertTriangle size={14} style={{ color: "#D4A22E" }} />
                  <p className="text-xs font-medium text-gray-300">ITPA automation is handling 3 low-priority alerts in background.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — copy + feature cards */}
          <div>
            <SectionHeader
              pill="Database Monitoring" title="Visibility That" accent="Prevents, Not Reacts"
              body="Our monitoring goes beyond uptime. We actively optimize your database for peak performance — covering Availability, Performance, Backup, and Health Checks at every layer."
              vis={vis} center={false}
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: <BarChart3 size={18} />, title: "Performance Optimization", desc: "Substantial performance enhancements yield measurable gains in speed and throughput." },
                { icon: <Activity size={18} />, title: "Server Monitoring", desc: "High uptime is a baseline — we fine-tune the database continuously for peak output." },
                { icon: <RefreshCw size={18} />, title: "ITPA Automation", desc: "IT Process Automation resolves incidents swiftly following escalation protocols." },
                { icon: <Cpu size={18} />, title: "NOC Operations", desc: "24×7 operations center with specialists on SolarWinds, Splunk, and IBM Netcool." },
              ].map((f, i) => (
                <div key={f.title}
                  className={`card3d glass rounded-3xl p-5 shadow-sm border-gray-200 ${vis ? `anim-scaleIn d${i + 2}` : "opacity-0"}`}>
                  <div className="icon3d w-10 h-10 rounded-xl flex items-center justify-center mb-3 border border-[#113a71]/10"
                    style={{ background: "rgba(17,58,113,0.05)", color: "#113a71" }}>
                    {f.icon}
                  </div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: "#113a71" }}>{f.title}</p>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. DATABASE IMPLEMENTATION
───────────────────────────────────────────── */
function ImplementationSection() {
  const [ref, vis] = useInView();
  const steps = [
    { icon: <Package size={20} />, title: "Capacity Planning & Sizing", desc: "We tailor the database capacity to your specific workload, growth projections, and business requirements." },
    { icon: <Settings size={20} />, title: "Installation & Configuration", desc: "On-site or remote installation, configuration, and customization of database products — built for your environment." },
  ];
  return (
    <section className="py-24 px-4 bg-white relative z-10">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <SectionHeader
              pill="Database Implementation" title="Planned, Installed," accent="Perfected"
              body="Our team of experts excels in meticulously planning and installing database systems to ensure optimal performance from day one."
              vis={vis} center={false}
            />
            <div className="space-y-4 mt-6">
              {steps.map((s, i) => (
                <div key={s.title}
                  className={`card3d glass rounded-3xl p-6 shadow-sm border-gray-200 ${vis ? `anim-slideL d${i + 3}` : "opacity-0"}`}>
                  <div className="flex gap-4">
                    <div className="icon3d shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                      style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", color: "white" }}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm mb-1.5" style={{ color: "#113a71" }}>{s.title}</p>
                      <p className="text-xs text-gray-600 font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`perspective ${vis ? "anim-slideR d3" : "opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", padding: "2px", boxShadow: "0 40px 80px -10px rgba(17,58,113,.3)" }}>
              <div className="rounded-[22px] p-8" style={{ background: "#0a192f" }}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Installation Progress</p>
                {[
                  { label: "Environment Scan", done: true },
                  { label: "Capacity Calculation", done: true },
                  { label: "Schema Deployment", done: true },
                  { label: "Config Tuning", done: false, active: true },
                  { label: "Performance Baseline", done: false },
                  { label: "Go-Live Validation", done: false },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3 py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,.05)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: s.done ? "rgba(34,197,94,.2)" : s.active ? "rgba(212,162,46,.2)" : "rgba(255,255,255,.05)" }}>
                      {s.done
                        ? <CheckCircle2 size={12} style={{ color: "#34d399" }} />
                        : s.active
                          ? <span className="w-2 h-2 rounded-full" style={{ background: "#D4A22E", animation: "pulseGreen 1s ease infinite" }} />
                          : <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,.2)" }} />}
                    </div>
                    <span className="text-xs font-bold" style={{ color: s.done ? "#34d399" : s.active ? "#D4A22E" : "#9ca3af" }}>{s.label}</span>
                    {s.active && <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-[#D4A22E]">In Progress</span>}
                  </div>
                ))}
                <div className="mt-5 rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: "rgba(212,162,46,.1)", border: "1px solid rgba(212,162,46,.2)" }}>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Estimated completion</span>
                  <span className="ml-auto font-black text-xs" style={{ color: "#D4A22E" }}>~2 hrs</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-xl hidden sm:block"
              style={{ animation: "floatY 6s ease-in-out infinite .5s" }}>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mode</p>
              <p className="text-sm font-black" style={{ color: "#113a71" }}>On-Site / Remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. DATABASE MIGRATION
───────────────────────────────────────────── */
function MigrationSection() {
  const [ref, vis] = useInView();
  const platforms = ["Oracle", "MS SQL Server", "MySQL", "Sybase", "DB2"];
  return (
    <section className="py-24 px-4 relative z-10 border-t border-gray-100" style={{ background: "linear-gradient(180deg,#f4f7f9 0%,#fff 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeader
          pill="Database Migration" title="Upgrade to Latest." accent="Zero Disruption."
          body="TechHansa offers comprehensive migration services for organizations looking to upgrade their database environment — with proven global capabilities and 24×7 optimized off-peak upgrades."
          vis={vis}
        />
        <div className={`mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 ${vis ? "anim-fadeUp d3" : "opacity-0"}`}>
          {platforms.map((p, i) => (
            <div key={p} className="flex items-center gap-0">
              <div className="card3d glass rounded-2xl px-5 py-4 flex flex-col items-center gap-1.5 min-w-[100px] text-center shadow-sm border border-gray-200">
                <Database size={24} style={{ color: "#113a71" }} />
                <span className="text-xs font-bold mt-1" style={{ color: "#113a71" }}>{p}</span>
              </div>
              {i < platforms.length - 1 && (
                <div className="hidden md:flex items-center px-2">
                  <ArrowRight size={18} style={{ color: "#D4A22E" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <Globe size={20} />, title: "Global Capabilities", desc: "Proven track record of migrating databases across geographies with strict SLAs and minimal downtime." },
            { icon: <RefreshCw size={20} />, title: "Off-Peak Execution", desc: "24×7 optimized services ensure upgrades are performed during off-peak hours in a cost-effective manner." },
            { icon: <CheckCircle2 size={20} />, title: "Latest Versions Only", desc: "We upgrade to the latest certified versions — ensuring your environment stays secure, supported, and performant." },
          ].map((c, i) => (
            <div key={c.title}
              className={`card3d relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-200 shadow-sm ${vis ? `anim-scaleIn d${i + 3}` : "opacity-0"}`}>
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-10" style={{ background: "#D4A22E" }} />
              <div className="icon3d w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", color: "white" }}>
                {c.icon}
              </div>
              <p className="font-extrabold text-[#113a71] text-lg mb-2">{c.title}</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. DATABASE PERFORMANCE OPTIMIZATION
───────────────────────────────────────────── */
function PerformanceSection() {
  const [ref, vis] = useInView();
  const areas = [
    { icon: <Settings size={18} />, label: "DB Configuration", desc: "Deep analysis of configuration settings to eliminate bottlenecks and unlock throughput." },
    { icon: <Cpu size={18} />, label: "Memory Settings", desc: "Right-sizing memory allocation across buffer pools, cache layers, and work areas." },
    { icon: <HardDrive size={18} />, label: "Storage Architecture", desc: "Storage layout and I/O path improvements that dramatically cut query latency." },
    { icon: <Globe size={18} />, label: "Network Enhancements", desc: "Optimizations particularly effective in public cloud infrastructure environments." },
  ];
  return (
    <section className="py-24 px-4 bg-white relative z-10">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className={`perspective ${vis ? "anim-slideL d2" : "opacity-0"}`}>
            <div className="rounded-3xl p-1 shadow-2xl"
              style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", boxShadow: "0 40px 80px -10px rgba(17,58,113,.2)" }}>
              <div className="rounded-[22px] p-8" style={{ background: "rgba(255,255,255,.03)" }}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">Performance Score</p>
                <div className="flex items-end gap-3 mb-8">
                  <span className="text-6xl font-black" style={{ color: "#D4A22E", lineHeight: 1 }}>94</span>
                  <span className="text-gray-400 font-bold text-sm mb-1 uppercase tracking-widest">/ 100 — Post Optimization</span>
                </div>
                {[
                  { label: "Query Speed",      before: 52, after: 91 },
                  { label: "Index Efficiency", before: 61, after: 96 },
                  { label: "I/O Throughput",   before: 44, after: 88 },
                  { label: "Memory Usage",     before: 78, after: 95 },
                ].map((s, i) => (
                  <div key={s.label} className="mb-5">
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-300">{s.label}</span>
                      <span className="text-gray-500">Before <span style={{ color: "#f87171" }}>{s.before}%</span>  →  After <span style={{ color: "#34d399" }}>{s.after}%</span></span>
                    </div>
                    <div className="relative h-2.5 rounded-full" style={{ background: "rgba(255,255,255,.1)" }}>
                      <div className="absolute top-0 left-0 h-full rounded-full opacity-50"
                        style={{ width: vis ? `${s.before}%` : "0%", background: "#f87171", transition: `width .9s ease ${i * .12}s` }} />
                      <div className="absolute top-0 left-0 h-full rounded-full"
                        style={{ width: vis ? `${s.after}%` : "0%", background: "linear-gradient(90deg,#D4A22E,#C19326)", transition: `width 1.1s ease ${i * .12 + .2}s` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              pill="Performance Optimization" title="Diagnose. Tune." accent="Accelerate."
              body="We conduct a thorough analysis of your pain points and provide recommendations on configuration, memory settings, storage architecture, and network enhancements — particularly in public cloud."
              vis={vis} center={false}
            />
            <div className="grid grid-cols-2 gap-5 mt-8">
              {areas.map((a, i) => (
                <div key={a.label}
                  className={`card3d glass rounded-3xl p-6 shadow-sm border-gray-100 ${vis ? `anim-scaleIn d${i + 3}` : "opacity-0"}`}>
                  <div className="icon3d w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-[#113a71]/10"
                    style={{ background: "rgba(17,58,113,0.05)", color: "#113a71" }}>
                    {a.icon}
                  </div>
                  <p className="font-extrabold text-sm mb-1.5" style={{ color: "#113a71" }}>{a.label}</p>
                  <p className="text-xs font-medium text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. DATABASE SECURITY HARDENING
───────────────────────────────────────────── */
function SecuritySection() {
  const [ref, vis] = useInView();
  const pillars = [
    { icon: <Shield size={20} />, title: "Protection Plan Creation", desc: "Design comprehensive security plans specifically tailored to reduce data protection costs and risks." },
    { icon: <Lock size={20} />, title: "Implementation", desc: "Hands-on implementation of security policies, access controls, and encryption layers." },
    { icon: <Activity size={20} />, title: "Continuous Monitoring", desc: "Ongoing monitoring to ensure data integrity is maintained and breaches are detected instantly." },
  ];
  return (
    <section className="py-24 px-4 relative z-10 border-t border-gray-100" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#fff 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              pill="Security Hardening" title="Secure Every" accent="Data Layer"
              body="TechHansa helps you reduce data protection costs by creating, preparing, implementing, and continuously monitoring a security plan that ensures data integrity across all database environments."
              vis={vis} center={false}
            />
            <div className="space-y-5 mt-8">
              {pillars.map((p, i) => (
                <div key={p.title}
                  className={`card3d glass rounded-3xl p-6 shadow-sm border-gray-200 ${vis ? `anim-slideL d${i + 3}` : "opacity-0"}`}>
                  <div className="flex gap-5 items-start">
                    <div className="icon3d shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                      style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", color: "white" }}>
                      {p.icon}
                    </div>
                    <div>
                      <p className="font-extrabold text-base mb-1.5" style={{ color: "#113a71" }}>{p.title}</p>
                      <p className="text-sm font-medium text-gray-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`perspective ${vis ? "anim-slideR d3" : "opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", boxShadow: "0 40px 80px -10px rgba(17,58,113,.2)" }}>
              <div className="p-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-inner"
                      style={{ background: "rgba(212,162,46,.1)", border: "2px solid rgba(212,162,46,.4)", animation: "pulse3d 2.5s ease infinite" }}>
                      <Shield size={56} style={{ color: "#D4A22E" }} />
                    </div>
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} className="absolute w-3.5 h-3.5 rounded-full"
                        style={{
                          background: i % 2 === 0 ? "#D4A22E" : "#34d399",
                          top: `${50 + 44 * Math.sin(i * Math.PI / 2)}%`,
                          left: `${50 + 44 * Math.cos(i * Math.PI / 2)}%`,
                          transform: "translate(-50%,-50%)",
                          opacity: .8,
                          animation: `pulseGreen ${1.5 + i * .3}s ease infinite ${i * .4}s`
                        }} />
                    ))}
                  </div>
                </div>
                {[
                  "Encryption at rest & in transit",
                  "Role-based access control (RBAC)",
                  "Audit logging & compliance",
                  "Vulnerability assessments",
                  "Data masking & tokenization",
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.1)" }}>
                    <CheckCircle2 size={16} style={{ color: "#34d399", shrink: 0 }} />
                    <span className="text-sm font-bold text-gray-300">{item}</span>
                    <span className="ml-auto text-[10px] font-black uppercase tracking-widest" style={{ color: "#34d399" }}>Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. HIGH AVAILABILITY / DR
───────────────────────────────────────────── */
function HaSection() {
  const [ref, vis] = useInView();
  const techs = ["Oracle Streams", "Advanced Replication", "Oracle Data Guard", "Real Application Clusters"];
  return (
    <section className="py-24 px-4 bg-white relative z-10 border-t border-gray-100">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeader
          pill="High Availability / DR" title="Production Never" accent="Stops"
          body="Our extensive experience includes managing database replication using leading technologies. We design, plan, implement, and test comprehensive backup and recovery strategies tailored to your needs."
          vis={vis}
        />

        <div className={`grid md:grid-cols-3 gap-6 mt-12 ${vis ? "anim-fadeUp d3" : "opacity-0"}`}>
          {/* Primary site */}
          <div className="card3d rounded-3xl p-8 text-center shadow-lg"
            style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", border: "1px solid rgba(255,255,255,.1)" }}>
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 shadow-inner"
              style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)" }}>
              <Server size={24} className="text-white" />
            </div>
            <p className="font-extrabold text-white text-base">Primary Site</p>
            <p className="text-sm font-medium text-gray-400 mt-1.5">Production Databases</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulseGreen 1.3s ease infinite" }} />
              Live
            </span>
          </div>
          {/* Replication */}
          <div className="card3d rounded-3xl p-8 text-center glass shadow-sm border border-gray-200">
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 border border-[#113a71]/10"
              style={{ background: "rgba(17,58,113,0.05)" }}>
              <GitMerge size={24} style={{ color: "#113a71" }} />
            </div>
            <p className="font-extrabold text-base" style={{ color: "#113a71" }}>Replication Layer</p>
            <p className="text-sm font-medium text-gray-500 mt-1.5">Continuous Sync</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {techs.map(t => (
                <span key={t} className="text-[10px] px-2.5 py-1 rounded-lg font-bold border border-[#D4A22E]/20"
                  style={{ background: "rgba(212,162,46,0.1)", color: "#D4A22E" }}>{t}</span>
              ))}
            </div>
          </div>
          {/* DR site */}
          <div className="card3d rounded-3xl p-8 text-center shadow-lg"
            style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", border: "1px solid rgba(255,255,255,.1)" }}>
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 shadow-inner"
              style={{ background: "rgba(34,197,94,0.2)" }}>
              <Cloud size={24} style={{ color: "#34d399" }} />
            </div>
            <p className="font-extrabold text-white text-base">DR Site</p>
            <p className="text-sm font-medium text-gray-400 mt-1.5">Disaster Recovery Ready</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A22E]">
              <span className="w-2 h-2 rounded-full bg-[#D4A22E]" style={{ animation: "pulseGreen 1.6s ease infinite .3s" }} />
              Standby
            </span>
          </div>
        </div>

        <div className={`mt-10 glass rounded-3xl p-8 shadow-sm border border-gray-200 ${vis ? "anim-fadeUp d5" : "opacity-0"}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-extrabold text-base mb-2" style={{ color: "#113a71" }}>Public Cloud DR</p>
              <p className="text-sm font-medium text-gray-600 leading-relaxed">Leveraging public cloud availability provides a cost-effective DR solution without the overhead of a secondary physical data center.</p>
            </div>
            <div>
              <p className="font-extrabold text-base mb-2" style={{ color: "#113a71" }}>End-to-End DR Lifecycle</p>
              <p className="text-sm font-medium text-gray-600 leading-relaxed">We collaborate with you to design, plan, implement, and test comprehensive backup and recovery strategies tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. DATABASE AUTOMATION
───────────────────────────────────────────── */
function AutomationSection() {
  const [ref, vis] = useInView();
  const tasks = [
    { icon: <BarChart3 size={16} />, label: "Reporting", status: "auto" },
    { icon: <Cpu size={16} />, label: "Capacity Planning", status: "auto" },
    { icon: <AlertTriangle size={16} />, label: "Pre-Outage Alerts", status: "auto" },
    { icon: <Activity size={16} />, label: "Health Checks", status: "auto" },
    { icon: <RefreshCw size={16} />, label: "Backup Verification", status: "auto" },
    { icon: <Settings size={16} />, label: "Patch Management", status: "scheduled" },
  ];
  return (
    <section className="py-24 px-4 relative z-10 border-t border-gray-100" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#fff 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={`perspective ${vis ? "anim-slideL d2" : "opacity-0"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "#0a192f", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 40px 80px -10px rgba(17,58,113,.25)" }}>
              <div className="px-6 py-4 flex items-center gap-2" style={{ background: "rgba(255,255,255,.05)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-bold text-gray-400 font-mono tracking-widest uppercase">automation-engine v3.4.1</span>
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-5">Automated Tasks Running</p>
                <div className="space-y-4">
                  {tasks.map((t, i) => (
                    <div key={t.label} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5"
                      style={{ background: "rgba(255,255,255,.03)" }}>
                      <span style={{ color: "#D4A22E" }}>{t.icon}</span>
                      <span className="text-sm font-bold text-gray-300 flex-1">{t.label}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border"
                        style={{ 
                          background: t.status === "auto" ? "rgba(34,197,94,.1)" : "rgba(212,162,46,.1)", 
                          color: t.status === "auto" ? "#34d399" : "#D4A22E",
                          borderColor: t.status === "auto" ? "rgba(34,197,94,.2)" : "rgba(212,162,46,.2)"
                        }}>
                        {t.status === "auto" ? "● Running" : "◑ Scheduled"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 font-mono text-sm font-bold text-gray-400 flex items-center gap-2">
                  <span style={{ color: "#D4A22E" }}>$</span>
                  <span>db-auto --monitor --all</span>
                  <span style={{ animation: "blink 1s step-end infinite" }}>▋</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              pill="Database Automation" title="Outages Predicted," accent="Not Experienced"
              body="Our database automation services deploy a sophisticated set of proprietary scripts that fully automate reporting, capacity planning, and pre-outage alerts — dramatically reducing the probability of a database outage."
              vis={vis} center={false}
            />
            <div className={`mt-8 glass rounded-3xl p-8 border-gray-200 shadow-sm ${vis ? "anim-slideR d4" : "opacity-0"}`}>
              <p className="font-extrabold text-base mb-4 uppercase tracking-widest text-[#113a71]">How it works</p>
              <div className="space-y-4">
                {[
                  "Address conditions that may lead to an outage proactively",
                  "Automated capacity planning prevents resource exhaustion",
                  "Pre-outage alerts trigger before your database crashes",
                  "Probability of database outage dramatically reduced",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "#D4A22E" }} />
                    <span className="text-sm font-medium text-gray-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   8. DATABASE VIRTUALIZATION
───────────────────────────────────────────── */
function VirtualizationSection() {
  const [ref, vis] = useInView();
  return (
    <section className="py-24 px-4 bg-white relative z-10 border-t border-gray-100">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              pill="Database Virtualization" title="Minutes, Not" accent="Weeks to Deploy"
              body="Virtualization streamlines the provisioning of database instances through templates, allowing for rapid deployment. Creating a new DB instance from a virtual machine template takes minutes instead of the days or weeks typically required with traditional hardware and software delivery."
              vis={vis} center={false}
            />
            <div className="grid grid-cols-2 gap-5 mt-8">
              {[
                { icon: <Copy size={20} />, title: "Template Cloning", desc: "New DB instances in minutes from pre-configured VM templates." },
                { icon: <Layers size={20} />, title: "Rapid Provisioning", desc: "Slash setup time from weeks to minutes across any environment." },
                { icon: <Move size={20} />, title: "Flexible Delivery", desc: "Replace traditional hardware-bound setups with agile virtual instances." },
                { icon: <Zap size={20} />, title: "DCM Expertise", desc: "DCM can help you realize your goal of database virtualization today." },
              ].map((f, i) => (
                <div key={f.title}
                  className={`card3d glass rounded-3xl p-6 shadow-sm border-gray-200 ${vis ? `anim-scaleIn d${i + 3}` : "opacity-0"}`}>
                  <div className="icon3d w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-inner"
                    style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", color: "white" }}>
                    {f.icon}
                  </div>
                  <p className="font-extrabold text-sm mb-1.5" style={{ color: "#113a71" }}>{f.title}</p>
                  <p className="text-xs font-medium text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`perspective ${vis ? "anim-slideR d3" : "opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", padding: "2px", boxShadow: "0 40px 80px -10px rgba(17,58,113,.25)" }}>
              <div className="rounded-[22px] p-8 md:p-10" style={{ background: "#0a192f" }}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Provisioning Comparison</p>
                
                {/* Traditional */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs font-bold mb-3">
                    <span className="text-gray-300">Traditional (Hardware)</span>
                    <span style={{ color: "#f87171" }}>Days — Weeks</span>
                  </div>
                  <div className="h-10 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,.05)" }}>
                    <div className="h-full rounded-xl flex items-center px-4"
                      style={{ width: "100%", background: "linear-gradient(90deg,rgba(248,113,113,.3),rgba(248,113,113,.1))", border: "1px solid rgba(248,113,113,.3)" }}>
                      <span className="text-[10px] font-bold" style={{ color: "#fca5a5" }}>Hardware → OS → Install → Config → Test → Go-Live</span>
                    </div>
                  </div>
                </div>
                
                {/* Virtualized */}
                <div className="mb-10">
                  <div className="flex justify-between text-xs font-bold mb-3">
                    <span className="text-gray-300">Virtualized (Template)</span>
                    <span style={{ color: "#34d399" }}>Minutes</span>
                  </div>
                  <div className="h-10 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,.05)" }}>
                    <div className="h-full rounded-xl flex items-center px-4"
                      style={{ width: vis ? "35%" : "0%", background: "linear-gradient(90deg,rgba(52,211,153,.4),rgba(52,211,153,.1))", border: "1px solid rgba(52,211,153,.4)", transition: "width 1.2s ease .3s" }}>
                      <span className="text-[10px] font-bold whitespace-nowrap" style={{ color: "#6ee7b7" }}>Clone → Launch</span>
                    </div>
                  </div>
                </div>
                
                {/* Savings callout */}
                <div className="rounded-2xl p-6 text-center border border-[#D4A22E]/30"
                  style={{ background: "linear-gradient(135deg,rgba(212,162,46,.15),rgba(212,162,46,.05))" }}>
                  <p className="text-4xl font-black" style={{ color: "#D4A22E" }}>~95%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Reduction in provisioning time</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 shadow-xl hidden sm:block"
              style={{ animation: "floatY 5.5s ease-in-out infinite" }}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Method</p>
              <p className="text-sm font-black" style={{ color: "#113a71" }}>VM Templates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA FOOTER SECTION (Light Theme fix for Footer Clash)
───────────────────────────────────────────── */
function CtaSection() {
  const [ref, vis] = useInView();
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-gray-100"
      style={{ background: "linear-gradient(180deg,#ffffff 0%,#f4f7f9 100%)" }}> {/* Modified from dark to light theme */}
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        
        {/* Decorative rings (Adjusted colors for light background) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          {[200, 350, 500].map((size, i) => (
            <div key={size} className="absolute rounded-full"
              style={{ width: size, height: size, border: "1px dashed rgba(17,58,113,.1)", animation: `floatY ${8 + i * 2}s ease-in-out infinite ${i * .8}s` }} />
          ))}
          <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-br from-[#113a71]/5 to-[#D4A22E]/5 rounded-full blur-3xl" />
        </div>

        <div className={`relative z-10 ${vis ? "anim-fadeUp d1" : "opacity-0"}`}>
          <Pill text="Get Started Today" />
          <h2 className="mt-6 font-extrabold text-[#113a71] leading-tight"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.015em" }}>
            Ready to Optimize<br /><GoldText>Your Databases?</GoldText>
          </h2>
          <p className="mt-6 text-gray-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            From monitoring and migration to high availability and automation — our database specialists
            are ready to transform your entire database estate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="btn-glow flex items-center gap-2 px-9 py-4 rounded-2xl font-bold text-white text-base"
              style={{ background: "linear-gradient(135deg,#113a71,#0a192f)", boxShadow: "0 10px 30px rgba(17,58,113,.3)" }}>
              Schedule a Consultation <ArrowRight size={18} />
            </button>
            <button className="glass flex items-center gap-2 px-9 py-4 rounded-2xl font-bold text-base hover:shadow-lg transition-all border-gray-300"
              style={{ color: "#113a71", background: "white" }}>
              View All Services <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-x-hidden selection:bg-[#D4A22E] selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <BgOrbs />
      <Hero />
      <MonitoringSection />
      <ImplementationSection />
      <MigrationSection />
      <PerformanceSection />
      <SecuritySection />
      <HaSection />
      <AutomationSection />
      <VirtualizationSection />
      <CtaSection />
    </div>
  );
}