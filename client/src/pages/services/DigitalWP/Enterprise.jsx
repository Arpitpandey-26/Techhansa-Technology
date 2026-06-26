import { useEffect, useRef, useState } from "react";

// ============================================================
// ✅ EASY TO EDIT — Change all page content here
// ============================================================
const PAGE_CONTENT = {

  hero: {
    // ✅ Change banner image path here (put your image in /src/assets/)
    bannerImage: "/src/assets/enterprise-banner.jpg", // replace with your image
    eyebrow: "TechHansa Digital Workplace",
    title: "Enterprise App Store",
    description:
      `We're well-acquainted with the concept of an "App Store" for smartphones, offering a range of applications for users to download according to their preferences. Given the trend toward IT commoditization, it's not uncommon for users to inquire, "Why can't we have a similar feature on our Enterprise workstations?"`,
  },

  advantages: {
    heading: "Key Advantages of an Enterprise App Store",
    items: [
      { icon: "✨", label: "Improved User Experience" },
      { icon: "⚡", label: "Swift Installation of Desired Applications in Minutes" },
      { icon: "🖱️", label: "Minimal Effort with Just a Few Clicks" },
      { icon: "✅", label: "Automated Approval Processes When Necessary" },
      { icon: "🚀", label: "Seamless Software Deployment Automation" },
      { icon: "📊", label: "Automated License Usage Monitoring" },
      { icon: "💡", label: "Enhanced Software License Optimization" },
    ],
  },

  stats: [
    { value: "1-Click", label: "App Installation" },
    { value: "100%", label: "Automated Approval" },
    { value: "?", label: "Manual Deployment" },
    { value: "24/7", label: "Self-Service Access" },
  ],

  workflow: {
    heading: "How We Automate Software Deployment",
    subtext:
      "To realize the objective of automating software deployment through the Enterprise App Store, we've achieved this by seamlessly integrating the following tools and constructing corresponding workflows:",
    steps: [
      {
        number: "01",
        icon: "🖥️",
        title: "IBM Smart Cloud Control Desk",
        desc: "Utilized the Self Service Center from IBM Smart Cloud Control Desk as the foundation for our Enterprise App Store.",
      },
      {
        number: "02",
        icon: "⚙️",
        title: "Custom Workflow Crafting",
        desc: "Crafted custom workflows for tasks such as approval processes, ensuring streamlined and controlled software delivery.",
      },
      {
        number: "03",
        icon: "📜",
        title: "Deployment Scripts",
        desc: "Developed scripts for efficient software deployment, reducing manual steps and ensuring consistent installation outcomes.",
      },
      {
        number: "04",
        icon: "🔧",
        title: "IBM BigFix Integration",
        desc: "Leveraged IBM BigFix for streamlined software deployment procedures with enterprise-grade reliability and speed.",
      },
      {
        number: "05",
        icon: "📈",
        title: "IBM Software Use Analysis",
        desc: "Employed the IBM Software Use Analysis tool to enhance software management capabilities and license optimization.",
      },
    ],
    conclusion:
      "Our solution is a result of the harmonious integration of these tools, effectively automating the entire workflow.",
  },

  appGrid: {
    heading: "Apps Available in Your Enterprise Store",
    apps: [
      { icon: "📧", name: "Email Client", category: "Productivity" },
      { icon: "📊", name: "Analytics Suite", category: "Business" },
      { icon: "🔒", name: "Security Tools", category: "Security" },
      { icon: "☁️", name: "Cloud Storage", category: "Storage" },
      { icon: "💬", name: "Collaboration", category: "Communication" },
      { icon: "📱", name: "Mobile MDM", category: "Management" },
      { icon: "🎯", name: "CRM Platform", category: "Sales" },
      { icon: "🛠️", name: "Dev Tools", category: "Development" },
    ],
  },

  cta: {
    heading: "Ready to Build Your Enterprise App Store?",
    subtext:
      "Give your employees the self-service experience they deserve — secure, automated, and instant.",
    primaryBtn: "Request a Demo",
    secondaryBtn: "Learn More",
  },
};

// ============================================================
// ✅ EASY TO EDIT — Theme colors
// ============================================================
const THEME = {
  gold: "#D4A22E",
  goldLight: "#E4C77D",
  dark: "#0f172a",
  blue: "#1e3a8a",
  white: "#ffffff",
};

