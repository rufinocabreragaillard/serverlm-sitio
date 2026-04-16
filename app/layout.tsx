import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Server LM — Conversa con tus documentos",
  description: "Como NotebookLM, pero para ti y toda tu organización. Server LM conecta a cada persona con los documentos que necesita — y solo con esos.",
  icons: {
    icon: "/logo_serverlm_A.png",
    apple: "/logo_serverlm_A.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
