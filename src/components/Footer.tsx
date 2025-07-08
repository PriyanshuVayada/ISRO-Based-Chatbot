import React from 'react';
import { Github, Twitter, Mail, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">R00tBot</h3>
                <p className="text-sm text-slate-400">Space Tech AI Assistant</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Democratizing access to space technology information through advanced AI and knowledge graph technology. Built for the Bharatiya Antariksh Hackathon 2025.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hackathon</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Bharatiya Antariksh 2025</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">ISRO x Hack2Skill</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Team R00tforce</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Team R00tforce. Built with ❤️ for the Bharatiya Antariksh Hackathon 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;