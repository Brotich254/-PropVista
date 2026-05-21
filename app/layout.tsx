import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropVista | Real Estate Listing Platform",
  description: "A real estate listing platform for property search, agent listings, and buyer inquiries."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
