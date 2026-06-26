import React, { useEffect, useRef } from "react";
import {
  Cloud,
  Lock,
  Wifi,
  Monitor,
  Smartphone,
  Laptop,
  Tablet,
  ShieldCheck,
  UploadCloud,
  Rocket,
  Leaf,
  Server,
  ChevronDown,
  ArrowUp,
} from "lucide-react";

export default function DesktopVirtualization() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const hubTiltRef = useRef(null);
  const fillRef = useRef(null);
  const allowTiltRef = useRef(false);

  // Scroll-reveal for any element carrying the "reveal" class
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    els.forEach((el) => el.classList.add("is-visible"));
  }, []);

  // Fixed top scroll-progress rail
  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (fillRef.current) fillRef.current.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }
    let scheduled = false;
    function onScroll() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        update();
        scheduled = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Hero stream-hub mouse-follow tilt (signature element)
  useEffect(() => {
    const allowTilt =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    allowTiltRef.current = allowTilt;
    const hero = heroRef.current;
    const tilt = hubTiltRef.current;
    if (!allowTilt || !hero || !tilt) return;
    function move(e) {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `rotateY(${px * 20}deg) rotateX(${-py * 16}deg)`;
    }
    function leave() {
      tilt.style.transform = "rotateY(0deg) rotateX(0deg)";
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
    const rx = (0.5 - py) * 10;
    const ry = (px - 0.5) * 12;
    card.style.transform = `translateZ(6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    card.style.setProperty("--mx", px * 100 + "%");
    card.style.setProperty("--my", py * 100 + "%");
  }
  function resetTilt(e) {
    e.currentTarget.style.transform = "";
  }
  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={rootRef} className="vdi-page relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        .vdi-page{
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --paper-dim:#eef2f7; --blue-soft:rgba(30,58,138,.10); --gold-soft:rgba(212,162,46,.16);
          --line:rgba(15,23,42,.09); --line-strong:rgba(15,23,42,.16);
          --shadow-1:0 1px 2px rgba(15,23,42,.05);
          --shadow-2:0 16px 40px rgba(15,23,42,.10);
          --shadow-3:0 40px 80px rgba(15,23,42,.18);
          --glow-gold:0 0 0 1px rgba(212,162,46,.35), 0 18px 40px rgba(212,162,46,.22);
          --ease:cubic-bezier(.22,1,.36,1);
          --ease-soft:cubic-bezier(.16,.84,.44,1);
          font-family:'Inter',system-ui,-apple-system,sans-serif;
          background:var(--paper); color:var(--ink); overflow-x:hidden;
        }
        .vdi-page h1, .vdi-page h2, .vdi-page h3{ font-family:'Space Grotesk','Inter',sans-serif; letter-spacing:-.01em; color:var(--ink); }
        .vdi-page .mono{ font-family:'JetBrains Mono', ui-monospace, monospace; }
        .vdi-page ::selection{ background:var(--gold-soft); }

        .eyebrow{ display:inline-flex; align-items:center; gap:.55rem; font-family:'JetBrains Mono',monospace; font-size:.72rem; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:var(--blue); }
        .eyebrow::before{ content:''; width:7px; height:7px; border-radius:50%; background:var(--gold); box-shadow:0 0 0 4px var(--gold-soft); }
        .kicker-bar{ display:flex; align-items:center; gap:.85rem; margin-bottom:.9rem; }
        .kicker-bar::before{ content:''; width:5px; height:1.6rem; border-radius:3px; background:linear-gradient(180deg,var(--gold),var(--gold-hover)); box-shadow:0 4px 14px rgba(212,162,46,.4); }
        .kicker-bar span{ font-family:'JetBrains Mono',monospace; font-size:.72rem; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:var(--blue); }

        .btn-gold{ background:linear-gradient(160deg,var(--gold-hover),var(--gold) 70%); color:var(--ink);
          box-shadow:0 14px 30px rgba(212,162,46,.35), inset 0 1px 0 rgba(255,255,255,.5), inset 0 -2px 6px rgba(15,23,42,.12);
          transition:transform .25s var(--ease), box-shadow .25s var(--ease); }
        .btn-gold:hover{ transform:translateY(-3px); box-shadow:0 20px 40px rgba(212,162,46,.45); }
        .btn-gold:active{ transform:translateY(0) scale(.98); }
        .btn-ghost{ border:1px solid var(--line-strong); color:var(--ink); transition:all .25s var(--ease); }
        .btn-ghost:hover{ border-color:var(--blue); background:var(--blue-soft); transform:translateY(-3px); }

        .scroll-rail{ position:sticky; top:0; height:3px; width:100%; z-index:40; }
        .scroll-rail__fill{ height:100%; width:0%; background:linear-gradient(90deg,var(--blue),var(--gold)); box-shadow:0 0 12px rgba(212,162,46,.6); }

        .site-header{ position:sticky; top:0; z-index:30; background:rgba(248,250,252,.78); backdrop-filter:blur(14px) saturate(140%); border-bottom:1px solid var(--line); }
        .brand-mark{ width:30px; height:30px; border-radius:9px; background:linear-gradient(155deg,var(--blue),var(--ink)); position:relative; box-shadow:var(--shadow-1); }
        .brand-mark::after{ content:''; position:absolute; inset:0; margin:auto; width:10px; height:10px; top:50%; left:50%; transform:translate(-50%,-50%); border:2px solid var(--gold); border-radius:50%; }

        .reveal{ opacity:0; translate:0 28px; transition:opacity .7s var(--ease-soft), translate .7s var(--ease-soft); }
        .reveal.is-visible{ opacity:1; translate:0 0; }

        .hero-field{ position:absolute; inset:0; z-index:0;
          background: radial-gradient(680px 480px at 14% 10%, var(--gold-soft), transparent 70%),
                      radial-gradient(720px 540px at 88% 90%, var(--blue-soft), transparent 70%); }
        .node{ position:absolute; border-radius:50%; background:var(--blue); opacity:.35; animation:drift 13s ease-in-out infinite; }
        .node.gold{ background:var(--gold); opacity:.5; }
        @keyframes drift{ 0%,100%{ transform:translate(0,0); } 50%{ transform:translate(var(--dx,16px), var(--dy,-18px)); } }

        /* ---- Stream Hub (signature 3D element) ---- */
        .hub-wrap{ perspective:1200px; width:min(100%,460px); margin-inline:auto; }
        .hub-tilt{ transform-style:preserve-3d; transition:transform .35s var(--ease-soft); will-change:transform; }
        .hub-stage{ position:relative; transform-style:preserve-3d; }

        .hub-panel{ position:relative; width:78%; margin:0 auto; aspect-ratio:16/10; border-radius:20px;
          transform-style:preserve-3d; transform:translateZ(14px);
          background:linear-gradient(160deg,#16264c,var(--ink));
          box-shadow:inset 0 1px 0 rgba(255,255,255,.08), 0 30px 60px rgba(15,23,42,.4);
          padding:14px 16px; display:flex; flex-direction:column; animation:floatY 6s ease-in-out infinite; }
        .hub-panel::before{ content:''; position:absolute; inset:0; border-radius:20px; background:var(--blue); opacity:.32; transform:translateZ(-16px) scale(.95); }
        .hub-panel::after{ content:''; position:absolute; inset:0; border-radius:20px; background:var(--ink); opacity:.5; transform:translateZ(-8px) scale(.98); }
        .hub-dotrow{ display:flex; gap:6px; margin-bottom:10px; position:relative; z-index:1; }
        .hub-dot{ width:7px; height:7px; border-radius:50%; background:rgba(248,250,252,.28); }
        .hub-line{ height:5px; border-radius:3px; background:rgba(248,250,252,.18); margin-bottom:7px; position:relative; z-index:1; }

        .hub-badge{ position:absolute; width:42px; height:42px; border-radius:50%; background:var(--paper); border:1px solid var(--line);
          display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-2); animation:floatY 4.2s ease-in-out infinite; }
        .hub-badge svg{ width:18px; height:18px; }
        .badge-cloud{ top:-10%; left:50%; transform:translate(-50%,0) translateZ(50px); color:var(--gold); }
        .badge-lock{ top:16%; left:-6%; transform:translateZ(50px); color:var(--blue); animation-delay:.9s; }
        .badge-wifi{ top:16%; right:-6%; transform:translateZ(50px); color:var(--blue); animation-delay:1.6s; }

        .hub-beams{ position:absolute; inset:0; pointer-events:none; z-index:0; }
        .beam{ fill:none; stroke:var(--gold); stroke-width:1.5; stroke-dasharray:6 8; opacity:.5; animation:dashFlow 1.6s linear infinite; }

        .hub-devices{ position:relative; display:flex; justify-content:space-between; width:94%; margin:2.6rem auto 0; z-index:1; }
        .hub-device{ width:21%; aspect-ratio:3/4; position:relative; transform-style:preserve-3d; animation:floatY 5.2s ease-in-out infinite; }
        .hub-device:nth-of-type(2){ animation-delay:.4s; }
        .hub-device:nth-of-type(3){ animation-delay:.8s; }
        .hub-device:nth-of-type(4){ animation-delay:1.2s; }
        .hub-device .face{ position:relative; height:100%; border-radius:13px; background:linear-gradient(160deg,#1a2c56,var(--ink));
          display:flex; align-items:center; justify-content:center; box-shadow:0 18px 32px rgba(15,23,42,.32); }
        .hub-device .face svg{ width:36%; height:36%; color:var(--gold); }
        .hub-device::before{ content:''; position:absolute; inset:0; border-radius:13px; background:var(--blue); opacity:.3; transform:translateZ(-10px) scale(.94); }

        @keyframes floatY{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }
        @keyframes dashFlow{ to{ stroke-dashoffset:-28; } }
        @keyframes bob{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(6px); } }
        @keyframes rotorSpin{ to{ transform:rotate(360deg); } }

        .scroll-cue svg{ animation:bob 1.8s ease-in-out infinite; }

        /* ---- Generic tilt card / panel ---- */
        .tilt-card{ position:relative; transform-style:preserve-3d; transition:box-shadow .35s var(--ease), border-color .35s var(--ease); will-change:transform; }
        .tilt-card::before{ content:''; position:absolute; inset:0; border-radius:inherit;
          background:radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(212,162,46,.18), transparent 62%);
          opacity:0; transition:opacity .3s; pointer-events:none; }
        .tilt-card:hover::before{ opacity:1; }
        .tilt-card:hover{ box-shadow:var(--shadow-2), var(--glow-gold); border-color:rgba(212,162,46,.4) !important; }

        .stat-feature{ background:linear-gradient(165deg,#15234a,var(--ink) 65%); color:var(--paper); }
        .stat-feature p, .stat-feature .sub{ color:rgba(248,250,252,.68); }
        .stat-big{ font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:clamp(2.4rem,5vw,3.3rem);
          background:linear-gradient(120deg,var(--gold-hover),var(--gold)); -webkit-background-clip:text; background-clip:text; color:transparent; line-height:1; }
        .stat-label{ font-family:'JetBrains Mono',monospace; font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; color:rgba(248,250,252,.6); }

        .provider-badge{ width:46px; height:46px; border-radius:12px; display:flex; align-items:center; justify-content:center;
          background:var(--blue-soft); color:var(--blue); transform:translateZ(20px); transition:transform .3s var(--ease), background .3s, color .3s; }
        .tilt-card:hover .provider-badge{ background:var(--gold-soft); color:var(--gold); transform:translateZ(34px) rotate(-6deg) scale(1.05); }

        .cta-band{ position:relative; overflow:hidden; background:linear-gradient(160deg,var(--ink),#142042 75%); color:var(--paper); }
        .cta-ring{ position:absolute; left:-90px; top:50%; width:340px; height:340px; border:1.5px dashed rgba(248,250,252,.14); border-radius:50%; transform:translateY(-50%); animation:rotorSpin 60s linear infinite; }
        .cta-ring::before{ content:''; position:absolute; inset:18%; border:1px solid rgba(212,162,46,.35); border-radius:50%; }

        .back-to-top{ width:42px; height:42px; border-radius:50%; background:#fff; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:var(--shadow-1); transition:transform .25s var(--ease), box-shadow .25s var(--ease); }
        .back-to-top:hover{ transform:translateY(-4px); box-shadow:var(--shadow-2); }

        @media (prefers-reduced-motion: reduce){
          .vdi-page *, .vdi-page *::before, .vdi-page *::after{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
        }
      `}</style>

    

     

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="hero-field" aria-hidden="true">
          <div className="node" style={{ width: 10, height: 10, top: "16%", left: "20%", "--dx": "-20px", "--dy": "16px", animationDuration: "11s" }}></div>
          <div className="node gold" style={{ width: 7, height: 7, top: "30%", left: "40%", "--dx": "14px", "--dy": "-18px", animationDuration: "9s" }}></div>
          <div className="node" style={{ width: 12, height: 12, top: "70%", left: "16%", "--dx": "-14px", "--dy": "18px", animationDuration: "13s" }}></div>
          <div className="node gold" style={{ width: 6, height: 6, top: "78%", left: "62%", "--dx": "18px", "--dy": "12px", animationDuration: "10s" }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Digital Workplace &middot; Desktop Virtualization</span>
            <h1 className="mt-4 mb-5 text-4xl md:text-6xl leading-[1.05]">
              Desktop Virtualization <span style={{ background: "linear-gradient(100deg,var(--blue) 30%, var(--gold) 95%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>&mdash; VDI</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-[46ch] mb-7" style={{ color: "var(--ink-soft)" }}>
              Desktop virtualization offers a stable operating system environment for users across your organization, all while reducing overhead costs. Managed centrally, it minimizes the maintenance and administration workload for your IT staff &mdash; giving you the flexibility to patch, update, or upgrade desktops as needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-gold rounded-xl px-7 py-3.5 font-semibold text-sm">Talk to a Specialist</button>
              <button onClick={() => scrollToId("vdi-solutions")} className="btn-ghost rounded-xl px-7 py-3.5 font-semibold text-sm">
                See Cloud Solutions ↓
              </button>
            </div>
          </div>

          <div className="hub-wrap">
            <div className="hub-tilt" ref={hubTiltRef}>
              <div className="hub-stage">
                <div className="hub-panel">
                  <div className="hub-dotrow"><span className="hub-dot"></span><span className="hub-dot"></span><span className="hub-dot"></span></div>
                  <div className="hub-line" style={{ width: "70%" }}></div>
                  <div className="hub-line" style={{ width: "50%" }}></div>
                  <div className="hub-line" style={{ width: "60%" }}></div>
                  <div className="hub-badge badge-cloud"><Cloud /></div>
                  <div className="hub-badge badge-lock"><Lock /></div>
                  <div className="hub-badge badge-wifi"><Wifi /></div>
                </div>

                <svg className="hub-beams" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path className="beam" d="M50,46 C40,62 24,72 12,86"></path>
                  <path className="beam" d="M50,46 C46,64 40,76 37,86"></path>
                  <path className="beam" d="M50,46 C54,64 60,76 63,86"></path>
                  <path className="beam" d="M50,46 C60,62 76,72 88,86"></path>
                </svg>

                <div className="hub-devices">
                  <div className="hub-device"><div className="face"><Smartphone /></div></div>
                  <div className="hub-device"><div className="face"><Monitor /></div></div>
                  <div className="hub-device"><div className="face"><Laptop /></div></div>
                  <div className="hub-device"><div className="face"><Tablet /></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-cue relative z-10 flex flex-col items-center gap-2 mt-16 mono text-xs uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>
          <span>Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* REACH WITHOUT COMPROMISE */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <div className="kicker-bar"><span>Mobility &amp; Efficiency</span></div>
            <h2 className="text-2xl md:text-4xl leading-tight mb-4">Reach without compromising security</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>
              Desktop virtualization infrastructure extends the reach of desktops to remote workers and travelers without compromising your company's security protocols.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Energy-efficient thin clients and flat panels can significantly decrease office power consumption. The adoption of public Infrastructure as a Service (IaaS) can make transitioning to Virtual Desktop Infrastructure (VDI) a practical reality.
            </p>
          </div>

          <div className="reveal stat-feature rounded-[20px] p-8 md:p-10">
            <div className="provider-badge mb-5" style={{ background: "rgba(212,162,46,.2)", color: "var(--gold)" }}>
              <Leaf size={22} />
            </div>
            <div className="stat-big">70%</div>
            <div className="stat-label mt-1 mb-4">Potential cut in office power use</div>
            <p className="text-sm leading-relaxed sub">
              Energy-efficient thin clients and flat panels replace power-hungry desktop towers &mdash; a practical win on the way to a full IaaS-backed VDI rollout.
            </p>
          </div>
        </div>
      </section>

      {/* VDI CLOUD SOLUTIONS */}
      <section id="vdi-solutions" className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--paper-dim)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal max-w-2xl mb-12">
            <div className="kicker-bar"><span>Cloud Platforms</span></div>
            <h2 className="text-2xl md:text-4xl leading-tight mb-4">VDI Cloud Solutions</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              We provide complete VDI cloud solutions on the platforms enterprises already trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Server, name: "IBM® SoftLayer®", desc: "Enterprise-grade managed hosting, built for predictable, regulated workloads." },
              { icon: Cloud, name: "Amazon Web Services", desc: "Elastic, global-scale compute for virtual desktops that grow with demand." },
              { icon: ShieldCheck, name: "Microsoft® Azure®", desc: "Hybrid-ready enterprise cloud that plays well with existing Windows estates." },
            ].map((p, i) => (
              <div
                key={p.name}
                className="reveal tilt-card bg-white rounded-2xl p-7"
                style={{ border: "1px solid var(--line)", boxShadow: "var(--shadow-1)", transitionDelay: `${i * 80}ms` }}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <div className="provider-badge mb-5"><p.icon size={22} /></div>
                <h3 className="text-lg mb-2">{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal max-w-3xl mb-10">
            <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Desktop virtualization systems seamlessly integrate with various client platforms &mdash; thin clients, existing Windows, Linux, and Macintosh systems, or even a secure webpage for versatile deployment. Centralized management of desktop images enhances security and performance, offering benefits such as:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: UploadCloud, title: "Easy deployment & upgrades", desc: "Push applications and updates from a single central repository." },
              { icon: ShieldCheck, title: "Secure computing, any endpoint", desc: "Implement secure computing from any endpoint, anywhere." },
              { icon: Rocket, title: "Rapid rollout", desc: "Roll out new desktops and applications within minutes, not days." },
              { icon: Leaf, title: "Lower energy costs", desc: "Reduce energy costs through energy-efficient, centrally managed systems." },
            ].map((b, i) => (
              <div
                key={b.title}
                className="reveal tilt-card bg-white rounded-2xl p-6 flex items-start gap-4"
                style={{ border: "1px solid var(--line)", boxShadow: "var(--shadow-1)", transitionDelay: `${i * 70}ms` }}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <div className="provider-badge flex-none"><b.icon size={20} /></div>
                <div>
                  <h3 className="text-base mb-1">{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band px-6 md:px-10 py-16 md:py-20">
        <div className="cta-ring" aria-hidden="true"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl md:text-4xl" style={{ color: "var(--paper)" }}>One desktop, delivered anywhere.</h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(248,250,252,.68)" }}>
            From data-center rack to the laptop on a kitchen table, our team designs and manages a VDI environment that's fast to roll out and easy to secure.
          </p>
          <button className="btn-gold rounded-xl px-7 py-3.5 font-semibold text-sm">Talk to a Specialist</button>
        </div>
      </section>

     
    </div>
  );
}