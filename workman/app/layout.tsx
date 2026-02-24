import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workmanship - Grow Your Faith Daily',
  description: 'Bible Trivia, Prayer Requests, Faith Feed, and Community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white m-0 p-0">
        {children}
      </body>
    </html>
  );
}