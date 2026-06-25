import React, { useState } from "react";

// Services Data with Original Glow Colors restored for the Light Theme
const services = [
  {
    id: "01",
    title: "Office On The Cloud",
    subtitle: "O365",
    icon: "☁️",
    description: "Office 365 is a productivity suite. Most companies stop after just migrating mail to the cloud. Our services are directed to getting you a higher ROI from your O365 investment by unlocking its full potential.",
    color: "#D4A22E",
    glowColor: "rgba(212, 162, 46, 0.15)", // Adjusted opacity for white theme
  },
  {
    id: "02",
    title: "Desktop Virtualization",
    subtitle: "VDI",
    icon: "🖥️",
    description: "Desktop virtualization can provide a stable operating system environment for users across your company while decreasing overheads and improving security across your entire digital workspace.",
    color: "#113a71",
    glowColor: "rgba(17, 58, 113, 0.15)",
  },
  {
    id: "03",
    title: "Enterprise App Store",
    subtitle: "Apps",
    icon: "📱",
    description: 'We are all familiar with the concept of "App Store" for Smart phones, where applications are available and users can download. We bring this same seamless experience to your enterprise ecosystem.',
    color: "#D4A22E",
    glowColor: "rgba(212, 162, 46, 0.15)",
  },
  {
    id: "04",
    title: "User Experience",
    subtitle: "Monitoring",
    icon: "📊",
    description: "When you embark on a journey for digital transformation, user experience is crucial for ensuring the adoption of productivity solutions. We monitor and optimize every touchpoint.",
    color: "#113a71",
    glowColor: "rgba(17, 58, 113, 0.15)",
  },
  {
    id: "05",
    title: "Endpoint Security",
    subtitle: "Protection",
    icon: "🔒",
    description: "End points are normally the weakest link in the corporate network. We protect against publicly known vulnerabilities and zero-day threats with comprehensive endpoint security strategies.",
    color: "#D4A22E",
    glowColor: "rgba(212, 162, 46, 0.15)",
  },
];

// Floating 3D Cube Component
const FloatingCube = ({ style, size = 40, color = "#113a71" }) => (
  <div
    className="absolute pointer-events-none"
    style={{
      width: size,
      height: size,
      transformStyle: "preserve-3d",
      animation: "floatRotate 8s infinite ease-in-out",
      ...style,
    }}
  >
    {["front", "back", "left", "right", "top", "bottom"].map((face) => (
      <div
        key={face}
        className={`absolute w-full h-full border cube-${face}`}
        style={{
          borderColor: color,
          background: `${color}10`,
          backdropFilter: "blur(2px)",
        }}
      />
    ))}
  </div>
);

