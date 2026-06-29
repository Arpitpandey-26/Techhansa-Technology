import { useEffect, useRef, useState } from "react";
import {
  Activity, AlertTriangle, ArrowRight, CheckCircle2,
  GitMerge, Globe, Layers, Monitor,
  RefreshCw, Settings, Shield, Ticket,
  Wifi, Zap, Radio, Cpu, BarChart3, PhoneCall,
  BookOpen, Wrench,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   GLOBAL KEYFRAMES & UTILITY CLASSES
═══════════════════════════════════════════════ */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

      /* ── animations ── */
      @keyframes packetFlow {
        0%   { stroke-dashoffset: 200; opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 1; }
        100% { stroke-dashoffset: 0;   opacity: 0; }
      }
      @keyframes nodeRing {
        0%,100% { r: 10; opacity: .55; }
        50%      { r: 15; opacity: .18; }
      }
      @keyframes nodePulse {
        0%,100% { transform: scale(1);    opacity: 1; }
        50%      { transform: scale(1.18); opacity: .7; }
      }
      @keyframes meshShift {
        0%   { background-position: 0 0; }
        100% { background-position: 60px 60px; }
      }
      @keyframes floatA {
        0%,100% { transform: translateY(0px)   rotate(0deg);  }
        50%      { transform: translateY(-22px) rotate(6deg);  }
      }
      @keyframes floatB {
        0%,100% { transform: translateY(0px)  rotate(0deg);   }
        50%      { transform: translateY(16px) rotate(-5deg);  }
      }
      @keyframes radarSpin {
        from { transform: rotate(0deg);   }
        to   { transform: rotate(360deg); }
      }
      @keyframes fadeUp   { from { opacity:0; transform:translateY(48px); } to { opacity:1; transform:translateY(0); } }
      @keyframes fadeLeft { from { opacity:0; transform:translateX(-56px);} to { opacity:1; transform:translateX(0); } }
      @keyframes fadeRight{ from { opacity:0; transform:translateX(56px); } to { opacity:1; transform:translateX(0); } }
      @keyframes scaleUp  { from { opacity:0; transform:scale(.78);        } to { opacity:1; transform:scale(1);    } }
      @keyframes blinkCur { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes glowPulse{ 0%,100%{box-shadow:0 0 0 0 rgba(212,162,46,.35)} 50%{box-shadow:0 0 28px 10px rgba(212,162,46,.1)} }

      .afu { animation: fadeUp    .72s cubic-bezier(.22,1,.36,1) both; }
      .afl { animation: fadeLeft  .72s cubic-bezier(.22,1,.36,1) both; }
      .afr { animation: fadeRight .72s cubic-bezier(.22,1,.36,1) both; }
      .asu { animation: scaleUp   .60s cubic-bezier(.22,1,.36,1) both; }

      .d1{animation-delay:.06s} .d2{animation-delay:.14s} .d3{animation-delay:.22s}
      .d4{animation-delay:.30s} .d5{animation-delay:.38s} .d6{animation-delay:.46s}
      .d7{animation-delay:.54s} .d8{animation-delay:.62s}

      /* ── 3-D lift card — DIFFERENT from previous pages:
            uses inset shadow + perspective skew on hover ── */
      .netcard {
        transition: transform .45s cubic-bezier(.2,.8,.4,1), box-shadow .45s ease;
        transform-style: preserve-3d;
        will-change: transform;
      }
      .netcard:hover {
        transform: perspective(900px) rotateY(-5deg) rotateX(4deg) translateY(-10px) scale(1.02);
        box-shadow:
          12px 24px 60px rgba(17,58,113,.12),
          -4px -4px 0px rgba(212,162,46,.1),
           4px  4px 0px rgba(212,162,46,.05);
      }
      .netcard:hover .nicon { transform: translateZ(20px) scale(1.15) rotate(-5deg); }
      .nicon { transition: transform .35s ease; display:inline-flex; }

      /* ── mesh background ── */
      .mesh-bg {
        background-color: #f8fafc;
        background-image:
          linear-gradient(rgba(17,58,113,.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(17,58,113,.04) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: meshShift 12s linear infinite;
      }

      /* ── diagonal panel divider ── */
      .diag-top    { clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
      .diag-bottom { clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%); }

      /* ── neon border (adjusted for light theme) ── */
      .neon-border {
        border: 1px solid rgba(17,58,113,.08);
        box-shadow: inset 0 0 24px rgba(17,58,113,.02), 0 0 0 1px rgba(17,58,113,.04);
      }

      /* ── node dot ── */
      .node-dot {
        animation: nodePulse 2.4s ease-in-out infinite;
      }

      /* ── glass variant for this page ── */
      .nglass {
        background: rgba(255,255,255,.85);
        backdrop-filter: blur(28px);
        -webkit-backdrop-filter: blur(28px);
        border: 1px solid rgba(17,58,113,.08);
        box-shadow: 0 4px 32px rgba(17,58,113,.07);
      }

      /* ── pill ── */
      .npill {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 6px 16px; border-radius: 999px;
        background: #ffffff;
        color: #113a71;
        border: 1px solid #e5e7eb;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
      }
      .npill-dot {
        width: 6px; height: 6px; border-radius: 50%; background: #D4A22E;
        animation: glowPulse 2s ease infinite;
      }

      /* ── gold text ── */
      .gold {
        background: linear-gradient(135deg,#D4A22E,#C19326);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* scrollbar hidden */
      .hide-scroll::-webkit-scrollbar { display: none; }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════
   HOOK: intersection observer
═══════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ═══════════════════════════════════════════════
   SIGNATURE ELEMENT: LIVE NETWORK TOPOLOGY SVG
   — animated packet flows, pulsing nodes, edge lines
═══════════════════════════════════════════════ */
function NetworkTopology() {
  // Nodes: [id, cx, cy, label, color] mapped to n1.txt colors
  const nodes = [
    { id: "core",    cx: 220, cy: 170, r: 22, label: "Core",    color: "#D4A22E" },
    { id: "fw",      cx: 100, cy:  80, r: 14, label: "FW",      color: "#22c55e" },
    { id: "sw1",     cx: 340, cy:  80, r: 14, label: "SW-1",    color: "#113a71" },
    { id: "sw2",     cx: 100, cy: 260, r: 14, label: "SW-2",    color: "#113a71" },
    { id: "cloud",   cx: 340, cy: 260, r: 14, label: "Cloud",   color: "#60a5fa" },
    { id: "srv1",    cx: 50,  cy: 170, r: 10, label: "SRV-1",   color: "#22c55e" },
    { id: "srv2",    cx: 390, cy: 170, r: 10, label: "SRV-2",   color: "#22c55e" },
    { id: "nms",     cx: 220, cy: 310, r: 12, label: "NMS",     color: "#D4A22E" },
  ];
  // Edges: [from, to]
  const edges = [
    ["core","fw"],["core","sw1"],["core","sw2"],["core","cloud"],
    ["fw","srv1"],["sw1","srv2"],["sw2","nms"],["cloud","nms"],
    ["core","nms"],["fw","sw2"],["sw1","cloud"],
  ];

  const getNode = (id) => nodes.find(n => n.id === id);

  // Animated packets — cycle through edges
  const [pktEdge, setPktEdge] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPktEdge(p => (p + 1) % edges.length), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <svg viewBox="0 0 440 360" className="w-full h-full" style={{ maxHeight: "360px" }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(212,162,46,.5)" />
        </marker>
      </defs>

      {/* Edge lines */}
      {edges.map(([a, b], i) => {
        const na = getNode(a), nb = getNode(b);
        const active = pktEdge === i;
        return (
          <g key={i}>
            <line x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              stroke={active ? "rgba(212,162,46,.55)" : "rgba(17,58,113,.15)"}
              strokeWidth={active ? 1.5 : 1}
              strokeDasharray={active ? "4 4" : "none"}
              style={{ transition: "stroke .4s" }}
            />
            {/* Animated packet dot */}
            {active && (
              <circle r="4" fill="#D4A22E" filter="url(#glow)" style={{ animation: "nodePulse .9s ease-in-out infinite" }}>
                <animateMotion dur="0.85s" repeatCount="indefinite">
                  <mpath href={`#path-${i}`} />
                </animateMotion>
              </circle>
            )}
            <path id={`path-${i}`} d={`M${na.cx},${na.cy} L${nb.cx},${nb.cy}`} fill="none" stroke="none" />
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map(n => (
        <g key={n.id}>
          {/* Pulse ring */}
          <circle cx={n.cx} cy={n.cy} r={n.r + 8} fill="none"
            stroke={n.color} strokeWidth="1" opacity=".22"
            style={{ animation: `nodeRing ${2 + Math.random()}s ease-in-out infinite` }} />
          {/* Node fill */}
          <circle cx={n.cx} cy={n.cy} r={n.r}
            fill="#ffffff" stroke={n.color} strokeWidth="2"
            filter="url(#glow)" className="node-dot" />
          {/* Icon placeholder: first letter */}
          <text x={n.cx} y={n.cy + 4} textAnchor="middle"
            fontSize={n.r > 18 ? "9" : "7"} fontWeight="800" fill={n.color}>
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-0" style={{ position: "relative", zIndex: 1 }}>
      {/* Full-bleed mesh light hero */}
      <div className="mesh-bg diag-top pb-32 pt-12 px-4">
        {/* Decorative radar spinner — unique to this page */}
        <div className="absolute top-8 right-8 opacity-20 hidden lg:block" style={{ width: 180, height: 180 }}>
          <svg viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="80" stroke="#113a71" strokeWidth="1" fill="none" strokeDasharray="4 8" />
            <circle cx="90" cy="90" r="55" stroke="#113a71" strokeWidth="1" fill="none" strokeDasharray="3 6" />
            <circle cx="90" cy="90" r="30" stroke="#113a71" strokeWidth="1" fill="none" />
            <line x1="90" y1="90" x2="90" y2="10" stroke="#113a71" strokeWidth="2" strokeLinecap="round"
              style={{ transformOrigin: "90px 90px", animation: "radarSpin 3s linear infinite" }} />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT copy */}
            <div className="afu d1" style={{ opacity: 0 }}>
              <span className="npill">
                <span className="npill-dot" />
                Network Management
              </span>
              <h1 className="mt-6 font-black leading-none"
                style={{ fontSize: "clamp(2.2rem,5.5vw,3.8rem)", color: "#113a71", letterSpacing: "-0.025em" }}>
                Networks That
                <br />
                <span className="gold">Never Sleep.</span>
              </h1>
              <p className="mt-5 text-gray-600 font-medium leading-relaxed" style={{ maxWidth: 520 }}>
                Continuous, real-time visibility into infrastructure delivery and network services —
                crucial for the availability and performance of every business application.
                End-to-end management powered by IBM Netcool NMS.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg,#113a71,#0a192f)", boxShadow: "0 10px 20px rgba(17,58,113,0.2)", transition: "all .3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                  Explore Services <ArrowRight size={15} />
                </button>
               
              </div>

              {/* Stats row — horizontal ticker unique to this page */}
              <div className="mt-10 flex gap-6 flex-wrap">
                {[
                  { v: "24×7", l: "NOC Monitoring" },
                  { v: "99.99%", l: "Uptime SLA" },
                  { v: "NMS", l: "IBM Netcool" },
                  { v: "E2E", l: "Coverage" },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <p className="text-2xl font-black gold leading-none">{v}</p>
                    <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-widest">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — NETWORK TOPOLOGY (signature element) */}
            <div className="afr d3" style={{ opacity: 0 }}>
              <div className="relative rounded-3xl overflow-hidden neon-border"
                style={{ background: "rgba(255,255,255,.85)", padding: "4px" }}>
                <div className="rounded-[20px] p-4 pb-2 bg-white border border-gray-100 shadow-sm">
                  {/* Panel header */}
                  <div className="flex items-center gap-2 mb-3 px-2 border-b border-gray-100 pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#D4A22E" }} />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] text-[#113a71] font-bold uppercase tracking-widest">NMS Topology View — Live</span>
                    <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold" style={{ color: "#22c55e" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"
                        style={{ animation: "nodePulse 1.4s ease-in-out infinite" }} />
                      All nodes healthy
                    </span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl border border-gray-100 p-2 shadow-inner">
                     <NetworkTopology />
                  </div>
                  {/* Legend */}
                  <div className="flex gap-4 flex-wrap px-2 pb-2 pt-3 justify-center">
                    {[["#D4A22E","Core/NMS"],["#113a71","Switches"],["#22c55e","Servers/FW"],["#60a5fa","Cloud"]].map(([c,l]) => (
                      <span key={l} className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full" style={{ background: c }} />{l}
                      </span>
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
   SECTION WRAPPER — diagonal overlap for depth
═══════════════════════════════════════════════ */
function SectionWrap({ children, dark = false, id }) {
  return (
    <section id={id} className={`relative py-24 px-4 z-10 border-t border-gray-100`}
      style={{ background: dark ? "#f8fafc" : "#ffffff" }}>
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FAULT & CONFIGURATION MANAGEMENT
═══════════════════════════════════════════════ */
function FaultSection() {
  const [ref, vis] = useInView();

  // Simulated live fault events
  const events = [
    { time: "14:32:01", type: "WARN",  src: "SW-Core-01",  msg: "High CPU utilisation detected",   resolved: true  },
    { time: "14:31:47", type: "CRIT",  src: "FW-Edge-02",  msg: "Link flap — port Gi0/5",          resolved: true  },
    { time: "14:31:12", type: "INFO",  src: "SRV-DB-04",   msg: "Disk threshold crossed (85%)",     resolved: false },
    { time: "14:30:58", type: "WARN",  src: "AP-Floor-3",  msg: "Signal degradation reported",      resolved: false },
    { time: "14:30:22", type: "INFO",  src: "NMS-Cluster", msg: "Ticket TKT-4821 auto-created",     resolved: true  },
  ];

  const typeColor = { WARN: "#D4A22E", CRIT: "#ef4444", INFO: "#3b82f6" };

  const features = [
    { icon: <Layers size={18} />, title: "Central Aggregation", desc: "Faults from all network devices, servers, OS, databases, and applications flow into a single portal." },
    { icon: <Globe size={18} />, title: "Drill-Down Visibility", desc: "View the status of specific locations and devices with full drill-down capability." },
    { icon: <Settings size={18} />, title: "Custom Thresholds", desc: "Fault detection is customizable — defined thresholds isolate and segregate events precisely." },
  ];

  return (
    <SectionWrap dark>
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section label centered */}
        <div className={`text-center mb-14 ${vis ? "afu d1" : "opacity-0"}`}>
          <span className="npill"><span className="npill-dot" />Fault &amp; Configuration Management</span>
          <h2 className="mt-4 font-extrabold text-[#113a71] leading-snug"
            style={{ fontSize: "clamp(1.7rem,4vw,2.7rem)", letterSpacing: "-0.015em" }}>
            Every Fault, One <span className="gold">Command Centre</span>
          </h2>
          <p className="mt-3 text-gray-600 font-medium text-base max-w-xl mx-auto leading-relaxed">
            We aggregate faults from every layer — network devices, servers, operating systems,
            databases, and applications — into a central portal with drill-down capabilities.
          </p>
        </div>

        {/* Two-column: live event feed + feature cards */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Live event feed (unique to this page) */}
          <div className={vis ? "afl d2" : "opacity-0"}>
            <div className="rounded-3xl overflow-hidden neon-border shadow-lg" style={{ background: "#ffffff" }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-[#f4f7f9]">
                <Activity size={14} style={{ color: "#D4A22E" }} />
                <span className="text-[11px] font-bold text-[#113a71] uppercase tracking-widest">event-stream — IBM Netcool</span>
                <span className="ml-auto text-[10px] font-black" style={{ color: "#22c55e" }}>● LIVE</span>
              </div>
              <div className="p-5 space-y-2 bg-[#fdfdfd]">
                {events.map((ev, i) => (
                  <div key={i}
                    className={`flex items-start gap-3 px-3 py-2.5 rounded-xl border ${vis ? `afu d${i + 2}` : "opacity-0"}`}
                    style={{ background: "#ffffff", borderColor: `${typeColor[ev.type]}40`, boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                    {/* Severity badge */}
                    <span className="shrink-0 text-[9px] font-black px-2 py-0.5 rounded-md mt-0.5"
                      style={{ background: `${typeColor[ev.type]}15`, color: typeColor[ev.type] }}>
                      {ev.type}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-bold text-[#113a71] leading-snug truncate">{ev.msg}</p>
                      <p className="text-[10px] font-semibold text-gray-400 mt-0.5">{ev.src} · {ev.time}</p>
                    </div>
                    {ev.resolved
                      ? <CheckCircle2 size={16} style={{ color: "#22c55e", shrink: 0, marginTop: 2 }} />
                      : <span className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                          style={{ background: typeColor[ev.type], animation: "nodePulse 1.2s ease-in-out infinite" }} />}
                  </div>
                ))}
              </div>
              {/* Auto-ticket strip */}
              <div className="mx-5 mb-5 rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ background: "rgba(212,162,46,.08)", border: "1px solid rgba(212,162,46,.2)" }}>
                <Ticket size={14} style={{ color: "#D4A22E" }} />
                <span className="text-xs font-bold text-[#113a71]">Automatic ticket creation — TKT-4821, TKT-4820 raised</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Feature cards stacked vertically with left neon accent line */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={f.title}
                className={`netcard rounded-3xl p-6 flex gap-5 items-start bg-white shadow-sm ${vis ? `afr d${i + 3}` : "opacity-0"}`}
                style={{ border: "1px solid #e5e7eb", position: "relative", overflow: "hidden" }}>
                {/* Left gold accent strip */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
                  style={{ background: "linear-gradient(to bottom,#D4A22E,#C19326)" }} />
                <div className="nicon w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner"
                  style={{ background: "rgba(17,58,113,.05)", color: "#113a71", border: "1px solid rgba(17,58,113,.1)" }}>
                  {f.icon}
                </div>
                <div>
                  <p className="font-extrabold text-[#113a71] text-base mb-1.5">{f.title}</p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}

            {/* Services encompass chips */}
            <div className={`rounded-3xl p-5 ${vis ? "afu d6" : "opacity-0"}`}
              style={{ background: "rgba(17,58,113,.03)", border: "1px solid rgba(17,58,113,.1)" }}>
              <p className="text-xs font-bold text-[#113a71] mb-3 uppercase tracking-wider">Services encompass</p>
              <div className="flex flex-wrap gap-2">
                {["Event Enrichment","Event Correlation","Automatic Ticket Creation"].map(s => (
                  <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm"
                    style={{ background: "rgba(17,58,113,.05)", color: "#113a71", border: "1px solid rgba(17,58,113,.1)" }}>
                    <CheckCircle2 size={12} style={{ color: "#D4A22E" }} /> {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}

/* ═══════════════════════════════════════════════
   PERFORMANCE MANAGEMENT
   Layout: FULL-WIDTH metric wall + copy below
═══════════════════════════════════════════════ */
function PerformanceSection() {
  const [ref, vis] = useInView();

  const metrics = [
    { label: "WAN Latency",      val: 12,  unit: "ms",  good: true  },
    { label: "Packet Loss",      val: 0.4, unit: "%",   good: true  },
    { label: "Throughput",       val: 94,  unit: "%",   good: true  },
    { label: "App Response",     val: 180, unit: "ms",  good: true  },
    { label: "Link Utilisation", val: 68,  unit: "%",   good: true  },
    { label: "SNMP Polls",       val: 99.8,unit: "%",   good: true  },
  ];

  return (
    <SectionWrap>
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 ${vis ? "afu d1" : "opacity-0"}`}>
          <span className="npill"><span className="npill-dot" />Performance Management</span>
          <h2 className="mt-4 font-extrabold leading-snug text-[#113a71]" style={{ fontSize: "clamp(1.7rem,4vw,2.7rem)", letterSpacing: "-0.015em" }}>
            Every Millisecond <span className="gold">Measured</span>
          </h2>
          <p className="mt-3 text-gray-600 font-medium text-base max-w-xl mx-auto leading-relaxed">
            Efficient performance is essential for achieving desired response times in your business.
            Comprehensive performance monitoring for both your network and applications —
            delivered from your facility or remotely from our NOC.
          </p>
        </div>

        {/* Metric wall — 6 large 3-D cards in a grid, unique layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div key={m.label}
              className={`netcard rounded-3xl p-6 text-center bg-white border border-gray-100 shadow-sm ${vis ? `asu d${i + 2}` : "opacity-0"}`}>
              <p className="text-3xl font-black mb-1" style={{ color: "#113a71" }}>
                {m.val}<span className="text-base font-bold text-gray-400 ml-1">{m.unit}</span>
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{m.label}</p>
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest"
                style={{ color: "#22c55e" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"
                  style={{ animation: `nodePulse ${1.3 + i * .2}s ease-in-out infinite` }} />
                Normal
              </div>
            </div>
          ))}
        </div>

        {/* Two info cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: <Monitor size={24} />, title: "Network Performance Monitoring", desc: "We monitor bandwidth, interface utilisation, latency, jitter, and packet loss in real time across every segment of your network infrastructure." },
            { icon: <BarChart3 size={24} />, title: "Application Performance Monitoring", desc: "End-user response times and application behaviour are tracked continuously — ensuring both infrastructure and app layers meet SLA targets." },
          ].map((c, i) => (
            <div key={c.title}
              className={`netcard nglass rounded-3xl p-8 ${vis ? `afu d${i + 5}` : "opacity-0"}`}>
              <div className="nicon w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg,#113a71,#0a192f)", color: "white", boxShadow: "0 8px 20px rgba(17,58,113,.25)" }}>
                {c.icon}
              </div>
              <p className="font-extrabold text-xl text-[#113a71] mb-2">{c.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{c.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold" style={{ color: "#D4A22E" }}>
                <Radio size={14} /> Delivered from Facility or NOC (Remote)
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}

/* ═══════════════════════════════════════════════
   SERVICE DESK MANAGEMENT
   Layout: full-width dark panel with 3-D ITIL workflow
═══════════════════════════════════════════════ */
function ServiceDeskSection() {
  const [ref, vis] = useInView();

  const workflows = [
    { icon: <AlertTriangle size={20} />, title: "Incident Management",  desc: "Log, escalate, and resolve critical faults until the issue is fully rectified." },
    { icon: <RefreshCw size={20} />,     title: "Change Management",    desc: "Structured workflows ensure changes are assessed, approved, and implemented safely." },
    { icon: <Wrench size={20} />,        title: "Problem Management",   desc: "Root-cause analysis to prevent recurring incidents and eliminate underlying issues." },
  ];

  const steps = [
    { n: "01", label: "Fault Detected",     sub: "NMS captures the event" },
    { n: "02", label: "Ticket Created",     sub: "Auto or manual logging" },
    { n: "03", label: "Escalation Routing", sub: "ITIL V3 workflows" },
    { n: "04", label: "Resolution",         sub: "Continuous monitoring" },
  ];

  return (
    <SectionWrap dark>
      <div ref={ref} className="max-w-6xl mx-auto">

        <div className={`text-center mb-14 ${vis ? "afu d1" : "opacity-0"}`}>
          <span className="npill"><span className="npill-dot" />Service Desk Management</span>
          <h2 className="mt-4 font-extrabold text-[#113a71] leading-snug"
            style={{ fontSize: "clamp(1.7rem,4vw,2.7rem)", letterSpacing: "-0.015em" }}>
            Integrated Desk. <span className="gold">ITIL V3 Workflows.</span>
          </h2>
          <p className="mt-3 text-gray-600 font-medium text-base max-w-xl mx-auto leading-relaxed">
            An effective network management process requires an integrated Service Desk system —
            enabling logging of critical faults, escalation for resolution, and continuous monitoring
            until the issue is rectified.
          </p>
        </div>

        {/* Resolution pipeline — horizontal stepper unique to this page */}
        <div className={`mb-12 ${vis ? "afu d2" : "opacity-0"}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="flex sm:flex-col items-center gap-3 sm:gap-0 relative flex-1">
                {/* Connector line */}
                {i > 0 && (
                  <div className="hidden sm:block absolute left-0 top-7 w-full h-1"
                    style={{ background: "linear-gradient(to right, rgba(212,162,46,.4), rgba(212,162,46,.1))", zIndex: 0 }} />
                )}
                {/* Step node */}
                <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg mx-auto bg-white border border-[#D4A22E]/30"
                  style={{
                    background: i === 0 ? "linear-gradient(135deg,#D4A22E,#C19326)" : "white",
                    color: i === 0 ? "#fff" : "#113a71",
                    boxShadow: i === 0 ? "0 8px 24px rgba(212,162,46,.3)" : "0 4px 10px rgba(0,0,0,0.05)",
                    animation: i === 0 ? "glowPulse 2.5s ease infinite" : "none",
                  }}>
                  {s.n}
                </div>
                <div className="text-center mt-4 px-2">
                  <p className="text-[#113a71] text-sm font-extrabold">{s.label}</p>
                  <p className="text-gray-500 font-medium text-[11px] mt-1">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ITIL workflow cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((w, i) => (
            <div key={w.title}
              className={`netcard bg-white border border-gray-100 shadow-sm rounded-3xl p-8 ${vis ? `asu d${i + 4}` : "opacity-0"}`}>
              {/* Top gold stripe */}
              <div className="h-1.5 rounded-full mb-6"
                style={{ background: "linear-gradient(to right,#113a71,transparent)" }} />
              <div className="nicon w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#f4f7f9] border border-gray-200 text-[#113a71]">
                {w.icon}
              </div>
              <p className="font-extrabold text-[#113a71] text-lg mb-2">{w.title}</p>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>

    
      </div>
    </SectionWrap>
  );
}

/* ═══════════════════════════════════════════════
   PROACTIVE FAULT PREVENTION STRIP
   — Extra value-add section to round out the page
═══════════════════════════════════════════════ */
function ProactiveStrip() {
  const [ref, vis] = useInView();
  const items = [
    { icon: <Wifi size={24} />,       title: "Real-Time Visibility",      desc: "Continuous infrastructure delivery and network services monitoring — every device, every second." },
    { icon: <Shield size={24} />,     title: "Proactive Fault Detection",  desc: "Prevent network failures before they impact business — not reactive, but predictive." },
    { icon: <Zap size={24} />,        title: "Enhanced Network Uptime",    desc: "End-to-end coverage that significantly enhances uptime across all network layers." },
    { icon: <GitMerge size={24} />,   title: "NMS Tool Expertise",         desc: "Specialists in various NMS tools including IBM Netcool for comprehensive event management." },
    { icon: <Cpu size={24} />,        title: "Infrastructure Delivery",    desc: "Monitor infrastructure delivery performance continuously to meet business SLA targets." },
    { icon: <PhoneCall size={24} />,  title: "24×7 NOC Support",           desc: "Around-the-clock Network Operations Centre staffed by certified network engineers." },
  ];

  return (
    <SectionWrap>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 ${vis ? "afu d1" : "opacity-0"}`}>
          <span className="npill"><span className="npill-dot" />Why TechHansa</span>
          <h2 className="mt-4 font-extrabold leading-snug text-[#113a71]" style={{ fontSize: "clamp(1.7rem,4vw,2.7rem)", letterSpacing: "-0.015em" }}>
            Built for <span className="gold">Network Resilience</span>
          </h2>
        </div>

        {/* Bento-grid style — asymmetric, different from the uniform grids above */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title}
              className={`netcard rounded-3xl p-8 shadow-sm ${vis ? `asu d${(i % 6) + 2}` : "opacity-0"}`}
              style={{
                background: i === 0 || i === 5
                  ? "linear-gradient(135deg,#f4f7f9,#ffffff)"
                  : "#fff",
                border: i === 0 || i === 5
                  ? "1px solid rgba(212,162,46,.2)"
                  : "1px solid rgba(17,58,113,.08)",
              }}>
              <div className="nicon w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: i === 0 || i === 5
                    ? "linear-gradient(135deg,#D4A22E,#C19326)"
                    : "rgba(17,58,113,.05)",
                  color: i === 0 || i === 5 ? "#fff" : "#113a71",
                  boxShadow: i === 0 || i === 5 ? "0 8px 20px rgba(212,162,46,.3)" : "inset 0 2px 4px rgba(0,0,0,.05)",
                }}>
                {it.icon}
              </div>
              <p className="font-extrabold text-lg mb-2 text-[#113a71]">
                {it.title}
              </p>
              <p className="text-sm font-medium leading-relaxed text-gray-600">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}

/* ═══════════════════════════════════════════════
   CTA — Light Theme adapted
═══════════════════════════════════════════════ */
function CtaSection() {
  const [ref, vis] = useInView();
  return (
    <section className="relative py-24 px-4 overflow-hidden border-t border-gray-100" style={{ background: "linear-gradient(180deg,#fff8e7 0%,#ffffff 100%)" }}>
      
      {/* Animated mesh overlay mapped for light theme */}
      <div className="absolute inset-0 mesh-bg opacity-100" />

      {/* Soft TechHansa Overlays for extra depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-br from-[#D4A22E]/10 to-[#113a71]/5 rounded-full blur-3xl" />
      </div>

      {/* Radar rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[200, 340, 480].map((r, i) => (
          <div key={r} className="absolute rounded-full border"
            style={{ width: r, height: r, borderColor: "rgba(212,162,46,.15)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: `floatA ${10 + i * 3}s ease-in-out infinite ${i * 1.2}s` }} />
        ))}
      </div>

      <div ref={ref} className="max-w-3xl mx-auto text-center relative z-10">
        <div className={vis ? "afu d1" : "opacity-0"}>
          <span className="npill"><span className="npill-dot" />Get Connected</span>
          <h2 className="mt-6 font-extrabold text-[#113a71] leading-tight"
            style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", letterSpacing: "-0.02em" }}>
            Ready to Build a<br />
            <span className="gold">Resilient Network?</span>
          </h2>
          <p className="mt-5 text-gray-600 font-medium text-lg leading-relaxed max-w-xl mx-auto">
            From fault detection and performance monitoring to ITIL-based service desk management —
            our network specialists are ready to eliminate downtime from your infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 px-9 py-4 rounded-2xl font-extrabold text-white text-base"
              style={{ background: "linear-gradient(135deg,#113a71,#0a192f)", boxShadow: "0 10px 30px rgba(17,58,113,.25)", transition: "all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(17,58,113,.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(17,58,113,.25)"; }}>
              Schedule a Consultation <ArrowRight size={18} />
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function NetworkManagementPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-x-hidden selection:bg-[#D4A22E] selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Hero />
      <FaultSection />
      <PerformanceSection />
      <ServiceDeskSection />
      <ProactiveStrip />
      <CtaSection />
    </div>
  );
}