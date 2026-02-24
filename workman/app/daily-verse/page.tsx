'use client';

export default function DailyVersePage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Today&apos;s Verse</h1>
        
        <div className="card mb-8">
          <div className="text-center">
            <p className="text-purple-400 mb-4 font-semibold">John 15:5</p>
            <p className="text-2xl leading-relaxed mb-6 italic text-gray-100">
              "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing."
            </p>
            <p className="text-sm text-gray-500">New International Version</p>
          </div>
        </div>

        <div className="bg-gray-900/40 border-l-4 border-purple-500 p-6 rounded-lg card\">
          <h2 className="text-xl font-bold mb-3">Reflection</h2>
          <p className="text-gray-300 mb-4">
            This verse reminds us that our strength comes from our connection with Jesus. Just as branches cannot bear fruit without the vine, we cannot accomplish meaningful spiritual growth without staying connected to Him through prayer, study, and obedience.
          </p>
          <p className="text-gray-300">
            Today, take time to reflect on how you can deepen your connection with God. What practices help you feel closest to Him?
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="btn-primary">Save to Favorites</button>
          <button className="btn-secondary">Share</button>
        </div>
      </div>
    </div>
  );
}
