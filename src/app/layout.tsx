import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://otherfoundationbham.org"),
  title: "The Other Foundation",
  description:
    "Every month, somebody in Birmingham gets funded, and our members decide who.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
