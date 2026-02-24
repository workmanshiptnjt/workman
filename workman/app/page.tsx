'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, Download, Star } from 'lucide-react';
import FeatureShowcase from '@/components/FeatureShowcase';

const features = [
  {
    title: 'Bible Trivia',
    description: 'Test your biblical knowledge with engaging trivia challenges. Learn and grow while having fun!',
    icon: '🧠',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    title: 'Prayer Requests',
    description: 'Share prayer requests with the community and receive intercession from believers worldwide.',
    icon: '🙏',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    title: 'Faith Feed',
    description: 'Stay connected with inspiring daily updates, testimonies, and faith-building content.',
    icon: '📰',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
  },
  {
    title: 'Topics & Learning',
    description: 'Explore curated topics on faith, theology, and spiritual growth with expert insights.',
    icon: '📚',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
  },
  {
    title: 'Daily Verses',
    description: 'Receive personalized daily scripture verses tailored to your spiritual journey.',
    icon: '✨',
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
  },
  {
    title: 'Community Hub',
    description: 'Connect with like-minded believers, share experiences, and grow together in faith.',
    icon: '👥',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-500',
  },
];

const stats = [
  { label: 'Active Users', value: '500K+' },
  { label: 'Daily Verses', value: '365+' },
  { label: 'Community Members', value: '1M+' },
  { label: 'Countries', value: '180+' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bible Study Teacher',
    quote: 'Workmanship has transformed how I engage with Scripture daily. The trivia feature makes learning biblical truth both fun and meaningful.',
    avatar: '👩‍🏫',
  },
  {
    name: 'Michael Chen',
    role: 'Pastor',
    quote: 'The community prayer requests feature has created meaningful connections among our congregation members across distances.',
    avatar: '👨‍🎓',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Faith Coach',
    quote: 'Workmanship makes spiritual growth accessible and engaging. I recommend it to everyone in my network!',
    avatar: '👩‍💼',
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fadeInLeft">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Grow Your </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Faith Daily</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg">
                Join millions of believers in a transformed spiritual journey. Bible trivia, prayer communities, daily verses, and faith-building content in one powerful app.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold overflow-hidden hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download on App Store
                  </div>
                </button>
                <button className="px-8 py-4 border-2 border-purple-500/50 text-white rounded-xl font-semibold hover:border-purple-400 hover:bg-purple-900/20 transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="hover:-translate-y-1 transition-transform">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="animate-fadeInRight flex justify-center">
              <div className="relative h-96 flex items-center justify-center animate-float">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Animated phone frame */}
                  <div className="w-64 h-96 rounded-3xl bg-gradient-to-br from-purple-500/20 to-purple-900/20 border-2 border-purple-500/50 shadow-2xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-gradient-to-b from-purple-900 to-black p-2 rounded-3xl flex flex-col items-center justify-center">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-white text-center text-sm font-semibold px-4">Workmanship</p>
                      <p className="text-purple-300 text-center text-xs mt-2">Your Faith Journey Starts Here</p>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-10 right-0 p-3 bg-blue-500/20 rounded-lg border border-blue-500/50 animate-bounce-slow">
                    <div className="w-6 h-6 text-blue-400">🧠</div>
                  </div>
                  <div className="absolute bottom-20 left-0 p-3 bg-pink-500/20 rounded-lg border border-pink-500/50 animate-bounce-slow">
                    <div className="w-6 h-6 text-pink-400">❤️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20">
        <div className="container">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Powerful </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to deepen your faith and connect with a global community of believers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FeatureShowcase key={idx} {...feature} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="container">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Loved by </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Believers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black border border-purple-900/20 hover:border-purple-500/50 transition-all hover:-translate-y-2 duration-300 animate-scaleIn"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 animate-fadeIn">
            {/* Background animation */}
            <div className="absolute inset-0 opacity-20 blur-3xl animate-pulse">
              <div className="h-full w-full bg-gradient-to-r from-purple-600 to-pink-600" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-white">Start Your </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Faith Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of believers who are transforming their spiritual lives with Workmanship.
              </p>
              <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold overflow-hidden inline-block hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 duration-300"></div>
                <div className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}