import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isDevelopment = process.env.NODE_ENV === 'development';
const baseUrl = isDevelopment 
  ? process.env.NEXT_PUBLIC_URL 
  : 'https://frames-v2-starter-pi.vercel.app';

export const metadata: Metadata = {
  title: "Frame V2 Starter",
  description: "A starter for Frame v2",
  openGraph: {
    title: "Frame V2 Starter",
    description: "A starter for Frame v2",
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${baseUrl}/images/feed.png`,
    'fc:frame:button:1': 'Press Me',
    'fc:frame:post_url': `${baseUrl}/api/frame`,
    'fc:frame:version': 'vNext',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
