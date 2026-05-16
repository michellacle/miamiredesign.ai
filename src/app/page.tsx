export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with gradient text */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Miami&apos;s First<br />
          <span className="text-white">60-Second</span> Website<br />
          <span className="text-white">Redesign Service</span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          Stop waiting weeks for a web agency. Enter your URL or describe your business, and watch your stunning new site appear in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all cursor-pointer">
            Start My Redesign
          </button>
          <button className="px-8 py-4 border border-gray-700 bg-transparent text-white font-semibold rounded-lg hover:bg-gray-800 transition-all cursor-pointer">
            See How It Works
          </button>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold text-cyan-400">No More Waiting</h3>
            <p className="mt-2 text-gray-400">Traditional agencies take 6+ weeks. We do it in 60 seconds.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold text-purple-400">AI-Powered SEO</h3>
            <p className="mt-2 text-gray-400">Your site gets ranked for Google AND AI search engines.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold text-pink-400">Built for Miami</h3>
            <p className="mt-2 text-gray-400">Vibrant aesthetics that capture the energy of South Florida.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
