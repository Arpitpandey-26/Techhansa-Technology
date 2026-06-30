import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, CheckCircle2,
  Code2, FlaskConical, Rocket, Eye, Settings2, Package,
  Cloud, Server, Users, Workflow, Target,
  Map, Gauge, Wrench, Layers, RefreshCw,
  DollarSign, Sparkles, ClipboardList,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   GLOBAL STYLES — light backgrounds only
═══════════════════════════════════════════════ */
function GlobalStyles() {
  return (
    <style>{`
      

      @keyframes floatUp   { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
      @keyframes floatUpB  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-9px)}  }
      @keyframes floatUpC  { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-18px)} }
      @keyframes pulseDot  { 0%,100%{opacity:1} 50%{opacity:.25} }
      @keyframes fadeUp    { from{opacity:0;transform:translateY(44px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeLeft  { from{opacity:0;transform:translateX(-50px)} to{opacity:1;transform:translateX(0)} }
      @keyframes fadeRight { from{opacity:0;transform:translateX(50px)}  to{opacity:1;transform:translateX(0)} }
      @keyframes scaleIn   { from{opacity:0;transform:scale(.82)}        to{opacity:1;transform:scale(1)} }

      .afu{animation:fadeUp .7s cubic-bezier(.22,1,.36,1) both}
      .afl{animation:fadeLeft .7s cubic-bezier(.22,1,.36,1) both}
      .afr{animation:fadeRight .7s cubic-bezier(.22,1,.36,1) both}
      .asi{animation:scaleIn .6s cubic-bezier(.22,1,.36,1) both}
      .d1{animation-delay:.05s}.d2{animation-delay:.12s}.d3{animation-delay:.19s}
      .d4{animation-delay:.26s}.d5{animation-delay:.33s}.d6{animation-delay:.40s}
      .d7{animation-delay:.47s}.d8{animation-delay:.54s}

      .r-card{
        transition:transform .42s cubic-bezier(.25,.46,.45,.94), box-shadow .42s ease;
        transform-style:preserve-3d; will-change:transform;
      }
      .r-card:hover{
        transform:perspective(800px) rotateX(3deg) rotateY(-3deg) translateY(-9px) scale(1.018);
        box-shadow:0 30px 60px -10px rgba(0,0,0,.12), 0 8px 20px -4px rgba(212,170,46,.13), inset 0 1px 0 rgba(255,255,255,.9);
      }
      .r-card:hover .ricon{transform:translateZ(14px) scale(1.12) rotate(-4deg)}
      .ricon{transition:transform .32s ease; display:inline-flex}

      .gold{
        background:linear-gradient(135deg,#D4A22E,#f0c84a,#b8860b);
        -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
      }
      .rpill{
        display:inline-flex; align-items:center; gap:7px; padding:5px 15px; border-radius:999px;
        background:linear-gradient(135deg,rgba(212,170,46,.13),rgba(212,170,46,.03));
        color:#b8860b; border:1px solid rgba(212,170,46,.3);
        font-size:.68rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
      }
      .rpill-dot{width:6px;height:6px;border-radius:50%;background:#D4A22E;animation:pulseDot 2s ease infinite}
      .gold-border{ border:1px solid rgba(212,170,46,.22); box-shadow:0 4px 24px rgba(212,170,46,.06), 0 1px 4px rgba(0,0,0,.04); }
      .slot-bg{ background:linear-gradient(135deg,rgba(212,170,46,.06) 0%,rgba(212,170,46,.02) 100%); }
      .grid-bg{
        background-color:#f8fafc;
        background-image:linear-gradient(rgba(212,170,46,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(212,170,46,.05) 1px,transparent 1px);
        background-size:48px 48px;
      }
      .warm-bg{ background:linear-gradient(135deg,#fffdf5 0%,#fafaf7 50%,#f8fafc 100%); }
    `}</style>
  );
}

/* ── hooks ── */
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

