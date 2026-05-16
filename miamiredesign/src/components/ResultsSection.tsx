import { ArrowUpRight, Brain, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Instant Website Redesign",
    description: "Your existing site, beautifully reimagined by AI in under 60 seconds."
  },
  {
    icon: Brain,
    title: "Gen-AI SEO Optimization",
    description: "Your site will rank on Google AND be featured in AI chatbot responses like ChatGPT and Claude."
  },
  {
    icon: Zap,
    title: "Miami Modern Aesthetic",
    description: "Vibrant, professional design that captures the energy of South Florida while appealing to your audience."
  },
  {
    icon: ArrowUpRight,
    title: "Continuous AI Marketing Agent",
    description: "Our AI continues to work for you: updating content, posting social media, and generating monthly SEO reports."
  }
];

export default function ResultsSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Succeed</span> Online
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-gray-900/40 border border-gray-800 transition-all duration-300 hover:bg-gray-900/60 hover:border-cyan-500/30">
                <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-1 text-gray-400">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-gray-800">
          <h3 className="text-2xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Ready to transform your web presence?</span>
          </h3>
          <p className="text-center text-gray-400 mb-6">
            Millions of Miami businesses still have websites from 2018. Be the first in your industry to upgrade.
          </p>
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-200 transform hover:scale-[1.02]">
              Start My AI Redesign
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
