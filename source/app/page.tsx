"use client";

import { ArrowDown, ArrowUpRight, ArrowUp, Download, MapPin, Layers3, ScanLine, Ruler, Wind } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (name: string) => `${base}/work/${name}`;
const resume = `${base}/resume/Shaikh_Nooruddin_BIM_Lead.pdf`;
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Nooruddin Shaikh, home"><span className="brand-mark" aria-hidden="true">N<span>↗</span></span><span>Nooruddin<span className="brand-last">Shaikh</span></span></a>
      <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#expertise">Expertise</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <span className="header-location"><MapPin size={14} aria-hidden="true" />United Arab Emirates</span>
    </header>
    <main id="main">
      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-rule" />BIM · MEP · HVAC</p>
          <h1 id="hero-title">Engineering<br />in <em>detail.</em></h1>
          <p className="intro">I’m Nooruddin Shaikh. I develop building-services models and detailed drawings that connect design intent with on-site delivery.</p>
          <div className="hero-actions"><a className="primary-link" href="#work">Explore my work <ArrowDown size={18} aria-hidden="true" /></a><a className="resume-link" href={resume} download="Shaikh_Nooruddin_BIM_Lead.pdf">Download résumé <Download size={18} aria-hidden="true" /></a></div>
          <div className="hero-profile"><span>B.E. Mechanical</span><span>BIM modelling & coordination</span></div>
        </div>
        <div className="hero-drawing">
          <div className="drawing-topline"><span>SELECTED DRAWING / 01</span><span>M11 · EV4 · B01</span></div>
          <a className="hero-sheet" href={`${base}/projects/keturah-resort/#final-drawings`} aria-label="Explore the Keturah Resort drainage drawings"><img src={asset("layout-crop.webp")} alt="Noor's Keturah Resort basement drainage layout, showing pipe routes and building geometry" width={1925} height={1353} fetchPriority="high" /><span className="sheet-corner">REV<br /><strong>01</strong></span></a>
          <div className="drawing-bottomline"><span>Keturah Resort</span><span>Basement drainage <ArrowUpRight size={14} aria-hidden="true" /></span></div>
          <span className="drawing-side" aria-hidden="true">PLAN / COORDINATE / DETAIL</span>
        </div>
      </section>
      <div className="tool-strip"><div className="shell"><span className="tool-label">MY TOOLKIT</span><span>Revit</span><span>Navisworks</span><span>Autodesk Construction Cloud</span><span>HAP</span><span>Excel</span></div></div>
      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow"><span className="section-no">01</span>Selected work</p><span className="section-note">Explore the project, from inputs to delivery.</span></div>
        <a className="project-card" href={`${base}/projects/keturah-resort/`} id="drawings">
          <div className="project-card-image"><img src={asset("layout-crop.webp")} alt="Keturah Resort basement drainage drawing" width={1925} height={1353} loading="lazy" /></div>
          <div className="project-card-copy"><p className="eyebrow">MEP / BIM · AL JADDAF, DUBAI</p><h2 id="work-title">Keturah Resort<span className="accent">.</span></h2><p>Modelling, coordination and detailed building-services documentation for the Earth, Water and Sky mansion packages.</p><div className="project-tags"><span>Project information</span><span>Drawings</span><span>Coordination</span></div><span className="project-card-link">Open Keturah portfolio <ArrowUpRight size={22} aria-hidden="true" /></span></div>
        </a>
      </section>
      <section id="expertise" className="expertise-section" aria-labelledby="expertise-title"><div className="shell">
        <div className="section-heading"><p className="eyebrow"><span className="section-no">02</span>What I bring</p></div>
        <div className="expertise-layout"><h2 id="expertise-title">A model is only<br />as useful as<br /><em>its detail.</em></h2><div className="capabilities">
          <article><Layers3 aria-hidden="true" /><div><h3>BIM modelling</h3><p>MEP service modelling, drawing production and quantity takeoff in Revit.</p></div><span>01</span></article>
          <article><ScanLine aria-hidden="true" /><div><h3>Multidiscipline coordination</h3><p>Model review and clash detection in Navisworks, with issue coordination and document workflows in ACC.</p></div><span>02</span></article>
          <article><Ruler aria-hidden="true" /><div><h3>Shop & as-built drawings</h3><p>Plans, sections, enlarged details and revision updates for project submissions.</p></div><span>03</span></article>
          <article><Wind aria-hidden="true" /><div><h3>HVAC engineering</h3><p>Cooling-load calculations, HAP reports and mechanical design documentation.</p></div><span>04</span></article>
        </div></div>
      </div></section>
      <section id="about" className="about-section shell" aria-labelledby="about-title">
        <div className="section-heading"><p className="eyebrow"><span className="section-no">03</span>Behind the work</p></div>
        <div className="about-layout"><div><h2 id="about-title">Mechanical roots.<br /><em>BIM mindset.</em></h2><p className="about-intro">I’m a mechanical engineering graduate working in the UAE, bringing modelling, MEP coordination and HVAC knowledge together.</p><p>My project experience spans coordinated drawings, as-built submissions and HVAC calculations. I have also led a five-member modelling team and worked with Autodesk Construction Cloud across live projects.</p><div className="qualification"><span className="mono">LEARNING & DEVELOPMENT</span><p>Autodesk Construction Cloud BIM Management</p><span>Udemy course</span></div></div>
          <div className="experience-list"><p className="mono">PROJECT EXPERIENCE</p><article><span>01</span><div><h3>Keturah Resort</h3><p>Shop drawings & drainage detailing</p></div><a href={`${base}/projects/keturah-resort/`} aria-label="View Keturah Resort case study"><ArrowUpRight size={20} /></a></article><article><span>02</span><div><h3>Mangrove Residency</h3><p>Service coordination & as-built drawings</p></div></article><article><span>03</span><div><h3>Orla Infinity</h3><p>Water-supply as-built submissions</p></div></article><article><span>04</span><div><h3>Boulevard</h3><p>HVAC load calculations & HAP reports</p></div></article></div>
        </div>
      </section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="shell">
        <div className="section-heading"><p className="eyebrow"><span className="section-no">04</span>Contact & résumé</p></div>
        <div className="contact-layout">
          <div className="contact-copy"><h2 id="contact-title">Let’s <em>connect.</em></h2><p>For BIM roles, MEP coordination and project enquiries.</p><a className="primary-link" href={resume} download="Shaikh_Nooruddin_BIM_Lead.pdf">Download résumé <Download size={18} aria-hidden="true" /></a><p className="resume-note">BIM Lead · PDF · 2 pages</p></div>
          <div className="contact-methods">
            <a className="contact-link" href="mailto:nooruddinsabeel@gmail.com"><span><span className="contact-label">Email</span><span className="contact-value">nooruddinsabeel@gmail.com</span></span><ArrowUpRight size={22} aria-hidden="true" /></a>
            <a className="contact-link" href="https://www.linkedin.com/in/contactnooruddin" target="_blank" rel="noopener noreferrer" aria-label="View Nooruddin Shaikh on LinkedIn (opens in a new tab)"><span><span className="contact-label">LinkedIn</span><span className="contact-value">View my professional profile</span></span><ArrowUpRight size={22} aria-hidden="true" /></a>
            <p className="contact-location"><MapPin size={16} aria-hidden="true" />Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div></section>
    </main>
    <footer className="site-footer shell"><div><span className="footer-name">Nooruddin Shaikh</span><span>BIM · MEP · HVAC</span></div><a href="#top">Back to top <ArrowUp size={16} aria-hidden="true" /></a><span className="footer-year">© 2026</span></footer>
  </>;
}
