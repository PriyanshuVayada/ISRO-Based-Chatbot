import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, Wifi, Database, Zap } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'chat', label: 'AI Assistant' },
    { id: 'missions', label: 'Mission Explorer' },
    { id: 'about', label: 'About' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
        : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/30'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Rocket className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                R00tBot
              </h1>
              <p className="text-xs text-slate-300 group-hover:text-slate-200 transition-colors">
                Space Tech AI Assistant
              </p>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="hidden lg:flex items-center space-x-6 mr-8">
            <div className="flex items-center space-x-2 text-xs">
              <div className="flex items-center space-x-1">
                <Database className="w-3 h-3 text-green-400" />
                <span className="text-slate-300">KB</span>
              </div>
              <div className="flex items-center space-x-1">
                <Wifi className="w-3 h-3 text-blue-400" />
                <span className="text-slate-300">Search</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-purple-400" />
                <span className="text-slate-300">AI</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-indigo-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors relative"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg transition-all duration-300 transform ${
                    activeSection === item.id
                      ? 'text-indigo-400 bg-indigo-500/10 border-l-4 border-indigo-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50 hover:translate-x-2'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Status Indicators */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <div className="flex items-center justify-center space-x-6 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Knowledge Base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-slate-300">Web Search</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <span className="text-slate-300">AI Engine</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;