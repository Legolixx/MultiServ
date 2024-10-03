import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ThememToggle from "@/components/ThememToggle";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Nome do projeto",
  description: "descrição projeto",
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="hidden md:block">
            <Navbar containerStyles="w-full py-4 px-6" />
          </div>
          <div className="flex flex-row gap-5 justify-between items-center md:hidden m-5">
            <div className="text-3xl text-primary font-bold start-1 tracking-[10px] gap-5">
              <Link href="/">MultiServ</Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-5">
              <MobileNav />
              <ThememToggle />
            </div>
          </div>
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
