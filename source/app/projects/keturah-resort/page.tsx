import type { Metadata } from "next";
import { KeturahPortfolio } from "@/components/projects/keturah-portfolio";

export const metadata: Metadata = {
  title: "Keturah Resort | Nooruddin Shaikh Portfolio",
  description: "Explore Keturah Resort project information, MEP drawing samples, coordination, screenshots, calculations and reference inputs.",
};

export default function KeturahPage() { return <KeturahPortfolio />; }