/* ── shared section header ── */
function SectionHeader({ pill, title, accent, body, vis, center = true }) {
  return (
    <div className={center ? "text-center mb-14" : "mb-8"}>
      <div className={vis ? "afu d1" : "opacity-0"}><span className="rpill"><span className="rpill-dot" />{pill}</span></div>
      <h2 className={`mt-4 font-extrabold leading-snug ${vis ? "afu d2" : "opacity-0"}`}
        style={{ fontSize: "clamp(1.7rem,4vw,2.65rem)", color: "#5d6067", letterSpacing: "-0.018em" }}>
        {title} <span className="gold">{accent}</span>
      </h2>
      {body && (
        <p className={`mt-4 text-slate-500 text-sm leading-relaxed mx-auto ${vis ? "afu d3" : "opacity-0"}`} style={{ maxWidth: 600 }}>
          {body}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SIGNATURE ELEMENT — Animated DEV↔OPS Infinity Loop
   Perfectly aligned continuous S-curve path tracking.
═══════════════════════════════════════════════ */
function DevOpsLoop() {
  const stages = [
    { label: "PLAN",      icon: <ClipboardList size={16} />, color: "#5b8def" },
    { label: "CREATE",    icon: <Code2 size={16} />,         color: "#8aa83c" },
    { label: "VERIFY",    icon: <FlaskConical size={16} />,  color: "#7c6fc9" },
    { label: "PACKAGE",   icon: <Package size={16} />,       color: "#2fa8c4" },
    { label: "RELEASE",   icon: <Rocket size={16} />,        color: "#e0793c" },
    { label: "CONFIGURE", icon: <Settings2 size={16} />,     color: "#9b6fc9" },
    { label: "MONITOR",   icon: <Eye size={16} />,           color: "#d1495b" },
    { label: "OPERATE",   icon: <Server size={16} />,        color: "#2e9e8f" },
  ];

  const VB_W = 500, VB_H = 320;
  const R = 108;
  const CY = 160;
  
  const LEFT = { cx: 142, cy: CY, sweep: 0 };
  const RIGHT = { cx: 358, cy: CY, sweep: 1 };
  const CENTER = { x: 250, y: CY };

  const toRad = (d) => (d * Math.PI) / 180;
  const nodeDefs = [
    { ...stages[0], wheel: LEFT,  angle: -45 }, 
    { ...stages[1], wheel: LEFT,  angle: -135 },
    { ...stages[2], wheel: LEFT,  angle: 145 }, 
    { ...stages[3], wheel: LEFT,  angle: 45 },  
    { ...stages[4], wheel: RIGHT, angle: -135 },
    { ...stages[5], wheel: RIGHT, angle: -45 }, 
    { ...stages[6], wheel: RIGHT, angle: 45 },  
    { ...stages[7], wheel: RIGHT, angle: 135 }, 
  ];

  const nodes = nodeDefs.map((def) => ({
    ...def,
    x: def.wheel.cx + R * Math.cos(toRad(def.angle)),
    y: def.wheel.cy + R * Math.sin(toRad(def.angle)),
  }));

  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), 1400);
    return () => clearInterval(t);
  }, []);

  const arcPath = (i) => {
    const n1 = nodes[i];
    const n2 = nodes[(i + 1) % stages.length];

    if (n1.wheel === n2.wheel) {
      return `M ${n1.x} ${n1.y} A ${R} ${R} 0 0 ${n1.wheel.sweep} ${n2.x} ${n2.y}`;
    } else {
      return `M ${n1.x} ${n1.y} 
              A ${R} ${R} 0 0 ${n1.wheel.sweep} ${CENTER.x} ${CENTER.y} 
              A ${R} ${R} 0 0 ${n2.wheel.sweep} ${n2.x} ${n2.y}`;
    }
  };

  const activeStage = stages[active];

  return (
    <div className="relative mx-auto w-full" style={{ maxWidth: 480, animation: "loopFloat 7s ease-in-out infinite" }}>
    
      <div className="relative w-full">
        
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-auto block" style={{ overflow: "visible" }}>
          <defs>
            <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Seamless figure-8 base track */}
          <circle cx={LEFT.cx} cy={LEFT.cy} r={R} fill="none" stroke="#eef1f6" strokeWidth="16" />
          <circle cx={RIGHT.cx} cy={RIGHT.cy} r={R} fill="none" stroke="#eef1f6" strokeWidth="16" />

          {/* Traced arcs for active state */}
          {nodes.map((n, i) => {
            const isActive = i === active;
            return (
              <path key={`arc-${n.label}`}
                d={arcPath(i)}
                fill="none"
                stroke={n.color}
                strokeWidth={16}
                strokeLinecap="round"
                opacity={isActive ? 0.9 : 0.16}
                style={{ transition: "opacity .6s cubic-bezier(.4,0,.2,1)" }}
              />
            );
          })}

          {/* Traveling continuous dot */}
          <circle r="6" fill={activeStage.color} filter="url(#nodeGlow)">
            <animateMotion
              key={active}
              dur="1.4s"
              fill="freeze"
              path={arcPath(active)}
            />
          </circle>

          {/* Center labels */}
          <circle cx={LEFT.cx} cy={LEFT.cy} r="64" fill="#ffffff" stroke="#eef1f6" strokeWidth="1.5" />
          <circle cx={RIGHT.cx} cy={RIGHT.cy} r="64" fill="#ffffff" stroke="#eef1f6" strokeWidth="1.5" />
          <text x={LEFT.cx} y={LEFT.cy + 7} textAnchor="middle" fontSize="23" fontWeight="800" fill="#0f172a" fontFamily="Inter, sans-serif" letterSpacing="0.5">DEV</text>
          <text x={RIGHT.cx} y={RIGHT.cy + 7} textAnchor="middle" fontSize="23" fontWeight="800" fill="#0f172a" fontFamily="Inter, sans-serif" letterSpacing="0.5">OPS</text>

          {/* Animated Nodes */}
          {nodes.map((n, i) => {
            const isActive = i === active;
            return (
              <g key={n.label} style={{ transition: "transform .45s cubic-bezier(.34,1.3,.64,1)", transform: isActive ? `translate(${n.x}px,${n.y}px) scale(1.18) translate(${-n.x}px,${-n.y}px)` : "none" }}>
                <circle cx={n.x} cy={n.y} r="22"
                  fill="#ffffff"
                  stroke={isActive ? n.color : "#e2e8f0"}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  filter={isActive ? "url(#nodeGlow)" : "none"}
                  style={{ transition: "stroke .4s ease, filter .4s ease" }} />
              </g>
            );
          })}
        </svg>

        {/* Synchronized Icons Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {nodes.map((n, i) => {
            const isActive = i === active;
            return (
              <div key={`icon-${n.label}`}
                className="absolute flex items-center justify-center"
                style={{
                  left: `${(n.x / VB_W) * 100}%`,
                  top: `${(n.y / VB_H) * 100}%`,
                  width: 0, height: 0,
                }}>
                <span className="absolute"
                  style={{
                    transform: `translate(-50%,-50%) scale(${isActive ? 1.18 : 1})`,
                    color: isActive ? n.color : "#9aa5b1",
                    transition: "transform .45s cubic-bezier(.34,1.3,.64,1), color .4s ease",
                  }}>
                  {n.icon}
                </span>
              </div>
            );
          })}
        </div>

      </div>

      <div className="flex justify-center mt-5">
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-colors duration-500"
          style={{ background: `${activeStage.color}10`, border: `1px solid ${activeStage.color}30` }}>
          <span style={{ color: activeStage.color, transition: "color .4s ease" }}>{activeStage.icon}</span>
          <span className="text-xs font-bold tracking-wide" style={{ color: "#0f172a" }}>{activeStage.label}</span>
          <span className="text-[10px] text-slate-400">— {active < 4 ? "Dev cycle" : "Ops cycle"}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  const roles = ["DevOps Architects", "Automation Specialists", "Application Architects", "Cloud Orchestrators", "QA Analysts"];
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-4 warm-bg">
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(212,170,46,.09) 0%,transparent 70%)", animation: "floatUpC 14s ease-in-out infinite" }} />
      <div className="absolute bottom-16 right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(212,170,46,.07) 0%,transparent 70%)", animation: "floatUp 18s ease-in-out infinite 2s" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — copy */}
          <div>
            <span className="rpill afu d1" style={{ opacity: 0 }}><span className="rpill-dot" />DevOps</span>
            <h1 className="font-base leading-[1.05] mt-5 afu d2" style={{ opacity: 0, fontSize: "clamp(2.1rem,5vw,3.5rem)", color: "#63676f", letterSpacing: "-0.025em" }}>
              Build. Test. Deploy.
              <br /><span className="gold">On Repeat</span>
            </h1>
            <p className="text-slate-500 leading-relaxed mt-5 afu d3" style={{ opacity: 0, maxWidth: 520, fontSize: "1.02rem" }}>
              TechHansa's DevOps services play a pivotal role in closing organizational gaps by orchestrating
              the seamless integration and automation of essential processes — build, test, deployment, and
              remediation. This approach leads to accelerated release cycles and improved overall quality.
            </p>

            {/* Team roles strip */}
            <div className="mt-8 flex flex-wrap gap-2.5 afu d4" style={{ opacity: 0 }}>
              {roles.map(r => (
                <span key={r} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white gold-border" style={{ color: "#b8860b" }}>
                  <Users size={12} /> {r}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — signature loop */}
          <div className="afr d3 flex justify-center" style={{ opacity: 0 }}>
            <DevOpsLoop />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   AGILITY / COLLABORATION SECTION
═══════════════════════════════════════════════ */
function AgilitySection() {
  const [ref, vis] = useInView();
  const clouds = [
    { icon: <Cloud size={18} />, label: "Amazon AWS", color: "#fb923c" },
    { icon: <Cloud size={18} />, label: "Microsoft Azure", color: "#60a5fa" },
    { icon: <Server size={18} />, label: "On-Premise Setups", color: "#34d399" },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — copy */}
          <div>
            <SectionHeader pill="The Agility Mindset" title="Dev and Ops," accent="One Team" vis={vis} center={false} />
            <p className={`text-slate-500 text-sm leading-relaxed -mt-4 mb-5 ${vis ? "afl d3" : "opacity-0"}`} style={{ maxWidth: 500 }}>
              The concept of agility is highly enticing, as it necessitates a collaborative effort
              between development and operations teams within enterprises. This collaboration involves
              integrating their methodologies to enable the continuous deployment of software.
            </p>
            <p className={`text-slate-500 text-sm leading-relaxed mb-6 ${vis ? "afl d4" : "opacity-0"}`} style={{ maxWidth: 500 }}>
              TechHansa provides established tools, workflows, environments, and expertise tailored to
              both large and small enterprises, enabling them to swiftly establish a DevOps environment
              for their specific needs. Our offerings empower enterprises to efficiently develop, build,
              test, and deploy software across diverse cloud environments.
            </p>
            <div className={`flex flex-wrap gap-2.5 ${vis ? "afl d5" : "opacity-0"}`}>
              {clouds.map(c => (
                <span key={c.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white gold-border" style={{ color: "#0f172a" }}>
                  <span style={{ color: c.color }}>{c.icon}</span> {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — collaboration visual: two overlapping panels */}
          <div className={vis ? "afr d3" : "opacity-0"}>
            <div className="relative">
              <div className="rounded-3xl p-7" style={{ background: "#fff", border: "1px solid rgba(212,170,46,.18)", boxShadow: "0 32px 80px -8px rgba(0,0,0,.1), 0 8px 24px rgba(212,170,46,.06)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Workflow size={14} style={{ color: "#D4A22E" }} />
                  <span className="text-xs font-semibold" style={{ color: "#0f172a" }}>Collaboration Workflow</span>
                </div>
                {/* Dev row */}
                <div className="rounded-2xl p-4 mb-3 slot-bg gold-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold" style={{ color: "#0f172a" }}>Development Team</span>
                    <span className="text-[10px] font-semibold text-emerald-500">Active</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[80, 65, 90, 70].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full flex-1" style={{ background: "#f1f5f9" }}>
                        <div className="h-full rounded-full" style={{ width: vis ? `${w}%` : "0%", background: "#60a5fa", transition: `width .9s ease ${i * .1}s` }} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Sync arrow */}
                <div className="flex justify-center my-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", boxShadow: "0 6px 16px rgba(212,170,46,.35)" }}>
                    <RefreshCw size={15} className="text-white" />
                  </div>
                </div>
                {/* Ops row */}
                <div className="rounded-2xl p-4 slot-bg gold-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold" style={{ color: "#0f172a" }}>Operations Team</span>
                    <span className="text-[10px] font-semibold text-emerald-500">Active</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[75, 85, 60, 95].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full flex-1" style={{ background: "#f1f5f9" }}>
                        <div className="h-full rounded-full" style={{ width: vis ? `${w}%` : "0%", background: "#fb923c", transition: `width .9s ease ${i * .1 + .3}s` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating chip */}
              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-lg" style={{ background: "rgba(255,255,255,.9)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,.8)", animation: "floatUpB 6s ease-in-out infinite .5s" }}>
                <Sparkles size={13} style={{ color: "#D4A22E" }} />
                <span className="text-xs font-bold" style={{ color: "#0f172a" }}>Continuous Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   HOW WE ENGAGE — 4 service categories
═══════════════════════════════════════════════ */
function EngageSection() {
  const [ref, vis] = useInView();

  const categories = [
    {
      icon: <Map size={20} />,
      title: "DevOps Consulting Services",
      color: "#60a5fa",
      items: [
        "Tailoring DevOps strategies to your specific needs",
        "Assessing the current state of DevOps culture, processes, environments, and toolchains",
        "Quantifying the maturity model of your DevOps practices",
        "Creating a visual representation of the desired state and developing a roadmap",
        "Identifying measurable metrics to track progress",
      ],
    },
    {
      icon: <Wrench size={20} />,
      title: "DevOps Engineering Services",
      color: "#34d399",
      items: [
        "Establishing a pilot framework to implement standard DevOps practices",
        "Leveraging your existing tools while seamlessly integrating them with our extensive ecosystem of open-source and licensed tools throughout the agile delivery process",
      ],
    },
    {
      icon: <Gauge size={20} />,
      title: "Managed DevOps Services",
      color: "#a78bfa",
      items: [
        "Cultivating and enhancing skills, fostering a DevOps-oriented culture, optimizing processes, and managing tools",
        "Employing a continuous service delivery model",
        "Implementing a monthly operations fee structure",
      ],
    },
    {
      icon: <Layers size={20} />,
      title: "DevOps Implementation Services",
      color: "#fb923c",
      items: [
        "Analyzing, designing, constructing, automating, and implementing solutions tailored to the specific requirements of each project",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 grid-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="How We Engage" title="Four Ways to" accent="Get DevOps Done"
          body="From advisory roadmaps to fully managed delivery — choose the engagement model that fits where your team is today."
          vis={vis} />

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`r-card rounded-3xl p-7 bg-white gold-border ${vis ? `asi d${i + 2}` : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className="ricon w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg,${cat.color}22,${cat.color}08)`, color: cat.color }}>
                  {cat.icon}
                </div>
                <p className="font-bold text-base" style={{ color: "#0f172a" }}>{cat.title}</p>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: cat.color }} />
                    <span className="text-xs text-slate-500 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY DEVOPS WITH TECHHANSA — value strip
═══════════════════════════════════════════════ */
function ValueSection() {
  const [ref, vis] = useInView();
  const values = [
    { icon: <Rocket size={20} />, title: "Accelerated Release Cycles", desc: "Automated build, test, and deployment pipelines that ship faster without cutting corners." },
    { icon: <Target size={20} />, title: "Improved Overall Quality", desc: "Continuous integration and verification catch issues long before they reach production." },
    { icon: <Users size={20} />, title: "Cross-Domain Expert Team", desc: "DevOps Architects, Automation Specialists, Cloud Orchestrators, and Agile Evangelists, working as one." },
    { icon: <DollarSign size={20} />, title: "Flexible Cost Models", desc: "From pilot frameworks to monthly operations fees — engagement structured around your budget." },
    { icon: <Cloud size={20} />, title: "Multi-Cloud Capability", desc: "Established workflows across AWS, Azure, and on-premise environments, ready on day one." },
    { icon: <RefreshCw size={20} />, title: "Continuous Service Delivery", desc: "A managed model that keeps optimizing your DevOps culture and toolchain long after go-live." },
  ];
  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Why TechHansa DevOps" title="Built for" accent="Continuous Delivery" vis={vis} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div key={v.title}
              className={`r-card rounded-3xl p-7 ${vis ? `asi d${(i % 6) + 2}` : "opacity-0"}`}
              style={{ background: i === 0 ? "linear-gradient(135deg,rgba(212,170,46,.08),rgba(212,170,46,.02))" : "#fff",
                border: i === 0 ? "1px solid rgba(212,170,46,.28)" : "1px solid #f1f5f9", boxShadow: "0 4px 24px rgba(0,0,0,.05)" }}>
              <div className="ricon w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: i === 0 ? "linear-gradient(135deg,#D4A22E,#b8860b)" : "linear-gradient(135deg,rgba(212,170,46,.15),rgba(212,170,46,.04))",
                  color: i === 0 ? "#fff" : "#D4A22E", boxShadow: i === 0 ? "0 6px 20px rgba(212,170,46,.35)" : "none" }}>
                {v.icon}
              </div>
              <p className="font-bold text-sm mb-2" style={{ color: "#0f172a" }}>{v.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════ */
export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Hero />
      <AgilitySection />
      <EngageSection />
      <ValueSection />
    
    </div>
  );
}