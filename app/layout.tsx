import type { Metadata } from "next";
import "./globals.css";
import { resume } from "@/lib/resume";
import { AppThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: `${resume.name} | Portfolio`,
  description:
    "Portfolio of Immani Rama Venkata Sri Sai, B.Tech CSE student showcasing projects, skills, and certifications.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/logo.ico",
    apple: "/logo.png"
  },
  openGraph: {
    title: `${resume.name} | Portfolio`,
    description:
      "Portfolio of Immani Rama Venkata Sri Sai, B.Tech CSE student showcasing projects, skills, and certifications.",
    url: "https://example.com",
    siteName: `${resume.name} Portfolio`,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${resume.name} | Portfolio`,
    description:
      "Portfolio of Immani Rama Venkata Sri Sai, B.Tech CSE student showcasing projects, skills, and certifications."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans">
        <AppThemeProvider>
          <div className="relative min-h-screen overflow-hidden">
            {/* Ambient background effects */}
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(10,132,255,0.08),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(10,132,255,0.05),transparent_50%)]" />
            
            {/* Subtle grid pattern */}
            <div className="pointer-events-none fixed inset-0 opacity-20">
              <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>
            
            {/* Floating orbs */}
            <div className="pointer-events-none fixed inset-0">
              <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px] animate-float" />
              <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
            </div>
            
            <Nav />
            <main className="relative mx-auto max-w-6xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
