import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Header from "./layout-components/header";
import Footer from "./layout-components/footer";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PixL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelifySans.variable} antialiased overflow-x-hidden min-h-screen`}
      >
        <Header />
        <main className="pb-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
