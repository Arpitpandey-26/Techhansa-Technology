import { useEffect, useRef, useState } from "react";

// ============================================================
// ✅ EASY TO EDIT: Page Content — change text/data here only
// ============================================================
const PAGE_CONTENT = {
  hero: {
    eyebrow: "TechHansa Digital Workplace",
    title: "User Experience Monitoring",
    description:
      "In the pursuit of digital transformation, user experience plays a pivotal role in driving the adoption of productivity solutions. Likewise, the performance of customer-facing applications holds the key to the success and revenue growth of a website.",
  },

  intro: {
    heading: "Why APM Matters Today",
    paragraphs: [
      "Today's IT landscape is characterized by increased complexity, distribution, and dynamism, demanding application performance monitoring and management that aligns with its agility. Subpar application performance can have direct repercussions on a business, potentially tarnishing its brand image or leading to revenue losses as customers encounter difficulties while completing transactions.",
      "Application Performance Management (APM) is undergoing rapid evolution and expansion. It has transitioned from its traditional focus on monitoring network infrastructure to a more contemporary emphasis on optimizing user experiences. The widespread adoption of web, cloud, and mobile applications has necessitated the development of sophisticated tools and solutions, enabling network engineers and managers to effectively monitor and enhance performance in this dynamic landscape.",
    ],
  },

  stats: [
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "<2s", label: "Avg Response Time" },
    { value: "500+", label: "Apps Monitored" },
    { value: "24/7", label: "Live Monitoring" },
  ],

  apmServices: {
    heading: "TechHansa APM Services",
    intro:
      "Our APM solutions play a crucial role in identifying the root causes behind delayed or failed transactions, enabling prompt resolution. Through proactive monitoring of both applications and hosted servers, we minimize business disruptions, ensuring client satisfaction.",
    detail:
      "We extensively monitor applications developed in Java, .NET, and PHP, as well as databases like Oracle, MySQL, and PostgreSQL. Our in-depth code-level performance analysis empowers application developers to proactively address specific code or query issues, ensuring seamless application performance.",
    capabilities: [
      {
        icon: "🖥️",
        title: "Server Performance Monitoring",
        desc: "Monitor the performance of servers hosting the applications, promptly alerting you to any anomalies in system processes or network utilization.",
      },
      {
        icon: "📉",
        title: "L2 & L3 Escalation Reduction",
        desc: "Help reduce L2 and L3 escalations by providing proactive monitoring services that detect issues before they escalate.",
      },
      {
        icon: "🔮",
        title: "Predictive Failure Analysis",
        desc: "Employ analytical tools to predict potential failures and take corrective measures, thus reducing downtime and improving reliability.",
      },
    ],
    conclusion:
      "This results in cost savings and increased productivity for your organization.",
  },

  techStack: {
    heading: "Technologies We Monitor",
    items: [
      { label: "Java", color: "#D4A22E" },
      { label: ".NET", color: "#1e3a8a" },
      { label: "PHP", color: "#D4A22E" },
      { label: "Oracle", color: "#1e3a8a" },
      { label: "MySQL", color: "#D4A22E" },
      { label: "PostgreSQL", color: "#1e3a8a" },
      { label: "Web Apps", color: "#D4A22E" },
      { label: "Cloud Apps", color: "#1e3a8a" },
      { label: "Mobile", color: "#D4A22E" },
    ],
  },

 
};

// ============================================================
// ✅ EASY TO EDIT: Theme Colors
// ============================================================
const THEME = {
  gold: "#D4A22E",
  goldLight: "#E4C77D",
  dark: "#0f172a",
  blue: "#1e3a8a",
};