// ============================================================
// Hook: Scroll-triggered reveal animation
// ============================================================
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ============================================================
// Sub-component: 3D Tilt Card wrapper
// ============================================================
function TiltCard({ children, className = "", style = {}, intensity = 12 }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * intensity;
    const y = ((e.clientY - r.top) / r.height - 0.5) * intensity;
    setTilt({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      className={className}
      style={{
        transform: `perspective(900px) rotateX(${-tilt.y * 0.05}deg) rotateY(${tilt.x * 0.05}deg) ${hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)"}`,
        transition: "transform .4s cubic-bezier(.175,.885,.32,1.275)",
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// SECTION 1: Hero — Light banner with overlay text
// ============================================================
function HeroSection({ content }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 420 }}
    >
      {/* ── Banner Image (replace src with your actual image) ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${content.bannerImage}), linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 50%, #fef9ec 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Light gradient overlay so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.82) 0%, rgba(248,250,255,.78) 50%, rgba(255,253,240,.75) 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,162,46,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,162,46,.06) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating geometric accents */}
      {[
        { size: 44, top: "12%", left: "3%", delay: 0, color: THEME.gold, op: 0.22 },
        { size: 28, top: "65%", right: "6%", delay: 2, color: THEME.blue, op: 0.18, rotate: 45 },
        { size: 18, bottom: "18%", left: "12%", delay: 3.5, color: THEME.gold, op: 0.14 },
        { size: 34, top: "20%", right: "15%", delay: 1, color: THEME.blue, op: 0.12, rotate: 20 },
      ].map((g, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: g.size,
            height: g.size,
            top: g.top,
            left: g.left,
            right: g.right,
            bottom: g.bottom,
            border: `1.5px solid ${g.color}`,
            opacity: g.op,
            transform: `rotate(${g.rotate || 0}deg)`,
            animation: `eas-floatGeo ${6 + g.delay}s ease-in-out ${g.delay}s infinite`,
          }}
        />
      ))}

      {/* Orbit ring decoration */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "4%", top: "12%", width: 140, height: 140 }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(212,162,46,.28)" }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: "50%", left: "50%",
            width: 10, height: 10, marginTop: -5, marginLeft: -5,
            background: THEME.gold,
            boxShadow: `0 0 12px ${THEME.gold}`,
            transformOrigin: "-65px 5px",
            animation: "eas-orbit 8s linear infinite",
          }}
        />
      </div>

      {/* Hero text */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20"
        style={{ minHeight: 420 }}
      >
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-6"
          style={{
            background: "rgba(212,162,46,.12)",
            border: "1px solid rgba(212,162,46,.4)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: THEME.gold, boxShadow: `0 0 8px ${THEME.gold}`, animation: "eas-blink 2s infinite" }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: THEME.gold }}
          >
            {content.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-black leading-tight mb-5"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: THEME.dark,
            animation: "eas-fadeUp .7s ease-out .1s both",
          }}
        >
          {content.title}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, transparent, ${THEME.gold})` }} />
          <div className="w-2 h-2 rotate-45" style={{ background: THEME.gold }} />
          <div className="w-2 h-2 rotate-45" style={{ background: THEME.goldLight }} />
          <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, ${THEME.gold}, transparent)` }} />
        </div>

        {/* Description */}
        <p
          className="text-base leading-relaxed max-w-3xl"
          style={{
            color: "#334155",
            animation: "eas-fadeUp .7s ease-out .2s both",
          }}
        >
          {content.description}
        </p>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 2: Stats strip
