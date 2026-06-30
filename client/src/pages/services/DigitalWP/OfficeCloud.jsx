import React from 'react';
import { motion } from 'framer-motion';

const pageStyles = `
  @keyframes floatY { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(8deg); } }
  @keyframes floatY2 { 0%, 100% { transform: translateY(0) rotate(45deg); } 50% { transform: translateY(-10px) rotate(53deg); } }
  @keyframes orbitDot { 0% { transform: rotate(0deg) translateX(90px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); } }
  @keyframes orbitDot2 { 0% { transform: rotate(0deg) translateX(60px) rotate(0deg); } 100% { transform: rotate(-360deg) translateX(60px) rotate(360deg); } }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
  @keyframes barfill { from { width: 0; } to {} }
  @keyframes slideL { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes slideR { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(212,162,46,.4); } 70% { box-shadow: 0 0 0 14px rgba(212,162,46,0); } }
  @keyframes shimmer { 0% { left: -60%; } 100% { left: 120%; } }
  @keyframes cloudFloat { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.03); } }
  @keyframes nodeAppear { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: scale(1); } }
  @keyframes rippleOut { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(2.2); opacity: 0; } }
  @keyframes scanH { 0% { top: 0; } 100% { top: 100%; } }

  .hero-wrap { background: linear-gradient(135deg, #5f6572 0%, #7695b8 60%, #0404046d 100%); padding: 120px 5% 80px; position: relative; overflow: hidden; min-height: 460px; display: flex; align-items: center; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; }
 
  .hero-scan { position: absolute; left: 0; right: 0; height: 2px; pointer-events: none; z-index: 2; background: linear-gradient(90deg, transparent, rgba(212,162,46,.6), transparent); animation: scanH 5s linear infinite; }
  .geo-float { position: absolute; border: 1px solid rgba(212,162,46,.25); animation: floatY 6s ease-in-out infinite; pointer-events: none; }
  .hero-content { position: relative; z-index: 4; max-width: 1280px; margin: 0 auto; width: 100%; display: flex; align-items: center; gap: 3.5rem; }
  .hero-text { flex: 1; animation: slideL .7s ease-out both; }
  .eyebrow { display: inline-flex; align-items: center; gap: 9px; background: rgba(212,162,46,.12); border: 1px solid rgba(212,162,46,.35); border-radius: 100px; padding: 5px 18px; margin-bottom: 20px; }
  .eyebrow-dot { width: 8px; height: 8px; background: #D4A22E; border-radius: 50%; box-shadow: 0 0 10px #D4A22E; animation: blink 2s ease-in-out infinite; }
  .eyebrow-t { color: #D4A22E; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
  .hero-h1 { font-size: clamp(2.4rem, 5vw, 4.5rem); font-weight: 900; line-height: 1.05; margin-bottom: 20px; background: linear-gradient(130deg, #fff 0%, #D4A22E 55%, #E4C77D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hero-p { color: rgba(255,255,255,.65); font-size: .98rem; line-height: 1.85; max-width: 520px; margin-bottom: 32px; }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-gold { background: linear-gradient(135deg, #D4A22E, #E4C77D); color: #0f172a; border: none; padding: 12px 30px; border-radius: 8px; font-weight: 800; font-size: 14px; cursor: pointer; transition: all .3s; }
  .btn-gold:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(212,162,46,.45); }
  .btn-ghost { background: transparent; color: #D4A22E; border: 1px solid rgba(212,162,46,.4); padding: 12px 30px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; transition: all .3s; }
  .btn-ghost:hover { background: rgba(212,162,46,.1); transform: translateY(-4px); }
  
  .holo-box { flex: 0 0 360px; max-width: 360px; animation: slideR .7s ease-out .2s both; }
  .holo-inner { background: linear-gradient(135deg, rgba(30,58,138,.25), rgba(212,162,46,.08)); border: 1px solid rgba(212,162,46,.3); border-radius: 18px; padding: 26px; position: relative; overflow: hidden; box-shadow: 0 0 50px rgba(212,162,46,.15); }
  .holo-shimmer-bar { position: absolute; top: 0; bottom: 0; width: 50%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.04), transparent); animation: shimmer 4s ease-in-out infinite; }
  .corner { position: absolute; width: 15px; height: 15px; }
  .c-tl { top: 10px; left: 10px; border-top: 2px solid #D4A22E; border-left: 2px solid #D4A22E; }
  .c-tr { top: 10px; right: 10px; border-top: 2px solid #D4A22E; border-right: 2px solid #D4A22E; }
  .c-bl { bottom: 10px; left: 10px; border-bottom: 2px solid #D4A22E; border-left: 2px solid #D4A22E; }
  .c-br { bottom: 10px; right: 10px; border-bottom: 2px solid #D4A22E; border-right: 2px solid #D4A22E; }
  
  .live-row { display: flex; align-items: center; gap: 7px; justify-content: center; margin-bottom: 14px; }
  .live-dot { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 8px #22c55e; animation: blink 1.4s infinite; }
  .live-txt { color: rgba(255,255,255,.4); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
  .holo-icon { font-size: 2rem; text-align: center; margin-bottom: 6px; }
  .holo-title { color: #D4A22E; font-size: 1rem; font-weight: 800; text-align: center; margin-bottom: 2px; }
  .holo-sub { color: rgba(255,255,255,.35); font-size: 11px; text-align: center; margin-bottom: 18px; }
  .bar-r { margin-bottom: 10px; }
  .bar-m { display: flex; justify-content: space-between; margin-bottom: 4px; }
  .bl { color: rgba(255,255,255,.6); font-size: 11px; }
  .bv { color: #D4A22E; font-size: 11px; font-weight: 700; }
  .bt { height: 3px; background: rgba(255,255,255,.07); border-radius: 3px; overflow: hidden; }
  .bf { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #1e3a8a, #D4A22E); animation: barfill .8s ease-out both; }
  
  .intro-band { background: #fff; padding: 4rem 5%; }
  .intro-inner { display: flex; align-items: flex-start; gap: 4rem; max-width: 1280px; margin: 0 auto; }
  .intro-left { flex: 1; }
  .intro-tagline { font-size: clamp(1.1rem, 2vw, 1.35rem); font-weight: 700; color: #0f172a; line-height: 1.5; margin-bottom: 22px; }
  .intro-tagline .g { color: #D4A22E; }
  .check-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .check-list li { display: flex; align-items: flex-start; gap: 10px; font-size: .93rem; color: #475569; line-height: 1.6; }
  .check-icon { width: 18px; height: 18px; background: linear-gradient(135deg, #D4A22E, #E4C77D); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; font-size: 10px; color: #fff; }
  .cloud-viz { flex: 0 0 340px; max-width: 340px; }
  .cloud-svg-wrap { position: relative; width: 100%; height: 280px; }
  .cloud-svg-wrap svg { width: 100%; height: 100%; }
  
  .services-section { background: linear-gradient(180deg, #f8faff 0%, #fff 100%); padding: 5rem 5%; }
  .sec-head { text-align: center; max-width: 700px; margin: 0 auto 3.5rem; }
  .sec-eye { color: #D4A22E; font-size: 12px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; margin-bottom: 12px; }
  .sec-h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; color: #535761; line-height: 1.15; margin-bottom: 14px; }
  .sec-p { color: #64748b; font-size: .96rem; line-height: 1.85; }
  .gold-divider { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 16px; }
  .gd-line { width: 36px; height: 2px; }
  .gd-l { background: linear-gradient(90deg, transparent, #D4A22E); }
  .gd-r { background: linear-gradient(90deg, #D4A22E, transparent); }
  .gd-diamond { width: 7px; height: 7px; background: #D4A22E; transform: rotate(45deg); }
  
  .svc-row { display: flex; align-items: flex-start; gap: 3.5rem; max-width: 1280px; margin: 0 auto; }
  .svc-row.rev { flex-direction: row-reverse; }
  .svc-content { flex: 1; }
  .svc-badge { display: inline-flex; align-items: center; gap: 7px; background: linear-gradient(135deg, rgba(212,162,46,.12), rgba(30,58,138,.06)); border: 1px solid rgba(212,162,46,.3); border-radius: 6px; padding: 4px 14px; margin-bottom: 14px; }
  .svc-badge-txt { color: #D4A22E; font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
  .svc-title { font-size: clamp(1.3rem, 2.5vw, 1.7rem); font-weight: 800; color: #434853; margin-bottom: 14px; border-left: 4px solid #D4A22E; padding-left: 14px; }
  .svc-desc { color: #475569; font-size: .95rem; line-height: 1.85; margin-bottom: 20px; }
  .svc-check { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .svc-check li { display: flex; align-items: center; gap: 9px; font-size: .92rem; color: #374151; }
  .svc-check-dot { width: 6px; height: 6px; background: #D4A22E; border-radius: 50%; flex-shrink: 0; }
  
  .svc-visual { flex: 0 0 400px; max-width: 400px; }
  .vis-card { background: #fff; border-radius: 18px; padding: 28px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 4px 6px rgba(0,0,0,.04), 0 20px 50px rgba(212,162,46,.08); transition: all .4s cubic-bezier(.175,.885,.32,1.275); transform-style: preserve-3d; cursor: default; position: relative; overflow: hidden; }
  .vis-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #D4A22E, #1e3a8a, #D4A22E); }
  .vis-card:hover { transform: translateY(-10px) rotateX(4deg) rotateY(-3deg); box-shadow: 0 30px 70px rgba(212,162,46,.18), 0 8px 20px rgba(0,0,0,.06); }
  .vis-head { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
  .vis-icon-box { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(212,162,46,.15), rgba(30,58,138,.1)); border: 1px solid rgba(212,162,46,.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; transition: all .3s; }
  .vis-card:hover .vis-icon-box { transform: rotateY(20deg); box-shadow: 0 0 20px rgba(212,162,46,.25); }
  .vis-htitle { font-size: 1rem; font-weight: 800; color: #0f172a; }
  .vis-hsub { font-size: 12px; color: #94a3b8; }
  
  .process-section { background: linear-gradient(135deg, #0f172a 0%, #0b1629 100%); padding: 5rem 5%; position: relative; overflow: hidden; }
  .process-steps { display: flex; gap: 0; max-width: 1100px; margin: 0 auto; flex-wrap: wrap; }
  .p-step { flex: 1; min-width: 160px; text-align: center; padding: 28px 16px; position: relative; }
  .p-step:not(:last-child)::after { content: ''; position: absolute; top: 38px; right: -1px; width: 2px; height: 26px; background: linear-gradient(180deg, transparent, #D4A22E, transparent); }
  .p-num { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #D4A22E, #E4C77D); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 900; color: #0f172a; margin: 0 auto 16px; animation: pulseGlow 2.5s ease-in-out infinite; }
  .p-title { color: #fff; font-size: .95rem; font-weight: 700; margin-bottom: 8px; }
  .p-desc { color: rgba(255,255,255,.45); font-size: .82rem; line-height: 1.6; }
  
  .mgmt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
  .mgmt-card { background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 16px; padding: 26px 22px; transition: all .35s cubic-bezier(.175,.885,.32,1.275); transform-style: preserve-3d; cursor: default; position: relative; overflow: hidden; }
  .mgmt-card:hover { transform: translateY(-10px) rotateX(5deg); box-shadow: 0 24px 50px rgba(212,162,46,.15), 0 4px 12px rgba(0,0,0,.05); border-color: rgba(212,162,46,.35); }
  .mgmt-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent, #D4A22E, transparent); opacity: 0; transition: opacity .35s; }
  .mgmt-card:hover::after { opacity: 1; }
  .mgmt-icon { font-size: 1.8rem; margin-bottom: 14px; }
  .mgmt-title { font-size: 1rem; font-weight: 800; color: #0f172a; margin-bottom: 10px; }
  .mgmt-desc { font-size: .88rem; color: #64748b; line-height: 1.7; }
  
  .cta-strip { background: linear-gradient(135deg, #D4A22E 0%, #E4C77D 50%, #D4A22E 100%); padding: 4rem 5%; text-align: center; position: relative; overflow: hidden; }
  .cta-strip::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 60%); }
  .cta-h { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 900; color: #0f172a; margin-bottom: 10px; position: relative; }
  .cta-p { color: rgba(15,23,42,.65); font-size: .97rem; margin-bottom: 28px; position: relative; }
  .cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-dark { background: #0f172a; color: #D4A22E; border: none; padding: 13px 32px; border-radius: 8px; font-weight: 800; font-size: 14px; cursor: pointer; transition: all .3s; }
  .btn-dark:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,0,0,.3); }
  .btn-wh { background: rgba(255,255,255,.25); color: #0f172a; border: 1px solid rgba(255,255,255,.5); padding: 13px 32px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; transition: all .3s; }
  .btn-wh:hover { background: rgba(255,255,255,.4); transform: translateY(-4px); }

  @media(max-width: 900px) {
    .hero-content, .intro-inner, .svc-row, .svc-row.rev { flex-direction: column !important; }
    .holo-box, .cloud-viz, .svc-visual { max-width: 100%; flex: none; width: 100%; }
    .process-steps { justify-content: center; }
    .p-step:not(:last-child)::after { display: none; }
  }
  @media(max-width: 580px) {
    .hero-btns, .cta-btns { flex-direction: column; }
    .mgmt-grid { grid-template-columns: 1fr; }
  }
`;

