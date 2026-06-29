import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Server,
  Database,
  HardDrive,
  Cloud,
  Shield,
  Building2,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Network,
  BarChart3,
  RefreshCw,
  Lock,
  Zap,
  Monitor,
  Settings,
  GitBranch,
  Package,
  Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────
   HOOK: Intersection Observer for scroll reveal
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   HOOK: Mouse parallax for hero
───────────────────────────────────────────── */
function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

/* ─────────────────────────────────────────────
   FLOATING ORBS BACKGROUND (Techhansa Theme)
───────────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,162,46,0.08) 0%, transparent 70%)", animation: "float1 14s ease-in-out infinite" }} />
      <div className="absolute top-[30%] right-[-120px] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(17,58,113,0.06) 0%, transparent 70%)", animation: "float2 18s ease-in-out infinite" }} />
      <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(17,58,113,0.04) 0%, transparent 70%)", animation: "float1 22s ease-in-out infinite reverse" }} />
      <style>{`
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-40px) scale(1.05)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-25px,35px) scale(0.95)} }
        @keyframes floatY { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-18px)} }
        @keyframes floatYS { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-12px) rotate(8deg)} }
        @keyframes spin3d { 0%{transform:rotateY(0deg) rotateX(0deg)} 100%{transform:rotateY(360deg) rotateX(15deg)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideLeft { from{opacity:0;transform:translateX(-50px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slideRight { from{opacity:0;transform:translateX(50px)} to{opacity:1;transform:translateX(0)} }
        @keyframes scaleIn { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse3d { 0%,100%{box-shadow:0 0 0 0 rgba(212,162,46,0.3)} 50%{box-shadow:0 0 30px 10px rgba(212,162,46,0.15)} }
        .animate-fadeUp { animation: fadeUp 0.7s ease forwards; }
        .animate-slideLeft { animation: slideLeft 0.7s ease forwards; }
        .animate-slideRight { animation: slideRight 0.7s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease forwards; }
        .card-3d { transition: transform 0.4s cubic-bezier(.25,.46,.45,.94), box-shadow 0.4s ease; }
        .card-3d:hover { transform: translateY(-10px) rotateX(3deg) rotateY(-2deg) scale(1.02); box-shadow: 0 40px 80px -10px rgba(17,58,113,0.15), 0 20px 40px -5px rgba(212,162,46,0.1); }
        .icon-3d { transition: transform 0.3s ease; }
        .card-3d:hover .icon-3d { transform: scale(1.2) rotateY(15deg); }
        .btn-glow { transition: all 0.3s ease; }
        .btn-glow:hover { box-shadow: 0 0 30px rgba(17,58,113,0.4), 0 8px 20px rgba(0,0,0,0.2); transform: translateY(-2px); }
        .glass { background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(17,58,113,0.08); }
        .glass-dark { background: rgba(10,25,47,0.8); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
        .perspective { perspective: 1200px; }
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL (Techhansa Theme)
───────────────────────────────────────────── */
function SectionLabel({ text }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
      style={{ background: "rgba(212,162,46,0.1)", color: "#D4A22E", border: "1px solid rgba(212,162,46,0.3)" }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4A22E", animation: "pulse3d 2s ease infinite" }} />
      {text}
    </span>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  const mouse = useMouseParallax();
  const services = [
    { icon: <Activity size={18} />, label: "Monitoring" },
    { icon: <Server size={18} />, label: "Server Mgmt" },
    { icon: <Database size={18} />, label: "Storage" },
    { icon: <Shield size={18} />, label: "Backup & DR" },
    { icon: <Building2 size={18} />, label: "Facility" },
  ];
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white pt-16 pb-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 40%, #f4f7f9 100%)" }}>

      {/* Decorative 3D shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-3xl opacity-20 hidden md:block"
        style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", transform: `rotate(${15 + mouse.x * 5}deg) translateY(${mouse.y * -15}px)`, animation: "floatY 6s ease-in-out infinite", boxShadow: "8px 8px 30px rgba(212,162,46,0.3)" }} />
      <div className="absolute bottom-16 left-10 w-20 h-20 rounded-2xl opacity-15 hidden md:block"
        style={{ background: "linear-gradient(135deg,#113a71,#1e509c)", transform: `rotate(${-20 + mouse.x * -4}deg) translateY(${mouse.y * 10}px)`, animation: "floatYS 8s ease-in-out infinite 1s" }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-15 hidden lg:block"
        style={{ background: "#D4A22E", transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`, animation: "floatY 10s ease-in-out infinite 2s" }} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fadeUp" style={{ animationDelay: "0s" }}>
            <SectionLabel text="Managed Data Center Services" />
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: "#113a71" }}>
              Your Infrastructure,{" "}
              <span className="relative inline-block">
                <span style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Always On
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 5 Q100 0 200 5" stroke="#D4A22E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
              Today's businesses need continuous service availability, not just hardware uptime.
              We simplify, optimize, and automate your entire IT infrastructure — so your teams
              can focus on what matters most.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#113a71,#0a192f)", boxShadow: "0 8px 25px rgba(17,58,113,0.3)" }}>
                Get Started <ArrowRight size={16} />
              </button>
              <button className="glass flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm hover:shadow-lg transition-all"
                style={{ color: "#113a71" }}>
                View Services <ArrowRight size={16} />
              </button>
            </div>
            {/* Benefit pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Reduced IT Costs", "Enhanced Efficiency", "Increased Productivity"].map((b) => (
                <span key={b} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-white border border-gray-200 shadow-sm"
                  style={{ color: "#113a71" }}>
                  <CheckCircle2 size={14} style={{ color: "#D4A22E" }} /> {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 3D card cluster */}
          <div className="perspective flex justify-center" style={{ animation: "fadeUp 0.9s 0.3s ease forwards", opacity: 0 }}>
            <div className="relative w-full max-w-sm">
              {/* Central hub card */}
              <div className="glass rounded-3xl p-8 shadow-2xl relative z-10"
                style={{ transform: `rotateY(${mouse.x * -4}deg) rotateX(${mouse.y * 3}deg)`, transition: "transform 0.3s ease", boxShadow: "0 30px 60px -10px rgba(17,58,113,0.15), 0 10px 40px rgba(212,162,46,0.08)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Data Center</p>
                    <p className="font-extrabold text-xl mt-0.5" style={{ color: "#113a71" }}>Services Hub</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#D4A22E,#C19326)", boxShadow: "0 8px 20px rgba(212,162,46,0.4)" }}>
                    <Cpu size={20} className="text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {services.map(({ icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-[#f4f7f9] transition-colors cursor-pointer group">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#113a71] group-hover:scale-110 transition-transform shadow-inner"
                        style={{ background: "rgba(17,58,113,0.05)", border: "1px solid rgba(17,58,113,0.1)" }}>
                        {icon}
                      </div>
                      <span className="text-[9px] font-bold text-gray-500 text-center leading-tight">{label}</span>
                    </div>
                  ))}
                </div>
                {/* Live status bar */}
                <div className="mt-6 p-3 rounded-2xl" style={{ background: "linear-gradient(135deg,rgba(17,58,113,0.04),rgba(212,162,46,0.06))" }}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#113a71] font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "pulse3d 1.5s ease infinite" }} />
                      All Systems Operational
                    </span>
                    <span className="font-extrabold" style={{ color: "#D4A22E" }}>24 × 7</span>
                  </div>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-xl z-20 hidden sm:block"
                style={{ animation: "floatY 5s ease-in-out infinite" }}>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime SLA</p>
                <p className="text-lg font-black" style={{ color: "#D4A22E" }}>99.99%</p>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2.5 shadow-xl z-20 hidden sm:block"
                style={{ animation: "floatY 7s ease-in-out infinite 1s" }}>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">NOC Coverage</p>
                <p className="text-lg font-black" style={{ color: "#113a71" }}>24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MONITORING SERVICES
───────────────────────────────────────────── */
function MonitoringSection() {
  const [ref, visible] = useInView();
  const tools = [
    { icon: <BarChart3 size={16} />, name: "SolarWinds", desc: "Performance metrics & alerting" },
    { icon: <Activity size={16} />, name: "Splunk", desc: "Log management & analytics" },
    { icon: <Network size={16} />, name: "IBM Netcool", desc: "Event correlation engine" },
  ];
  const features = [
    { icon: <Monitor size={20} />, title: "High-Level Visibility", desc: "Comprehensive monitoring across all IT components — servers, networks, storage, databases, and backups." },
    { icon: <Zap size={20} />, title: "Proactive Issue Resolution", desc: "Empowers teams to materialize and fix potentially critical issues before they impact business operations." },
    { icon: <RefreshCw size={20} />, title: "ITPA Automation", desc: "IT Process Automation handles diagnostic, escalation, and remediation protocols — reducing manual workload." },
    { icon: <Settings size={20} />, title: "NOC Operations", desc: "Our 24×7 Network Operations Center ensures continuous visibility and rapid response to every incident." },
  ];
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100" style={{ background: "linear-gradient(180deg,#f4f7f9 0%,#ffffff 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={visible ? "animate-fadeUp stagger-1" : "opacity-0"}>
            <SectionLabel text="Monitoring Services" />
          </div>
          <h2 className={`mt-4 text-3xl md:text-5xl font-extrabold ${visible ? "animate-fadeUp stagger-2" : "opacity-0"}`} style={{ color: "#113a71" }}>
            Eyes on Everything, <span style={{ color: "#D4A22E" }}>All the Time</span>
          </h2>
          <p className={`mt-4 text-gray-600 max-w-2xl font-medium text-lg mx-auto ${visible ? "animate-fadeUp stagger-3" : "opacity-0"}`}>
            Techhansa's monitoring services leverage various tools to oversee the health and performance
            of your entire data center ecosystem — enabling proactive action, not reactive scramble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title}
                className={`card-3d glass rounded-3xl p-6 shadow-sm border-gray-100 ${visible ? `animate-fadeUp stagger-${i + 2}` : "opacity-0"}`}>
                <div className="icon-3d w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(17,58,113,0.05)", color: "#113a71", border: "1px solid rgba(17,58,113,0.1)" }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#113a71" }}>{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Tools panel */}
          <div className={`perspective ${visible ? "animate-slideRight stagger-3" : "opacity-0"}`}>
            <div className="rounded-3xl p-1 shadow-2xl" style={{ background: "linear-gradient(135deg,#0a192f,#113a71)", boxShadow: "0 40px 80px -10px rgba(17,58,113,0.3)" }}>
              <div className="rounded-[22px] p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs font-bold tracking-widest text-gray-400 uppercase">NOC Dashboard — Live</span>
                </div>
                {/* Simulated monitor rows */}
                {["Web Servers", "Storage Arrays", "Network Fabric", "Backup Jobs", "Database Cluster"].map((item, i) => (
                  <div key={item} className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-sm font-bold text-gray-200">{item}</span>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full"
                          style={{ width: `${[82, 67, 91, 55, 78][i]}%`, background: "linear-gradient(90deg,#D4A22E,#C19326)", transition: "width 1s ease" }} />
                      </div>
                      <span className="w-2 h-2 rounded-full" style={{ background: i === 3 ? "#D4A22E" : "#22c55e" }} />
                    </div>
                  </div>
                ))}
                {/* Tool badges */}
                <div className="mt-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Supported Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((t) => (
                      <div key={t.name} className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
                        style={{ background: "rgba(212,162,46,0.15)", color: "#D4A22E", border: "1px solid rgba(212,162,46,0.2)" }}>
                        {t.icon} {t.name}
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

/* ─────────────────────────────────────────────
   SERVER MANAGEMENT
───────────────────────────────────────────── */
function ServerSection() {
  const [ref, visible] = useInView();
  const categories = [
    {
      tag: "01",
      title: "IT Infrastructure Design & Deployment",
      color: "#D4A22E",
      items: [
        "Implementation, configuration, and upgrading of IT infrastructure",
        "Expertise in migration, advanced troubleshooting, and performance tuning",
        "Proficiency in virtualization and enhancing OS security",
        "Specialization in OS hardening for AIX, Linux, Solaris, HP-UX, and Windows",
      ],
    },
    {
      tag: "02",
      title: "Steady State Support",
      color: "#113a71",
      items: [
        "DCM offers steady state support via remote or on-site assistance",
        "Administration and management of all IT infrastructure components",
        "Fully equipped 24×7 Operations Center with secure network infrastructure",
        "Remote support delivery to valued customers worldwide",
      ],
    },
  ];
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className={`perspective ${visible ? "animate-slideLeft stagger-1" : "opacity-0"}`}>
            <div className="relative">
              {/* Main visual card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(135deg,#0a192f 0%,#113a71 50%,#0a192f 100%)", padding: "2px" }}>
                <div className="rounded-[22px] p-8 md:p-10" style={{ background: "#0a192f" }}>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[<Server size={24} />, <Cpu size={24} />, <GitBranch size={24} />].map((ic, i) => (
                      <div key={i} className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5"
                        style={{ background: `linear-gradient(135deg,rgba(${i === 0 ? "212,162,46" : i === 1 ? "17,58,113" : "16,185,129"},0.15),transparent)` }}>
                        <span style={{ color: i === 0 ? "#D4A22E" : i === 1 ? "#60a5fa" : "#34d399" }}>{ic}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{["Deploy", "Configure", "Migrate"][i]}</span>
                      </div>
                    ))}
                  </div>
                  {/* Server racks visual */}
                  <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-16 rounded-xl flex flex-col gap-1.5 p-2.5 justify-center"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        {[0, 1, 2].map((j) => (
                          <div key={j} className="h-1 rounded-full"
                            style={{ background: Math.random() > 0.3 ? "rgba(34,197,94,0.8)" : "rgba(212,162,46,0.8)", width: `${40 + (i * j * 17) % 50}%`, transition: "width 2s ease" }} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm font-bold text-gray-400">
                    <span>8 Servers Active</span>
                    <span className="flex items-center gap-1.5 text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse3d 1.5s ease infinite" }} />
                      All Healthy
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating annotation */}
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-3 shadow-xl hidden sm:block"
                style={{ animation: "floatY 6s ease-in-out infinite 0.5s" }}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">OS Platforms</p>
                <div className="flex gap-2 mt-2 text-xs font-bold text-[#113a71]">
                  {["AIX", "Linux", "Win", "Sol"].map((o) => (
                    <span key={o} className="px-2.5 py-1 rounded-lg border border-[#D4A22E]/30" style={{ background: "rgba(212,162,46,0.1)", color: "#D4A22E" }}>{o}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className={visible ? "animate-fadeUp stagger-1" : "opacity-0"}>
              <SectionLabel text="Server Management" />
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold" style={{ color: "#113a71" }}>
                Remote & On-Site Server<br />
                <span style={{ color: "#D4A22E" }}>Expertise at Scale</span>
              </h2>
              <p className="mt-4 text-gray-600 font-medium text-lg leading-relaxed">
                Our server-related services encompass both remote and on-site administration — covering
                IT infrastructure design, solution implementation, migration, upgrades, and continuous support.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {categories.map((cat, ci) => (
                <div key={cat.tag}
                  className={`card-3d glass rounded-3xl p-8 border-gray-100 shadow-sm ${visible ? `animate-fadeUp stagger-${ci + 3}` : "opacity-0"}`}>
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 text-3xl font-black opacity-20" style={{ color: cat.color }}>{cat.tag}</span>
                    <div>
                      <h3 className="font-extrabold text-lg mb-4" style={{ color: "#113a71" }}>{cat.title}</h3>
                      <ul className="space-y-3">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: cat.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
   STORAGE MANAGEMENT
───────────────────────────────────────────── */
function StorageSection() {
  const [ref, visible] = useInView();
  const capabilities = [
    { icon: <Package size={20} />, title: "Solution Deployment", desc: "Plan, design, build, implement, and administer storage solutions using industry best practices. Trusted providers: IBM, HP, Hitachi, EMC, NetApp." },
    { icon: <Settings size={20} />, title: "Systems Expertise", desc: "With extensive experience, we configure, upgrade, migrate, consolidate, and troubleshoot various storage systems." },
    { icon: <Cloud size={20} />, title: "Cloud Storage Evaluation", desc: "We evaluate and recommend the right cloud storage solutions tailored to your specific business needs." },
    { icon: <Layers size={20} />, title: "Cloud Integration", desc: "Seamless integration of on-premises and cloud-based storage environments for enhanced operational efficiency." },
    { icon: <Zap size={20} />, title: "Performance Tuning", desc: "We specialize in optimizing your storage infrastructure's full capabilities to ensure smooth, consistent operations." },
  ];
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#ffffff 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={visible ? "animate-fadeUp stagger-1" : "opacity-0"}>
            <SectionLabel text="Storage Management" />
          </div>
          <h2 className={`mt-4 text-3xl md:text-5xl font-extrabold ${visible ? "animate-fadeUp stagger-2" : "opacity-0"}`} style={{ color: "#113a71" }}>
            From Terabytes to Petabytes —<br />
            <span style={{ color: "#D4A22E" }}>Mastered</span>
          </h2>
          <p className={`mt-6 text-gray-600 font-medium max-w-2xl mx-auto text-lg ${visible ? "animate-fadeUp stagger-3" : "opacity-0"}`}>
            Storage has evolved from a simple concern to a complex, constantly evolving discipline. Customers now
            manage storage both on-premises and in cloud-based applications. Our team covers it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={cap.title}
              className={`card-3d relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-200 shadow-sm ${visible ? `animate-scaleIn stagger-${Math.min(i + 1, 6)}` : "opacity-0"} ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10"
                style={{ background: "#D4A22E" }} />
              <div className="icon-3d w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-[#113a71]/10"
                style={{ background: "rgba(17,58,113,0.05)", color: "#113a71" }}>
                <span>{cap.icon}</span>
              </div>
              <h3 className="font-extrabold text-lg mb-3" style={{ color: "#113a71" }}>{cap.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BACKUP & RECOVERY SERVICES
───────────────────────────────────────────── */
function BackupSection() {
  const [ref, visible] = useInView();
  const solutions = [
    { icon: <Cloud size={20} />, title: "Cloud Backup Design", desc: "Specializing in designing cloud backup solutions using public cloud infrastructure for maximum flexibility and cost efficiency.", tools: [] },
    { icon: <HardDrive size={20} />, title: "Enterprise Backup Solutions", desc: "Design, implementation, configuration, upgrading, migration, and troubleshooting of enterprise backup solutions.", tools: ["IBM Spectrum Protect", "HP Data Protector", "Legato", "EMC Avamar", "Symantec NetBackup"] },
    { icon: <RefreshCw size={20} />, title: "Disaster Recovery Architecture", desc: "Architecting and implementing robust disaster recovery solutions to safeguard your data and ensure business continuity.", tools: [] },
  ];
  const compliance = ["HIPAA", "Sarbanes-Oxley", "FRCP"];
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className={visible ? "animate-fadeUp stagger-1" : "opacity-0"}>
              <SectionLabel text="Backup & Recovery" />
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: "#113a71" }}>
                Protect Every Byte.<br />
                <span style={{ color: "#D4A22E" }}>Recover in Seconds.</span>
              </h2>
              <p className="mt-6 text-gray-600 font-medium text-lg leading-relaxed">
                The magnitude of data, its substantial value, and legal obligations have made effective data management
                mission-critical. In today's landscape, rapid access to repositories for extended periods is essential.
              </p>
              <div className="mt-8 p-6 rounded-3xl flex flex-wrap gap-3" style={{ background: "rgba(212,162,46,0.05)", border: "1px solid rgba(212,162,46,0.2)" }}>
                <p className="w-full text-sm font-bold text-[#113a71] mb-2 uppercase tracking-widest">Compliance Standards</p>
                {compliance.map((c) => (
                  <span key={c} className="px-4 py-2 rounded-xl text-xs font-bold shadow-sm"
                    style={{ background: "#ffffff", border: "1px solid rgba(212,162,46,0.3)", color: "#D4A22E" }}>
                    <Lock size={12} className="inline mr-1.5" />{c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Solution cards */}
          <div className="space-y-6">
            {solutions.map((s, i) => (
              <div key={s.title}
                className={`card-3d glass rounded-3xl p-8 border-gray-100 shadow-sm ${visible ? `animate-slideRight stagger-${i + 2}` : "opacity-0"}`}>
                <div className="flex gap-5">
                  <div className="icon-3d shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border border-[#113a71]/10 shadow-inner"
                    style={{ background: "rgba(17,58,113,0.05)", color: "#113a71" }}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg mb-2" style={{ color: "#113a71" }}>{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">{s.desc}</p>
                    {s.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {s.tools.map((t) => (
                          <span key={t} className="text-[11px] px-3 py-1.5 rounded-lg font-bold border border-[#D4A22E]/20"
                            style={{ background: "rgba(212,162,46,0.1)", color: "#D4A22E" }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FACILITY MANAGEMENT
───────────────────────────────────────────── */
function FacilitySection() {
  const [ref, visible] = useInView();
  const systems = [
    { icon: <Lock size={20} />, label: "PAC", full: "Physical Access Control" },
    { icon: <Activity size={20} />, label: "BAS", full: "Building Automation Systems" },
    { icon: <Shield size={20} />, label: "Fire", full: "Fire Suppression Systems" },
    { icon: <Zap size={20} />, label: "Power", full: "Power Infrastructure" },
    { icon: <Monitor size={20} />, label: "CCTV", full: "Closed Circuit Television" },
    { icon: <Settings size={20} />, label: "AMS", full: "Access Management Systems" },
  ];
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 rounded-t-[40px] md:rounded-t-[80px]" style={{ background: "linear-gradient(135deg,#0a192f 0%,#113a71 50%,#0a192f 100%)" }}>
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={visible ? "animate-fadeUp stagger-1" : "opacity-0"}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20 text-white bg-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A22E] animate-pulse" />
              Facility Management
            </span>
          </div>
          <h2 className={`mt-6 text-3xl md:text-5xl font-extrabold text-white ${visible ? "animate-fadeUp stagger-2" : "opacity-0"}`}>
            Elevating Efficiencies,<br />
            <span style={{ color: "#D4A22E" }}>Ensuring Availability</span>
          </h2>
          <p className={`mt-6 text-gray-300 font-medium max-w-2xl mx-auto text-lg ${visible ? "animate-fadeUp stagger-3" : "opacity-0"}`}>
            Cost reduction and continuous availability are primary objectives for modern data center administrators.
            We adeptly oversee data center facilities across diverse platforms.
          </p>
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {systems.map((sys, i) => (
            <div key={sys.label}
              className={`card-3d rounded-3xl p-8 text-center border border-white/10 shadow-lg ${visible ? `animate-scaleIn stagger-${Math.min(i + 1, 6)}` : "opacity-0"}`}
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>
              <div className="icon-3d w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-inner"
                style={{ background: "rgba(212,162,46,0.2)", color: "#D4A22E", border: "1px solid rgba(212,162,46,0.3)" }}>
                {sys.icon}
              </div>
              <p className="font-extrabold text-white text-base mb-1">{sys.label}</p>
              <p className="text-xs text-gray-400 font-medium">{sys.full}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`relative overflow-hidden rounded-3xl p-12 text-center max-w-4xl mx-auto ${visible ? "animate-scaleIn stagger-5" : "opacity-0"}`}
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="absolute rounded-full opacity-20"
                style={{
                  width: `${150 + i * 100}px`, height: `${150 + i * 100}px`,
                  background: "radial-gradient(circle,#D4A22E,transparent)",
                  top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  animation: `floatY ${5 + i * 2}s ease-in-out infinite ${i * 0.8}s`
                }} />
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">
            Ready to Transform Your Data Center?
          </h3>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto relative z-10 font-medium">
            Let our experts simplify, optimize, and automate your entire IT infrastructure and operations.
          </p>
          <button className="btn-glow relative z-10 inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#D4A22E] to-[#C19326] text-white shadow-[0_10px_30px_rgba(212,162,46,0.4)]">
            Schedule a Consultation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function DataCenterPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden selection:bg-[#D4A22E] selection:text-[#113a71]">
      <FloatingOrbs />
      <HeroSection />
      <MonitoringSection />
      <ServerSection />
      <StorageSection />
      <BackupSection />
      <FacilitySection />
    </div>
  );
}