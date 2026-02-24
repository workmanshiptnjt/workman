'use client';

import { useState } from 'react';
import { Heart, Plus, Trash2 } from 'lucide-react';

export default function PrayerJournalPage() {
  const [prayers, setPrayers] = useState([
    {
      id: 1,
      date: 'Feb 23, 2026',
      title: 'Guidance for Today',
      content: 'Lord, please guide my decisions today and help me serve others with wisdom.',
      answered: false,
    },
    {
      id: 2,
      date: 'Feb 22, 2026',
      title: 'Healing Prayer',
      content: 'Praying for a friend who is going through health challenges.',
      answered: true,
    },
  ]);

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Prayer Journal</h1>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Prayer
          </button>
        </div>

        <div className="space-y-4">
          {prayers.map((prayer) => (
            <div key={prayer.id} className="card">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{prayer.title}</h3>
                  <p className="text-sm text-gray-400">{prayer.date}</p>
                </div>
                <div className="flex gap-2">
                  {prayer.answered && (
                    <Heart className="w-5 h-5 text-purple-500 fill-purple-500" />
                  )}
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-gray-300">{prayer.content}</p>
              {prayer.answered && (
                <div className="mt-3 text-sm text-green-400 font-medium">
                  ✓ Prayer Answered
                </div>
              )}
            </div>
          ))}
        </div>

        {prayers.length === 0 && (
          <div className="text-center py-12 bg-gray-900/30 border border-purple-900/10 rounded-lg\">
            <p className="text-gray-400 mb-4">Start your prayer journal today</p>
            <button className="btn-primary">Write Your First Prayer</button>
          </div>
        )}
      </div>
    </div>
  );
}
