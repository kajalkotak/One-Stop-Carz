import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: {
    default: "One Stop Carz – Car Service & Repair in Vadodara",
    template: "%s | One Stop Carz",
  },
  description:
    "One Stop Carz Vadodara offers professional car servicing, AMC plans, ceramic coating, denting painting, insurance claims and premium car care solutions.",
  keywords: [
    "car service vadodara",
    "car repair vadodara",
    "AMC car service",
    "ceramic coating vadodara",
    "car garage vadodara",
  ],
  openGraph: {
    title: "One Stop Carz – Trusted Car Service Center",
    description:
      "Book professional car servicing, AMC plans, ceramic coating & insurance claims at One Stop Carz Vadodara.",
    url: "https://one-stop-carz.vercel.app",
    siteName: "One Stop Carz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "One Stop Carz",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
