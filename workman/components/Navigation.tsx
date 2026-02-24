'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/daily-verse', label: 'Daily Verse' },
    { href: '/devotionals', label: 'Devotionals' },
    { href: '/prayer-journal', label: 'Prayer Journal' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white shadow-2xl z-50 border-b border-purple-900/10">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Workmanship
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 py-3 space-y-2 border-t border-purple-900/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-900/50 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
