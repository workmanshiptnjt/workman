'use client';

import { Settings, LogOut } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        <div className="space-y-6">
          {/* Profile Info */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2 border border-purple-700/30 bg-gray-900/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-2 border border-purple-700/30 bg-gray-900/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Your Stats</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">23</p>
                <p className="text-sm text-gray-400">Day Streak</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">156</p>
                <p className="text-sm text-gray-400">Verses Read</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">48</p>
                <p className="text-sm text-gray-400">Prayers Logged</p>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Preferences</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-purple-500" />
                <span className="text-gray-300">Daily verse notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-purple-500" />
                <span className="text-gray-300">Prayer reminders</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-purple-500" />
                <span className="text-gray-300">Email newsletter</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="btn-primary flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Save Changes
            </button>
            <button className="btn-secondary text-red-400 hover:bg-red-900/10 flex items-center gap-2 border-red-800/30\">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
