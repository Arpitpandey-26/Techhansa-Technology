import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Users,
  CheckCircle2,
  Award,
  Target,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  BadgeCheck
} from "lucide-react";

/* ═══════════════════════════════════════════════
   GLOBAL KEYFRAMES & 3D CSS
═══════════════════════════════════════════════ */
function GlobalStyles() {
  return (
    <style>{`
     
      :root {
        --brand-blue: #113a71;
        --brand-gold: #D4A22E;
        --brand-gold-light: #F0C850;
      }

      /* ── Fluid Animations ── */
      @keyframes floatY { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-20px)} }
      @keyframes floatY-reverse { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(20px)} }
      @keyframes pulseGlow { 0%,100%{box-shadow: 0 0 20px rgba(212,162,46,0.2)} 50%{box-shadow: 0 0 40px rgba(212,162,46,0.6)} }
      @keyframes spinSlow { 100% { transform: rotate(360deg); } }
      @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      
      /* ── Scroll Reveals ── */
      @keyframes fadeUp { from { opacity:0; transform:translateY(60px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }
      .anim-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-400 { animation-delay: 400ms; }

      /* ── Ultra Premium 3D Card ── */
      .ultra-card-3d {
        position: relative;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(17,58,113,0.1);
        transform-style: preserve-3d;
        transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
        will-change: transform;
      }
      .ultra-card-3d::before {
        content: "";
        position: absolute;
        inset: -2px;
        border-radius: inherit;
        background: linear-gradient(90deg, var(--brand-gold), transparent, var(--brand-blue), transparent);
        background-size: 300% 300%;
        animation: gradientMove 4s ease infinite;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .ultra-card-3d:hover {
        transform: translateY(-15px) rotateX(5deg) rotateY(-5deg) scale(1.03);
        box-shadow: 
          20px 30px 60px rgba(17,58,113,0.15), 
          -10px -10px 30px rgba(212,162,46,0.1);
      }
      .ultra-card-3d:hover::before { opacity: 1; }
      
      /* Inner 3D pops */
      .pop-out { transition: transform 0.4s ease; }
      .ultra-card-3d:hover .pop-out-1 { transform: translateZ(30px); }
      .ultra-card-3d:hover .pop-out-2 { transform: translateZ(50px); }
      .ultra-card-3d:hover .pop-out-3 { transform: translateZ(70px); }

      /* ── Text Gradients ── */
      .text-gradient-gold {
        background: linear-gradient(135deg, var(--brand-gold), #F0C850);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Base settings */
      h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
      p, span, button { font-family: 'Inter', sans-serif; }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════
   HOOKS (Mouse Parallax & Scroll Reveal)
═══════════════════════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return pos;
}

/* ═══════════════════════════════════════════════
   SECTION LABEL
═══════════════════════════════════════════════ */
function SectionBadge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4A22E]/30 bg-[#D4A22E]/10 shadow-[0_0_20px_rgba(212,162,46,0.15)] mb-6">
      <span className="w-2 h-2 rounded-full bg-[#D4A22E] animate-pulse" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#113a71]">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   1. HERO SECTION (With Floating 3D Talent Cards)
═══════════════════════════════════════════════ */
function Hero() {
  const mouse = useMouseParallax();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a192f] rounded-b-[60px] md:rounded-b-[100px] shadow-[0_30px_80px_rgba(17,58,113,0.3)] z-20">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110" 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
          alt="Tech Workspace" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-[#113a71]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="anim-fadeUp opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4A22E] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Outsourcing & Staffing</span>
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Professional<br />
              <span className="text-gradient-gold">Services</span>
            </h1>
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4A22E] to-transparent rounded-full mb-8"></div>

            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10">
              In today's fiercely competitive landscape, bringing full-time employees onto a company's payroll can be costly. TechHansa offers a comprehensive suite of staffing services to address your IT workforce needs across India and the USA.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#D4A22E] to-[#b8860b] shadow-[0_10px_30px_rgba(212,162,46,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2 group">
                Hire Talent Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-white bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">
                Learn Framework
              </button>
            </div>
          </div>

          {/* Right 3D Floating Elements (Mouse Parallax) */}
          <div className="hidden lg:flex justify-center items-center h-[600px] relative perspective">
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-[#D4A22E]/20 rounded-full blur-[80px]"></div>

            {/* Center Main Hologram Ring */}
            <div className="absolute w-[350px] h-[350px] border border-dashed border-white/20 rounded-full animate-[spinSlow_40s_linear_infinite]"
                 style={{ transform: `rotateX(${60 + mouse.y * 10}deg) rotateY(${mouse.x * 10}deg)` }}></div>

            {/* Floating Talent Card 1 */}
            <div className="absolute bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 w-64"
                 style={{ 
                   transform: `translate3d(${mouse.x * 30 - 80}px, ${mouse.y * 30 - 120}px, 50px) rotate(-5deg)`,
                   animation: 'floatY 6s ease-in-out infinite' 
                 }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A22E] to-yellow-600 flex items-center justify-center shrink-0">
                <Globe size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Cloud Architect</p>
                <p className="text-[#D4A22E] text-xs font-semibold">USA Site</p>
              </div>
            </div>

            {/* Floating Talent Card 2 */}
            <div className="absolute bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 w-64"
                 style={{ 
                   transform: `translate3d(${mouse.x * -20 + 80}px, ${mouse.y * -20 + 80}px, 80px) rotate(5deg)`,
                   animation: 'floatY-reverse 8s ease-in-out infinite' 
                 }}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Security Admin</p>
                <p className="text-green-400 text-xs font-semibold">India Site</p>
              </div>
            </div>

            {/* Center Stat Badge */}
            <div className="absolute bg-gradient-to-b from-[#113a71] to-[#0a192f] border border-[#D4A22E]/40 p-6 rounded-3xl shadow-[0_20px_50px_rgba(212,162,46,0.2)] text-center"
                 style={{ 
                   transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 120px)`,
                 }}>
              <Users size={32} className="text-[#D4A22E] mx-auto mb-2" />
              <p className="text-4xl font-black text-white">500+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Experts Deployed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   2. CORE STRENGTH (Isometric Stacking & Holographic Image)
═══════════════════════════════════════════════ */
function CoreStrengthSection() {
  const [ref, vis] = useInView();

  return (
    <section className="py-24 md:py-32 bg-white relative z-10 overflow-hidden">
      {/* Ambient BG styling */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#113a71 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text & Isometric Layers */}
          <div>
            <div className={`${vis ? 'anim-fadeUp' : 'opacity-0'}`}>
              <SectionBadge text="Our Core Strength" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#113a71] leading-tight mb-8">
                Skilled Professionals,<br />
                <span className="text-gradient-gold">Proven Framework.</span>
              </h2>
            </div>
            
            {/* 3D Stacking Cards */}
            <div className="space-y-4 perspective">
              {[
                { 
                  icon: <BadgeCheck size={24} />, 
                  title: "Rigorous Recruitment", 
                  desc: "Multiple interviews, written assessments, and thorough background checks." 
                },
                { 
                  icon: <Zap size={24} />, 
                  title: "Advanced Training", 
                  desc: "Hands-on experience on internal projects ensures readily deployable resources." 
                },
                { 
                  icon: <Target size={24} />, 
                  title: "Competency Center", 
                  desc: "Dedicated to the selection, recruitment, and skill enhancement of technical personnel." 
                }
              ].map((item, i) => (
                <div key={i} className={`ultra-card-3d rounded-2xl p-6 flex gap-5 items-start bg-white ${vis ? `anim-fadeUp delay-${(i+1)*100}` : 'opacity-0'}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#f4f7f9] text-[#113a71] flex items-center justify-center shrink-0 border border-gray-200 pop-out pop-out-2 shadow-inner">
                    {item.icon}
                  </div>
                  <div className="pop-out pop-out-1">
                    <h3 className="font-bold text-[#113a71] text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3D Image Frame */}
          <div className={`${vis ? 'anim-fadeUp delay-300' : 'opacity-0'} perspective`}>
            <div className="relative w-full max-w-lg mx-auto ultra-card-3d rounded-[40px] p-4 bg-white/50">
              {/* Spinning Tech Ring behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[20px] border-dotted border-[#D4A22E]/10 rounded-full animate-[spinSlow_30s_linear_infinite] -z-10"></div>
              
              <div className="relative rounded-[32px] overflow-hidden pop-out pop-out-2 shadow-[0_20px_40px_rgba(17,58,113,0.2)]">
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#113a71]/80 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1632&auto=format&fit=crop" 
                  alt="Business Handshake" 
                  className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 z-20 pop-out pop-out-3">
                  <p className="text-white font-black text-2xl drop-shadow-lg">Global Delivery</p>
                  <p className="text-[#D4A22E] font-bold text-sm tracking-widest uppercase mt-1">Excellence Assured</p>
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
   3. SOLUTIONS (Massive 3D Pedestals)
═══════════════════════════════════════════════ */
function SolutionsSection() {
  const [ref, vis] = useInView();

  const solutions = [
    { 
      icon: <Cpu size={32} />, 
      title: "Implementation Services", 
      desc: "Over 160 man-years of experience doing implementation projects in multiple countries over the last decade. Seamless, scalable, and secure.",
      color: "from-[#113a71] to-[#0a192f]",
      badgeColor: "text-[#113a71]"
    },
    { 
      icon: <Users size={32} />, 
      title: "Resourcing Services", 
      desc: "In today's competitive environment, hiring manpower on company rolls is expensive. Outsource your IT talent needs to our certified pool of experts.",
      color: "from-[#D4A22E] to-[#b8860b]",
      badgeColor: "text-[#D4A22E]"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f4f7f9] relative z-20 border-t border-gray-200">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective">
        
        <div className={`text-center mb-20 ${vis ? "anim-fadeUp" : "opacity-0"}`}>
          <SectionBadge text="What We Offer" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#113a71] mb-6">
            Professional Services <span className="text-gradient-gold">Solution</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Tech Hansa service delivers intelligent operations management with complete visibility from application to storage, across physical, virtual, and cloud infrastructure.
          </p>
        </div>

        {/* 3D Pedestal Cards */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {solutions.map((sol, i) => (
            <div key={sol.title} className={`${vis ? `anim-fadeUp delay-${(i+1)*200}` : "opacity-0"}`}>
              <div className="ultra-card-3d rounded-[40px] p-10 h-full flex flex-col bg-white">
                
                {/* 3D Floating Icon Box */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${sol.color} text-white flex items-center justify-center mb-8 pop-out pop-out-3 shadow-[0_15px_30px_rgba(0,0,0,0.15)]`}>
                  {sol.icon}
                </div>
                
                <h3 className="text-2xl font-extrabold text-[#113a71] mb-4 pop-out pop-out-2">
                  {sol.title}
                </h3>
                
                <p className="text-gray-600 font-medium leading-relaxed flex-grow pop-out pop-out-1">
                  {sol.desc}
                </p>
                
                <div className="mt-10 pop-out pop-out-2 border-t border-gray-100 pt-6">
                  <button className={`group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${sol.badgeColor} hover:opacity-80 transition-opacity`}>
                    Explore Detail
                    <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   4. CTA SECTION
═══════════════════════════════════════════════ */
function CtaSection() {
  const [ref, vis] = useInView();
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white border-t border-gray-100">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50rem] h-[50rem] bg-gradient-to-br from-[#113a71]/5 to-[#D4A22E]/5 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-3xl mx-auto text-center relative z-10 perspective">
        <div className={vis ? "anim-fadeUp" : "opacity-0"}>
          <SectionBadge text="Scale Your Team" />
          <h2 className="mt-4 font-extrabold text-[#113a71] leading-tight" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.02em" }}>
            Ready to Build Your<br />
            <span className="text-gradient-gold">Dream IT Workforce?</span>
          </h2>
          <p className="mt-6 text-gray-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
            From temporary staffing to permanent deployment, access our pool of certified professionals and reduce your operational costs today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 px-10 py-5 rounded-2xl font-extrabold text-white text-base bg-gradient-to-br from-[#113a71] to-[#0a192f] shadow-[0_15px_30px_rgba(17,58,113,0.25)] hover:-translate-y-1 transition-transform">
              Schedule a Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════════ */
export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-[#D4A22E] selection:text-white">
      <GlobalStyles />
      <Hero />
      <CoreStrengthSection />
      <SolutionsSection />
      <CtaSection />
    </div>
  );
}