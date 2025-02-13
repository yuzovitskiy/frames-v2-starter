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

export const metadata: Metadata = {
  title: "Frames v2 demo",
  description: "This demo is made for developers to quickly get started with Frames v2 integration",
  openGraph: {
    title: "Frames v2 demo",
    description: "This demo is made for developers to quickly get started with Frames v2 integration",
    images: ["https://placehold.co/1200x630"],
  },
  // Frame v2 specific meta tags
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://placehold.co/1200x630',
    'fc:frame:button:1': 'Sign in with Farcaster',
    'fc:frame:post_url': process.env.NEXT_PUBLIC_URL || '',
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
