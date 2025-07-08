import React from 'react';
import { Award, Users, Code, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">About R00tBot</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Built by Team R00tforce for the Bharatiya Antariksh Hackathon 2025, democratizing access to space technology information through AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              R00tBot represents the future of space information accessibility. By leveraging advanced AI and knowledge graph technology, we've created an intelligent assistant that makes complex space data understandable for everyone.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Instant Information</h4>
                  <p className="text-slate-300 text-sm">Get immediate answers about ISRO missions, rockets, and achievements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Knowledge Graph</h4>
                  <p className="text-slate-300 text-sm">Powered by advanced graph database and NLP technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Team R00tforce</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              We are a passionate team of developers, data scientists, and space enthusiasts dedicated to making space technology accessible to all. Our expertise spans AI/ML, web development, and aerospace engineering.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">Bharatiya Antariksh Hackathon 2025</h4>
                <p className="text-slate-300 text-sm">ISRO x Hack2Skill Innovation Challenge</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <Award className="w-12 h-12 text-indigo-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">Technical Innovation</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                Advanced NLP and Knowledge Graph Processing
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                Real-time Data Integration and Updates
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                Semantic Search and Context Understanding
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                Responsive Web Design with Modern UI/UX
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-slate-300">Available</div>
              </div>
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">1000+</div>
                <div className="text-slate-300">Data Points</div>
              </div>
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">AI</div>
                <div className="text-slate-300">Powered</div>
              </div>
              <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">Fast</div>
                <div className="text-slate-300">Responses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;