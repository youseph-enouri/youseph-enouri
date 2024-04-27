import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Kayne Lee",
  description:
    "Kayne Lee's Portfolio",
  metadataBase: "kayne.ico",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
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