// ============================================================
// Utility: useScrollReveal hook — triggers animation on scroll
// ============================================================
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ============================================================
// Sub-component: 3D Floating Geometric Shape
// ============================================================
function FloatShape({ size, top, left, right, bottom, delay = 0, rotate = 0, color = THEME.gold, opacity = 0.25 }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        border: `1px solid ${color}`,
        opacity,
        transform: `rotate(${rotate}deg)`,
        animation: `floatShape ${6 + delay}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

// ============================================================
// Sub-component: Hero Section
// ============================================================
function HeroSection({ content }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handle = (e) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 12);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 12);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      className="relative min-h-[420px] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #07091a 0%, #0f172a 55%, #150d2a 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,162,46,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,162,46,.07) 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
          animation: "gridPulse 4s ease-in-out infinite",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-0.5 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,162,46,.6), transparent)",
          animation: "scanLine 5s linear infinite",
        }}
      />

      {/* Floating shapes */}
      <FloatShape size={44} top="10%" left="3%" delay={0} />
      <FloatShape size={28} top="65%" right="6%" delay={2} color={THEME.blue} rotate={45} />
      <FloatShape size={18} bottom="20%" left="12%" delay={3.5} opacity={0.18} />

      {/* Orbit ring */}
      <div className="absolute pointer-events-none" style={{ right: "6%", top: "15%", width: 160, height: 160 }}>
        <div className="absolute inset-0 rounded-full" style={{ border: "1px solid rgba(212,162,46,.2)" }} />
        <div
          className="absolute rounded-full"
          style={{
            top: "50%", left: "50%",
            width: 10, height: 10, marginTop: -5, marginLeft: -5,
            background: THEME.gold, boxShadow: `0 0 14px ${THEME.gold}`,
            transformOrigin: "-75px 5px",
            animation: "orbitDot 8s linear infinite",
          }}
        />
      </div>

      {/* Hero text */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ animation: "fadeInUp .7s ease-out both" }}>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-6" style={{ background: "rgba(212,162,46,.1)", border: "1px solid rgba(212,162,46,.35)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: THEME.gold, boxShadow: `0 0 8px ${THEME.gold}`, animation: "blink 2s infinite" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: THEME.gold }}>{content.eyebrow}</span>
        </div>

        {/* Title with 3D parallax */}
        <h1
          className="font-black leading-tight mb-6"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            background: `linear-gradient(130deg, #fff 0%, ${THEME.gold} 55%, ${THEME.goldLight} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: `perspective(800px) rotateX(${mouseY * 0.08}deg) rotateY(${mouseX * 0.08}deg)`,
            transition: "transform .1s ease-out",
          }}
        >
          {content.title}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, transparent, ${THEME.gold})` }} />
          <div className="w-2 h-2 rotate-45" style={{ background: THEME.gold }} />
          <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, ${THEME.gold}, transparent)` }} />
        </div>

        <p className="text-base leading-relaxed max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,.65)" }}>
          {content.description}
        </p>
      </div>
    </section>
  );
}

