import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const interFont = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "VanLife",
  description: "Web app where you can rent the perfect van for your road trip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${interFont.variable} antialiased suppressHydrationWarning`}>
        <body>
          <main className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
