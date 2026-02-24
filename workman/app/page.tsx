export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black border-b border-purple-900/20 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">Workmanship</h1>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#testimonials" className="hover:text-purple-400">Testimonials</a>
            <a href="#cta" className="hover:text-purple-400">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-white">Grow Your </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Faith Daily</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join millions of believers in a transformed spiritual journey. Bible trivia, prayer communities, daily verses, and faith-building content in one powerful app.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold transition">
              Download App
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 hover:bg-purple-900/20 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            <span className="text-white">Powerful </span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Features</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🧠', title: 'Bible Trivia', desc: 'Test your biblical knowledge with engaging trivia challenges.' },
              { icon: '🙏', title: 'Prayer Requests', desc: 'Share prayer requests with the community.' },
              { icon: '📰', title: 'Faith Feed', desc: 'Stay connected with inspiring daily updates.' },
              { icon: '📚', title: 'Topics & Learning', desc: 'Explore curated topics on faith and theology.' },
              { icon: '✨', title: 'Daily Verses', desc: 'Receive personalized daily scripture verses.' },
              { icon: '👥', title: 'Community Hub', desc: 'Connect with like-minded believers.' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-gray-900/50 border border-purple-900/20 hover:border-purple-500/50 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            <span className="text-white">Loved by </span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Believers</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Bible Study Teacher', quote: 'Workmanship has transformed how I engage with Scripture daily.' },
              { name: 'Michael Chen', role: 'Pastor', quote: 'The community prayer requests feature has created meaningful connections.' },
              { name: 'Emma Rodriguez', role: 'Faith Coach', quote: 'Workmanship makes spiritual growth accessible and engaging.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-gray-900/50 border border-purple-900/20">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-black">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            <span className="text-white">Start Your </span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Faith Journey</span>
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of believers transforming their spiritual lives with Workmanship.
          </p>
          <button className="px-10 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold text-lg transition">
            Download Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-900/10 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 Workmanship. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}