// ============================================================
function StatsStrip({ stats }) {
  const [ref, visible] = useReveal(0.2);
  return (
    <div
      ref={ref}
      className="py-10 px-6"
      style={{ background: `linear-gradient(135deg, ${THEME.dark}, #1a0d29)` }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center group cursor-default"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `all .5s ease-out ${i * .1}s`,
            }}
          >
            <div
              className="text-2xl font-black mb-1 group-hover:scale-110 transition-transform duration-300"
              style={{ color: THEME.gold }}
            >
              {s.value}
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.4)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// SECTION 3: Advantages — left checklist + right 3D app grid
// ============================================================
function AdvantagesSection({ content }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <section ref={ref} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16">

        {/* Left: checklist */}
        <div
          className="flex-1"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all .7s ease-out",
          }}
        >
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: THEME.gold }}>
            — Why Choose It
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
            {content.heading}
          </h2>

          <div className="flex flex-col gap-4">
            {content.items.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 p-4 rounded-xl cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(212,162,46,.04)",
                  border: "1px solid rgba(212,162,46,.12)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-30px)",
                  transition: `all .5s ease-out ${.1 + i * .07}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,162,46,.1)";
                  e.currentTarget.style.borderColor = "rgba(212,162,46,.35)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,162,46,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(212,162,46,.04)";
                  e.currentTarget.style.borderColor = "rgba(212,162,46,.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Gold check circle */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${THEME.gold}, ${THEME.goldLight})`,
                    boxShadow: "0 4px 12px rgba(212,162,46,.3)",
                  }}
                >
                  <span className="text-white text-sm font-black">✓</span>
                </div>
                <span className="text-gray-700 font-semibold text-sm">{item.label}</span>

                {/* Arrow that appears on hover */}
                <span
                  className="ml-auto text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: THEME.gold }}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D floating app store visual */}
        <div
          className="flex-shrink-0 w-full lg:w-[420px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "all .7s ease-out .2s",
          }}
        >
          <TiltCard intensity={14}>
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,.07)",
                boxShadow: "0 4px 6px rgba(0,0,0,.04), 0 20px 50px rgba(212,162,46,.1)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${THEME.gold}, ${THEME.blue}, ${THEME.gold})` }}
              />

              {/* Store header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(212,162,46,.1)", border: `1px solid rgba(212,162,46,.3)` }}
                >
                  🏪
                </div>
                <div>
                  <div className="font-black text-gray-900 text-base">Enterprise App Store</div>
                  <div className="text-xs text-gray-400 mt-0.5">128 apps available</div>
                </div>
                
              </div>

              {/* Search bar mockup */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-5"
                style={{ background: "#f8faff", border: "1px solid rgba(212,162,46,.18)" }}
              >
                <span className="text-gray-400 text-sm">🔍</span>
                <span className="text-gray-400 text-sm">Search enterprise apps...</span>
              </div>

              {/* Mini app icons grid */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: "📧", name: "Mail", color: THEME.blue },
                  { icon: "📊", name: "Analytics", color: THEME.gold },
                  { icon: "🔒", name: "Security", color: "#dc2626" },
                  { icon: "☁️", name: "Cloud", color: THEME.blue },
                  { icon: "💬", name: "Chat", color: "#7c3aed" },
                  { icon: "📱", name: "MDM", color: THEME.gold },
                  { icon: "🎯", name: "CRM", color: THEME.blue },
                  { icon: "🛠️", name: "Dev", color: "#16a34a" },
                ].map((app, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 cursor-pointer group"
                    style={{ animation: `eas-appPop .4s ease-out ${i * .06}s both` }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg"
                      style={{
                        background: `${app.color}15`,
                        border: `1px solid ${app.color}30`,
                      }}
                    >
                      {app.icon}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{app.name}</span>
                  </div>
                ))}
              </div>

              {/* Install button mockup */}
              <button
                className="mt-5 w-full py-3 rounded-xl text-sm font-black transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${THEME.gold}, ${THEME.goldLight})`,
                  color: THEME.dark,
                  boxShadow: "0 4px 16px rgba(212,162,46,.35)",
                }}
              >
                1-Click Install ›
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 4: Workflow steps — dark strip with numbered cards
// ============================================================
function WorkflowSection({ content }) {
  const [ref, visible] = useReveal(0.08);

  return (
    <section
      ref={ref}
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #fff 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all .6s ease-out",
          }}
        >
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: THEME.gold }}>
            — Integration Workflow
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
            {content.heading}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl">
            {content.subtext}
          </p>
        </div>

        {/* Workflow step cards */}
        <div className="flex flex-col gap-6">
          {content.steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-6"
                style={{
                  flexDirection: isEven ? "row" : "row-reverse",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateX(0)"
                    : `translateX(${isEven ? -40 : 40}px)`,
                  transition: `all .6s ease-out ${i * .1}s`,
                }}
              >
                {/* Step number bubble */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-lg relative"
                    style={{
                      background: `linear-gradient(135deg, ${THEME.gold}, ${THEME.goldLight})`,
                      color: THEME.dark,
                      boxShadow: `0 8px 24px rgba(212,162,46,.35)`,
                      animation: `eas-pulse 2.5s ease-in-out ${i * .3}s infinite`,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Step card */}
                <TiltCard
                  intensity={10}
                  className="flex-1 w-full"
                  style={{}}
                >
                  <div
                    className="relative flex items-start gap-4 p-6 rounded-2xl cursor-default overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,.07)",
                      boxShadow: "0 4px 6px rgba(0,0,0,.03), 0 10px 30px rgba(0,0,0,.04)",
                    }}
                  >
                    {/* Left gold accent bar */}
                    <div
                      className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                      style={{ background: `linear-gradient(180deg, ${THEME.gold}, ${THEME.goldLight})` }}
                    />

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ml-3"
                      style={{
                        background: "rgba(212,162,46,.1)",
                        border: `1px solid rgba(212,162,46,.28)`,
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-extrabold text-gray-900 text-base mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Hover shimmer */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
                      style={{ background: "linear-gradient(135deg, rgba(212,162,46,.03) 0%, transparent 60%)" }}
                    />
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div
          className="mt-10 flex items-center gap-4 px-7 py-5 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(212,162,46,.07), rgba(30,58,138,.04))`,
            border: `1px solid rgba(212,162,46,.25)`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all .6s ease-out .6s",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: "rgba(212,162,46,.15)", border: `1px solid rgba(212,162,46,.28)` }}
          >
            🔗
          </div>
          <p className="text-gray-700 font-semibold text-base">{content.conclusion}</p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 5: Available apps grid — 3D hover cards
// ============================================================
function AppGridSection({ content }) {
  const [ref, visible] = useReveal(0.12);

  const appColors = [
    { bg: "rgba(212,162,46,.1)", border: "rgba(212,162,46,.3)", text: THEME.gold },
    { bg: "rgba(30,58,138,.08)", border: "rgba(30,58,138,.25)", text: THEME.blue },
    { bg: "rgba(220,38,38,.06)", border: "rgba(220,38,38,.2)", text: "#dc2626" },
    { bg: "rgba(124,58,237,.06)", border: "rgba(124,58,237,.2)", text: "#7c3aed" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all .6s ease-out",
          }}
        >
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-center" style={{ color: THEME.gold }}>
            — App Catalog
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            {content.heading}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, transparent, ${THEME.gold})` }} />
            <div className="w-2 h-2 rotate-45" style={{ background: THEME.gold }} />
            <div className="h-0.5 w-10" style={{ background: `linear-gradient(90deg, ${THEME.gold}, transparent)` }} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {content.apps.map((app, i) => {
            const col = appColors[i % appColors.length];
            return (
              <TiltCard
                key={i}
                intensity={16}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(.95)",
                  transition: `all .5s ease-out ${i * .07}s`,
                }}
              >
                <div
                  className="relative flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer overflow-hidden group"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,.06)",
                    boxShadow: "0 4px 6px rgba(0,0,0,.03), 0 10px 20px rgba(0,0,0,.04)",
                  }}
                >
                  {/* Bottom shimmer line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(90deg, transparent, ${col.text}, transparent)` }}
                  />

                  {/* App icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: col.bg,
                      border: `1px solid ${col.border}`,
                    }}
                  >
                    {app.icon}
                  </div>

                  <div className="font-extrabold text-gray-900 text-sm mb-1">{app.name}</div>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: col.bg, color: col.text }}
                  >
                    {app.category}
                  </div>

                 
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 6: CTA — Gold gradient strip
// ============================================================
function CTASection({ content }) {
  const [ref, visible] = useReveal(0.2);

  return (
    <section
      ref={ref}
      className="py-20 px-6 text-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${THEME.gold} 0%, ${THEME.goldLight} 50%, ${THEME.gold} 100%)` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,.14) 0%, transparent 60%)" }}
      />
      {/* Rings */}
      {[280, 480, 680].map((s) => (
        <div
          key={s}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s, height: s,
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
        <h2
          className="font-black text-gray-900 leading-tight mb-4"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
        >
          {content.heading}
        </h2>
        <p className="text-gray-700 text-base mb-8">{content.subtext}</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-1"
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
            className="font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-1"
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
// 🎯 MAIN EXPORT — assemble all sections
// ============================================================
export default function EnterpriseAppStore() {
  return (
    <>
      {/* Global keyframe styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; font-family: 'Inter', sans-serif; }

        @keyframes eas-floatGeo {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50%       { transform: translateY(-14px) rotate(calc(var(--r, 0deg) + 8deg)); }
        }
        @keyframes eas-orbit {
          0%   { transform: rotate(0deg)   translateX(65px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(65px) rotate(-360deg); }
        }
        @keyframes eas-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: .25; }
        }
        @keyframes eas-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes eas-appPop {
          from { opacity: 0; transform: scale(.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes eas-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,162,46,.4); }
          70%       { box-shadow: 0 0 0 10px rgba(212,162,46,0); }
        }
        @keyframes eas-barFill {
          from { width: 0; }
        }
      `}</style>

      <main className="bg-white">
        {/* ── 1. Hero with banner image background ── */}
        <HeroSection content={PAGE_CONTENT.hero} />

        {/* ── 2. Stats strip (dark) ── */}
        <StatsStrip stats={PAGE_CONTENT.stats} />

        {/* ── 3. Key advantages + 3D app store card ── */}
        <AdvantagesSection content={PAGE_CONTENT.advantages} />

        {/* ── 4. Workflow / integration steps ── */}
        <WorkflowSection content={PAGE_CONTENT.workflow} />

        {/* ── 5. App grid catalog ── */}
        <AppGridSection content={PAGE_CONTENT.appGrid} />

        {/* ── 6. CTA strip ── */}
        <CTASection content={PAGE_CONTENT.cta} />
      </main>
    </>
  );
}