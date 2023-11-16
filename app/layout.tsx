import type { Metadata } from "next";
import { Heebo, Nunito } from "next/font/google";
import "./globals.css";

const heebo = Heebo({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Step Portfolio",
  description: "Stephano Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
