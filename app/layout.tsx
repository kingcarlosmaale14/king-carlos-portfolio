import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "King Carlos Maale — Computer Engineering Student",
  description: "Portfolio of King Carlos Maale — Computer Engineering student focused on hardware and software development."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}