export default function DigitalMain() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#113a71] selection:text-white overflow-x-hidden min-h-screen">
      
      <style>{`
        @keyframes floatRotate {
          0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-20px) rotateX(90deg) rotateY(45deg); }
          50% { transform: translateY(-10px) rotateX(180deg) rotateY(90deg); }
          75% { transform: translateY(-25px) rotateX(270deg) rotateY(135deg); }
          100% { transform: translateY(0px) rotateX(360deg) rotateY(180deg); }
        }
        @keyframes pulse3d {
          0%, 100% { box-shadow: 0 0 15px rgba(212,162,46,0.3), 0 0 40px rgba(212,162,46,0.1); }
          50% { box-shadow: 0 0 25px rgba(212,162,46,0.5), 0 0 60px rgba(212,162,46,0.2); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes gridGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes scanLine {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .cube-front  { transform: translateZ(calc(var(--size, 20px))); }
        .cube-back   { transform: rotateY(180deg) translateZ(calc(var(--size, 20px))); }
        .cube-left   { transform: rotateY(-90deg) translateZ(calc(var(--size, 20px))); }
        .cube-right  { transform: rotateY(90deg) translateZ(calc(var(--size, 20px))); }
        .cube-top    { transform: rotateX(90deg) translateZ(calc(var(--size, 20px))); }
        .cube-bottom { transform: rotateX(-90deg) translateZ(calc(var(--size, 20px))); }

        .hero-grid {
          background-image:
            linear-gradient(rgba(17,58,113,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,58,113,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridGlow 4s ease-in-out infinite;
        }

        .scan-effect::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(212,162,46,0.8), transparent);
          animation: scanLine 3s linear infinite;
          left: 0;
        }

        /* ORIGINAL CARD 3D HOVER PROPERTY RESTORED */
        .card-3d {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .card-3d:hover {
          transform: translateY(-16px) rotateX(8deg) rotateY(-5deg) scale(1.03);
        }
        .card-inner-glow {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .card-3d:hover .card-inner-glow {
          opacity: 1;
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white hero-grid scan-effect border-b border-gray-100">
        
        <FloatingCube style={{ top: "15%", right: "10%", "--size": "25px" }} size={50} color="#D4A22E" />
        <FloatingCube style={{ top: "65%", right: "20%", "--size": "15px", animationDelay: "2s" }} size={30} color="#113a71" />
        <FloatingCube style={{ top: "25%", left: "5%", "--size": "12px", animationDelay: "4s" }} size={25} color="#D4A22E" />
        <FloatingCube style={{ bottom: "15%", left: "10%", "--size": "20px", animationDelay: "1s" }} size={40} color="#113a71" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#f4f7f9] border border-gray-200 rounded-full px-5 py-1.5 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-[#D4A22E] rounded-full" style={{ animation: "pulse3d 2s infinite" }} />
              <span className="text-[#113a71] text-xs md:text-sm font-bold tracking-widest uppercase">Digital Transformation</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#113a71] leading-tight mb-6 tracking-tight">
              Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A22E] to-[#C19326]">Workplace</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              Modern technologies like cloud computing have transformed business operations. TechHansa helps organizations harness the full potential of digital transformation—fostering agility, innovation, and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[#D4A22E] to-[#C19326] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(212,162,46,0.3)] hover:-translate-y-1 transition-all duration-300">
                Explore Solutions
              </button>
              <button className="bg-white text-[#113a71] border border-[#113a71] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f4f7f9] hover:-translate-y-1 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 mt-12 pt-12 border-t border-gray-100">
              {[["10x", "ROI Increase"], ["99.9%", "Uptime SLA"], ["500+", "Enterprises"]].map(([num, label]) => (
                <div key={label} className="border-l-4 border-[#D4A22E] pl-4 text-left">
                  <div className="text-3xl md:text-4xl font-black text-[#113a71]">{num}</div>
                  <div className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[450px] shrink-0 perspective-1000" style={{ animation: "heroFloat 6s ease-in-out infinite" }}>
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-[0_30px_60px_rgba(17,58,113,0.12)] relative transform-gpu hover:rotate-x-6 hover:-rotate-y-6 transition-transform duration-500 cursor-default">
              
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D4A22E]"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#D4A22E]"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#D4A22E]"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#D4A22E]"></div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Live Dashboard</span>
                </div>
                <div className="text-5xl mb-4">💼</div>
                <div className="text-[#113a71] font-black text-2xl">Digital Workplace</div>
                <div className="text-gray-400 text-sm font-medium">Unified Operations Hub</div>
              </div>

              <div className="space-y-4">
                {[["Cloud Migration", 92], ["User Adoption", 87], ["Security Score", 98], ["Performance", 94]].map(([label, val]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-gray-600">{label}</span>
                      <span className="text-[#113a71]">{val}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#113a71] to-[#D4A22E] rounded-full" style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-[#f8fafc] border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="text-[#D4A22E] text-sm font-bold tracking-widest uppercase mb-4">— Our Approach</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#113a71] leading-tight mb-6">
                TechHansa Acquires & Deploys <span className="text-[#D4A22E]">Digital Transformation</span> Tools
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Organizations often acquire and deploy digital transformation tools, yet their utilization frequently remains limited—often below 10%. Our services are designed to assist customers in not only implementing these tools but also in maximizing the return on their investments.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {["Implementation", "Optimization", "Training", "Support"].map((tag) => (
                  <span key={tag} className="bg-white border border-gray-200 text-[#113a71] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
              <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_rgba(17,58,113,0.1),-10px_-10px_30px_rgba(255,255,255,1)] transform-gpu rotate-x-12 -rotate-y-12 hover:rotate-0 transition-transform duration-500 cursor-pointer w-full max-w-[450px]">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🏢</div>
                  <h3 className="text-[#113a71] font-bold text-xl">Enterprise Digital Hub</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[["☁️", "Cloud O365"], ["🖥️", "VDI"], ["📱", "App Store"], ["🔒", "Security"]].map(([icon, label]) => (
                    <div key={label} className="bg-[#f4f7f9] border border-gray-100 p-4 rounded-2xl text-center hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-300">
                      <div className="text-3xl mb-2">{icon}</div>
                      <div className="text-[#113a71] font-bold text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ORIGINAL 3D CARDS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[#D4A22E] text-sm font-bold tracking-widest uppercase mb-4">— What We Deliver</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#113a71] mb-6">
              Digital Workplace Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              TechHansa delivers intelligent operations management with complete visibility from application to storage, across physical, virtual, and cloud infrastructure.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            perspective: "1200px",
          }}>
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className="card-3d group"
                onMouseEnter={() => setActiveCard(svc.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  background: activeCard === svc.id ? "linear-gradient(135deg, #ffffff 0%, #f4f7f9 100%)" : "#ffffff",
                  border: `1px solid ${activeCard === svc.id ? "rgba(212,162,46,0.5)" : "rgba(17,58,113,0.1)"}`,
                  borderRadius: "24px",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: activeCard === svc.id
                    ? `0 30px 60px rgba(17,58,113,0.15), 0 0 40px ${svc.glowColor}`
                    : "0 8px 24px rgba(17,58,113,0.05)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* 1. Original Inner Glow */}
                <div
                  className="card-inner-glow"
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "60%",
                    background: `linear-gradient(180deg, ${svc.glowColor} 0%, transparent 100%)`,
                    borderRadius: "24px 24px 0 0",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* 2. Original ID Text */}
                <div style={{
                  position: "absolute",
                  top: 20, right: 20,
                  color: "rgba(17,58,113,0.05)",
                  fontSize: "3rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  zIndex: 1,
                }}>
                  {svc.id}
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  
                  {/* 3. Original 3D Pop-out Icon */}
                  <div
                    style={{
                      width: 64, height: 64,
                      background: "linear-gradient(135deg, rgba(212,162,46,0.1), rgba(17,58,113,0.05))",
                      border: "1px solid rgba(212,162,46,0.2)",
                      borderRadius: 16,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.8rem",
                      marginBottom: 24,
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      transform: activeCard === svc.id ? "rotateY(20deg) scale(1.15)" : "none",
                      boxShadow: activeCard === svc.id ? `0 0 30px ${svc.glowColor}` : "none",
                    }}
                  >
                    {svc.icon}
                  </div>

                  <div style={{ color: "#D4A22E", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>
                    {svc.subtitle}
                  </div>
                  <h3 style={{ color: "#113a71", fontSize: "1.25rem", fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
                    {svc.description}
                  </p>

                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: activeCard === svc.id ? "#D4A22E" : "#113a71",
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: 0,
                      letterSpacing: "0.05em",
                      transition: "gap 0.3s ease, color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                  >
                    Read More <span style={{ fontSize: 18 }}>→</span>
                  </button>
                </div>

                {/* 4. Original Shimmer Line */}
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                    background: activeCard === svc.id ? "linear-gradient(90deg, transparent, #D4A22E, transparent)" : "transparent",
                    transition: "all 0.4s ease",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-[#f4f7f9] border-t border-gray-200 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 mb-8 shadow-sm">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[#113a71] text-sm font-bold tracking-widest uppercase">Ready to Transform?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#113a71] leading-tight mb-6">
            Start Your <span className="text-[#D4A22E]">Digital Journey</span> Today
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let TechHansa guide your organization through a complete digital transformation—maximizing productivity, security, and ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#113a71] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(17,58,113,0.3)] hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </button>
            <button className="bg-white text-[#113a71] border border-gray-300 px-10 py-4 rounded-xl font-bold text-lg shadow-sm hover:border-[#113a71] hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}