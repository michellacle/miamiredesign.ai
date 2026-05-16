import { ChevronRight, MousePointer2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Miami&apos;s First<br />
            <span className="text-white">60-Second</span> Website<br />
            <span className="text-white">Redesign Service</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Stop waiting weeks for a web agency. Enter your URL or describe your business, and watch your stunning new site appear in seconds.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-200 transform hover:scale-[1.02]">
              Start My Redesign
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 bg-transparent text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-[1.02]">
              <MousePointer2 className="w-5 h-5" />
              See How It Works
            </button>
          </div>
          
          {/* Supporting copy with Miami Modern flair */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-semibold text-cyan-400">No More Waiting</h3>
              <p className="mt-2 text-gray-400">Traditional agencies take 6+ weeks. We do it in 60 seconds.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-semibold text-purple-400">AI-Powered SEO</h3>
              <p className="mt-2 text-gray-400">Your site gets ranked for Google AND AI search engines.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/40 border border-gray-800">
              <h3 className="text-lg font-semibold text-pink-400">Built for Miami</h3>
              <p className="mt-2 text-gray-400">Vibrant aesthetics that capture the energy of South Florida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
