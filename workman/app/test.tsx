export default function TestPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">✅ App is Running</h1>
        <p className="text-xl text-gray-300 mb-8">If you can see this, the Next.js app is rendering correctly.</p>
        <a href="/" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">← Back to Home</a>
      </div>
    </div>
  );
}
