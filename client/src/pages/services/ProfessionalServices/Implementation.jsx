import React, { useEffect, useRef } from "react";
import {
  Sparkles,
  ChevronDown,
  ArrowUp,
  Award,
  Globe,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Network,
  ListChecks,
  Gauge,
  RadioTower,
  AlertTriangle,
  Search,
  Settings2,
  FileText,
  BarChart3,
  Boxes,
  Database,
  Eye,
  Cpu,
  Lock,
  Cloud,
  Server,
  Activity,
} from "lucide-react";

/* ==================================================================
   Implementation Services — Professional Services sub-page
   ------------------------------------------------------------------
   Structure of this file:
   1) Small reusable presentational components (ChipBadge, ClusterPanel,
      ConsolePanel, SectionBlock) — each one is dumb/stateless and only
      renders the props it's given.
   2) The page component, which owns the scroll/tilt behaviour and
      builds a plain "sections" data array describing every block of
      content. The JSX at the bottom just maps over that array.
   Keeping content as data (instead of hand-writing six near-identical
   sections) is what makes this easy to scan and easy to edit later.
   ================================================================== */

/* A small pill used for the "product" tags under IT Service Management. */
function ChipBadge({ icon: Icon, children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
      style={{ background: "#fff", borderColor: "var(--line)", color: "var(--ink)" }}
    >
      <Icon size={14} style={{ color: "var(--blue)" }} />
      {children}
    </span>
  );
}

/* A glass "capability" card: a center icon + a grid of small icon/label
   rows. Used for the OSS, Network Management, and ServiceNow sections,
   each with a different icon set passed in via `items`. */