// ============================================================
// Sub-component: Stats Strip
// ============================================================
function StatsStrip({ stats }) {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className="relative py-10 px-6 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${THEME.dark}, #1a0d29)` }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center group cursor-default"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all .6s ease-out ${i * .12}s`,
            }}
          >
            <div
              className="text-3xl font-black mb-1 group-hover:scale-110 transition-transform duration-300"
              style={{ color: THEME.gold }}
            >
              {stat.value}
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.45)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Sub-component: Intro Section (left text + right 3D monitor)
// ============================================================
function IntroSection({ content }) {
  const [ref, visible] = useScrollReveal(0.15);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(((e.clientX - rect.left) / rect.width - 0.5) * 16);
    setMouseY(((e.clientY - rect.top) / rect.height - 0.5) * 16);
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <div
          className="flex-1"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-50px)",
            transition: "all .8s ease-out",
          }}
        >
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: THEME.gold }}>— Overview</div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
            {content.heading}
          </h2>
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-500 text-base leading-relaxed mb-5 last:mb-0">{p}</p>
          ))}

          {/* Feature tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Web Apps", "Cloud", "Mobile", "Databases", "APIs"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-semibold cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(212,162,46,.08)",
                  border: `1px solid rgba(212,162,46,.28)`,
                  color: THEME.gold,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: 3D Monitor Visual */}
        <div
          className="flex-shrink-0 w-full lg:w-[420px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { setMouseX(0); setMouseY(0); }}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(50px)",
            transition: "all .8s ease-out .2s",
          }}
        >
          <div
            className="relative rounded-2xl p-7"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,.07)",
              boxShadow: "0 4px 6px rgba(0,0,0,.04), 0 20px 50px rgba(212,162,46,.08)",
              transform: `perspective(900px) rotateX(${mouseY * 0.05}deg) rotateY(${mouseX * 0.05}deg)`,
              transition: "transform .12s ease-out",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${THEME.gold}, ${THEME.blue}, ${THEME.gold})` }} />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: "rgba(212,162,46,.1)", border: `1px solid rgba(212,162,46,.3)` }}
              >
                📊
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">APM Live Dashboard</div>
                <div className="text-xs text-gray-400">Real-time performance metrics</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "blink 1.4s infinite" }} />
                <span className="text-xs text-gray-400">Live</span>
              </div>
            </div>

            {/* Metric bars */}
            {[
              { label: "Java App Response", val: 92, color: THEME.gold },
              { label: ".NET Service Health", val: 88, color: THEME.blue },
              { label: "Database Query Time", val: 95, color: THEME.gold },
              { label: "API Throughput", val: 97, color: THEME.blue },
            ].map((m, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-gray-500">{m.label}</span>
                  <span className="text-xs font-bold" style={{ color: m.color }}>{m.val}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${m.val}%`,
                      background: `linear-gradient(90deg, ${THEME.blue}, ${m.color})`,
                      animation: `barFill .9s ease-out ${i * .12}s both`,
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Status pill */}
            <div
              className="mt-5 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold"
              style={{ background: "rgba(34,197,94,.06)", border: "1px solid rgba(34,197,94,.2)", color: "#16a34a" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "blink 1.4s infinite" }} />
              All systems operational — 0 critical alerts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Sub-component: Capability Card (3D hover tilt)
// ============================================================
function CapabilityCard({ icon, title, desc, index, visible }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(((e.clientX - rect.left) / rect.width - 0.5) * 20);
    setMouseY(((e.clientY - rect.top) / rect.height - 0.5) * 20);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setMouseX(0); setMouseY(0); setHovered(false); }}
      className="relative rounded-2xl p-7 cursor-default overflow-hidden"
      style={{
        background: "#fff",
        border: hovered ? `1px solid rgba(212,162,46,.45)` : "1px solid rgba(0,0,0,.07)",
        boxShadow: hovered
          ? `0 30px 70px rgba(212,162,46,.18), 0 8px 20px rgba(0,0,0,.06)`
          : "0 4px 6px rgba(0,0,0,.04), 0 10px 30px rgba(0,0,0,.05)",
        transform: hovered
          ? `perspective(800px) rotateX(${mouseY * 0.06}deg) rotateY(${mouseX * 0.06}deg) translateY(-10px) scale(1.02)`
          : `perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)`,
        transition: "all .4s cubic-bezier(.175,.885,.32,1.275)",
        transformStyle: "preserve-3d",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * .12}s`,
      }}
    >
      {/* Top gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-400"
        style={{
          background: `linear-gradient(90deg, transparent, ${THEME.gold}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Card number */}
      <div
        className="absolute top-4 right-5 font-black text-4xl leading-none select-none"
        style={{ color: "rgba(212,162,46,.12)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
        style={{
          background: "rgba(212,162,46,.1)",
          border: `1px solid rgba(212,162,46,.3)`,
          transform: hovered ? "rotateY(20deg) scale(1.1)" : "none",
          boxShadow: hovered ? `0 0 24px rgba(212,162,46,.3)` : "none",
        }}
      >
        {icon}
      </div>

      <h3 className="font-extrabold text-gray-900 text-lg mb-3 leading-snug">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// ============================================================
// Sub-component: APM Services Section
// ============================================================
function APMServicesSection({ content }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-20 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8faff 0%, #fff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all .7s ease-out",
          }}
        >
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: THEME.gold }}>
            — What We Deliver
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
            {content.heading}
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, ${THEME.gold}, transparent)` }} />
            <div className="w-2 h-2 rotate-45" style={{ background: THEME.gold }} />
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl mb-4">{content.intro}</p>
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl">{content.detail}</p>
        </div>

        {/* 3 Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {content.capabilities.map((cap, i) => (
            <CapabilityCard key={i} {...cap} index={i} visible={visible} />
          ))}
        </div>

        {/* Conclusion banner */}
        <div
          className="rounded-2xl px-8 py-6 flex items-center gap-4"
          style={{
            background: `linear-gradient(135deg, rgba(212,162,46,.06), rgba(30,58,138,.04))`,
            border: `1px solid rgba(212,162,46,.25)`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all .7s ease-out .5s",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: `rgba(212,162,46,.15)`, border: `1px solid rgba(212,162,46,.3)` }}
          >
            💡
          </div>
          <p className="text-gray-700 font-semibold text-base">{content.conclusion}</p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Sub-component: Tech Stack Grid
// ============================================================
function TechStackSection({ content }) {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: THEME.gold }}>
          — Technology Coverage
        </div>
        <h2
          className="text-2xl lg:text-3xl font-black text-gray-900 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all .7s ease-out",
          }}
        >
          {content.heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {content.items.map((item, i) => (
            <div
              key={i}
              className="group cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(.9)",
                transition: `all .5s ease-out ${i * .05}s`,
              }}
            >
              <div
                className="px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"
                style={{
                  background: `${item.color}12`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                  boxShadow: "0 2px 8px rgba(0,0,0,.04)",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Sub-component: CTA Section
// ============================================================
function CTASection({ content }) {
  const [ref, visible] = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${THEME.gold} 0%, ${THEME.goldLight} 50%, ${THEME.gold} 100%)` }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 60%)" }} />

      {/* Background rings */}
      {[280, 460, 640].map((size) => (
        <div
          key={size}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size, height: size,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      ))}

      <div
        className="relative z-10 max-w-2xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all .7s ease-out",
        }}
      >
        <h2 className="font-black text-gray-900 leading-tight mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
          {content.heading}
        </h2>
        <p className="text-gray-700 text-base mb-8">{content.subtext}</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 text-sm"
            style={{
              background: THEME.dark,
              color: THEME.gold,
              boxShadow: "0 4px 20px rgba(0,0,0,.25)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.35)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.25)")}
          >
            {content.primaryBtn}
          </button>
          <button
            className="font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 text-sm"
            style={{
              background: "rgba(255,255,255,.3)",
              color: THEME.dark,
              border: "1px solid rgba(255,255,255,.5)",
            }}
          >
            {content.secondaryBtn}
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 🎯 MAIN PAGE COMPONENT — assemble all sections here
// ============================================================
export default function UserExperienceMonitoring() {
  return (
    <>
      {/* ✅ Global keyframe animations */}
      <style>{`
       

        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
          50%       { transform: translateY(-16px) rotate(calc(var(--rot, 0deg) + 8deg)); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: .8; }
          50%       { opacity: 1.4; }
        }
        @keyframes scanLine {
          0%   { top: -4px; }
          100% { top: 105%; }
        }
        @keyframes orbitDot {
          0%   { transform: rotate(0deg) translateX(75px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(75px) rotate(-360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: .3; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes barFill {
          from { width: 0; }
        }
      `}</style>

      <main className="bg-white">
        {/* 1. Hero banner (dark, with 3D parallax title) */}
        <HeroSection content={PAGE_CONTENT.hero} />

        {/* 2. Stats strip */}
        <StatsStrip stats={PAGE_CONTENT.stats} />

        {/* 3. Intro + 3D monitor card */}
        <IntroSection content={PAGE_CONTENT.intro} />

        {/* 4. APM Services + 3D tilt cards */}
        <APMServicesSection content={PAGE_CONTENT.apmServices} />

        {/* 5. Tech stack badges */}
        <TechStackSection content={PAGE_CONTENT.techStack} />

       
      </main>
    </>
  );
}