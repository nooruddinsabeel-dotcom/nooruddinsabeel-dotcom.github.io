"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, ArrowUp, Download, MapPin, Maximize2, Plus, Minus, Layers3, ScanLine, Ruler, Wind } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (name: string) => `${base}/work/${name}`;
const resume = `${base}/resume/Shaikh_Nooruddin_BIM_Lead.pdf`;
const drawings = [
  { id: "layout", tab: "Drainage layout", title: "Basement drainage layout", revision: "REV 01", role: "My drawing", date: "23 Jul 2026", scale: "1:100 at A1", description: "Dimensioned drainage routes, invert levels, cleanouts and connections, developed over the basement architectural and structural layout." },
  { id: "sections", tab: "Sections & details", title: "Sump pits, sections & drainage details", revision: "REV 01", role: "My drawing", date: "23 Jul 2026", scale: "NTS at A1", description: "Sump-pit plans and sections, valve pits, cleanout details, grease and oil interceptors, catch basins and channel gratings." },
  { id: "design-input", tab: "Design input", title: "Consultant drainage design", revision: "P03", role: "RSP design input", date: "24 Dec 2025", scale: "1:100 at A1", description: "RSP's 100% detailed-design submission provided as the design input for the basement drainage work. Consultant-authored reference." },
  { id: "enlarged", tab: "Enlarged views", title: "Basement drainage enlarged views", revision: "REV 00", role: "My drawing · sheet 03/03", date: "23 Jul 2026", scale: "1:100 at A1", description: "Enlarged drainage areas showing local routing, connection points and levels. Revision shown here follows the supplied title block." },
];

