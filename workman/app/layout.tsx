import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://workmanship.app'),
  title: 'Workmanship - Daily Christian Devotional | Scripture & Prayer',
  description: 'Grow spiritually with daily scripture, devotionals, and prayer journaling. Build meaningful spiritual habits with Workmanship.',
  keywords: ['Christian', 'Devotional', 'Prayer', 'Scripture', 'Bible', 'Spiritual Growth', 'Faith'],
  authors: [{ name: 'Workmanship Team' }],
  creator: 'Workmanship',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://workmanship.app',
    title: 'Workmanship - Daily Christian Devotional',
    description: 'Grow spiritually with daily scripture, devotionals, and prayer journaling.',
    images: [{
      url: 'https://workmanship.app/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Workmanship App',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workmanship - Daily Christian Devotional',
    description: 'Grow spiritually with daily scripture, devotionals, and prayer journaling.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-dark text-gray-100">
        <Navigation />
        <main className="min-h-screen pt-20 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}