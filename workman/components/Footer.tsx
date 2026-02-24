import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-purple-900/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 gradient-text">Workmanship</h3>
            <p className="text-sm text-gray-400">A Christian devotional app for daily spiritual growth.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/daily-verse" className="text-gray-400 hover:text-purple-400 transition-colors">Daily Verse</Link></li>
              <li><Link href="/devotionals" className="text-gray-400 hover:text-purple-400 transition-colors">Devotionals</Link></li>
              <li><Link href="/prayer-journal" className="text-gray-400 hover:text-purple-400 transition-colors">Prayer Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-900/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Workmanship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
