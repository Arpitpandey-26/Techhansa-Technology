import React from 'react';
import { motion } from 'framer-motion';

// Injecting the raw CSS from your HTML safely into the component
const pageStyles = `
  /* ============================================================
     TOKENS — pulled from Techhansa brand theme
     ============================================================ */
  .endpoint-security-page {
    --ink: #0f172a;         /* techDark */
    --blue: #113a71;        /* techBlue Adjusted */
    --paper: #f8fafc;       /* techLight */
    --gold: #D4A22E;        /* techGolden */
    --gold-hover: #e4c77d;  /* goldenHover */

    --ink-soft: rgba(15,23,42,.64);
    --ink-faint: rgba(15,23,42,.42);
    --paper-dim: #eef2f7;
    --paper-card: #ffffff;
    --blue-soft: rgba(17,58,113,.10);
    --gold-soft: rgba(212,162,46,.16);
    --line: rgba(15,23,42,.09);
    --line-strong: rgba(15,23,42,.16);

    --shadow-1: 0 1px 2px rgba(15,23,42,.05);
    --shadow-2: 0 16px 40px rgba(15,23,42,.10);
    --shadow-3: 0 40px 80px rgba(15,23,42,.18);
    --glow-gold: 0 0 0 1px rgba(212,162,46,.35), 0 18px 40px rgba(212,162,46,.22);

    --ease: cubic-bezier(.22,1,.36,1);
    --ease-soft: cubic-bezier(.16,.84,.44,1);

    --display: 'Space Grotesk', 'Inter', sans-serif;
    --body: 'Inter', system-ui, -apple-system, sans-serif;
    --mono: 'JetBrains Mono', ui-monospace, monospace;

    --container: 1280px;
    --pad: clamp(1.25rem, 4vw, 3.25rem);
    
    background: var(--paper);
    color: var(--ink);
    font-family: var(--body);
    overflow-x: hidden;
  }

  .endpoint-security-page * { box-sizing: border-box; }
  
  .ep-container {
    max-width: var(--container);
    margin-inline: auto;
    padding-inline: var(--pad);
  }

  /* Generic eyebrow / kicker label */
  .ep-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    font-family: var(--mono);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--blue);
  }
  .ep-eyebrow::before {
    content: '';
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px var(--gold-soft);
  }

  .endpoint-security-page h1, .endpoint-security-page h2, .endpoint-security-page h3 { 
    font-family: var(--display); margin: 0; color: var(--ink); letter-spacing: -.01em; 
  }

  .ep-kicker-bar {
    display: flex; align-items: center; gap: .85rem;
    margin-bottom: .9rem;
  }
  .ep-kicker-bar::before {
    content: '';
    width: 5px; height: 1.6rem;
    border-radius: 3px;
    background: linear-gradient(180deg, var(--gold), var(--gold-hover));
    box-shadow: 0 4px 14px rgba(212,162,46,.4);
  }
  .ep-kicker-bar span {
    font-family: var(--mono); font-size: .72rem; font-weight: 600;
    letter-spacing: .16em; text-transform: uppercase; color: var(--blue);
  }

  /* Buttons */
  .ep-btn {
    position: relative;
    display: inline-flex; align-items: center; justify-content: center; gap: .6rem;
    font-family: var(--body); font-weight: 600; font-size: .95rem;
    padding: .85rem 1.6rem;
    border-radius: 12px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform .25s var(--ease), box-shadow .25s var(--ease), background .25s var(--ease);
    transform: translateY(0) translateZ(0);
  }
  .ep-btn-gold {
    background: linear-gradient(160deg, var(--gold-hover), var(--gold) 70%);
    color: var(--ink);
    box-shadow: 0 14px 30px rgba(212,162,46,.35), inset 0 1px 0 rgba(255,255,255,.5), inset 0 -2px 6px rgba(15,23,42,.12);
  }
  .ep-btn-gold:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(212,162,46,.45), inset 0 1px 0 rgba(255,255,255,.6); }
  .ep-btn-gold:active { transform: translateY(0px) scale(.98); box-shadow: 0 8px 16px rgba(212,162,46,.35); }
  .ep-btn-ghost {
    background: transparent; color: var(--ink);
    border-color: var(--line-strong);
  }
  .ep-btn-ghost:hover { border-color: var(--blue); background: var(--blue-soft); transform: translateY(-3px); }

  /* ============================================================
     HERO - REDUCED HEIGHT
     ============================================================ */
  .ep-hero {
    position: relative;
    /* Reduced padding top and bottom to decrease overall height */
    padding: clamp(6rem, 12vw, 8rem) 0 clamp(2rem, 5vw, 4rem); 
    overflow: hidden;
  }
  .ep-hero-field {
    position: absolute; inset: 0; z-index: 0;
    background:
      radial-gradient(680px 480px at 82% 12%, var(--gold-soft), transparent 70%),
      radial-gradient(700px 520px at 8% 92%, var(--blue-soft), transparent 70%);
  }
  .ep-node {
    position: absolute; border-radius: 50%;
    background: var(--blue);
    opacity: .35;
    filter: blur(.2px);
    animation: ep-drift 14s ease-in-out infinite;
  }
  .ep-node.gold { background: var(--gold); opacity: .5; }
  @keyframes ep-drift {
    0%,100% { transform: translate(0,0); }
    50% { transform: translate(var(--dx,18px), var(--dy,-22px)); }
  }

  .ep-hero .ep-container {
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: clamp(1rem,4vw,3rem);
    align-items: center;
  }

  .ep-hero-copy h1 {
    font-size: clamp(2.4rem, 4.5vw, 4rem); /* Slightly reduced font size for compact look */
    line-height: 1.04;
    margin: 1rem 0 1.2rem;
  }
  .ep-hero-copy h1 .ep-accent {
    color: var(--blue);
    position: relative;
    background: linear-gradient(100deg, var(--blue) 30%, var(--gold) 95%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .ep-hero-copy .ep-lead {
    font-size: 1rem; line-height: 1.7; color: var(--ink-soft);
    max-width: 48ch; margin: 0 0 1.5rem;
  }
  .ep-hero-cta-row { display: flex; gap: .8rem; flex-wrap: wrap; }

  /* --- Vault Hub (signature 3D element) --- */
  .ep-vault-hub {
    position: relative;
    width: min(100%, 380px); /* Reduced size to match shorter hero */
    aspect-ratio: 1/1;
    margin-inline: auto;
    perspective: 1100px;
  }
  .ep-vault-tilt {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d;
    transition: transform .35s var(--ease-soft);
    will-change: transform;
  }
  .ep-vault-rotor {
    position: absolute; inset: 0;
    transform-style: preserve-3d;
    animation: ep-rotorSpin 50s linear infinite;
  }
  @keyframes ep-rotorSpin { to { transform: rotateZ(360deg); } }

  .ep-ring {
    position: absolute; border-radius: 50%;
    transform-style: preserve-3d;
  }
  .ep-ring-outer {
    inset: 0;
    border: 2px dashed var(--line-strong);
    transform: translateZ(0px);
  }
  .ep-ring-mid {
    inset: 13%;
    border: 1.5px solid var(--blue);
    opacity: .55;
    transform: translateZ(26px);
    animation: ep-counterSpin 34s linear infinite;
  }
  .ep-ring-inner {
    inset: 28%;
    border: 1.5px solid var(--gold);
    opacity: .8;
    transform: translateZ(52px);
    box-shadow: 0 0 30px rgba(212,162,46,.25);
    animation: ep-counterSpin 22s linear infinite reverse;
  }
  @keyframes ep-counterSpin { to { transform: translateZ(var(--tz,26px)) rotateZ(-360deg); } }
  .ep-ring-mid { --tz: 26px; }
  .ep-ring-inner { --tz: 52px; }

  .ep-bolt-core {
    position: absolute; inset: 38%;
    border-radius: 50%;
    transform: translateZ(78px);
    transform-style: preserve-3d;
    background: linear-gradient(155deg, #1b2a4a, var(--ink));
    box-shadow:
      inset 0 2px 4px rgba(255,255,255,.18),
      inset 0 -6px 10px rgba(0,0,0,.45),
      0 25px 45px rgba(15,23,42,.5),
      0 0 0 6px rgba(248,250,252,.9),
      0 0 0 7px var(--line);
    animation: ep-rotorSpin 50s linear infinite reverse;
    display: flex; align-items: center; justify-content: center;
  }
  .ep-bolt-core svg { width: 46%; height: 46%; }

  .ep-orbit-node {
    position: absolute; inset: 0;
    transform-style: preserve-3d;
    animation: ep-rotorSpin 50s linear infinite;
  }
  .ep-orbit-node i {
    position: absolute; top: 0; left: 50%;
    width: 9px; height: 9px; margin-left: -4.5px;
    border-radius: 50%;
    background: var(--gold);
    transform: translateZ(64px);
    box-shadow: 0 0 10px rgba(212,162,46,.8), 0 0 0 4px rgba(212,162,46,.18);
    animation: ep-pulseNode 3.2s ease-in-out infinite;
  }
  .ep-orbit-node:nth-of-type(1) { transform: rotateZ(40deg); }
  .ep-orbit-node:nth-of-type(2) { transform: rotateZ(140deg); }
  .ep-orbit-node:nth-of-type(3) { transform: rotateZ(220deg); }
  .ep-orbit-node:nth-of-type(4) { transform: rotateZ(300deg); }
  .ep-orbit-node:nth-of-type(2) i { animation-delay: .6s; background: var(--blue); box-shadow: 0 0 10px rgba(30,58,138,.7), 0 0 0 4px rgba(30,58,138,.15); }
  .ep-orbit-node:nth-of-type(3) i { animation-delay: 1.2s; }
  .ep-orbit-node:nth-of-type(4) i { animation-delay: 1.8s; background: var(--blue); box-shadow: 0 0 10px rgba(30,58,138,.7), 0 0 0 4px rgba(30,58,138,.15); }
  @keyframes ep-pulseNode { 0%,100% { opacity: .55; transform: translateZ(64px) scale(1); } 50% { opacity: 1; transform: translateZ(64px) scale(1.5); } }

  .ep-vault-floor {
    position: absolute; left: 50%; bottom: -6%;
    width: 78%; height: 18%;
    transform: translateX(-50%) rotateX(78deg);
    background: radial-gradient(closest-side, rgba(15,23,42,.18), transparent 75%);
    filter: blur(2px);
  }

  /* Scroll cue moved slightly up to accommodate reduced height */
  .ep-scroll-cue {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; align-items: center; gap: .5rem;
    margin-top: clamp(1.5rem,4vw,2.5rem); 
    font-family: var(--mono); font-size: .72rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--ink-faint);
  }
  .ep-scroll-cue svg { animation: ep-bob 1.8s ease-in-out infinite; }
  @keyframes ep-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

  @media (max-width:920px) {
    .ep-hero .ep-container { grid-template-columns: 1fr; text-align: center; }
    .ep-hero-copy .ep-lead { margin-inline: auto; }
    .ep-hero-cta-row { justify-content: center; }
    .ep-vault-hub { margin-top: 2rem; }
  }

  /* ============================================================
     SERVICES — "Vault Wall" asymmetric panel grid
     ============================================================ */
  .ep-services { padding: clamp(4rem,8vw,7rem) 0; position: relative; }
  .ep-section-head { max-width: 640px; margin-bottom: clamp(2.5rem,5vw,3.5rem); }
  .ep-section-head h2 { font-size: clamp(1.8rem,3vw,2.5rem); line-height: 1.16; margin-bottom: .85rem; }
  .ep-section-sub { color: var(--ink-soft); font-size: 1.02rem; line-height: 1.65; margin: 0; }

  .ep-vault-wall {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      "a b c d"
      "e f g d";
    gap: 1.15rem;
  }
  .ep-panel-server { grid-area: a; }
  .ep-panel-desktop { grid-area: b; }
  .ep-panel-mobiledev { grid-area: c; }
  .ep-panel-vuln { grid-area: e; }
  .ep-panel-compliance { grid-area: f; }
  .ep-panel-quarantine { grid-area: g; }
  .ep-panel-featured { grid-area: d; }

  .ep-panel {
    position: relative;
    background: var(--paper-card);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 1.7rem 1.5rem 1.6rem;
    box-shadow: var(--shadow-1);
    transform-style: preserve-3d;
    transition: box-shadow .4s var(--ease), border-color .4s var(--ease), transform .4s var(--ease);
  }
  .ep-panel::before {
    content: ''; position: absolute; inset: 0; border-radius: inherit;
    background: radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(212,162,46,.18), transparent 62%);
    opacity: 0; transition: opacity .3s; pointer-events: none;
  }
  .ep-panel:hover::before { opacity: 1; }
  .ep-panel:hover { box-shadow: var(--shadow-2), var(--glow-gold); border-color: rgba(212,162,46,.4); transform: translateY(-8px); }

  .ep-panel-icon {
    width: 46px; height: 46px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    background: var(--blue-soft); color: var(--blue);
    margin-bottom: 1.15rem;
    transform: translateZ(22px);
    transition: transform .3s var(--ease), background .3s, color .3s;
  }
  .ep-panel:hover .ep-panel-icon { background: var(--gold-soft); color: var(--gold); transform: translateZ(38px) rotate(-6deg) scale(1.06); }
  .ep-panel-icon svg { width: 23px; height: 23px; }

  .ep-panel h3 { font-size: 1.04rem; margin-bottom: .5rem; transform: translateZ(14px); }
  .ep-panel p { font-size: .92rem; line-height: 1.6; color: var(--ink-soft); margin: 0; transform: translateZ(10px); }

  .ep-panel-featured {
    background: linear-gradient(165deg, #15234a, var(--ink) 65%);
    color: var(--paper);
    border-color: rgba(255,255,255,.08);
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .ep-panel-featured h3 { color: var(--paper); }
  .ep-panel-featured p { color: rgba(248,250,252,.68); }
  .ep-panel-featured .ep-panel-icon { background: rgba(212,162,46,.2); color: var(--gold); }
  .ep-panel-featured:hover .ep-panel-icon { background: rgba(212,162,46,.32); }
  .ep-stat {
    font-family: var(--display); font-weight: 700;
    font-size: clamp(2.5rem,5vw,3.4rem);
    background: linear-gradient(120deg, var(--gold-hover), var(--gold));
    -webkit-background-clip: text; background-clip: text; color: transparent;
    line-height: 1; margin: 1rem 0 .2rem;
  }
  .ep-stat-label { font-family: var(--mono); font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(248,250,252,.6); }

  @media (max-width:1100px) {
    .ep-vault-wall { grid-template-areas: none; grid-template-columns: repeat(2,1fr); grid-auto-rows: auto; }
    .ep-panel-featured { grid-column: 1 / -1; }
  }
  @media (max-width:680px) {
    .ep-vault-wall { grid-template-columns: 1fr; }
  }

  /* ============================================================
     MOBILE DEVICE MANAGEMENT — ALIGNMENT FIXED
     ============================================================ */
  .ep-mdm { padding: clamp(3rem,7vw,6rem) 0; }
  .ep-mdm-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(2rem,5vw,4rem); align-items: center; }
  .ep-mdm-copy p { font-size: 1rem; line-height: 1.75; color: var(--ink-soft); margin: 0 0 1.1rem; }
  .ep-mdm-copy h2 { font-size: clamp(1.7rem,2.8vw,2.2rem); margin-bottom: 1.1rem; }

  .ep-chip-row { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 1.6rem; }
  .ep-chip { display: inline-flex; align-items: center; gap: .5rem; padding: .55rem .95rem; border-radius: 999px;
    background: var(--paper-dim); border: 1px solid var(--line); font-size: .84rem; font-weight: 600; color: var(--ink-soft);
    transition: transform .25s var(--ease), box-shadow .25s var(--ease), background .25s, color .25s, border-color .25s; }
  .ep-chip i { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); flex: none; }
  .ep-chip:hover { transform: translateY(-3px); background: var(--paper-card); box-shadow: var(--shadow-2); border-color: rgba(212,162,46,.4); color: var(--ink); }

  .ep-mdm-scene { 
    perspective: 1300px; 
    padding: 1.5rem 0; 
    display: flex; 
    justify-content: center; /* Center the cluster horizontally */
  }
  .ep-device-cluster {
    position: relative; 
    width: 420px; 
    height: 360px; 
    transform-style: preserve-3d;
    animation: ep-clusterFloat 9s ease-in-out infinite;
    max-width: 100%; /* Ensure it doesn't break mobile */
  }
  @keyframes ep-clusterFloat {
    0%,100% { transform: rotateY(-9deg) rotateX(3deg) translateY(0); }
    50% { transform: rotateY(5deg) rotateX(-1deg) translateY(-10px); }
  }
  
  .ep-device { position: absolute; transform-style: preserve-3d; }
  .ep-device .ep-layer { position: absolute; inset: 0; border-radius: 16px; }
  .ep-device .ep-l3 { transform: translateZ(-26px) scale(.94); background: var(--blue); opacity: .3; }
  .ep-device .ep-l2 { transform: translateZ(-13px) scale(.97); background: var(--ink); opacity: .5; }
  .ep-device .ep-l1 {
    position: relative; height: 100%; transform: translateZ(0);
    background: linear-gradient(160deg, #1a2c56, var(--ink));
    border-radius: 16px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .55rem;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 26px 48px rgba(15,23,42,.4);
  }
  .ep-device-glyph { width: 26px; height: 26px; opacity: .95; }
  .ep-ui-line { height: 4px; border-radius: 2px; background: rgba(248,250,252,.18); }

  /* Adjusted Left/Top Values to perfectly center devices over the lines */
  .ep-device-laptop { width: 230px; height: 148px; left: 0%; top: 20%; transform: translateZ(-8px); }
  .ep-device-tablet { width: 124px; height: 166px; left: 45%; top: 35%; transform: translateZ(18px); }
  .ep-device-phone { width: 74px; height: 148px; left: 68%; top: 6%; transform: translateZ(46px); }
  .ep-device-laptop .ep-ui-line:nth-child(2) { width: 60px; }
  .ep-device-laptop .ep-ui-line:nth-child(3) { width: 42px; }
  .ep-device-tablet .ep-ui-line { width: 50px; }
  .ep-device-phone .ep-ui-line { width: 32px; }

  /* Orbit Icons aligned cleanly around the devices */
  .ep-orbit-icon {
    position: absolute; width: 40px; height: 40px; border-radius: 50%;
    background: var(--paper-card); border: 1px solid var(--line);
    display: flex; align-items: center; justify-content: center; color: var(--blue);
    box-shadow: var(--shadow-1); z-index: 2;
    animation: ep-orbitFloat 5s ease-in-out infinite;
  }
  .ep-orbit-icon svg { width: 18px; height: 18px; }
  .ep-oi-cloud { top: 0; left: 85%; transform: translateZ(64px); animation-delay: .2s; }
  .ep-oi-lock { bottom: 6%; left: 0%; transform: translateZ(64px); color: var(--gold); animation-delay: 1s; }
  .ep-oi-wifi { bottom: 16%; left: 55%; transform: translateZ(64px); animation-delay: 1.8s; }
  @keyframes ep-orbitFloat { 0%,100% { transform: translateZ(64px) translateY(0); } 50% { transform: translateZ(64px) translateY(-9px); } }

  .ep-orbit-lines { position: absolute; inset: 0; z-index: 1; pointer-events: none; width: 100%; height: 100%; }
  .ep-dash-line { fill: none; stroke: var(--line-strong); stroke-width: 1.4; stroke-dasharray: 5 6; }

  @media (max-width:920px) {
    .ep-mdm-grid, .ep-loop-grid { grid-template-columns: 1fr; text-align: center; }
    .ep-mdm-copy p { max-width: 54ch; margin-inline: auto; }
    .ep-chip-row { justify-content: center; }
  }
  @media (max-width:520px) {
    .ep-device-cluster { height: 300px; width: 300px; }
    .ep-device-laptop { width: 180px; height: 116px; left: 0; }
    .ep-device-tablet { width: 94px; height: 126px; left: 45%; top: 40%; }
    .ep-device-phone { width: 56px; height: 112px; left: 65%; top: 10%; }
    .ep-oi-cloud { left: 80%; }
  }

  /* ============================================================
     CLOSED LOOP SECURITY — recurring ring motif
     ============================================================ */
  .ep-closed-loop { padding: clamp(3rem,7vw,6rem) 0; background: var(--paper-dim); }
  .ep-loop-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: clamp(2rem,5vw,4rem); align-items: center; }
  .ep-loop-copy p { font-size: 1rem; line-height: 1.75; color: var(--ink-soft); margin: 0 0 1.1rem; }
  .ep-loop-copy h2 { font-size: clamp(1.7rem,2.8vw,2.2rem); margin-bottom: 1.1rem; }

  .ep-loop-diagram { position: relative; width: min(100%,360px); aspect-ratio: 1/1; margin-inline: auto; }
  .ep-loop-svg { position: absolute; inset: 0; width: 100%; height: 100%; transform-origin: 50% 50%; }
  .ep-arc { fill: none; stroke-width: 13; stroke-linecap: round; }
  .ep-arc-a { stroke: var(--ink); opacity: .85; }
  .ep-arc-b { stroke: var(--blue); opacity: .85; }
  .ep-arc-c { stroke: var(--gold); opacity: .95; }

  .ep-loop-core {
    position: absolute; inset: 34%; border-radius: 50%;
    background: linear-gradient(155deg, #1b2a4a, var(--ink));
    display: flex; align-items: center; justify-content: center;
    box-shadow: inset 0 2px 4px rgba(255,255,255,.18), inset 0 -6px 10px rgba(0,0,0,.45),
      0 25px 45px rgba(15,23,42,.45), 0 0 0 6px var(--paper-dim), 0 0 0 7px var(--line);
    transition: box-shadow .5s var(--ease);
  }
  .ep-loop-core svg { width: 40%; height: 40%; }
  .ep-loop-tag {
    position: absolute; font-family: var(--mono); font-size: .66rem; letter-spacing: .08em; text-transform: uppercase;
    padding: .35rem .65rem; border-radius: 999px; background: var(--paper-card); border: 1px solid var(--line);
    box-shadow: var(--shadow-1); white-space: nowrap;
  }
  .ep-tag-endpoint { top: -2%; left: 50%; transform: translateX(-50%); color: var(--ink); }
  .ep-tag-network { bottom: 8%; left: -6%; color: var(--blue); }
  .ep-tag-siem { bottom: 8%; right: -6%; color: var(--gold); }
`;

