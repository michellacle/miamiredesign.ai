import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Miami Redesign.ai — AI-Powered Website Redesign Service | Miami, FL",
  description: "Transform your Miami business website into a stunning, AI-optimized experience. Get your new site in under 60 seconds with our AI-powered redesign service. Perfect for restaurants, salons, real estate, and retail.",
  keywords: ["miami web design", "ai website designer", "miami seo agency", "rapid website rebuild", "ai web design miami", "miami digital marketing"],
  authors: [{ name: "Miami Redesign" }],
  openGraph: {
    title: "Miami Redesign.ai — AI-Powered Website Redesign Service",
    description: "Transform your Miami business website into a stunning, AI-optimized experience. Get your new site in under 60 seconds.",
    locale: "en_US",
    type: "website",
    siteName: "Miami Redesign.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Redesign.ai — AI-Powered Website Redesign Service",
    description: "Transform your Miami business website in 60 seconds with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
