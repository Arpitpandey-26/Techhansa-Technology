import React, { useEffect, useRef } from "react";
import {
  Server,
  Database,
  Globe,
  AppWindow,
  Cloud,
  Gauge,
  Clock,
  TrendingDown,
  Settings2,
  Layers,
  Activity,
  Users,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

/* ----------------------------------------------------------------
   Content extracted from the "Managed Services" reference screenshot.
   ---------------------------------------------------------------- */
const benefits = [
  { icon: Clock, title: "24×7×365 Coverage", desc: "Onsite and offshore IT infrastructure support, around the clock, every day of the year." },
  { icon: Gauge, title: "Up to 99.99% Uptime", desc: "Our delivery team is held to uptime levels of up to 99.99% for every customer." },
  { icon: TrendingDown, title: "Cost-Effective Delivery", desc: "Built to lower your overall IT service delivery costs, not just shift them around." },
  { icon: Settings2, title: "Flexible By Design", desc: "A delivery model that flexes to match your specific operational requirements." },
  { icon: Layers, title: "Deep Technical Bench", desc: "Wide technical expertise across multiple skills and technology platforms." },
];

const services = [
  { icon: Server, title: "Data Center Management", desc: "Customers today aren't worried about whether infrastructure is available — they're worried about whether the service is available. We manage that distinction." },
  { icon: Database, title: "Database Management", desc: "Hybrid cloud means your databases live across multiple setups. We tune and manage them across every environment they run in." },
  { icon: Globe, title: "Network Management", desc: "Continuous, real-time visibility into the infrastructure and network services your availability depends on." },
  { icon: AppWindow, title: "Application Management", desc: "Application performance is mission-critical. We manage it across SAP, Java, and the rest of your stack." },
  { icon: Cloud, title: "Remote Infrastructure Management", desc: "Public cloud helps you move faster and spend less. Our RIM services industrialize that shift, cost-effectively." },
];

const opsRows = [
  { icon: Server, label: "Data Center", status: "Operational" },
  { icon: Database, label: "Database", status: "Synced" },
  { icon: Globe, label: "Network", status: "Stable" },
  { icon: AppWindow, label: "Application", status: "Healthy" },
  { icon: Cloud, label: "Remote Infra", status: "Active" },
];

export default function ManagedServices() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const consoleRef = useRef(null);
  const progressRef = useRef(null);
  const allowTiltRef = useRef(false);

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

  useEffect(() => {
    allowTiltRef.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = heroRef.current;
    const panel = consoleRef.current;
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

  return (
    <div ref={rootRef} className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#D4A22E] selection:text-white overflow-x-hidden min-h-screen">
      <style>{`
        @keyframes floatSlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes cubeSpin { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes ringSpin { to { transform: rotate(360deg); } }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin { animation: cubeSpin 16s linear infinite; }
        .animate-ring-spin { animation: ringSpin 50s linear infinite; }
      `}</style>

      {/* Fixed scroll-progress rail (Themed) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div ref={progressRef} className="h-full bg-gradient-to-r from-[#113a71] to-[#D4A22E]" style={{ width: "0%" }}></div>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        
        {/* Soft Background Glows (Themed) */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-[#113a71]/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-10 right-0 w-[26rem] h-[26rem] bg-[#D4A22E]/10 rounded-full blur-3xl opacity-70"></div>
        </div>

        {/* Floating 3D Cube (Themed) */}
        <div className="hidden md:block absolute top-16 right-[8%] w-20 h-20" style={{ perspective: 800 }} aria-hidden="true">
          <div className="relative w-full h-full animate-cube-spin" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#D4A22E]/30 to-transparent border border-[#D4A22E]/50 backdrop-blur-sm" style={{ transform: "translateZ(40px)" }}></div>
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#113a71]/30 to-transparent border border-[#113a71]/50 backdrop-blur-sm" style={{ transform: "rotateY(180deg) translateZ(40px)" }}></div>
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#D4A22E]/20 to-transparent border border-[#D4A22E]/40 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(40px)" }}></div>
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#113a71]/20 to-transparent border border-[#113a71]/40 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(40px)" }}></div>
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/60 to-transparent border border-white/60 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(40px)" }}></div>
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-gray-200/40 to-transparent border border-gray-300/40 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(40px)" }}></div>
          </div>
        </div>

        {/* Floating Glass Sphere (Themed) */}
        <div className="hidden md:block absolute bottom-10 left-[6%] w-28 h-28 rounded-full bg-gradient-to-br from-[#113a71]/20 via-white/30 to-[#D4A22E]/20 backdrop-blur-md border border-white/60 shadow-xl animate-float-slow" aria-hidden="true"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4A22E]">
               Managed IT Services
            </span>
            <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight text-[#113a71] leading-[1.05]">
              Managed{" "}
              <span className="bg-gradient-to-r from-[#113a71] to-[#D4A22E] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[46ch] mb-8">
              Our Managed IT Services program offers an economical, adaptable, and scalable framework to meet your company's IT needs — crafted to optimize your technology investments while you focus on growing the business.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl px-7 py-3.5 font-bold text-sm text-white bg-gradient-to-br from-[#113a71] to-[#0a192f] shadow-lg shadow-[#113a71]/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                Talk to a Specialist
              </button>
              <button
                onClick={() => scrollToId("solutions")}
                className="rounded-xl px-7 py-3.5 font-bold text-sm text-[#113a71] border border-gray-300 hover:border-[#113a71] hover:bg-[#113a71]/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Solutions ↓
              </button>
            </div>
          </div>

          {/* Ops Console (Themed 3D Dark Panel) */}
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ perspective: 1200 }}>
            <div
              ref={consoleRef}
              className="relative mx-auto max-w-sm rounded-3xl bg-[#0a192f]/95 text-white p-6 shadow-2xl shadow-[#113a71]/30 border border-white/10 backdrop-blur-xl transition-transform duration-300 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Live Operations</span>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> All systems normal
                </span>
              </div>

              <div className="flex items-end gap-3 mb-6">
                <Gauge className="text-[#D4A22E]" size={28} />
                <div>
                  <div className="text-3xl font-bold leading-none">99.99%</div>
                  <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Uptime SLA</div>
                </div>
              </div>

              <div className="space-y-3">
                {opsRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5 border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <row.icon size={15} className="text-[#D4A22E]" />
                      <span className="text-sm text-gray-200 font-medium">{row.label}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A22E]"></span>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 mt-16 text-xs font-bold uppercase tracking-widest text-gray-400">
          <span>Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white border-t border-gray-100 rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(17,58,113,0.03)] relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Our service portfolio is tailored to enhance the efficiency and effectiveness of your IT operations through automation tools, scripts, and standardized processes. We seamlessly integrate our ITIL knowledge base with your processes to meet your quality standards.
            </p>
            <h2 className="text-3xl font-extrabold text-[#113a71] mb-4">Why Choose Us?</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              The caliber and dependability of our services are underscored by the fact that{" "}
              <span className="font-bold text-[#D4A22E]">over 85%</span> of our business originates from repeat clients — some of whom have been with us for more than a decade.
            </p>

            <div className="inline-flex items-center gap-4 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(17,58,113,0.08)] px-5 py-4">
              <div className="rounded-xl bg-gradient-to-br from-[#D4A22E] to-[#C19326] p-3 text-white shadow-inner">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xl font-extrabold text-[#113a71]">85% Repeat Clients</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Some for more than a decade</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4A22E] mb-6">Benefits</h3>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  <div
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                    style={{ transformStyle: "preserve-3d", perspective: 800 }}
                    className="flex items-start gap-4 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm px-5 py-4 hover:shadow-[0_15px_30px_rgba(17,58,113,0.1)] hover:-translate-y-1 hover:border-[#113a71]/30 transition-all duration-300"
                  >
                    <div className="flex-none rounded-xl bg-white border border-gray-100 shadow-sm text-[#113a71] p-2.5">
                      <b.icon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-[#113a71]">{b.title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed mt-1">{b.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANAGED SERVICES SOLUTION */}
      <section id="solutions" className="px-6 md:px-10 py-20 md:py-28 bg-[#f4f7f9] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#113a71] mb-4">Managed Services Solution</h2>
            <div className="w-16 h-1.5 bg-[#D4A22E] mx-auto rounded-full mb-6"></div>
            <p className="text-base text-gray-600 leading-relaxed">
              Techhansa delivers intelligent operations management with complete visibility from application to storage — across physical, virtual, and cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured uptime tile (Themed Dark Blue) */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <div
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
                className="h-full rounded-3xl bg-gradient-to-br from-[#0a192f] to-[#113a71] text-white p-7 shadow-xl shadow-[#113a71]/30 border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="rounded-xl bg-[#D4A22E]/20 text-[#D4A22E] p-2.5 w-11 h-11 flex items-center justify-center mb-5">
                  <Activity size={20} />
                </div>
                <div className="text-3xl font-extrabold mb-1 text-white">99.99%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4A22E] mb-3">Uptime SLA</div>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  Continuous, real-time visibility from application to storage — across physical, virtual, and cloud.
                </p>
              </div>
            </div>

            {/* Service Cards (Themed White) */}
            {services.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${(i + 1) * 70}ms` }}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <div
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                  className="h-full rounded-3xl bg-white border border-gray-200 shadow-sm p-7 hover:shadow-[0_20px_40px_rgba(17,58,113,0.12)] hover:border-[#113a71]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="rounded-xl bg-[#f4f7f9] border border-gray-100 text-[#113a71] p-2.5 w-11 h-11 flex items-center justify-center mb-5 shadow-inner">
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-extrabold text-[#113a71] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <button className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#D4A22E] hover:text-[#C19326] mt-auto">
                    Read More
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION (Themed) */}
      <section className="relative px-6 md:px-10 py-20 md:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
          <div className="w-[34rem] h-[34rem] bg-gradient-to-br from-[#113a71]/10 via-[#D4A22E]/5 to-transparent rounded-full blur-3xl opacity-80"></div>
        </div>
        
        {/* Animated Spin Ring */}
        <div className="hidden md:block absolute top-10 right-[10%] w-20 h-20 rounded-full border-2 border-dashed border-[#D4A22E]/40 animate-ring-spin" aria-hidden="true"></div>
        <div className="hidden md:block absolute bottom-20 left-[10%] w-12 h-12 rounded-full border-2 border-[#113a71]/20 animate-float-slow" aria-hidden="true"></div>

        <div
          data-reveal
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative z-10 max-w-2xl mx-auto text-center rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-[0_20px_50px_rgba(17,58,113,0.1)] px-8 py-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#f4f7f9] border border-gray-200 rounded-full px-5 py-2 mb-6">
            <span className="text-[#113a71] text-xs font-bold tracking-widest uppercase">Get Started</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#113a71] mb-4">Operations you don't have to think about.</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-[46ch] mx-auto font-medium">
            Round-the-clock monitoring, proven uptime, and a delivery model built around your business — not the other way around.
          </p>
          <button className="rounded-xl px-8 py-4 font-bold text-sm text-white bg-gradient-to-br from-[#113a71] to-[#0a192f] shadow-lg shadow-[#113a71]/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Talk to a Specialist
          </button>
        </div>
      </section>

    </div>
  );
}