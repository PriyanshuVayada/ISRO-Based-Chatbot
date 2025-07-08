import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, Globe, Satellite, ChevronDown, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: '104', label: 'Satellites in Single Launch', color: 'text-blue-400' },
    { number: '$74M', label: 'Mars Mission Cost', color: 'text-red-400' },
    { number: '95%', label: 'Mission Success Rate', color: 'text-green-400' },
    { number: '36', label: 'Countries Served', color: 'text-purple-400' }
  ];

  const features = [
    {
      icon: Globe,
      title: 'ISRO Missions',
      description: 'Comprehensive information about Chandrayaan, Gaganyaan, Mars Orbiter Mission, and more.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Launch Vehicles',
      description: 'Details about PSLV, GSLV Mk III, SSLV rockets and their capabilities.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Satellite,
      title: 'Satellites & Technology',
      description: 'Information about INSAT, GSAT, NAVIC, and other satellite systems.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-300 font-medium">Bharatiya Antariksh Hackathon 2025 Winner</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
              R00tBot
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your intelligent space technology assistant powered by advanced AI and knowledge graphs. 
            Get instant answers about ISRO missions, rockets, satellites, and achievements.
          </p>

          {/* Dynamic Stats Display */}
          <div className="mb-12">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 max-w-md mx-auto">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 transition-all duration-500 ${stats[currentStat].color}`}>
                  {stats[currentStat].number}
                </div>
                <div className="text-slate-300 text-sm">
                  {stats[currentStat].label}
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStat ? 'bg-indigo-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={onStartChat}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Start AI Conversation
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center px-8 py-4 bg-slate-700/50 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Explore Missions
            </button>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 group hover:transform hover:scale-105 hover:rotate-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>
                
                {/* Progress bar animation on hover */}
                <div className="mt-6 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${feature.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">AI Knowledge Engine Active</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              <span className="text-sm">Real-time Search Enabled</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
              <span className="text-sm">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;