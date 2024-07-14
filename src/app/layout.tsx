import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./global.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicóloga Stephanye Lopes",
  description: "Psicóloga Stephanye Lopes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
