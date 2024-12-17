import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  authors: [
    { name: "Harinarayanan K P", url: "https://github.com/harinarayanan-kp/" },
  ],
  title: "Tharikida Docs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap&quot;);
        </style>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/tharikida-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}