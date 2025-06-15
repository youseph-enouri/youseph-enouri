import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { Karla } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Youseph Enouri",
  description:
    "Youseph Enouri's Portfolio",
  metadataBase: "favicon.ico",
};

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
