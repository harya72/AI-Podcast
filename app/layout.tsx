import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

// const noto_sans = Noto_Sans({subsets:['devanagari']});

export const metadata: Metadata = {
  title: "Podcast",
  description: "Listen to your favorite podcast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
