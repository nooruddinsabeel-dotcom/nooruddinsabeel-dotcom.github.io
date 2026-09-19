"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Folder, FileText, Layers3, Images, Calculator, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { asset, drawings, DrawingViewer } from "./drawing-viewer";
import { KeturahInformation } from "./keturah-information";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Keturah's collection is project-specific; other projects can define their own sections.
const sections = [
  { id: "project-info", number: "01", title: "Project Info", icon: BookOpen, status: "Overview & responsibilities" },
  { id: "final-drawings", number: "02", title: "Final Drawings", icon: FileText, status: "3 drawing samples" },
  { id: "coordination", number: "03", title: "Coordination", icon: Layers3, status: "Samples to be added" },
  { id: "screenshots", number: "04", title: "Screenshots", icon: Images, status: "Views to be added" },
  { id: "calculations", number: "05", title: "Calculations", icon: Calculator, status: "Samples to be added" },
  { id: "reference-inputs", number: "06", title: "Reference Inputs", icon: Folder, status: "1 consultant reference" },
];

function DrawingCollection({ reference = false }: { reference?: boolean }) {
  const collection = drawings.filter(d => (d.id === "design-input") === reference);
  const [selected, setSelected] = useState(collection[0].id);
  const d = collection.find(item => item.id === selected) || collection[0];
  return <div className="drawing-tabs">
    {collection.length > 1 && <div className="collection-choices" aria-label="Drawing selection">{collection.map(item => <button key={item.id} aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}>{item.tab}</button>)}</div>}
    <div className="sheet-toolbar"><span className={reference ? "revision-tag reference-tag" : "revision-tag"}>{d.revision}</span><span>{d.role}</span><div className="toolbar-action"><DrawingViewer key={d.id} drawing={d} /></div></div>
    <div className="sheet-preview"><img src={asset(`${d.id}.webp`)} alt={`${d.title} – ${d.revision}`} width={2504} height={1769} loading="lazy" /></div>
    <div className="sheet-caption" aria-live="polite"><div><h3>{d.title}</h3><p>{d.description}</p></div><div className="sheet-spec"><span>{d.date}</span><span>{d.scale}</span><a href={asset(`${d.id}.pdf`)} target="_blank" rel="noopener noreferrer">View original PDF <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
  </div>;
}

function PendingSection({ title, description }: { title: string; description: string }) {
  return <div className="collection-empty"><Folder size={32} aria-hidden="true" /><p className="eyebrow">Collection in progress</p><h3>{title}</h3><p>{description}</p><span>Samples will appear here when added.</span></div>;
}

export function KeturahPortfolio() {
  const [section, setSection] = useState("project-info");
  useEffect(() => {
    const sync = () => { const id = window.location.hash.slice(1); setSection(sections.some(s => s.id === id) ? id : "project-info"); };
    sync(); window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  function selectSection(value: string) {
    setSection(value);
    window.history.replaceState(null, "", `#${value}`);
  }
  return <>
    <a className="skip-link" href="#project-main">Skip to project</a>
    <header className="site-header"><a className="brand" href={`${base}/`} aria-label="Nooruddin Shaikh, home"><span className="brand-mark" aria-hidden="true">N<span>↗</span></span><span>Nooruddin<span className="brand-last">Shaikh</span></span></a><nav aria-label="Project navigation"><a href={`${base}/#work`}><ArrowLeft size={14} aria-hidden="true" /> All projects</a><a href={`${base}/#contact`}>Contact</a></nav><span className="header-location">BIM · MEP · HVAC</span></header>
    <main id="project-main" className="shell project-portfolio">
      <div className="portfolio-heading"><p className="eyebrow">Selected work / Project portfolio</p><h1>Keturah Resort<span className="accent">.</span></h1><p>Al Jaddaf, Dubai · Earth, Water & Sky mansion packages</p><div className="project-tags"><span>MEP modelling</span><span>Coordination</span><span>Shop drawings</span></div></div>
      <Tabs value={section} onValueChange={selectSection} className="portfolio-tabs">
        <TabsList className="folder-grid" aria-label="Keturah portfolio sections">{sections.map(s => <TabsTrigger key={s.id} value={s.id} className="folder-card"><span className="folder-top"><s.icon size={21} aria-hidden="true" /><span className="mono">{s.number}</span></span><span className="folder-title">{s.title}</span><span className="folder-status">{s.status}</span></TabsTrigger>)}</TabsList>
        <TabsContent value="project-info" className="portfolio-panel"><div className="portfolio-panel-heading"><span className="mono">01 / PROJECT INFO</span><h2>Project information</h2></div><KeturahInformation /></TabsContent>
        <TabsContent value="final-drawings" className="portfolio-panel"><div className="portfolio-panel-heading"><span className="mono">02 / FINAL DRAWINGS</span><h2>Inside the drawing set</h2><p>M11 / EV4 basement drainage · Revisions follow the supplied title blocks.</p></div><DrawingCollection /></TabsContent>
        <TabsContent value="coordination" className="portfolio-panel"><div className="portfolio-panel-heading"><span className="mono">03 / COORDINATION</span><h2>Coordination</h2></div><PendingSection title="How the services come together" description="Clash reviews, coordination issues and model-review examples." /></TabsContent>
        <TabsContent value="screenshots" className="portfolio-panel"><div className="portfolio-panel-heading"><span className="mono">04 / SCREENSHOTS</span><h2>Model views & screenshots</h2></div><PendingSection title="Inside the model" description="Revit views and service details. An interactive 3D model is planned for a later update." /></TabsContent>
        <TabsContent value="calculations" className="portfolio-panel"><div className="portfolio-panel-heading"><span className="mono">05 / CALCULATIONS</span><h2>Calculations</h2></div><PendingSection title="The engineering behind the model" description="Project calculation samples and supporting schedules." /></TabsContent>
        <TabsContent value="reference-inputs" className="portfolio-panel"><div className="portfolio-panel-heading"><span className="mono">06 / REFERENCE INPUTS</span><h2>Design reference inputs</h2><p>Consultant-authored material used as input to my modelling and drawing work.</p></div><DrawingCollection reference /></TabsContent>
      </Tabs>
    </main>
    <footer className="site-footer shell"><div><span className="footer-name">Nooruddin Shaikh</span><span>Keturah Resort portfolio</span></div><a href={`${base}/#work`}><ArrowLeft size={16} aria-hidden="true" /> All projects</a><span className="footer-year">© 2026</span></footer>
  </>;
}
