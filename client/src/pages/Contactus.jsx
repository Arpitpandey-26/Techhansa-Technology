import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles, MapPin, Phone, Mail, Clock, Building2,
  Globe, MessageSquare, ChevronDown, Rocket, Briefcase,
  Cloud, Handshake, Send, User, AtSign, PhoneCall,
  Building, CheckCircle2, Loader2,
} from "lucide-react";

/* ==================================================================
   Contact Us page
   ------------------------------------------------------------------
   - No header / footer / scroll-progress rail
   - Gray-700 (#374151) for all headings
   - White background, gold + blue accents only
   ------------------------------------------------------------------
   File map:
   1) Static content data
   2) Small components: FAQItem, ContactCard, WhyCard, SelectField, InputField
   3) ContactForm (owns form state)
   4) Main ContactUs page component
   ================================================================== */

/* ── 1. CONTENT DATA ──────────────────────────────────────────── */

const contactCards = [
  {
    id: "corporate",
    icon: MapPin,
    accent: "var(--blue)",
    accentBg: "var(--blue-soft)",
    label: "Corporate Office",
    name: "Techhansa Technology",
    lines: [
      { icon: MapPin,   text: "A-42, Tech Park, Sector 62, Noida, Uttar Pradesh – 201 301, India" },
      { icon: Phone,    text: "+91  9711888951" },
      { icon: Mail,     text: "info@techhansa.com" },
     
    ],
  },
  {
    id: "head",
    icon: Building2,
    accent: "var(--gold)",
    accentBg: "var(--gold-soft)",
    label: "Head Office",
    name: "Head Office",
    lines: [
      { icon: MapPin,   text: "101 Nariman Point, Mumbai, Maharashtra – 400 021, India" },
      { icon: Phone,    text: "+91  9711888951" },
      { icon: Mail,     text: "headoffice@techhansa.com" },
    ],
  },
  {
    id: "branch",
    icon: Globe,
    accent: "#0d9488",
    accentBg: "rgba(13,148,136,.10)",
    label: "Branch Office",
    name: "Branch Office",
    lines: [
      { icon: MapPin,   text: "No. 15, MG Road, Bengaluru, Karnataka – 560 001, India" },
      { icon: Phone,    text: "+91  9711888951" },
      { icon: Mail,     text: "bangalore@techhansa.com" },
    ],
  },
  {
    id: "support",
    icon: MessageSquare,
    accent: "var(--blue)",
    accentBg: "var(--blue-soft)",
    label: "General Support",
    name: "Customer Support",
    lines: [
      { icon: Mail,     text: "support@techhansa.com" },
      { icon: Mail,     text: "sales@techhansa.com" },
      { icon: Phone,    text: "+91  9711888951" },
      { icon: Clock,    text: "Available Monday – Saturday" },
    ],
  },
];

const whyCards = [
  { icon: Rocket,    title: "Digital Transformation Experts", desc: "Helping businesses modernise with innovative technology solutions tailored to their goals." },
  { icon: Briefcase, title: "Business Consulting",            desc: "Technology solutions aligned precisely with your business objectives and operational needs." },
  { icon: Cloud,     title: "Cloud & Infrastructure",         desc: "Scalable cloud and infrastructure services designed for performance, security, and reliability." },
  { icon: Handshake, title: "Dedicated Support",              desc: "Responsive, experienced professionals ready to assist at every stage of your journey." },
];

const faqs = [
  { q: "How quickly will I receive a response?",         a: "We aim to respond to all enquiries within one business day. Urgent matters can be flagged as high priority in the message field." },
  { q: "Can I request a project consultation?",          a: "Yes. You can schedule a consultation directly through the contact form above, or call us during business hours and we'll arrange a session with the right specialist." },
  { q: "Do you provide offshore development services?",  a: "Yes, Techhansa supports onsite, offshore, and hybrid engagement models, giving you the flexibility to choose what works best for your team and budget." },
  { q: "Which industries do you serve?",                 a: "Healthcare, Banking & Finance, Manufacturing, Retail, Education, Telecommunications, Logistics & Supply Chain, Energy & Utilities, and more." },
];

const serviceOptions = [
  "Cloud Services", "Enterprise Software", "AI Solutions",
  "Automation", "Managed Services", "Digital Workplace",
  "Professional Services", "Other",
];

