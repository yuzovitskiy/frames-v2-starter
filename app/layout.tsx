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

// const isDevelopment = process.env.NODE_ENV === 'development';
// const baseUrl = isDevelopment 
//   ? process.env.NEXT_PUBLIC_URL 
//   : 'https://frames-v2-starter-pi.vercel.app';

export const metadata: Metadata = {
  title: "Frame V2 Starter",
  description: "A starter for Frame v2",
  openGraph: {
    title: "Frame V2 Starter",
    description: "A starter for Frame v2",
  },
  other: {
    'fc:frame': JSON.stringify({
      version: 'next',
      imageUrl: 'https://frames-v2-starter-pi.vercel.app/images/feed.png',
      button: {
        title: 'Press Me',
        action: {
          type: 'launch_frame',
          name: 'Frame V2 Starter',
          url: 'https://frames-v2-starter-pi.vercel.app',
          splashImageUrl: 'https://frames-v2-starter-pi.vercel.app/images/splash.png',
          splashBackgroundColor: '#f7f7f7'
        }
      }
    })
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
