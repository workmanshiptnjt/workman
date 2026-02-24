export default function TestPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">✅ Next.js is Running</h1>
        <p className="text-xl text-gray-300 mb-8">If you see this, the app is rendering correctly.</p>
        <p className="text-sm text-gray-500 mb-8">Timestamp: {new Date().toLocaleString()}</p>
        <a href="/" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
