import { Globe, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ToolsSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Two Ways To <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transform</span> Your Web Presence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tool 1: URL Redesign */}
          <div className="relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-900/20 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 group">
            <div className="absolute -top-6 -right-6 text-purple-500/20">
              <Sparkles className="w-32 h-32" />
            </div>
            
            <div className="p-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            
            <h3 className="text-2xl font-semibold mt-4">Redesign an Existing Site</h3>
            <p className="mt-2 text-gray-400 mb-6">
              Paste your website URL or a competitor's URL. We'll analyze the content and generate a stunning, modernized version of your page.
            </p>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter your website URL..." 
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-white placeholder-gray-500"
              />
              <button className="absolute right-2 top-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium text-sm opacity-80 hover:opacity-100 transition-opacity">
                Redesign
              </button>
            </div>
          </div>
          
          {/* Tool 2: From-Scratch Build */}
          <div className="relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-900/20 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 group">
            <div className="absolute -top-6 -right-6 text-cyan-500/20">
              <MousePointer2 className="w-32 h-32" />
            </div>
            
            <div className="p-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/30">
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>
            
            <h3 className="text-2xl font-semibold mt-4">Build From Scratch</h3>
            <p className="mt-2 text-gray-400 mb-6">
              Tell us what your business does and we'll build a complete, polished website tailored to your needs.
            </p>
            
            <div className="relative">
              <textarea 
                placeholder="Describe your business: I own a vegan bakery in Brickell. I sell custom cakes and want people to order online..." 
                className="w-full h-20 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none text-white placeholder-gray-500 resize-none"
              />
              <button className="absolute right-2 bottom-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg text-white font-medium text-sm opacity-80 hover:opacity-100 transition-opacity">
                Build My Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