const industryOptions = [
  "Healthcare", "Banking & Finance", "Manufacturing",
  "Retail & E-Commerce", "Education", "Telecommunications",
  "Logistics & Supply Chain", "Energy & Utilities", "Other",
];

/* ── 2. SMALL COMPONENTS ──────────────────────────────────────── */

/* FAQ accordion item */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      style={{ borderColor: "var(--line)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-gray-700 leading-snug">{q}</span>
        <div
          className="flex-none w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "linear-gradient(160deg,var(--gold-hover),var(--gold))" : "var(--blue-soft)",
            color: open ? "var(--ink)" : "var(--blue)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown size={16} />
        </div>
      </button>
      <div
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: open ? 160 : 0, opacity: open ? 1 : 0 }}
      >
        <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{a}</p>
      </div>
    </div>
  );
}

/* Individual contact info card */
function ContactCard({ card, onTilt, onReset }) {
  const { icon: Icon, accent, accentBg, label, name, lines } = card;
  return (
    <div
      onMouseMove={onTilt}
      onMouseLeave={onReset}
      style={{ transformStyle: "preserve-3d", borderColor: "var(--line)" }}
      className="h-full flex flex-col rounded-3xl border bg-white shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Top badge */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-none shadow-sm"
          style={{ background: accentBg, color: accent }}>
          <Icon size={20} />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--ink-faint)" }}>{label}</div>
          <div className="font-bold text-gray-700 leading-tight">{name}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px mb-5" style={{ background: "var(--line)" }}></div>

      {/* Contact lines */}
      <div className="flex-1 space-y-3">
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-none w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
              style={{ background: accentBg, color: accent }}>
              <line.icon size={13} />
            </div>
            <span className="text-sm leading-relaxed text-gray-600">{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Why-contact feature card */
function WhyCard({ icon: Icon, title, desc, onTilt, onReset }) {
  return (
    <div
      onMouseMove={onTilt}
      onMouseLeave={onReset}
      style={{ transformStyle: "preserve-3d", borderColor: "var(--line)" }}
      className="h-full rounded-2xl border bg-white shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: "var(--gold-soft)", color: "var(--gold)" }}>
        <Icon size={22} />
      </div>
      <h3 className="font-bold text-gray-700 mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{desc}</p>
    </div>
  );
}

/* Reusable labelled input */
function InputField({ label, required, type = "text", placeholder, value, onChange, name }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-1.5">
        {label}{required && <span className="ml-1" style={{ color: "var(--gold)" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 focus:ring-2"
        style={{
          borderColor: "var(--line)",
          background: "var(--paper)",
          focusBorderColor: "var(--blue)",
        }}
        onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px rgba(30,58,138,.10)"; }}
        onBlur={(e)  => { e.target.style.borderColor = "var(--line)";  e.target.style.boxShadow = "none"; }}
      />
    </div>
  );
}

/* Reusable labelled select */
function SelectField({ label, required, options, value, onChange, name, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-1.5">
        {label}{required && <span className="ml-1" style={{ color: "var(--gold)" }}>*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 appearance-none"
        style={{ borderColor: "var(--line)", background: "var(--paper)" }}
        onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px rgba(30,58,138,.10)"; }}
        onBlur={(e)  => { e.target.style.borderColor = "var(--line)";  e.target.style.boxShadow = "none"; }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

/* ── 3. CONTACT FORM ──────────────────────────────────────────── */

function ContactForm() {
  const empty = { firstName:"", lastName:"", company:"", email:"", phone:"", industry:"", service:"", subject:"", message:"", privacy:false };
  const [form, setForm]           = useState(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16 px-8 rounded-3xl border bg-white shadow-xl"
        style={{ borderColor: "var(--line)" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          style={{ background: "linear-gradient(160deg,var(--gold-hover),var(--gold))" }}>
          <CheckCircle2 size={28} color="var(--ink)" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">Message Sent!</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--ink-soft)" }}>
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => { setForm(empty); setSubmitted(false); }}
          className="rounded-xl px-6 py-3 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
          style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold))", boxShadow: "0 8px 20px rgba(212,162,46,.28)" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border bg-white shadow-xl p-7 md:p-10" style={{ borderColor: "var(--line)" }}>
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <InputField label="First Name" name="firstName" required placeholder="enter your first name" value={form.firstName} onChange={handleChange} />
        <InputField label="Last Name"  name="lastName"  required placeholder="enter your last name"  value={form.lastName}  onChange={handleChange} />
      </div>

      {/* Company + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <InputField label="Company Name" name="company" placeholder="enter your company name"              value={form.company} onChange={handleChange} />
        <InputField label="Email Address" name="email" required type="email" placeholder="enter your email" value={form.email} onChange={handleChange} />
      </div>

      {/* Phone + Industry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <InputField label="Phone Number" name="phone" required type="tel" placeholder="enter your phone number" value={form.phone} onChange={handleChange} />
        <SelectField label="Industry" name="industry" options={industryOptions} value={form.industry} onChange={handleChange} placeholder="Select your industry" />
      </div>

      {/* Service + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <SelectField label="Service Interested In" name="service" options={serviceOptions} value={form.service} onChange={handleChange} placeholder="Select a service" />
        <InputField label="Subject" name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} />
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-600 mb-1.5">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your project or question in detail…"
          className="w-full rounded-xl border px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 resize-none"
          style={{ borderColor: "var(--line)", background: "var(--paper)" }}
          onFocus={(e) => { e.target.style.borderColor = "var(--blue)"; e.target.style.boxShadow = "0 0 0 3px rgba(30,58,138,.10)"; }}
          onBlur={(e)  => { e.target.style.borderColor = "var(--line)";  e.target.style.boxShadow = "none"; }}
        ></textarea>
      </div>

      {/* Privacy checkbox
      <div className="flex items-start gap-3 mb-7">
        <div className="flex-none mt-0.5 relative w-5 h-5">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            checked={form.privacy}
            onChange={handleChange}
            required
            className="w-5 h-5 rounded cursor-pointer accent-amber-500"
          />
        </div>
        <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
          I agree to the{" "}
          <a href="#" className="font-semibold underline-offset-2 underline" style={{ color: "var(--blue)" }}>
            Privacy Policy
          </a>
          .
        </label>
      </div> */}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl py-3.5 font-semibold text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
        style={{ color: "var(--ink)", background: "linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)", boxShadow: "0 14px 30px rgba(212,162,46,.30)" }}
      >
        {loading
          ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
          : <><Send size={15} /> Send Message</>
        }
      </button>
    </form>
  );
}

/* ── 4. MAIN PAGE COMPONENT ───────────────────────────────────── */

export default function ContactUs() {
  const rootRef      = useRef(null);
  const heroRef      = useRef(null);
  const panelRef     = useRef(null);
  const allowTiltRef = useRef(false);

  /* Fade-up on scroll */
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
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Hero panel 3D tilt */
  useEffect(() => {
    allowTiltRef.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero  = heroRef.current;
    const panel = panelRef.current;
    if (!allowTiltRef.current || !hero || !panel) return;
    function move(e) {
      const r  = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;
      const py = (e.clientY - r.top)  / r.height - 0.5;
      panel.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 12}deg)`;
    }
    function leave() { panel.style.transform = "rotateY(0deg) rotateX(0deg)"; }
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
    const r    = card.getBoundingClientRect();
    const px   = (e.clientX - r.left) / r.width;
    const py   = (e.clientY - r.top)  / r.height;
    card.style.transform =
      `translateZ(8px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg)`;
  }
  function resetTilt(e) { e.currentTarget.style.transform = ""; }

  return (
    <div ref={rootRef} className="bg-white" style={{ color: "var(--ink-soft)" }}>
      <style>{`
       
        :root, .cu-page {
          --ink:#0f172a; --blue:#1e3a8a; --paper:#f8fafc; --gold:#d4a22e; --gold-hover:#e4c77d;
          --ink-soft:rgba(15,23,42,.64); --ink-faint:rgba(15,23,42,.42);
          --blue-soft:rgba(30,58,138,.08); --gold-soft:rgba(212,162,46,.14);
          --line:rgba(15,23,42,.09); --paper-dim:#f3f6fa;
        }
        @keyframes floatSlow { 0%,100%{ transform:translateY(0);     } 50%{ transform:translateY(-16px); } }
        @keyframes cubeSpin  { from{ transform:rotateX(0) rotateY(0);  } to{ transform:rotateX(360deg) rotateY(360deg); } }
        @keyframes ringSpin  { to{ transform:rotate(360deg); } }
        @keyframes pulseSoft { 0%,100%{ opacity:.55; } 50%{ opacity:1; } }
        @keyframes spin { to{ transform:rotate(360deg); } }
        .animate-float-slow  { animation:floatSlow 7s ease-in-out infinite; }
        .animate-cube-spin   { animation:cubeSpin  18s linear infinite; }
        .animate-ring-spin   { animation:ringSpin  50s linear infinite; }
        .animate-pulse-soft  { animation:pulseSoft 2.4s ease-in-out infinite; }
        .animate-spin        { animation:spin .9s linear infinite; }
      `}</style>

      <div className="cu-page">

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative overflow-hidden px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">

          {/* Ambient glows */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -top-28 -left-28 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-60"
              style={{ background:"radial-gradient(circle,var(--blue-soft),transparent 70%)" }}></div>
            <div className="absolute -top-16 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-60"
              style={{ background:"radial-gradient(circle,var(--gold-soft),transparent 70%)" }}></div>
            {/* subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.035]"
              style={{ backgroundImage:"linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)", backgroundSize:"48px 48px" }}></div>
          </div>

          {/* Floating cube */}
          <div className="hidden md:block absolute top-14 right-[8%] w-20 h-20" style={{ perspective:800 }} aria-hidden="true">
            <div className="relative w-full h-full animate-cube-spin" style={{ transformStyle:"preserve-3d" }}>
              {[
                {t:"translateZ(40px)",               bg:"rgba(212,162,46,.30)",bc:"rgba(212,162,46,.45)"},
                {t:"rotateY(180deg) translateZ(40px)",bg:"rgba(30,58,138,.28)", bc:"rgba(30,58,138,.4)" },
                {t:"rotateY(90deg) translateZ(40px)", bg:"rgba(212,162,46,.2)", bc:"rgba(212,162,46,.35)"},
                {t:"rotateY(-90deg) translateZ(40px)",bg:"rgba(30,58,138,.2)",  bc:"rgba(30,58,138,.3)" },
                {t:"rotateX(90deg) translateZ(40px)", bg:"rgba(255,255,255,.7)",bc:"rgba(255,255,255,.7)"},
                {t:"rotateX(-90deg) translateZ(40px)",bg:"rgba(148,163,184,.3)",bc:"rgba(148,163,184,.3)"},
              ].map((f,i) => (
                <div key={i} className="absolute inset-0 rounded-md border backdrop-blur-sm"
                  style={{transform:f.t,background:f.bg,borderColor:f.bc}}></div>
              ))}
            </div>
          </div>

          {/* Floating sphere */}
          <div className="hidden md:block absolute bottom-8 left-[5%] w-24 h-24 rounded-full backdrop-blur-md border shadow-xl animate-float-slow"
            style={{background:"linear-gradient(155deg,rgba(30,58,138,.18),rgba(255,255,255,.5),rgba(212,162,46,.18))",borderColor:"rgba(255,255,255,.7)"}}
            aria-hidden="true"></div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                style={{color:"var(--blue)"}}>
                Get In Touch
              </span>
              <h1 className="mt-4 mb-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-700">
                Let's{" "}
                <span style={{background:"linear-gradient(100deg,var(--blue) 25%,var(--gold) 95%)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>
                  Connect
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-[48ch] mb-8" style={{color:"var(--ink-soft)"}}>
                We're here to answer your questions, discuss your business challenges, and help you accelerate your digital transformation journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({behavior:"smooth"})}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                  style={{color:"var(--ink)",background:"linear-gradient(160deg,var(--gold-hover),var(--gold) 70%)",boxShadow:"0 14px 30px rgba(212,162,46,.32)"}}>
                  Contact Us
                </button>
                <button
                  onClick={() => document.getElementById("offices")?.scrollIntoView({behavior:"smooth"})}
                  className="rounded-xl px-7 py-3.5 font-semibold text-sm border hover:-translate-y-0.5 transition-all duration-300"
                  style={{borderColor:"var(--line)",color:"#374151"}}>
                  Our Offices ↓
                </button>
              </div>
            </div>

            {/* Hero panel — "we're available" live card */}
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out relative" style={{perspective:1200}}>
              {[
                {icon:Mail,      pos:"-top-6 left-6",    delay:"0s",  col:"var(--blue)"},
                {icon:PhoneCall, pos:"top-10 -right-6",  delay:"1s",  col:"var(--gold)"},
                {icon:MessageSquare,pos:"bottom-10 -left-6",delay:"1.6s",col:"var(--blue)"},
                {icon:Globe,     pos:"-bottom-6 right-8",delay:"2.2s",col:"var(--gold)"},
              ].map(({icon:Icon,pos,delay,col}) => (
                <div key={pos}
                  className={`hidden md:flex absolute ${pos} w-12 h-12 rounded-2xl items-center justify-center border shadow-lg animate-float-slow z-20`}
                  style={{background:"#fff",borderColor:"var(--line)",color:col,animationDelay:delay}}>
                  <Icon size={20} />
                </div>
              ))}

              <div ref={panelRef}
                className="relative z-10 mx-auto max-w-sm rounded-3xl p-7 border backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out"
                style={{background:"rgba(255,255,255,.90)",borderColor:"var(--line)",boxShadow:"0 30px 60px rgba(15,23,42,.12)",transformStyle:"preserve-3d"}}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{color:"var(--ink-faint)"}}>Contact Overview</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft"></span> Available now
                  </span>
                </div>
                {[
                  {icon:MapPin,      label:"3 Office Locations",      val:"India"},
                  {icon:PhoneCall,   label:"Phone Support",           val:"Mon–Fri"},
                  {icon:Mail,        label:"Email Response",          val:"< 1 business day"},
                  {icon:MessageSquare,label:"General Enquiries",      val:"support@techhansa.com"},
                  
                ].map((row) => (
                  <div key={row.label}
                    className="rounded-xl px-3 py-2.5 border flex items-center justify-between mb-2 last:mb-0"
                    style={{background:"var(--paper)",borderColor:"var(--line)"}}>
                    <div className="flex items-center gap-2">
                      <row.icon size={14} style={{color:"var(--blue)"}} />
                      <span className="text-sm text-gray-700">{row.label}</span>
                    </div>
                    <span className="text-xs font-semibold" style={{color:"var(--gold)"}}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── CONTACT INFORMATION CARDS ── */}
        <section id="offices" className="px-6 md:px-10 py-14 md:py-20" style={{background:"var(--paper-dim)"}}>
          <div className="max-w-6xl mx-auto">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-center mb-10">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3" style={{color:"var(--blue)"}}>
                Find Us
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Offices <span className="text-techGolden">&amp;</span>  Support</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactCards.map((card, i) => (
                <div key={card.id} data-reveal style={{transitionDelay:`${i*80}ms`}}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out h-full">
                  <ContactCard card={card} onTilt={handleTilt} onReset={resetTilt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section id="contact-form" className="px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-center mb-10">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3" style={{color:"var(--blue)"}}>
                 Get In Touch
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-3"> <span className="text-techGolden">S</span>end Us a Message</h2>
              <p className="text-base" style={{color:"var(--ink-soft)"}}>
                Have a project in mind? Fill out the form below and our experts will get back to you as soon as possible.
              </p>
            </div>
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{transitionDelay:"80ms"}}>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ── WHY CONTACT TECHHANSA ── */}
        <section className="px-6 md:px-10 py-14 md:py-20" style={{background:"var(--paper-dim)"}}>
          <div className="max-w-6xl mx-auto">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-center mb-10">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3" style={{color:"var(--blue)"}}>
               Why Us
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700"> <span className="text-techGolden">W</span>hy Contact Techhansa?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyCards.map((card, i) => (
                <div key={card.title} data-reveal style={{transitionDelay:`${i*80}ms`}}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out h-full">
                  <WhyCard {...card} onTilt={handleTilt} onReset={resetTilt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out text-center mb-10">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3" style={{color:"var(--blue)"}}>
                 FAQ
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-700"> <span className="text-techGolden">F</span>requently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} data-reveal style={{transitionDelay:`${i*70}ms`}}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                  <FAQItem q={faq.q} a={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}