import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const industries = [
  "Restaurants & Hospitality",
  "Real Estate",
  "Beauty & Salons",
  "Healthcare & Medical",
  "Retail & Boutique",
  "Professional Services"
];

export default function TrustSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Miami Businesses</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10">
          From South Beach to Brickell, we've helped local businesses transform their web presence and dominate Google search results.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-gray-900/40 border border-gray-800 transition-all duration-200 hover:border-cyan-500/30">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>{industry}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-900/20 max-w-2xl mx-auto">
          <p className="text-gray-400 italic">
            &quot;Our competitor slept. We built in our sleep.&quot;
          </p>
          <p className="mt-4 text-white font-semibold">
            — Miami Redesign.ai
          </p>
        </div>
      </div>
    </section>
  );
}
