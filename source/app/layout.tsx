import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nooruddin Shaikh | BIM, MEP & HVAC Portfolio",
  description: "BIM modelling, MEP coordination and HVAC engineering. Explore Nooruddin Shaikh's drawings and project experience in the United Arab Emirates.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
