'use client';

import { Heart, Flame, BookOpen, Zap } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    { icon: <Zap className="w-8 h-8" />, value: '156', label: 'Verses Read' },
    { icon: <Heart className="w-8 h-8" />, value: '48', label: 'Prayers' },
    { icon: <BookOpen className="w-8 h-8" />, value: '23', label: 'Devotionals' },
    { icon: <Flame className="w-8 h-8" />, value: '7', label: 'Day Streak' },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="card text-center">
          <div className="text-purple-400 mb-3 flex justify-center">
            {stat.icon}
          </div>
          <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