export default function OfficeCloud() {
  return (
    <div className="font-sans text-[#0f172a] bg-white overflow-x-hidden selection:bg-[#D4A22E] selection:text-white">
      {/* Injecting the custom CSS securely */}
      <style>{pageStyles}</style>

      {/* ================= HERO SECTION ================= */}
      <div className="hero-wrap">
        <div className="hero-grid-bg"></div>
        <div className="hero-scan"></div>
        <div className="geo-float" style={{ width: '44px', height: '44px', top: '12%', left: '3%' }}></div>
        <div className="geo-float" style={{ width: '28px', height: '28px', top: '60%', right: '8%', animationDelay: '2s', borderColor: 'rgba(30,58,138,.3)' }}></div>
        <div style={{ position: 'absolute', right: '6%', top: '20%', width: '160px', height: '160px', border: '1px solid rgba(212,162,46,.15)', borderRadius: '50%', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '10px', height: '10px', margin: '-5px', background: '#D4A22E', borderRadius: '50%', boxShadow: '0 0 14px #D4A22E', transformOrigin: '-85px 5px', animation: 'orbitDot 8s linear infinite' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '7px', height: '7px', margin: '-3.5px', background: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 10px #3b82f6', transformOrigin: '-56px 3.5px', animation: 'orbitDot2 5s linear infinite' }}></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="eyebrow">
              <div className="eyebrow-dot"></div>
              <span className="eyebrow-t">TechHansa Cloud Suite</span>
            </div>
            <h1 className="hero-h1">Office on Cloud<br/>— O365</h1>
            <p className="hero-p">Office 365 is a comprehensive productivity suite. Many companies limit usage to simply migrating email to the cloud. Our services unlock the full potential of your O365 investment, delivering a higher return.</p>
            <div className="hero-btns">
              <button className="btn-gold">Get Started ›</button>
             
            </div>
          </div>
          
          <div className="holo-box">
            <div className="holo-inner">
              <div className="holo-shimmer-bar"></div>
              <div className="corner c-tl"></div><div className="corner c-tr"></div>
              <div className="corner c-bl"></div><div className="corner c-br"></div>
              <div className="live-row">
                <div className="live-dot"></div><span className="live-txt">O365 Status</span>
              </div>
              <div className="holo-icon">☁️</div>
              <div className="holo-title">Office 365 Suite</div>
              <div className="holo-sub">Live Adoption Metrics</div>
              
              <div className="bar-r">
                <div className="bar-m"><span className="bl">Email Migration</span><span className="bv">98%</span></div>
                <div className="bt"><div className="bf" style={{ width: '98%' }}></div></div>
              </div>
              <div className="bar-r">
                <div className="bar-m"><span className="bl">SharePoint</span><span className="bv">84%</span></div>
                <div className="bt"><div className="bf" style={{ width: '84%', animationDelay: '.2s' }}></div></div>
              </div>
              <div className="bar-r">
                <div className="bar-m"><span className="bl">Teams Adoption</span><span className="bv">91%</span></div>
                <div className="bt"><div className="bf" style={{ width: '91%', animationDelay: '.3s' }}></div></div>
              </div>
              <div className="bar-r">
                <div className="bar-m"><span className="bl">Security Score</span><span className="bv">96%</span></div>
                <div className="bt"><div className="bf" style={{ width: '96%', animationDelay: '.4s' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= INTRO BAND ================= */}
      <div style={{ background: '#fff' }}>
        <div className="intro-band">
          <div className="intro-inner">
            <div className="intro-left">
              <p className="intro-tagline">We enable adoption of all features of <span className="g">Microsoft O365 — Exchange, SharePoint, Yammer, Skype for Business</span> and Office Pro Plus to deliver outcomes including:</p>
              <ul className="check-list">
                <li><div className="check-icon">✓</div>Planning your roadmap for implementation.</li>
                <li><div className="check-icon">✓</div>Helping your users learn and use the various products within Office 365.</li>
                <li><div className="check-icon">✓</div>Planning for backup and DR for your Office 365 environment.</li>
                <li><div className="check-icon">✓</div>Addressing your technical challenges and pitfalls.</li>
                <li><div className="check-icon">✓</div>Incorporating office on cloud aligned with enterprise productivity solutions.</li>
                <li><div className="check-icon">✓</div>Services that provide new agility and capabilities to your business.</li>
                <li><div className="check-icon">✓</div>Architect on SharePoint Online and integrate existing SharePoint applications.</li>
              </ul>
            </div>
            
            <div className="cloud-viz">
              <div className="cloud-svg-wrap">
                <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="cloudGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1e3a8a" stopOpacity=".9" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity=".95" />
                    </radialGradient>
                    <radialGradient id="goldGrad" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#E4C77D" />
                      <stop offset="100%" stopColor="#D4A22E" />
                    </radialGradient>
                  </defs>
                  <g stroke="#D4A22E" strokeWidth="1" strokeDasharray="4 3" opacity=".35">
                    <line x1="160" y1="140" x2="62" y2="58" />
                    <line x1="160" y1="140" x2="258" y2="58" />
                    <line x1="160" y1="140" x2="40" y2="140" />
                    <line x1="160" y1="140" x2="280" y2="140" />
                    <line x1="160" y1="140" x2="62" y2="222" />
                    <line x1="160" y1="140" x2="258" y2="222" />
                  </g>
                  <g style={{ animation: 'cloudFloat 5s ease-in-out infinite' }}>
                    <ellipse cx="160" cy="148" rx="44" ry="12" fill="rgba(212,162,46,.08)" />
                    <rect x="118" y="120" width="84" height="50" rx="25" fill="url(#cloudGrad)" />
                    <circle cx="148" cy="125" r="18" fill="url(#cloudGrad)" />
                    <circle cx="172" cy="122" r="22" fill="url(#cloudGrad)" />
                    <text x="160" y="143" textAnchor="middle" fill="url(#goldGrad)" fontSize="11" fontWeight="800" fontFamily="Inter,sans-serif">Cloud</text>
                    <text x="160" y="157" textAnchor="middle" fill="#D4A22E" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">Office</text>
                  </g>
                  <g style={{ animation: 'nodeAppear .6s ease-out .2s both' }}>
                    <circle cx="62" cy="58" r="26" fill="rgba(30,58,138,.08)" stroke="#1e3a8a" strokeWidth="1.5" />
                    <text x="62" y="54" textAnchor="middle" fill="#1e3a8a" fontSize="16" fontFamily="Inter">📅</text>
                    <text x="62" y="72" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Calendar</text>
                  </g>
                  <g style={{ animation: 'nodeAppear .6s ease-out .3s both' }}>
                    <circle cx="258" cy="58" r="26" fill="rgba(212,162,46,.08)" stroke="#D4A22E" strokeWidth="1.5" />
                    <text x="258" y="54" textAnchor="middle" fill="#D4A22E" fontSize="16" fontFamily="Inter">📄</text>
                    <text x="258" y="72" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Doc Writer</text>
                  </g>
                  <g style={{ animation: 'nodeAppear .6s ease-out .4s both' }}>
                    <circle cx="40" cy="140" r="26" fill="rgba(30,58,138,.08)" stroke="#1e3a8a" strokeWidth="1.5" />
                    <text x="40" y="136" textAnchor="middle" fill="#1e3a8a" fontSize="16" fontFamily="Inter">✉️</text>
                    <text x="40" y="154" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Email</text>
                  </g>
                  <g style={{ animation: 'nodeAppear .6s ease-out .5s both' }}>
                    <circle cx="280" cy="140" r="26" fill="rgba(212,162,46,.08)" stroke="#D4A22E" strokeWidth="1.5" />
                    <text x="280" y="136" textAnchor="middle" fill="#D4A22E" fontSize="16" fontFamily="Inter">💬</text>
                    <text x="280" y="154" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Teams</text>
                  </g>
                  <g style={{ animation: 'nodeAppear .6s ease-out .6s both' }}>
                    <circle cx="62" cy="222" r="26" fill="rgba(30,58,138,.08)" stroke="#1e3a8a" strokeWidth="1.5" />
                    <text x="62" y="218" textAnchor="middle" fill="#1e3a8a" fontSize="16" fontFamily="Inter">📊</text>
                    <text x="62" y="236" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">CRM</text>
                  </g>
                  <g style={{ animation: 'nodeAppear .6s ease-out .7s both' }}>
                    <circle cx="258" cy="222" r="26" fill="rgba(212,162,46,.08)" stroke="#D4A22E" strokeWidth="1.5" />
                    <text x="258" y="218" textAnchor="middle" fill="#D4A22E" fontSize="16" fontFamily="Inter">⚙️</text>
                    <text x="258" y="236" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">Workflow</text>
                  </g>
                  <circle cx="160" cy="140" r="46" stroke="#D4A22E" strokeWidth="1" opacity=".18" style={{ animation: 'rippleOut 2.5s ease-out infinite' }} />
                  <circle cx="160" cy="140" r="46" stroke="#D4A22E" strokeWidth="1" opacity=".12" style={{ animation: 'rippleOut 2.5s ease-out .8s infinite' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SERVICES SECTION ================= */}
        <div className="services-section" style={{ paddingBottom: 0 }}>
          <div className="sec-head">
            <div className="sec-eye">— Our O365 Services</div>
            <h2 className="sec-h2"><span className='text-techGolden'>T</span>echhansa Office 365 Services</h2>
            <p className="sec-p">End-to-end delivery from planning through to ongoing management.</p>
            <div className="gold-divider">
              <div className="gd-line gd-l"></div>
              <div className="gd-diamond"></div>
              <div className="gd-line gd-r"></div>
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '4rem 5%' }}>
          <div className="svc-row">
            <div className="svc-content">
              <div className="svc-badge"><span className="svc-badge-icon">🎯</span><span className="svc-badge-txt">Step 01</span></div>
              <h3 className="svc-title"> <span className='text-techGolden'>C</span>onsulting Services</h3>
              <p className="svc-desc">Our consulting approach encompasses creation of planning documents, project plans, environment assessments, and user assessments. Our consultants collaborate with your IT teams to conduct a thorough evaluation and construct a meticulously planned roadmap aligned with your organizational objectives.</p>
            </div>
            <div className="svc-visual">
              <div className="vis-card">
                <div className="vis-head">
                  <div className="vis-icon-box">🎯</div>
                  <div><div className="vis-htitle">Consulting Roadmap</div><div className="vis-hsub">Assessment to Strategy</div></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8faff', borderRadius: '10px', padding: '10px 14px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#D4A22E', borderRadius: '50%', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '.85rem', color: '#374151', fontWeight: 500 }}>Environment Assessment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8faff', borderRadius: '10px', padding: '10px 14px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#1e3a8a', borderRadius: '50%', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '.85rem', color: '#374151', fontWeight: 500 }}>Project Planning & Design</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8faff', borderRadius: '10px', padding: '10px 14px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#D4A22E', borderRadius: '50%', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '.85rem', color: '#374151', fontWeight: 500 }}>User Adoption Strategy</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg,rgba(212,162,46,.08),rgba(30,58,138,.04))', border: '1px solid rgba(212,162,46,.2)', borderRadius: '10px', padding: '10px 14px' }}>
                    <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', flexShrink: 0, animation: 'blink 1.4s infinite' }}></div>
                    <span style={{ fontSize: '.85rem', color: '#0f172a', fontWeight: 700 }}>Roadmap Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROCESS SECTION ================= */}
        <div className="process-section">
          <div className="hero-grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .6 }}></div>
          <div className="sec-head" style={{ marginBottom: '3rem' }}>
            <div className="sec-eye">— Migration Lifecycle</div>
            <h2 className="sec-h2" style={{ color: '#fff' }}>Our Proven Process</h2>
          </div>
          <div className="process-steps">
            <div className="p-step"><div className="p-num">1</div><div className="p-title">Assessment & Design</div><div className="p-desc">Audit existing environment and map migration path</div></div>
            <div className="p-step"><div className="p-num" style={{ animationDelay: '.4s' }}>2</div><div className="p-title">Deployment</div><div className="p-desc">End-to-end O365 tenant setup and configuration</div></div>
            <div className="p-step"><div className="p-num" style={{ animationDelay: '.8s' }}>3</div><div className="p-title">Security & Compliance</div><div className="p-desc">Policies, DLP, MFA, and compliance frameworks</div></div>
            <div className="p-step"><div className="p-num" style={{ animationDelay: '1.2s' }}>4</div><div className="p-title">Operation & Support</div><div className="p-desc">24x7 monitoring and incident management</div></div>
            <div className="p-step"><div className="p-num" style={{ animationDelay: '1.6s' }}>5</div><div className="p-title">Continuous Improvement</div><div className="p-desc">Ongoing optimisation and new feature adoption</div></div>
          </div>
        </div>

        {/* ================= STEP 02 ================= */}
        <div style={{ background: '#fff', padding: '4rem 5%' }}>
          <div className="svc-row rev">
            <div className="svc-content">
              <div className="svc-badge"><span className="svc-badge-icon">🚀</span><span className="svc-badge-txt">Step 02</span></div>
              <h3 className="svc-title"><span className='text-techGolden'>D</span>eployment & Migration Services</h3>
              <p className="svc-desc">Our team possesses the expertise to seamlessly implement a comprehensive end-to-end Office 365 solution. When migrating from other platforms, our process encompasses the transfer of all data and thorough verification of its quality. The migration process is tailored to specific elements and the complexity of the existing environment.</p>
            </div>
            <div className="svc-visual">
              <div className="vis-card">
                <div className="vis-head">
                  <div className="vis-icon-box">🚀</div>
                  <div><div className="vis-htitle">Migration Dashboard</div><div className="vis-hsub">Live migration status</div></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8faff', borderRadius: '8px', padding: '8px 12px' }}>
                    <span style={{ fontSize: '.83rem', color: '#374151' }}>Mailboxes Migrated</span><span style={{ fontSize: '.9rem', fontWeight: 800, color: '#D4A22E' }}>1,240 / 1,280</span>
                  </div>
                  <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '97%', background: 'linear-gradient(90deg,#1e3a8a,#D4A22E)', borderRadius: '4px', animation: 'barfill .9s ease-out both' }}></div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8faff', borderRadius: '8px', padding: '8px 12px', marginTop: '4px' }}>
                    <span style={{ fontSize: '.83rem', color: '#374151' }}>SharePoint Sites</span><span style={{ fontSize: '.9rem', fontWeight: 800, color: '#1e3a8a' }}>86 / 90</span>
                  </div>
                  <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '96%', background: 'linear-gradient(90deg,#1e3a8a,#D4A22E)', borderRadius: '4px', animation: 'barfill 1s ease-out .1s both' }}></div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8faff', borderRadius: '8px', padding: '8px 12px', marginTop: '4px' }}>
                    <span style={{ fontSize: '.83rem', color: '#374151' }}>Data Verified</span><span style={{ fontSize: '.9rem', fontWeight: 800, color: '#22c55e' }}>✓ 100%</span>
                  </div>
                  <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '100%', background: 'linear-gradient(90deg,#22c55e,#16a34a)', borderRadius: '4px', animation: 'barfill 1.1s ease-out .2s both' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STEP 03 ================= */}
        <div style={{ background: 'linear-gradient(180deg,#f8faff,#fff)', padding: '4rem 5%' }}>
          <div className="svc-row">
            <div className="svc-content">
              <div className="svc-badge"><span className="svc-badge-icon">🔧</span><span className="svc-badge-txt">Step 03</span></div>
              <h3 className="svc-title"><span className='text-techGolden'>O</span>ngoing Management Services</h3>
              <p className="svc-desc">These services encompass the capability to establish new user parameters, offer effective solutions for addressing performance degradation, and recommend upgrades or adoption of new versions. The primary goal is to free up client resources while simultaneously delivering management services for the new environment.</p>
              <ul className="svc-check">
                <li><div className="svc-check-dot"></div>Service Delivery | Proactive Services</li>
                <li><div className="svc-check-dot"></div>Problem Management, Incident Management & Change Management</li>
                <li><div className="svc-check-dot"></div>24 x 7 Service Availability</li>
              </ul>
            </div>
            <div className="svc-visual">
              <div className="vis-card">
                <div className="vis-head">
                  <div className="vis-icon-box">🔧</div>
                  <div><div className="vis-htitle">Management Console</div><div className="vis-hsub">Real-time operations</div></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div style={{ background: '#f8faff', borderRadius: '10px', padding: '12px', textAlign: 'center', border: '1px solid rgba(212,162,46,.15)' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#D4A22E' }}>99.9%</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '3px' }}>Uptime SLA</div>
                  </div>
                  <div style={{ background: '#f8faff', borderRadius: '10px', padding: '12px', textAlign: 'center', border: '1px solid rgba(30,58,138,.1)' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#1e3a8a' }}>24/7</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '3px' }}>Monitoring</div>
                  </div>
                  <div style={{ background: '#f8faff', borderRadius: '10px', padding: '12px', textAlign: 'center', border: '1px solid rgba(34,197,94,.15)' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#16a34a' }}>&lt;4hr</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '3px' }}>Response Time</div>
                  </div>
                  <div style={{ background: '#f8faff', borderRadius: '10px', padding: '12px', textAlign: 'center', border: '1px solid rgba(212,162,46,.15)' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#D4A22E' }}>500+</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '3px' }}>Clients Served</div>
                  </div>
                </div>
                <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg,rgba(212,162,46,.06),rgba(30,58,138,.04))', borderRadius: '10px', padding: '10px 14px', border: '1px solid rgba(212,162,46,.18)' }}>
                  <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', animation: 'blink 1.4s infinite', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '.83rem', color: '#0f172a', fontWeight: 700 }}>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MGMT GRID ================= */}
        <div style={{ background: '#fff', padding: '2rem 5% 4rem' }}>
          <div className="mgmt-grid">
            <div className="mgmt-card">
              <div className="mgmt-icon">📋</div>
              <div className="mgmt-title">Service Delivery</div>
              <div className="mgmt-desc">Structured delivery framework ensuring consistent, reliable output aligned to SLAs across your O365 environment.</div>
            </div>
            <div className="mgmt-card">
              <div className="mgmt-icon">🛡️</div>
              <div className="mgmt-title">Proactive Management</div>
              <div className="mgmt-desc">We detect and resolve issues before they impact productivity — monitoring, patching, and health checks run continuously.</div>
            </div>
            <div className="mgmt-card">
              <div className="mgmt-icon">🔄</div>
              <div className="mgmt-title">Change Management</div>
              <div className="mgmt-desc">Controlled change processes with rollback capability — every update is planned, tested, and communicated.</div>
            </div>
            <div className="mgmt-card">
              <div className="mgmt-icon">🌐</div>
              <div className="mgmt-title">24x7 Availability</div>
              <div className="mgmt-desc">Round-the-clock support across time zones. Our team is always on, so your business never stops moving.</div>
            </div>
          </div>
        </div>

      
      
      </div>
    </div>
  );
}