export default function EndpointSecurity() {

  // Smooth scroll handler for CTA button
  const scrollToCoverage = () => {
    document.getElementById('coverage').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="endpoint-security-page font-sans bg-[#f8fafc]">
      <style>{pageStyles}</style>

      {/* HERO SECTION */}
      <section className="ep-hero" id="hero">
        <div className="ep-hero-field" aria-hidden="true">
          <div className="ep-node" style={{ width: '10px', height: '10px', top: '18%', left: '62%', '--dx': '-22px', '--dy': '16px', animationDuration: '11s' }}></div>
          <div className="ep-node gold" style={{ width: '7px', height: '7px', top: '30%', left: '48%', '--dx': '14px', '--dy': '-18px', animationDuration: '9s' }}></div>
          <div className="ep-node" style={{ width: '13px', height: '13px', top: '62%', left: '70%', '--dx': '-16px', '--dy': '20px', animationDuration: '13s' }}></div>
          <div className="ep-node gold" style={{ width: '6px', height: '6px', top: '75%', left: '40%', '--dx': '20px', '--dy': '14px', animationDuration: '10s' }}></div>
          <div className="ep-node" style={{ width: '8px', height: '8px', top: '10%', left: '18%', '--dx': '12px', '--dy': '18px', animationDuration: '12s' }}></div>
        </div>

        <div className="ep-container">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="ep-hero-copy"
          >
            <span className="ep-eyebrow">Digital Workplace · Endpoint Security</span>
            <h1>Endpoint <span className="ep-accent">Security</span></h1>
            <p className="ep-lead">Endpoints typically represent the most vulnerable aspect of a corporate network. Often, the means of breaching these endpoints involve publicly known vulnerabilities that end-users have failed to address proactively. Our services revolve around the continuous monitoring of endpoint vulnerabilities — and when an attack targets specific systems, we swiftly quarantine them, limiting malware's ability to propagate.</p>
            <div className="ep-hero-cta-row">
              <button className="ep-btn ep-btn-gold">Explore</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="ep-vault-hub" 
            id="vaultHub"
          >
            <div className="ep-vault-tilt" id="vaultTilt">
              <div className="ep-vault-rotor">
                <div className="ep-ring ep-ring-outer"></div>
                <div className="ep-ring ep-ring-mid"></div>
                <div className="ep-ring ep-ring-inner"></div>
                <div className="ep-orbit-node"><i></i></div>
                <div className="ep-orbit-node"><i></i></div>
                <div className="ep-orbit-node"><i></i></div>
                <div className="ep-orbit-node"><i></i></div>
              </div>
              <div className="ep-bolt-core">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6">
                  <rect x="5" y="10.5" width="14" height="9.5" rx="2.2"></rect>
                  <path d="M8 10.5V7.2a4 4 0 0 1 8 0v3.3"></path>
                  <circle cx="12" cy="15" r="1.6" fill="var(--gold)" stroke="none"></circle>
                </svg>
              </div>
              <div className="ep-vault-floor"></div>
            </div>
          </motion.div>
        </div>

        <div className="ep-scroll-cue">
          <span>Scroll</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* COVERAGE / VAULT WALL SECTION */}
      <section className="ep-services" id="coverage">
        <div className="ep-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ep-section-head"
          >
            <div className="ep-kicker-bar"><span>Coverage</span></div>
            <h2>Endpoint management, secured panel by panel.</h2>
            <p className="ep-section-sub">Our End Point Management services cover the full surface of the modern workplace — from racks in the data center to the phone in someone's pocket.</p>
          </motion.div>

          <div className="ep-vault-wall">
            {[
              { 
                class: 'ep-panel-server', title: 'Server Management', 
                icon: <><rect x="4" y="4" width="16" height="6" rx="1.4"/><rect x="4" y="14" width="16" height="6" rx="1.4"/><circle cx="7.5" cy="7" r=".8" fill="currentColor" stroke="none"/><circle cx="7.5" cy="17" r=".8" fill="currentColor" stroke="none"/></>, 
                desc: 'Includes patch management, license compliance, and system hardening.' 
              },
              { 
                class: 'ep-panel-desktop', title: 'Desktops / Laptops Management', 
                icon: <><rect x="4" y="5" width="16" height="10" rx="1.2"/><path d="M2 19h20"/></>, 
                desc: 'Encompasses patch management, license compliance, asset management, and license usage analysis.' 
              },
              { 
                class: 'ep-panel-mobiledev', title: 'Mobile Devices Management', 
                icon: <><rect x="3" y="7" width="10" height="14" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="11" rx="1.3"/></>, 
                desc: 'Comprises Mobile Device, Mobile Application, Mobile Identity, and Mobile Content Management.' 
              },
              { 
                class: 'ep-panel-vuln', title: 'Vulnerability Assessment & Mitigation', 
                icon: <><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/><path d="M12 8v5"/><circle cx="12" cy="15.6" r=".7" fill="currentColor" stroke="none"/></>, 
                desc: 'Monitoring incidents and events, isolating threatened systems to halt the spread of attacks, and strengthening vulnerability reduction.' 
              },
              { 
                class: 'ep-panel-compliance', title: 'Continuous Security & Compliance', 
                icon: <><rect x="5" y="4" width="14" height="17" rx="1.6"/><path d="M8.5 12.5l2 2 4-4.5"/></>, 
                desc: 'Ongoing adherence to security and regulatory policies, with real-time compliance status visibility.' 
              },
              { 
                class: 'ep-panel-quarantine', title: 'Automatic Quarantine', 
                icon: <><circle cx="12" cy="12" r="9" strokeDasharray="3 3"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M10.2 11V9.6a1.8 1.8 0 0 1 3.6 0V11"/></>, 
                desc: 'Automatically isolates non-compliant endpoints until remediation is completed.' 
              },
            ].map((panel, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`ep-panel ${panel.class}`}
              >
                <div className="ep-panel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {panel.icon}
                  </svg>
                </div>
                <h3>{panel.title}</h3>
                <p>{panel.desc}</p>
              </motion.article>
            ))}

            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="ep-panel ep-panel-featured"
            >
              <div>
                <div className="ep-panel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="13" r="7.2"/><path d="M11 9v4l3 2"/><path d="M17.3 4.6l2 1-1 2"/></svg>
                </div>
                <h3>Reduced Patching Timelines</h3>
                <p>Shortens patching cycles from days or weeks to mere hours.</p>
              </div>
              <div>
                <div className="ep-stat">98%</div>
                <div className="ep-stat-label">First-pass patch success rate</div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* MOBILITY SECTION */}
      <section className="ep-mdm" id="mobility">
        <div className="ep-container ep-mdm-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ep-mdm-copy"
          >
            <div className="ep-kicker-bar"><span>Mobility</span></div>
            <h2>Mobile Device Management</h2>
            <p>Until a few years ago, Mobile Device Management and desktop management were distinct entities. However, with the introduction of Windows 10 and recent versions of iOS, the operating systems on mobile devices, laptops, and tablets have converged, streamlining device management.</p>
            <p>This convergence, while beneficial, also introduces complexity into the environment, particularly when accommodating both BYOD and company-owned devices. To navigate this landscape, our mobility services offer secure access to mobile devices, management of the enterprise app store, device quarantine, remote wiping, and data backup.</p>
            <div className="ep-chip-row">
              <span className="ep-chip"><i></i>Secure Access</span>
              <span className="ep-chip"><i></i>Enterprise App Store</span>
              <span className="ep-chip"><i></i>Device Quarantine</span>
              <span className="ep-chip"><i></i>Remote Wipe &amp; Backup</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ep-mdm-scene"
          >
            <div className="ep-device-cluster" id="deviceCluster">
              <svg className="ep-orbit-lines" viewBox="0 0 100 90" preserveAspectRatio="none">
                <path className="ep-dash-line" d="M55,42 C68,30 78,18 84,4"></path>
                <path className="ep-dash-line" d="M30,46 C20,58 12,68 6,80"></path>
                <path className="ep-dash-line" d="M58,58 C58,68 56,76 56,84"></path>
              </svg>

              <div className="ep-device ep-device-laptop">
                <span className="ep-layer ep-l3"></span>
                <span className="ep-layer ep-l2"></span>
                <span className="ep-layer ep-l1">
                  <svg className="ep-device-glyph" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6"><rect x="5" y="10.5" width="14" height="9.5" rx="2.2"/><path d="M8 10.5V7.2a4 4 0 0 1 8 0v3.3"/><circle cx="12" cy="15" r="1.4" fill="var(--gold)" stroke="none"/></svg>
                  <span className="ep-ui-line"></span>
                  <span className="ep-ui-line"></span>
                </span>
              </div>

              <div className="ep-device ep-device-tablet">
                <span className="ep-layer ep-l3"></span>
                <span className="ep-layer ep-l2"></span>
                <span className="ep-layer ep-l1">
                  <svg className="ep-device-glyph" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6"><rect x="4" y="4" width="7" height="7" rx="1.4"/><rect x="13" y="4" width="7" height="7" rx="1.4"/><rect x="4" y="13" width="7" height="7" rx="1.4"/><rect x="13" y="13" width="7" height="7" rx="1.4"/></svg>
                  <span className="ep-ui-line"></span>
                </span>
              </div>

              <div className="ep-device ep-device-phone">
                <span className="ep-layer ep-l3"></span>
                <span className="ep-layer ep-l2"></span>
                <span className="ep-layer ep-l1">
                  <svg className="ep-device-glyph" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6"><path d="M12 4v6l-5 9.5h10L12 10"/><path d="M9.5 19.5h5"/></svg>
                  <span className="ep-ui-line"></span>
                </span>
              </div>

              <div className="ep-orbit-icon ep-oi-cloud">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 18a4 4 0 0 1-.6-7.96A5 5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 17 18H7z"/></svg>
              </div>
              <div className="ep-orbit-icon ep-oi-lock">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="6" y="11" width="12" height="9" rx="1.6"/><path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11"/></svg>
              </div>
              <div className="ep-orbit-icon ep-oi-wifi">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 9.5a10 10 0 0 1 14 0"/><path d="M7.8 12.6a6.2 6.2 0 0 1 8.4 0"/><path d="M10.6 15.6a2.6 2.6 0 0 1 2.8 0"/><circle cx="12" cy="18.4" r=".7" fill="currentColor" stroke="none"/></svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSED LOOP SECTION */}
      <section className="ep-closed-loop" id="closed-loop">
        <div className="ep-container ep-loop-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="ep-loop-diagram"
          >
            <svg className="ep-loop-svg" viewBox="0 0 300 300" id="loopRotor">
              <circle className="ep-arc ep-arc-a" cx="150" cy="150" r="120" pathLength="100" strokeDasharray="27 73" strokeDashoffset="0"></circle>
              <circle className="ep-arc ep-arc-b" cx="150" cy="150" r="120" pathLength="100" strokeDasharray="27 73" strokeDashoffset="-33"></circle>
              <circle className="ep-arc ep-arc-c" cx="150" cy="150" r="120" pathLength="100" strokeDasharray="27 73" strokeDashoffset="-66"></circle>
            </svg>
            <div className="ep-loop-core" id="loopCore">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6">
                <rect x="5" y="10.5" width="14" height="9.5" rx="2.2"></rect>
                <path d="M8 10.5V7.2a4 4 0 0 1 8 0v3.3"></path>
                <circle cx="12" cy="15" r="1.6" fill="var(--gold)" stroke="none"></circle>
              </svg>
            </div>
            <span className="ep-loop-tag ep-tag-endpoint">Endpoint</span>
            <span className="ep-loop-tag ep-tag-network">Network</span>
            <span className="ep-loop-tag ep-tag-siem">SIEM</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ep-loop-copy"
          >
            <div className="ep-kicker-bar"><span>Closed Loop Security</span></div>
            <h2>One posture, not three silos</h2>
            <p>Typically, individuals tend to consider endpoint security, network security, and SIEM as separate entities. However, our Closed Loop Security services adopt a comprehensive perspective when assessing the organization's security posture.</p>
            <p>We firmly believe that endpoints represent the most vulnerable aspect of an organization's security posture, necessitating continuous monitoring. Furthermore, while your SIEM solution diligently tracks numerous security incidents and events, we focus on correlating, analyzing, and applying analytics to the various tools at your disposal — identifying and mitigating risk by harnessing the collective insight of every tool in the loop.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}