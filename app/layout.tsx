import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookDemoModal from "@/components/ui/BookDemoModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://formezy.com"),
  title: {
    default: "Formezy — Build Enterprise Systems Without Complex Development",
    template: "%s · Formezy",
  },
  description:
    "Formezy is an Enterprise Application Platform that lets modern businesses build ERP, CRM, supply chain and operations systems — without writing complex code.",
  keywords: [
    "Enterprise Application Platform",
    "EAP",
    "low-code",
    "no-code",
    "ERP",
    "CRM",
    "workflow automation",
    "Formezy",
  ],
  openGraph: {
    type: "website",
    url: "https://formezy.com",
    title: "Formezy — Enterprise Application Platform",
    description:
      "Build enterprise systems without complex development. Unified workflows, automation and intelligence on one platform.",
    siteName: "Formezy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formezy — Enterprise Application Platform",
    description:
      "Build enterprise systems without complex development. Unified workflows, automation and intelligence on one platform.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen">
        {/* Global page background — HomeBG covers every page */}
        <div
          className="pointer-events-none fixed inset-0 -z-50"
          aria-hidden
          style={{
            backgroundImage: "url('/images/HomeBG.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BookDemoModal />
      </body>
    </html>
  );
}
