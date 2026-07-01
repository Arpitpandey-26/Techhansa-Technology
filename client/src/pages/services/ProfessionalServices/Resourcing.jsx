import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, CheckCircle2, Users, Search, ClipboardCheck,
  Rocket, LifeBuoy, Code2, Cloud, Server, Database,
  Palette, GitBranch, Brain, Layers, Award, Zap,
  Target, TrendingUp, Handshake, Building2, Landmark,
  HeartPulse, Factory, ShoppingCart, Radio, Truck,
  GraduationCap, Flame,
  Globe2, ShieldCheck, Gauge, UserCheck,
  Repeat, MonitorSmartphone, Lock, Boxes, Workflow,
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
      @keyframes pulseRing { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.22);opacity:.1} }
      @keyframes snapIn    { 0%{opacity:0;transform:scale(.4)} 60%{opacity:1;transform:scale(1.08)} 100%{transform:scale(1)} }
      @keyframes tickerMove{ 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      @keyframes spinSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes shimmer   { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
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
      .d7{animation-delay:.47s}.d8{animation-delay:.54s}.d9{animation-delay:.61s}.d10{animation-delay:.68s}

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
      .lglass{
        background:rgba(255,255,255,.85); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px);
        border:1px solid rgba(255,255,255,.75); box-shadow:0 4px 28px rgba(0,0,0,.06);
      }
      .gold-border{ border:1px solid rgba(212,170,46,.22); box-shadow:0 4px 24px rgba(212,170,46,.06), 0 1px 4px rgba(0,0,0,.04); }
      .slot-bg{ background:linear-gradient(135deg,rgba(212,170,46,.06) 0%,rgba(212,170,46,.02) 100%); }
      .grid-bg{
        background-color:#f8fafc;
        background-image:linear-gradient(rgba(212,170,46,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(212,170,46,.05) 1px,transparent 1px);
        background-size:48px 48px;
      }
      .warm-bg{ background:linear-gradient(135deg,#fffdf5 0%,#fafaf7 50%,#f8fafc 100%); }
      .ticker-track{ display:flex; animation:tickerMove 24s linear infinite; width:max-content; }
      .shimmer{ background:linear-gradient(90deg,#f0f0f0 25%,#fafafa 50%,#f0f0f0 75%); background-size:400px 100%; animation:shimmer 1.6s ease-in-out infinite; border-radius:6px; }
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

function useTilt(strength = 7) {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - .5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - .5) * strength;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px)`;
  };
  const onMouseLeave = () => { if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)"; };
  return { ref, onMouseMove, onMouseLeave };
}

/* ── shared section header ── */
function SectionHeader({ pill, title, accent, body, vis, center = true }) {
  return (
    <div className={center ? "text-center mb-14" : "mb-8"}>
      <div className={vis ? "afu d1" : "opacity-0"}><span className="rpill"><span className="rpill-dot" />{pill}</span></div>
      <h2 className={`mt-4 font-extrabold leading-snug ${vis ? "afu d2" : "opacity-0"}`}
        style={{ fontSize: "clamp(1.7rem,4vw,2.65rem)", color: "#0f172a", letterSpacing: "-0.018em" }}>
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
   SIGNATURE ELEMENT — Talent Match Constellation
   Center "Your Requirement" node, role chips orbit
   around it, one snaps into a "matched" state on
   a timed loop. All light surfaces.
═══════════════════════════════════════════════ */
function TalentMatchVisual() {
  const roles = [
    { label: "React Dev",  icon: <Code2 size={13} />,        color: "#60a5fa" },
    { label: "DevOps Eng", icon: <Server size={13} />,       color: "#34d399" },
    { label: "Cloud Arch", icon: <Cloud size={13} />,        color: "#a78bfa" },
    { label: "QA Lead",    icon: <ShieldCheck size={13} />,  color: "#f472b6" },
    { label: "Data Eng",   icon: <Database size={13} />,     color: "#fb923c" },
    { label: "UI/UX",      icon: <Palette size={13} />,      color: "#22d3ee" },
  ];
  const [matched, setMatched] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setMatched(m => (m + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: "100%", maxWidth: 380, aspectRatio: "1/1" }}>
      <svg viewBox="0 0 380 380" className="absolute inset-0 w-full h-full pointer-events-none">
        <circle cx="190" cy="190" r="155" fill="none" stroke="rgba(212,170,46,.15)" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="190" cy="190" r="108" fill="none" stroke="rgba(212,170,46,.1)" strokeWidth="1" />
      </svg>

      <div className="absolute inset-0" style={{ animation: "spinSlow 38s linear infinite" }}>
        {roles.map((r, i) => {
          const angle = (i / roles.length) * 360;
          const isMatched = i === matched;
          return (
            <div key={r.label} className="absolute top-1/2 left-1/2"
              style={{ transform: `rotate(${angle}deg) translateX(155px) rotate(-${angle}deg)`, transformOrigin: "0 0", marginTop: -18, marginLeft: -18 }}>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl whitespace-nowrap"
                style={{
                  background: isMatched ? `linear-gradient(135deg,${r.color}22,${r.color}08)` : "#fff",
                  border: `1.5px solid ${isMatched ? r.color : "#e2e8f0"}`,
                  boxShadow: isMatched ? `0 8px 20px ${r.color}33` : "0 2px 8px rgba(0,0,0,.05)",
                  transform: `rotate(${-angle}deg) ${isMatched ? "scale(1.08)" : "scale(1)"}`,
                  transition: "all .5s cubic-bezier(.22,1,.36,1)",
                }}>
                <span style={{ color: r.color }}>{r.icon}</span>
                <span className="text-[10px] font-bold" style={{ color: "#0f172a" }}>{r.label}</span>
                {isMatched && <CheckCircle2 size={11} style={{ color: r.color, animation: "snapIn .5s ease" }} />}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: "floatUpB 5s ease-in-out infinite" }}>
        <div className="relative">
          <div className="absolute inset-0 rounded-full" style={{ background: "#D4A22E", animation: "pulseRing 2.4s ease-in-out infinite" }} />
          <div className="relative w-28 h-28 rounded-full flex flex-col items-center justify-center text-center px-3"
            style={{ background: "linear-gradient(135deg,#fff,#fffdf5)", border: "2px solid rgba(212,170,46,.4)", boxShadow: "0 16px 40px rgba(212,170,46,.22), inset 0 1px 0 rgba(255,255,255,.9)" }}>
            <Target size={20} style={{ color: "#D4A22E" }} />
            <p className="text-[9px] font-bold mt-1 leading-tight" style={{ color: "#0f172a" }}>Your<br />Requirement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  const stats = [
    { v: "500+", l: "Deployed Pros" },
    { v: "15+", l: "Tech Domains" },
    { v: "<10d", l: "Avg. Time-to-Hire" },
  ];
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-4 warm-bg">
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(212,170,46,.09) 0%,transparent 70%)", animation: "floatUpC 14s ease-in-out infinite" }} />
      <div className="absolute bottom-16 right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(212,170,46,.07) 0%,transparent 70%)", animation: "floatUp 18s ease-in-out infinite 2s" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="afu d1" style={{ opacity: 0 }}>
            <span className="rpill"><span className="rpill-dot" />Resourcing Services</span>
            <h1 className="mt-6 font-black leading-[1.05]" style={{ fontSize: "clamp(2.1rem,5.2vw,3.6rem)", color: "#0f172a", letterSpacing: "-0.025em" }}>
              Delivering the Right Talent.
              <br /><span className="gold">At the Right Time.</span>
            </h1>
            <p className="mt-5 text-slate-500 leading-relaxed" style={{ maxWidth: 520, fontSize: "1.02rem" }}>
              In today's fast-paced digital landscape, organizations need skilled professionals who
              can adapt quickly to evolving business and technology demands. Techhansa Technology
              provides flexible resourcing solutions that help businesses bridge talent gaps,
              accelerate project delivery, and reduce hiring complexities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", boxShadow: "0 8px 26px rgba(212,170,46,.38)", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                Get Started <ArrowRight size={15} />
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm"
                style={{ background: "#fff", color: "#0f172a", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,.06)", transition: "all .3s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.1)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.06)"}>
                Talk to Our Experts <ArrowRight size={15} />
              </button>
            </div>
            <div className="mt-10 flex gap-8 flex-wrap">
              {stats.map(s => (
                <div key={s.l}>
                  <p className="text-2xl font-black gold leading-none">{s.v}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="afr d3 flex justify-center" style={{ opacity: 0 }}>
            <TalentMatchVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TICKER STRIP
═══════════════════════════════════════════════ */
function TickerStrip() {
  const items = [
    "Contract Staffing", "Dedicated Teams", "Permanent Recruitment", "Resource Augmentation",
    "Pre-Screened Talent", "Rapid Deployment", "15+ Tech Domains", "Flexible Engagement Models",
  ];
  const looped = [...items, ...items];
  return (
    <div className="overflow-hidden py-4 border-y" style={{ borderColor: "rgba(212,170,46,.18)", background: "rgba(212,170,46,.03)" }}>
      <div className="ticker-track">
        {looped.map((item, i) => (
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
   ABOUT RESOURCING
═══════════════════════════════════════════════ */
function AboutSection() {
  const [ref, vis] = useInView();
  const tilt = useTilt(6);

  const highlights = [
    { icon: <Search size={18} />, label: "Extensive Talent Network", desc: "Access to a broad pool of vetted professionals across every major technology domain." },
    { icon: <ShieldCheck size={18} />, label: "Rigorous Screening", desc: "Every candidate passes technical, communication, and background verification before deployment." },
    { icon: <Target size={18} />, label: "Aligned to Your Goals", desc: "Resources matched not just on skill, but on business objectives and organizational culture." },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader pill="About Resourcing" title="Building High-Performing"
              accent="Teams for Digital Success"
              vis={vis} center={false} />
            <p className="text-slate-500 text-sm leading-relaxed -mt-4 mb-6" style={{ maxWidth: 500 }}>
              Finding the right talent is one of the biggest challenges organizations face in today's
              competitive technology landscape. We simplify this process by providing highly qualified
              professionals across multiple technology domains — every resource aligned with your
              technical requirements, business objectives, and organizational culture. From short-term
              engagements to long-term staffing partnerships, we help businesses scale efficiently
              while minimizing recruitment costs and operational risks.
            </p>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={h.label} className={`r-card flex gap-4 items-start p-5 rounded-2xl bg-white gold-border ${vis ? `afl d${i + 3}` : "opacity-0"}`}>
                  <div className="ricon w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,rgba(212,170,46,.18),rgba(212,170,46,.05))", color: "#D4A22E" }}>
                    {h.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#0f172a" }}>{h.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={vis ? "afr d3" : "opacity-0"} ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}
            style={{ transition: "transform .35s ease", cursor: "pointer" }}>
            <div className="rounded-3xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(212,170,46,.18)", boxShadow: "0 32px 80px -8px rgba(0,0,0,.1), 0 8px 24px rgba(212,170,46,.06)" }}>
              <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ borderColor: "#f1f5f9", background: "#fafbff" }}>
                <Users size={14} style={{ color: "#D4A22E" }} />
                <span className="text-xs font-semibold" style={{ color: "#0f172a" }}>Talent Pipeline Snapshot</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px]" style={{ color: "#34d399" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulseDot 1.4s ease infinite" }} />
                  Active
                </span>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: "Profiles Sourced", val: 240, max: 240, color: "#94a3b8" },
                  { label: "Technically Screened", val: 96, max: 240, color: "#60a5fa" },
                  { label: "Client-Interviewed", val: 42, max: 240, color: "#fbbf24" },
                  { label: "Deployment-Ready", val: 18, max: 240, color: "#34d399" },
                ].map((r, i) => (
                  <div key={r.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-500">{r.label}</span>
                      <span className="font-bold" style={{ color: "#0f172a" }}>{r.val}</span>
                    </div>
                    <div className="h-2.5 rounded-full" style={{ background: "#f1f5f9" }}>
                      <div className="h-full rounded-full"
                        style={{ width: vis ? `${(r.val / r.max) * 100}%` : "0%", background: r.color, transition: `width 1s ease ${i * .15}s` }} />
                    </div>
                  </div>
                ))}
                <div className="mt-2 rounded-2xl p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg,rgba(212,170,46,.08),rgba(212,170,46,.02))", border: "1px solid rgba(212,170,46,.18)" }}>
                  <Award size={16} style={{ color: "#D4A22E" }} />
                  <p className="text-xs text-slate-600"><span className="font-bold" style={{ color: "#0f172a" }}>7.5%</span> of sourced talent reaches deployment-ready status — quality over volume.</p>
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
   OUR RESOURCING SOLUTIONS — 4 cards
═══════════════════════════════════════════════ */
function SolutionsSection() {
  const [ref, vis] = useInView();
  const solutions = [
    { icon: <Repeat size={22} />, title: "IT Contract Staffing", desc: "Deploy experienced professionals for short-term or long-term assignments to meet immediate project requirements while maintaining operational flexibility." },
    { icon: <Boxes size={22} />, title: "Dedicated Development Teams", desc: "Build fully managed teams consisting of developers, engineers, analysts, QA specialists, DevOps engineers, and project managers who work exclusively on your business objectives." },
    { icon: <UserCheck size={22} />, title: "Permanent Recruitment", desc: "Identify and recruit highly skilled professionals for permanent positions through our structured hiring process, ensuring the perfect fit for your organization." },
    { icon: <Layers size={22} />, title: "Project-Based Resource Augmentation", desc: "Quickly strengthen your existing workforce with specialized professionals possessing expertise in emerging technologies, enterprise platforms, cloud computing, AI, and cybersecurity." },
  ];
  return (
    <section className="py-24 px-4 grid-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Our Resourcing Solutions" title="Comprehensive" accent="Workforce Solutions" vis={vis} />
        <div className="grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <div key={s.title} className={`r-card rounded-3xl p-8 bg-white gold-border ${vis ? `asi d${i + 3}` : "opacity-0"}`}>
              <div className="ricon w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", color: "#fff", boxShadow: "0 8px 22px rgba(212,170,46,.36)" }}>
                {s.icon}
              </div>
              <p className="font-bold text-base mb-2.5" style={{ color: "#0f172a" }}>{s.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   RECRUITMENT PROCESS — timeline (5 steps)
   Order matters here — real sequence — so a
   numbered path is justified, unlike decorative use.
═══════════════════════════════════════════════ */
function ProcessSection() {
  const [ref, vis] = useInView();
  const steps = [
    { n: "01", icon: <ClipboardCheck size={18} />, title: "Requirement Analysis", desc: "We work closely with your team to understand project scope, technical requirements, business objectives, and organizational culture." },
    { n: "02", icon: <Search size={18} />, title: "Talent Identification", desc: "Our recruitment specialists leverage an extensive network of experienced professionals to identify the most suitable candidates." },
    { n: "03", icon: <ShieldCheck size={18} />, title: "Technical Evaluation", desc: "Every candidate undergoes rigorous technical assessments, background verification, communication evaluation, and reference checks before deployment." },
    { n: "04", icon: <Rocket size={18} />, title: "Resource Deployment", desc: "Selected professionals are onboarded quickly, ensuring minimal disruption and rapid project initiation." },
    { n: "05", icon: <LifeBuoy size={18} />, title: "Continuous Support", desc: "We provide ongoing performance monitoring, relationship management, and replacement support whenever required." },
  ];
  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Our Recruitment Process" title="How We Deliver" accent="the Right Talent" vis={vis} />

        {/* Desktop: horizontal stepper with connecting line */}
        <div className="hidden md:block relative">
          <div className="absolute top-7 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, rgba(212,170,46,.05), rgba(212,170,46,.4) 15%, rgba(212,170,46,.4) 85%, rgba(212,170,46,.05))" }} />
          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((s, i) => (
              <div key={s.n} className={`text-center ${vis ? `afu d${i + 2}` : "opacity-0"}`}>
                <div className="relative z-10 w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                  style={{ background: i === 0 ? "linear-gradient(135deg,#D4A22E,#b8860b)" : "#fff", border: "1px solid rgba(212,170,46,.3)",
                    boxShadow: i === 0 ? "0 8px 22px rgba(212,170,46,.36)" : "0 4px 14px rgba(0,0,0,.06)", color: i === 0 ? "#fff" : "#D4A22E" }}>
                  {s.icon}
                </div>
                <p className="text-[10px] font-black tracking-widest mb-1" style={{ color: "#D4A22E" }}>{s.n}</p>
                <p className="font-bold text-sm mb-2" style={{ color: "#0f172a" }}>{s.title}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed px-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden space-y-5">
          {steps.map((s, i) => (
            <div key={s.n} className={`flex gap-4 items-start ${vis ? `afl d${i + 2}` : "opacity-0"}`}>
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: i === 0 ? "linear-gradient(135deg,#D4A22E,#b8860b)" : "#fff", border: "1px solid rgba(212,170,46,.3)", color: i === 0 ? "#fff" : "#D4A22E" }}>
                  {s.icon}
                </div>
                {i < steps.length - 1 && <div className="w-px h-10 mt-1" style={{ background: "rgba(212,170,46,.3)" }} />}
              </div>
              <div className="pb-2">
                <p className="text-[10px] font-black tracking-widest mb-1" style={{ color: "#D4A22E" }}>{s.n}</p>
                <p className="font-bold text-sm mb-1.5" style={{ color: "#0f172a" }}>{s.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TECHNOLOGY EXPERTISE — grid of 18 technologies
═══════════════════════════════════════════════ */
function TechExpertiseSection() {
  const [ref, vis] = useInView();
  const techs = [
    { label: "React.js & Next.js", icon: <Code2 size={16} /> },
    { label: "Angular", icon: <Code2 size={16} /> },
    { label: "Node.js", icon: <Server size={16} /> },
    { label: "Java", icon: <Code2 size={16} /> },
    { label: ".NET", icon: <Code2 size={16} /> },
    { label: "Python", icon: <Code2 size={16} /> },
    { label: "PHP", icon: <Code2 size={16} /> },
    { label: "AWS / Azure / GCP", icon: <Cloud size={16} /> },
    { label: "DevOps & CI/CD", icon: <Workflow size={16} /> },
    { label: "AI & Machine Learning", icon: <Brain size={16} /> },
    { label: "Data Engineering", icon: <Database size={16} /> },
    { label: "Cybersecurity", icon: <Lock size={16} /> },
    { label: "Quality Assurance", icon: <ShieldCheck size={16} /> },
    { label: "UI/UX Design", icon: <Palette size={16} /> },
    { label: "Mobile Development", icon: <MonitorSmartphone size={16} /> },
    { label: "ERP & CRM Platforms", icon: <GitBranch size={16} /> },
  ];
  return (
    <section className="py-24 px-4 grid-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Technology Expertise" title="Professionals Across" accent="500+ Technologies"
          body="Our talent pool spans every layer of the modern technology stack — from frontend frameworks to cloud platforms, AI to cybersecurity."
          vis={vis} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {techs.map((t, i) => (
            <div key={t.label}
              className={`r-card flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white gold-border ${vis ? `asi d${(i % 8) + 2}` : "opacity-0"}`}>
              <div className="ricon w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(212,170,46,.16),rgba(212,170,46,.04))", color: "#D4A22E" }}>
                {t.icon}
              </div>
              <span className="text-xs font-semibold leading-tight" style={{ color: "#0f172a" }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE TECHHANSA — 6 feature cards
═══════════════════════════════════════════════ */
function WhyChooseSection() {
  const [ref, vis] = useInView();
  const features = [
    { icon: <Award size={20} />, title: "Certified Professionals", desc: "Access highly skilled engineers, consultants, architects, and technology specialists with proven industry experience." },
    { icon: <Zap size={20} />, title: "Faster Hiring", desc: "Reduce recruitment time with pre-screened professionals who are deployment-ready." },
    { icon: <Repeat size={20} />, title: "Flexible Engagement Models", desc: "Choose contract staffing, dedicated teams, project-based hiring, or permanent recruitment based on your business needs." },
    { icon: <TrendingUp size={20} />, title: "Cost Optimization", desc: "Lower hiring costs, reduce administrative overhead, and eliminate lengthy recruitment cycles." },
    { icon: <ShieldCheck size={20} />, title: "Quality Assurance", desc: "Every resource is evaluated through comprehensive technical assessments, interviews, and background verification." },
    { icon: <Handshake size={20} />, title: "Long-Term Partnership", desc: "Beyond staffing, we become an extension of your organization by continuously supporting workforce growth and project success." },
  ];
  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Why Choose Techhansa Resourcing" title="Your Trusted" accent="Staffing Partner" vis={vis} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.title}
              className={`r-card rounded-3xl p-7 ${vis ? `asi d${(i % 6) + 2}` : "opacity-0"}`}
              style={{ background: i === 0 ? "linear-gradient(135deg,rgba(212,170,46,.08),rgba(212,170,46,.02))" : "#fff",
                border: i === 0 ? "1px solid rgba(212,170,46,.28)" : "1px solid #f1f5f9", boxShadow: "0 4px 24px rgba(0,0,0,.05)" }}>
              <div className="ricon w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: i === 0 ? "linear-gradient(135deg,#D4A22E,#b8860b)" : "linear-gradient(135deg,rgba(212,170,46,.15),rgba(212,170,46,.04))",
                  color: i === 0 ? "#fff" : "#D4A22E", boxShadow: i === 0 ? "0 6px 20px rgba(212,170,46,.35)" : "none" }}>
                {f.icon}
              </div>
              <p className="font-bold text-sm mb-2" style={{ color: "#0f172a" }}>{f.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   INDUSTRIES WE SUPPORT — 10 industries
═══════════════════════════════════════════════ */
function IndustriesSection() {
  const [ref, vis] = useInView();
  const industries = [
    { label: "Information Technology", icon: <MonitorSmartphone size={18} /> },
    { label: "Banking & Financial Services", icon: <Landmark size={18} /> },
    { label: "Healthcare", icon: <HeartPulse size={18} /> },
    { label: "Manufacturing", icon: <Factory size={18} /> },
    { label: "Retail & E-Commerce", icon: <ShoppingCart size={18} /> },
    { label: "Telecommunications", icon: <Radio size={18} /> },
    { label: "Logistics & Supply Chain", icon: <Truck size={18} /> },
    { label: "Education", icon: <GraduationCap size={18} /> },
  
    { label: "Energy & Utilities", icon: <Flame size={18} /> },
  ];
  return (
    <section className="py-24 px-4 warm-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Industries We Support" title="Skilled Talent for" accent="Every Sector"
          body="We provide skilled technology professionals for organizations across diverse industries — wherever digital transformation needs a steady hand."
          vis={vis} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <div key={ind.label}
              className={`r-card flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white gold-border ${vis ? `asi d${(i % 8) + 2}` : "opacity-0"}`}>
              <div className="ricon w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,rgba(212,170,46,.16),rgba(212,170,46,.04))", color: "#D4A22E" }}>
                {ind.icon}
              </div>
              <span className="text-xs font-semibold leading-tight" style={{ color: "#0f172a" }}>{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ENGAGEMENT MODELS — comparison table
═══════════════════════════════════════════════ */
function EngagementModelsSection() {
  const [ref, vis] = useInView();
  const models = [
    { icon: <Repeat size={16} />, model: "Contract Staffing", best: "Temporary resource requirements" },
    { icon: <Boxes size={16} />, model: "Dedicated Teams", best: "Long-term product development" },
    { icon: <Layers size={16} />, model: "Project-Based Hiring", best: "Specialized technology projects" },
    { icon: <UserCheck size={16} />, model: "Permanent Recruitment", best: "Full-time strategic hiring" },
    { icon: <Globe2 size={16} />, model: "Remote Teams", best: "Global workforce expansion" },
    { icon: <Handshake size={16} />, model: "Hybrid Teams", best: "Onsite + remote collaboration" },
  ];
  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto">
        <SectionHeader pill="Engagement Models" title="Flexible Hiring" accent="Options" vis={vis} />

        {/* 3-D framed table card */}
        <div className={`rounded-3xl overflow-hidden gold-border ${vis ? "afu d3" : "opacity-0"}`} style={{ background: "#fff" }}>
          {/* Header row */}
          <div className="grid grid-cols-2 px-7 py-4" style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)" }}>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Model</span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Best For</span>
          </div>
          {/* Rows */}
          {models.map((m, i) => (
            <div key={m.model}
              className={`grid grid-cols-2 px-7 py-4.5 items-center transition-colors ${vis ? `afl d${i + 3}` : "opacity-0"}`}
              style={{ background: i % 2 === 0 ? "#fff" : "#fafbff", borderTop: "1px solid #f1f5f9" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(212,170,46,.05)"}
              onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "#fff" : "#fafbff"}>
              <div className="flex items-center gap-3 py-1">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg,rgba(212,170,46,.16),rgba(212,170,46,.04))", color: "#D4A22E" }}>
                  {m.icon}
                </div>
                <span className="font-semibold text-sm" style={{ color: "#0f172a" }}>{m.model}</span>
              </div>
              <span className="text-sm text-slate-500">{m.best}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   BUSINESS BENEFITS — 5 icon cards
═══════════════════════════════════════════════ */
function BenefitsSection() {
  const [ref, vis] = useInView();
  const benefits = [
    { icon: <Rocket size={20} />, title: "Accelerate Project Delivery", desc: "Deploy experienced professionals quickly without lengthy hiring cycles." },
    { icon: <Brain size={20} />, title: "Access Specialized Skills", desc: "Leverage experts across modern technologies and enterprise platforms." },
    { icon: <Gauge size={20} />, title: "Improve Operational Efficiency", desc: "Focus on business growth while we manage the recruitment process." },
    { icon: <TrendingUp size={20} />, title: "Scale with Confidence", desc: "Expand or reduce your workforce based on changing project demands." },
    { icon: <ShieldCheck size={20} />, title: "Reduce Hiring Risks", desc: "Benefit from our structured recruitment methodology and quality assurance process." },
  ];
  return (
    <section className="py-24 px-4 grid-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader pill="Business Benefits" title="Why It Pays to" accent="Partner With Us" vis={vis} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => (
            <div key={b.title}
              className={`r-card flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white gold-border ${vis ? `asi d${i + 2}` : "opacity-0"}`}>
              <div className="ricon w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", color: "#fff", boxShadow: "0 6px 18px rgba(212,170,46,.34)" }}>
                {b.icon}
              </div>
              <p className="font-bold text-xs" style={{ color: "#0f172a" }}>{b.title}</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CTA — light, gold-accented
═══════════════════════════════════════════════ */
function CtaSection() {
  const [ref, vis] = useInView();
  return (
    <section className="py-24 px-4 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`rounded-3xl p-12 text-center relative overflow-hidden ${vis ? "afu d1" : "opacity-0"}`}
          style={{ background: "linear-gradient(135deg,#fffdf5,#fafaf7)", border: "1px solid rgba(212,170,46,.28)", boxShadow: "0 32px 80px -8px rgba(212,170,46,.12), 0 8px 24px rgba(0,0,0,.06)" }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {[200, 320, 440].map((r, i) => (
              <div key={r} className="absolute rounded-full"
                style={{ width: r, height: r, border: "1px solid rgba(212,170,46,.1)", animation: `floatUpB ${10 + i * 3}s ease-in-out infinite ${i * .8}s` }} />
            ))}
          </div>
          <div className="relative z-10">
            <span className="rpill"><span className="rpill-dot" />Get Started</span>
            <h2 className="mt-5 font-extrabold leading-tight" style={{ fontSize: "clamp(1.9rem,4.5vw,3rem)", color: "#0f172a", letterSpacing: "-0.02em" }}>
              Build Your High-Performance<br /><span className="gold">Team Today</span>
            </h2>
            <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              Whether you need a single specialist or an entire technology team, Techhansa Technology
              provides the expertise, flexibility, and talent required to accelerate your digital
              transformation journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#D4A22E,#b8860b)", boxShadow: "0 8px 28px rgba(212,170,46,.42)", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                Get Started <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm"
                style={{ background: "#fff", color: "#0f172a", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,.07)", transition: "all .3s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.1)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.07)"}>
                Talk to Our Experts <ArrowRight size={16} />
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
export default function ResourcingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Hero />
      <TickerStrip />
      <AboutSection />
      <SolutionsSection />
      <ProcessSection />
      <TechExpertiseSection />
      <WhyChooseSection />
      <IndustriesSection />
      <EngagementModelsSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}