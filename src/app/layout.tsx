import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Receive Pay QR Generator",
  description: "Generate UPI QR codes with custom amounts offline",
  applicationName: "UPI QR Gen",
  appleWebApp: {
    capable: true,
    title: "UPI QR Gen",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
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
