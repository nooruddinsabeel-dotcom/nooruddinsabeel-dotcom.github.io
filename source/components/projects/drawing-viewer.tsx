"use client";
import { useState } from "react";
import { ArrowUpRight, Maximize2, Plus, Minus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (name: string) => `${base}/work/${name}`;
export const drawings = [
  { id: "layout", tab: "Drainage layout", title: "Basement drainage layout", revision: "REV 01", role: "My drawing", date: "23 Jul 2026", scale: "1:100 at A1", description: "Dimensioned drainage routes, invert levels, cleanouts and connections, developed over the basement architectural and structural layout." },
  { id: "sections", tab: "Sections & details", title: "Sump pits, sections & drainage details", revision: "REV 01", role: "My drawing", date: "23 Jul 2026", scale: "NTS at A1", description: "Sump-pit plans and sections, valve pits, cleanout details, grease and oil interceptors, catch basins and channel gratings." },
  { id: "design-input", tab: "Design input", title: "Consultant drainage design", revision: "P03", role: "RSP design input", date: "24 Dec 2025", scale: "1:100 at A1", description: "RSP's 100% detailed-design submission provided as the design input for the basement drainage work. Consultant-authored reference." },
  { id: "enlarged", tab: "Enlarged views", title: "Basement drainage enlarged views", revision: "REV 00", role: "My drawing · sheet 03/03", date: "23 Jul 2026", scale: "1:100 at A1", description: "Enlarged drainage areas showing local routing, connection points and levels. Revision shown here follows the supplied title block." },
];

export function DrawingViewer({ drawing }: { drawing: typeof drawings[number] }) {
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
