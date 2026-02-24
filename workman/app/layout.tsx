import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://workmanship.app';
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Workmanship - Grow Your Faith Daily | Bible Trivia, Prayer & Community',
  description: 'Join millions of believers in a transformed spiritual journey. Bible trivia, prayer communities, daily verses, and faith-building content in one powerful app.',
  keywords: [
    'Christian app',
    'Daily devotional',
    'Prayer app',
    'Bible study',
    'Scripture',
    'Spiritual growth',
    'Faith community',
    'Prayer requests',
    'Bible trivia',
  ],
  authors: [{ name: 'Workmanship Team', url: baseUrl }],
  creator: 'Workmanship',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Workmanship - Grow Your Faith Daily',
    description: 'Join millions of believers in a transformed spiritual journey. Bible trivia, prayer communities, daily verses, and faith-building content.',
    siteName: 'Workmanship',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Workmanship - Bible Trivia, Prayer Requests, Faith Feed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workmanship - Grow Your Faith Daily',
    description: 'Join millions of believers in a transformed spiritual journey.',
    images: [`${baseUrl}/og-image.png`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@WorkmanshipApp',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
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