function ClusterPanel({ icon: CenterIcon, title, items, onTilt, onReset }) {
  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div
        className="hidden md:block absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-70"
        style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}
        aria-hidden="true"
      ></div>
      <div
        className="hidden md:block absolute -bottom-6 -left-6 w-16 h-16 rounded-full border-2 border-dashed animate-ring-spin"
        style={{ borderColor: "var(--blue-soft)" }}
        aria-hidden="true"
      ></div>

      <div
        onMouseMove={onTilt}
        onMouseLeave={onReset}
        style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.9)", borderColor: "var(--line)" }}
        className="relative z-10 rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-none w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
            <CenterIcon size={20} />
          </div>
          <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{title}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border px-3 py-3 flex items-start gap-2.5"
              style={{ background: "var(--paper)", borderColor: "var(--line)" }}
            >
              <item.icon size={15} className="flex-none mt-0.5" style={{ color: "var(--gold)" }} />
              <span className="text-xs leading-snug" style={{ color: "var(--ink-soft)" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* A glass "console" card: a ring-gauge stat up top, then a short list of
   status rows. Used for the Security/EMM and QRadar sections. */
function ConsolePanel({ icon: HeaderIcon, title, liveLabel, ringValue, display, valueLabel, rows, onTilt, onReset }) {
  return (
    <div
      onMouseMove={onTilt}
      onMouseLeave={onReset}
      style={{ transformStyle: "preserve-3d", background: "rgba(255,255,255,.9)", borderColor: "var(--line)" }}
      className="relative rounded-3xl border backdrop-blur-xl shadow-xl p-6 transition-transform duration-300 ease-out hover:shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>
          <HeaderIcon size={14} style={{ color: "var(--blue)" }} /> {title}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> {liveLabel}
        </span>
      </div>

      <div className="flex items-center gap-5 mb-6">
        <svg width="84" height="84" viewBox="0 0 100 100" className="-rotate-90 flex-none">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--blue-soft)" strokeWidth="10" />
          <circle
            cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="10"
            strokeLinecap="round" pathLength="100" strokeDasharray={`${ringValue} 100`}
          />
        </svg>
        <div>
          <div className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>{display}</div>
          <div className="text-xs mt-1" style={{ color: "var(--ink-faint)" }}>{valueLabel}</div>
        </div>
      </div>

      <div className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl px-3 py-2.5 border flex items-center justify-between" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
            <div className="flex items-center gap-2">
              <row.icon size={14} style={{ color: "var(--blue)" }} />
              <span className="text-sm" style={{ color: "var(--ink)" }}>{row.label}</span>
            </div>
            <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* One alternating content block: heading + paragraphs (+ optional bullet
   list) on one side, an optional visual on the other. `side: "none"`
   renders a single, full-width column (used for the first sub-section,
   which has no accompanying visual in the source content). */
function SectionBlock({ id, bg, side, label, title, paragraphs, bullets, visual }) {
  const twoCol = side !== "none";
  return (
    <section id={id} className="px-6 md:px-10 py-16 md:py-20" style={{ background: bg === "tint" ? "var(--paper-dim)" : "#fff" }}>
      <div className={`max-w-6xl mx-auto ${twoCol ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""}`}>
        <div
          data-reveal
          className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${!twoCol ? "max-w-3xl" : ""} ${side === "left" ? "lg:order-2" : ""}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded flex-none" style={{ background: "linear-gradient(180deg,var(--gold),var(--gold-hover))" }}></span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blue)" }}>{label}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--ink)" }}>{title}</h2>

          {paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: "var(--ink-soft)" }}>{p}</p>
          ))}

          {bullets && (
            <ul className="mt-5 space-y-3">
              {bullets.map((b) => (
                <li key={b.label} className="flex gap-3">
                  <CheckCircle2 size={18} className="flex-none mt-0.5" style={{ color: "var(--gold)" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    <b style={{ color: "var(--ink)" }}>{b.label}:</b> {b.desc}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {!twoCol && visual}
        </div>

        {twoCol && (
          <div data-reveal style={{ transitionDelay: "100ms" }} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${side === "left" ? "lg:order-1" : ""}`}>
            {visual}
          </div>
        )}
      </div>
    </section>
  );
}

const portfolioChips = [
  { label: "Cloud DC & DR", icon: Cloud },
  { label: "ITSM & NOC", icon: Network },
  { label: "Enterprise Service Mgmt", icon: ListChecks },
  { label: "Enterprise Mobility Mgmt", icon: Gauge },
  { label: "VDI", icon: Layers },
  { label: "Application Performance Mgmt", icon: Activity },
  { label: "Enterprise Backup", icon: Database },
  { label: "Disaster Recovery", icon: ShieldCheck },
  { label: "IBM Security Products", icon: Lock },
  { label: "Networking", icon: RadioTower },
  { label: "Messaging", icon: FileText },
  { label: "Server & Storage Virtualization", icon: Server },
];

export default function ImplementationServices() {
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

 

  /* Mouse-follow 3D tilt for the hero panel (signature element). */
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

  /* ----------------------------------------------------------------
     All six "Technologies & Products" sub-sections, as data. Each
     entry maps straight onto <SectionBlock />; the `visual` is built
     here (not stored as static data) only because it needs the tilt
     handlers above.
     ---------------------------------------------------------------- */
  const sections = [
    {
      id: "itsm",
      bg: "white",
      side: "none",
      label: "IBM ITSM",
      title: "IT Service Management",
      paragraphs: [
        "We offer comprehensive implementation services for IBM ITSM products, covering everything from initial rollout to ongoing tuning.",
      ],
      visual: (
        <div className="flex flex-wrap gap-3 mt-2">
          <ChipBadge icon={Network}>IBM Netcool</ChipBadge>
          <ChipBadge icon={ListChecks}>IBM ICD</ChipBadge>
          <ChipBadge icon={Gauge}>IBM Application Performance Management</ChipBadge>
        </div>
      ),
    },
    {
      id: "oss",
      bg: "tint",
      side: "right",
      label: "Telecom OSS",
      title: "OSS Services for Telecom Operators",
      paragraphs: [
        "Built around IBM Tivoli and Netcool, our OSS services span both IP and wireless networks for large-scale telecom operators.",
        "That includes fault management with OMNIBUS, network discovery and topology views through ITNM, configuration management via TNCM, and performance management through TNPM — alongside service desk and asset management on ICD and Maximo, plus Cognos-based reporting drawn from years of managing solutions on large telecom networks.",
      ],
      visual: (
        <ClusterPanel
          icon={RadioTower}
          title="Telecom OSS Stack"
          onTilt={handleTilt}
          onReset={resetTilt}
          items={[
            { icon: AlertTriangle, label: "OMNIBUS — Fault Management" },
            { icon: Search, label: "ITNM — Discovery & Views" },
            { icon: Settings2, label: "TNCM — Configuration Mgmt" },
            { icon: Gauge, label: "TNPM — Performance Mgmt" },
            { icon: FileText, label: "ICD / Maximo — Service Desk & Assets" },
            { icon: BarChart3, label: "Cognos — Reporting" },
          ]}
        />
      ),
    },
    {
      id: "enm",
      bg: "white",
      side: "left",
      label: "NOC Tooling",
      title: "Enterprise Network Management",
      paragraphs: [
        "We bring telecom-grade tooling to Enterprise Network Management, tailoring every deployment — from environment assessment and product selection to bespoke reports and dashboards — around what a specific network actually needs.",
        "Backed by deep NOC tooling experience, our services help teams catch faults proactively, lifting network uptime in the process.",
      ],
      visual: (
        <ClusterPanel
          icon={Globe}
          title="NOC-Grade Tooling"
          onTilt={handleTilt}
          onReset={resetTilt}
          items={[
            { icon: Settings2, label: "Environment assessment" },
            { icon: Boxes, label: "Product selection" },
            { icon: BarChart3, label: "Bespoke dashboards" },
            { icon: Eye, label: "Proactive fault detection" },
          ]}
        />
      ),
    },
    {
      id: "esm",
      bg: "tint",
      side: "right",
      label: "ServiceNow",
      title: "Enterprise Service Management — Using ServiceNow",
      paragraphs: [
        "Our Enterprise Service Management practice turns paper-based SOPs into fully automated ServiceNow workflows — covering every module, including newer additions like Discovery.",
        "We help teams stand up a clean CMDB and automate HR, ITSM, service desk, and procurement processes end to end. Our integrations with third-party platforms from IBM and Microsoft extend that visibility further, pulling real-time data from field devices and enabling hybrid implementations that deploy faster and cost less.",
      ],
      visual: (
        <ClusterPanel
          icon={ListChecks}
          title="ServiceNow Coverage"
          onTilt={handleTilt}
          onReset={resetTilt}
          items={[
            { icon: Database, label: "Clean CMDB" },
            { icon: Boxes, label: "HR & Procurement" },
            { icon: Layers, label: "ITSM & Service Desk" },
            { icon: Network, label: "IBM & Microsoft integrations" },
          ]}
        />
      ),
    },
    {
      id: "security-emm",
      bg: "white",
      side: "left",
      label: "Security & EMM",
      title: "Security, Enterprise Mobility & Endpoint Management",
      paragraphs: [
        "Using IBM QRadar, BigFix, and MaaS360, our services include:",
      ],
      bullets: [
        { label: "Security & Compliance", desc: "Patch management, security configuration management, vulnerability assessment, compliance analytics, and third-party endpoint protection management." },
        { label: "Server Automation", desc: "Cross-server sequenced task automation (patching an entire server cluster, for example), physical and virtual server lifecycle management, middleware management, and multi-platform OS deployment." },
        { label: "Power Management", desc: "Power reporting across Windows and Mac fleets, carbon and cost-reduction insights, and an end-user dashboard for visibility." },
        { label: "Core Protection", desc: "Anti-malware, firewall, and data protection, managed as one connected layer." },
      ],
      visual: (
        <ConsolePanel
          icon={ShieldCheck}
          title="Endpoint Security Console"
          liveLabel="Monitoring active"
          ringValue={96}
          display="96%"
          valueLabel="Compliance score"
          onTilt={handleTilt}
          onReset={resetTilt}
          rows={[
            { icon: ShieldCheck, label: "Patch compliance", value: "Up to date" },
            { icon: Cpu, label: "Managed endpoints", value: "All platforms" },
            { icon: Lock, label: "Core protection", value: "Active" },
          ]}
        />
      ),
    },
    {
      id: "qradar",
      bg: "tint",
      side: "right",
      label: "SOC Operations",
      title: "TechHansa Services on IBM QRadar",
      paragraphs: [
        "We support the full IBM QRadar lifecycle, from rollout to day-to-day monitoring:",
      ],
      bullets: [
        { label: "Implementation Services", desc: "Our solution architects handle end-to-end IBM QRadar implementation — configuring Log Manager, Risk Manager, Vulnerability Assessment, and other modules." },
        { label: "Security Alert Analysis & Notification", desc: "A 24×7 team monitors the QRadar console, qualifying alerts into genuine incidents, filtering out false positives, and running vulnerability assessments to get ahead of emerging threats." },
        { label: "Operational Reporting", desc: "Clients get clear visibility through IDS/SIEM alert trend reports, incident statistics and status updates, and service-availability reporting — the data needed to act before a threat becomes an incident." },
      ],
      visual: (
        <ConsolePanel
          icon={Eye}
          title="Threat Operations Console"
          liveLabel="24×7 monitoring"
          ringValue={100}
          display="24×7"
          valueLabel="Always-on monitoring"
          onTilt={handleTilt}
          onReset={resetTilt}
          rows={[
            { icon: AlertTriangle, label: "False positives", value: "Filtered daily" },
            { icon: FileText, label: "SIEM trend reports", value: "Weekly" },
            { icon: Activity, label: "Service availability", value: "Reported" },
          ]}
        />
      ),
    },
  ];

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink)" }}>
      {/* Brand tokens pulled straight from index.css, plus the handful
          of slow keyframes Tailwind's core can't express on its own.
          Everything else on the page is plain Tailwind utility classes. */}
      <style>{`
    
        .impl-page, .impl-page * { font-family: 'Inter', system-ui, sans-serif; }
        :root, .impl-page{
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
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

      <div className="impl-page">
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
                <span className="text-grey-600"></span> Professional Services &middot; Implementation
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]" ><span className="text-grey-600">Implementation</span>
                {" "}
                <span style={{ background: "linear-gradient(100deg,var(--blue) 25%, var(--gold) 95%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Services
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[50ch] mb-6" style={{ color: "var(--ink-soft)" }}>
                Over the past decade, we've put more than 160 man-years into implementation projects across multiple countries — spanning cloud data centers and disaster recovery, IT service management, enterprise mobility, virtual desktop infrastructure, application performance, IBM security, networking, messaging, and server &amp; storage virtualization.
              </p>

              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--ink-faint)" }}>Portfolio includes</p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {portfolioChips.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium"
                    style={{ background: "#fff", borderColor: "var(--line)", color: "var(--ink-soft)" }}
                  >
                    <c.icon size={12} style={{ color: "var(--gold)" }} /> {c.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow: "0 14px 30px rgba(212,162,46,.32)" }}
                >
                  Talk to a Specialist
                </button>
                <button
                  onClick={() => scrollToId("technologies")}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor: "var(--line)", color: "var(--ink)" }}
                >
                  Explore the Technologies ↓
                </button>
              </div>
            </div>

            {/* Implementation Footprint — signature hero panel */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{ perspective: 1200 }}>
              <div
                className="hidden md:flex absolute -top-6 left-6 w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20"
                style={{ background: "#fff", borderColor: "var(--line)", color: "var(--blue)" }}
              >
                <Cloud size={20} />
              </div>
              <div
                className="hidden md:flex absolute top-10 -right-6 w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20"
                style={{ background: "#fff", borderColor: "var(--line)", color: "var(--gold)", animationDelay: "1s" }}
              >
                <ShieldCheck size={20} />
              </div>
              <div
                className="hidden md:flex absolute bottom-10 -left-6 w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20"
                style={{ background: "#fff", borderColor: "var(--line)", color: "var(--blue)", animationDelay: "1.6s" }}
              >
                <Server size={20} />
              </div>
              <div
                className="hidden md:flex absolute -bottom-6 right-8 w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20"
                style={{ background: "#fff", borderColor: "var(--line)", color: "var(--gold)", animationDelay: "2.2s" }}
              >
                <Globe size={20} />
              </div>

              <div
                ref={panelRef}
                className="relative z-10 mx-auto max-w-sm rounded-3xl p-7 border backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out"
                style={{ background: "rgba(255,255,255,.88)", borderColor: "var(--line)", boxShadow: "0 30px 60px rgba(15,23,42,.12)", transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>Implementation Footprint</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Active delivery
                  </span>
                </div>

                <div className="flex items-center gap-5 mb-6">
                  <div className="flex-none w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
                    <Award size={28} color="var(--ink)" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold leading-none" style={{ color: "var(--ink)" }}>160+</div>
                    <div className="text-xs mt-1" style={{ color: "var(--ink-faint)" }}>Man-years of delivery experience</div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="rounded-xl px-3 py-2.5 border flex items-center justify-between" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
                    <div className="flex items-center gap-2"><Globe size={14} style={{ color: "var(--blue)" }} /><span className="text-sm" style={{ color: "var(--ink)" }}>Countries delivered in</span></div>
                    <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>Multiple</span>
                  </div>
                  <div className="rounded-xl px-3 py-2.5 border flex items-center justify-between" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
                    <div className="flex items-center gap-2"><Layers size={14} style={{ color: "var(--blue)" }} /><span className="text-sm" style={{ color: "var(--ink)" }}>Technology domains</span></div>
                    <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>12+</span>
                  </div>
                  <div className="rounded-xl px-3 py-2.5 border flex items-center justify-between" style={{ background: "var(--paper)", borderColor: "var(--line)" }}>
                    <div className="flex items-center gap-2"><ShieldCheck size={14} style={{ color: "var(--blue)" }} /><span className="text-sm" style={{ color: "var(--ink)" }}>IBM product specialists</span></div>
                    <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>Telecom, security &amp; ITSM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2 mt-16 text-xs uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>
            <span>Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </section>

        {/* TECHNOLOGIES & PRODUCTS — centered section intro */}
        <section id="technologies" className="px-6 md:px-10 pt-6 pb-2 md:pt-10">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-6xl mx-auto text-center">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>
              <Sparkles size={14} style={{ color: "var(--gold)" }} /> Capabilities
            </span>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "var(--ink)" }}>Technologies &amp; Products</h2>
          </div>
        </section>

        {/* Six alternating capability sections, generated from data */}
        {sections.map((s) => (
          <SectionBlock key={s.id} {...s} />
        ))}

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
              <Award size={22} />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ color: "var(--ink)" }}>160+ man-years of execution. One conversation away.</h2>
            <p className="text-base leading-relaxed mb-7 max-w-[48ch] mx-auto" style={{ color: "var(--ink-soft)" }}>
              Whether it's a single ServiceNow rollout or a full IBM security stack, our solution architects have already built it somewhere — and they're ready to build it with you.
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