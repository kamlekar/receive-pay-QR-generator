import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Receive Pay QR Generator",
  description: "Generate UPI QR codes with custom amounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
