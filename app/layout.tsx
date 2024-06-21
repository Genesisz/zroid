import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const dm_sans = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zroid",
  description: "Rare technologies and unmatched innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
