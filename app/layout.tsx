import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { SplashScreen } from "@/components/ui/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Falahsys | We Build Digital Products That Make a Difference",
    template: "%s | Falahsys",
  },
  description:
    "Falahsys is a creative tech agency specializing in brand identity, web design & development, and digital solutions for ambitious businesses.",
  keywords: ["web design", "brand identity", "digital agency", "software development", "Falahsys"],
  authors: [{ name: "Falahsys", url: "https://falahsys.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Falahsys",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <SplashScreen />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