function DrawingViewer({ drawing }: { drawing: typeof drawings[number] }) {
  const [zoom, setZoom] = useState(1);
  return <Dialog onOpenChange={() => setZoom(1)}>
    <DialogTrigger asChild><button className="text-button"><Maximize2 size={16} aria-hidden="true" />Enlarge drawing</button></DialogTrigger>
    <DialogContent className="drawing-dialog">
      <div className="dialog-heading"><DialogTitle>{drawing.title}</DialogTitle><DialogDescription>{drawing.revision} · {drawing.role}</DialogDescription></div>
      <div className="zoom-tools" aria-label="Drawing zoom">
        <button aria-label="Zoom out" onClick={() => setZoom(z => Math.max(1, z - .5))} disabled={zoom === 1}><Minus size={18} /></button>
        <output aria-live="polite">{Math.round(zoom * 100)}%</output>
        <button aria-label="Zoom in" onClick={() => setZoom(z => Math.min(3, z + .5))} disabled={zoom === 3}><Plus size={18} /></button>
        <button className="fit-button" onClick={() => setZoom(1)}>Fit</button>
        <a href={asset(`${drawing.id}.pdf`)} target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="zoom-canvas" tabIndex={0} aria-label="Drawing image. Use scrollbars to explore when zoomed.">
        <img src={asset(`${drawing.id}.webp`)} alt={`${drawing.title}, ${drawing.revision}, original drawing sheet`} style={{width: `${zoom * 100}%`, maxWidth: "none"}} width={2504} height={1769} />
      </div>
    </DialogContent>
  </Dialog>;
}

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
          <a className="hero-sheet" href="#drawings" aria-label="Explore the Keturah Resort drainage drawings"><img src={asset("layout-crop.webp")} alt="Noor's Keturah Resort basement drainage layout, showing pipe routes and building geometry" width={1925} height={1353} fetchPriority="high" /><span className="sheet-corner">REV<br /><strong>01</strong></span></a>
          <div className="drawing-bottomline"><span>Keturah Resort</span><span>Basement drainage <ArrowUpRight size={14} aria-hidden="true" /></span></div>
          <span className="drawing-side" aria-hidden="true">PLAN / COORDINATE / DETAIL</span>
        </div>
      </section>
      <div className="tool-strip"><div className="shell"><span className="tool-label">MY TOOLKIT</span><span>Revit</span><span>Navisworks</span><span>Autodesk Construction Cloud</span><span>HAP</span><span>Excel</span></div></div>
      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow"><span className="section-no">01</span>Selected work</p><span className="section-note">Design intent, developed in detail.</span></div>
        <div className="project-heading"><div><h2 id="work-title">Keturah Resort<span className="accent">.</span></h2><p>Earth Mansion · Plot M11 / EV4 · Al Jaddaf, Dubai</p></div><div className="project-tags"><span>MEP documentation</span><span>Drainage</span></div></div>
        <div className="project-overview">
          <div className="project-summary"><h3>From design input to<br />detailed drainage drawings.</h3><p>This basement package brings together service routes, invert levels, connection details and sections. My work develops the consultant’s drainage input into a detailed drawing set.</p></div>
          <dl className="project-facts"><div><dt>MY CONTRIBUTION</dt><dd>Drawing preparation & detailing</dd></div><div><dt>DESIGN INPUT</dt><dd>RSP · P03 detailed design</dd></div><div><dt>FEATURED OUTPUT</dt><dd>Layout & details · Rev 01</dd></div><div><dt>DRAWING CREDIT</dt><dd>Prepared / Drawn: Noor</dd></div></dl>
        </div>
        <Tabs defaultValue="layout" className="drawing-tabs" id="drawings">
          <div className="drawing-browser-heading"><h3>Inside the drawing set</h3><span className="mono">04 SHEETS</span></div>
          <TabsList className="sheet-tabs" aria-label="Drawing sheets">{drawings.map((d, i) => <TabsTrigger value={d.id} key={d.id}><span className="tab-number">0{i + 1}</span>{d.tab}</TabsTrigger>)}</TabsList>
          {drawings.map(d => <TabsContent value={d.id} key={d.id} className="sheet-panel">
            <div className="sheet-toolbar"><span className={d.id === "design-input" ? "revision-tag reference-tag" : "revision-tag"}>{d.revision}</span><span>{d.role}</span><div className="toolbar-action"><DrawingViewer drawing={d} /></div></div>
            <div className="sheet-preview"><img src={asset(`${d.id}.webp`)} alt={`${d.title} – ${d.revision}`} width={2504} height={1769} loading="lazy" /></div>
            <div className="sheet-caption"><div><h4>{d.title}</h4><p>{d.description}</p></div><div className="sheet-spec"><span>{d.date}</span><span>{d.scale}</span><a href={asset(`${d.id}.pdf`)} target="_blank" rel="noopener noreferrer">View original PDF <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
          </TabsContent>)}
        </Tabs>
        <div className="case-study-points"><article><span className="mono">01 / INPUT</span><h3>Read the design</h3><p>The P03 reference establishes the basement drainage arrangement, pipe services and design connections.</p></article><article><span className="mono">02 / DEVELOPMENT</span><h3>Resolve the detail</h3><p>The layout documents dimensioned pipe routes and levels alongside the building geometry.</p></article><article><span className="mono">03 / DOCUMENTATION</span><h3>Explain the interfaces</h3><p>Plans and sections show sump pits, valves, cleanouts, interceptors and channel-drain connections.</p></article></div>
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
          <div className="experience-list"><p className="mono">PROJECT EXPERIENCE</p><article><span>01</span><div><h3>Keturah Resort</h3><p>Shop drawings & drainage detailing</p></div><a href="#work" aria-label="View Keturah Resort case study"><ArrowUpRight size={20} /></a></article><article><span>02</span><div><h3>Mangrove Residency</h3><p>Service coordination & as-built drawings</p></div></article><article><span>03</span><div><h3>Orla Infinity</h3><p>Water-supply as-built submissions</p></div></article><article><span>04</span><div><h3>Boulevard</h3><p>HVAC load calculations & HAP reports</p></div></article></div>
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
