'use client';

import { BookOpen, Heart, Share2 } from 'lucide-react';

export default function DevotionalsPage() {
  const devotionals = [
    {
      id: 1,
      title: 'Finding Peace in Uncertainty',
      date: 'Feb 23, 2026',
      category: 'Faith',
      excerpt: 'Learn how to cultivate inner peace when life feels unpredictable...',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'The Power of Gratitude',
      date: 'Feb 22, 2026',
      category: 'Gratitude',
      excerpt: 'Discover how thanksgiving can transform your entire perspective...',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Overcoming Fear with Faith',
      date: 'Feb 21, 2026',
      category: 'Courage',
      excerpt: 'Explore biblical truths that help us overcome our deepest fears...',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12">Devotionals</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devotionals.map((dev) => (
          <div key={dev.id} className="card flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold flex-1">{dev.title}</h3>
              <Heart className="w-5 h-5 text-purple-400 ml-2" />
            </div>
            <p className="text-sm text-gray-400 mb-2">{dev.date}</p>
            <span className="text-xs bg-gray-900/60 text-purple-300 px-3 py-1 rounded-full w-fit mb-3 border border-purple-700/30\">
              {dev.category}
            </span>
            <p className="text-gray-300 mb-4 flex-grow">{dev.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{dev.readTime}</span>
              <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Read →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
