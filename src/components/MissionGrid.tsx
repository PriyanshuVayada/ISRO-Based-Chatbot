import React, { useState } from 'react';
import { Calendar, MapPin, Rocket, Satellite, Target, Trophy, Filter, Search, ExternalLink, Clock, DollarSign } from 'lucide-react';

interface Mission {
  id: string;
  name: string;
  description: string;
  year: string;
  status: 'completed' | 'ongoing' | 'planned';
  category: 'lunar' | 'mars' | 'earth' | 'human' | 'solar' | 'interplanetary';
  achievements: string[];
  icon: React.ComponentType<any>;
  details: {
    launchDate?: string;
    cost?: string;
    duration?: string;
    objectives: string[];
    instruments?: string[];
    results?: string[];
  };
}

const MissionGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const missions: Mission[] = [
    {
      id: '1',
      name: 'Chandrayaan-3',
      description: 'India\'s third lunar exploration mission that successfully demonstrated soft landing and rover operations on the Moon\'s south pole.',
      year: '2023',
      status: 'completed',
      category: 'lunar',
      achievements: [
        'First successful soft landing on lunar south pole',
        'Rover operations for 14+ days',
        'Scientific data collection',
        'Cost-effective mission at $75M'
      ],
      icon: Satellite,
      details: {
        launchDate: 'July 14, 2023',
        cost: '$75 million',
        duration: '40 days to reach Moon',
        objectives: [
          'Demonstrate safe and soft landing on lunar surface',
          'Demonstrate rover roving on the moon',
          'Conduct in-situ scientific experiments'
        ],
        instruments: [
          'Vikram Lander with 4 payloads',
          'Pragyan Rover with 2 payloads',
          'Propulsion Module with 1 payload'
        ],
        results: [
          'Successful soft landing on August 23, 2023',
          'Rover operated for 14 Earth days',
          'Confirmed presence of sulfur on lunar surface',
          'Temperature measurements of lunar soil'
        ]
      }
    },
    {
      id: '2',
      name: 'Mars Orbiter Mission',
      description: 'India\'s first interplanetary mission that successfully entered Mars orbit, making India the first country to succeed in the first attempt.',
      year: '2014',
      status: 'completed',
      category: 'mars',
      achievements: [
        'First Mars mission success in first attempt',
        'Cost-effective interplanetary mission',
        'Operational for 7+ years',
        'Fourth space agency to reach Mars'
      ],
      icon: Target,
      details: {
        launchDate: 'November 5, 2013',
        cost: '$74 million',
        duration: '298 days to reach Mars',
        objectives: [
          'Study Martian surface features and morphology',
          'Study atmospheric dynamics',
          'Search for methane in Martian atmosphere'
        ],
        instruments: [
          'Mars Colour Camera (MCC)',
          'Thermal Infrared Imaging Spectrometer (TIS)',
          'Methane Sensor for Mars (MSM)',
          'Mars Exospheric Neutral Composition Analyser (MENCA)',
          'Lyman Alpha Photometer (LAP)'
        ],
        results: [
          'Successfully entered Mars orbit on September 24, 2014',
          'Captured high-resolution images of Mars',
          'Studied Martian atmosphere composition',
          'Operated far beyond planned mission duration'
        ]
      }
    },
    {
      id: '3',
      name: 'Gaganyaan',
      description: 'India\'s first crewed spaceflight program designed to carry Indian astronauts to low Earth orbit.',
      year: '2024-25',
      status: 'ongoing',
      category: 'human',
      achievements: [
        'First human spaceflight program',
        'Indigenous crew module development',
        'Astronaut training program',
        'Advanced life support systems'
      ],
      icon: Rocket,
      details: {
        cost: '$1.4 billion',
        objectives: [
          'Demonstrate human spaceflight capability',
          'Conduct microgravity experiments',
          'Technology demonstration for future missions'
        ],
        instruments: [
          'Crew Module (CM)',
          'Service Module (SM)',
          'Crew Escape System',
          'Environmental Control and Life Support System'
        ]
      }
    },
    {
      id: '4',
      name: 'Aditya-L1',
      description: 'India\'s first dedicated solar mission to study the Sun\'s corona and solar wind from the L1 Lagrange point.',
      year: '2023',
      status: 'ongoing',
      category: 'solar',
      achievements: [
        'First solar observation mission',
        'L1 orbit insertion',
        'Multi-instrument payload',
        'Continuous solar observation'
      ],
      icon: Trophy,
      details: {
        launchDate: 'September 2, 2023',
        cost: '$46 million',
        objectives: [
          'Study solar corona and chromosphere',
          'Monitor solar wind and magnetic field',
          'Study space weather phenomena'
        ],
        instruments: [
          'Visible Emission Line Coronagraph (VELC)',
          'Solar Ultraviolet Imaging Telescope (SUIT)',
          'Aditya Solar wind Particle Experiment (ASPEX)',
          'Plasma Analyser Package for Aditya (PAPA)'
        ]
      }
    },
    {
      id: '5',
      name: 'Chandrayaan-1',
      description: 'India\'s first lunar probe that discovered water molecules on the Moon\'s surface.',
      year: '2008',
      status: 'completed',
      category: 'lunar',
      achievements: [
        'First Indian lunar mission',
        'Discovered water on Moon',
        'Mapped lunar surface',
        'International collaboration'
      ],
      icon: Satellite,
      details: {
        launchDate: 'October 22, 2008',
        cost: '$83 million',
        duration: '312 days operational',
        objectives: [
          'High-resolution mapping of lunar surface',
          'Chemical and mineralogical mapping',
          'Search for water ice'
        ],
        instruments: [
          'Terrain Mapping Camera (TMC)',
          'Moon Impact Probe (MIP)',
          'Chandrayaan-1 X-ray Spectrometer (C1XS)'
        ],
        results: [
          'Confirmed presence of water molecules on Moon',
          'Created detailed 3D atlas of lunar surface',
          'Discovered new craters and geological features'
        ]
      }
    },
    {
      id: '6',
      name: 'NISAR',
      description: 'Joint Earth observation mission with NASA using advanced radar technology for climate and disaster monitoring.',
      year: '2025',
      status: 'planned',
      category: 'earth',
      achievements: [
        'International collaboration with NASA',
        'Advanced SAR technology',
        'Climate change monitoring',
        'Disaster management support'
      ],
      icon: Satellite,
      details: {
        cost: '$1.5 billion (joint)',
        objectives: [
          'Monitor Earth\'s changing ecosystems',
          'Track natural disasters',
          'Study climate change impacts'
        ],
        instruments: [
          'L-band SAR (NASA)',
          'S-band SAR (ISRO)',
          'Advanced data processing systems'
        ]
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Categories', count: missions.length },
    { id: 'lunar', label: 'Lunar', count: missions.filter(m => m.category === 'lunar').length },
    { id: 'mars', label: 'Mars', count: missions.filter(m => m.category === 'mars').length },
    { id: 'human', label: 'Human Spaceflight', count: missions.filter(m => m.category === 'human').length },
    { id: 'solar', label: 'Solar', count: missions.filter(m => m.category === 'solar').length },
    { id: 'earth', label: 'Earth Observation', count: missions.filter(m => m.category === 'earth').length }
  ];

  const statuses = [
    { id: 'all', label: 'All Status' },
    { id: 'completed', label: 'Completed' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'planned', label: 'Planned' }
  ];

  const filteredMissions = missions.filter(mission => {
    const matchesSearch = mission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mission.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || mission.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || mission.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'ongoing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'lunar': return 'from-blue-500 to-cyan-500';
      case 'mars': return 'from-red-500 to-orange-500';
      case 'earth': return 'from-green-500 to-emerald-500';
      case 'human': return 'from-purple-500 to-pink-500';
      case 'solar': return 'from-yellow-500 to-amber-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">ISRO Mission Explorer</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Discover India's remarkable space achievements with advanced filtering and detailed mission information.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search missions, descriptions, achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-indigo-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-indigo-500"
            >
              {statuses.map(status => (
                <option key={status.id} value={status.id}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>Showing {filteredMissions.length} of {missions.length} missions</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              {missions.filter(m => m.status === 'completed').length} Completed
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              {missions.filter(m => m.status === 'ongoing').length} Ongoing
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              {missions.filter(m => m.status === 'planned').length} Planned
            </span>
          </div>
        </div>
      </div>

      {/* Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {filteredMissions.map((mission) => {
          const IconComponent = mission.icon;
          return (
            <div
              key={mission.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all duration-300 group hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedMission(mission)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(mission.category)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(mission.status)}`}>
                    {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
                  </span>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {mission.year}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {mission.name}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 line-clamp-3">{mission.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-slate-200 flex items-center">
                    <Trophy className="w-4 h-4 mr-2" />
                    Key Achievements
                  </h4>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <ul className="space-y-1">
                  {mission.achievements.slice(0, 2).map((achievement, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                  {mission.achievements.length > 2 && (
                    <li className="text-sm text-slate-400 ml-4">
                      +{mission.achievements.length - 2} more achievements
                    </li>
                  )}
                </ul>
              </div>

              {mission.details.cost && (
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-slate-400">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Cost
                    </span>
                    <span className="text-slate-300 font-medium">{mission.details.cost}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mission Statistics */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Mission Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">104</div>
            <div className="text-sm text-slate-300">Total Missions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-sm text-slate-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">400+</div>
            <div className="text-sm text-slate-300">Satellites Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">36</div>
            <div className="text-sm text-slate-300">Countries Served</div>
          </div>
        </div>
      </div>

      {/* Mission Detail Modal */}
      {selectedMission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(selectedMission.category)} rounded-xl flex items-center justify-center`}>
                    <selectedMission.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedMission.name}</h2>
                    <p className="text-slate-300">{selectedMission.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMission(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Mission Details</h3>
                    <div className="space-y-3">
                      {selectedMission.details.launchDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Launch Date</span>
                          <span className="text-white">{selectedMission.details.launchDate}</span>
                        </div>
                      )}
                      {selectedMission.details.cost && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Cost</span>
                          <span className="text-white">{selectedMission.details.cost}</span>
                        </div>
                      )}
                      {selectedMission.details.duration && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Duration</span>
                          <span className="text-white">{selectedMission.details.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Objectives</h3>
                    <ul className="space-y-2">
                      {selectedMission.details.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start text-slate-300">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {selectedMission.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-slate-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedMission.details.instruments && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Instruments</h3>
                      <ul className="space-y-2">
                        {selectedMission.details.instruments.map((instrument, index) => (
                          <li key={index} className="flex items-start text-slate-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {instrument}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedMission.details.results && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                      <ul className="space-y-2">
                        {selectedMission.details.results.map((result, index) => (
                          <li key={index} className="flex items-start text-slate-300">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionGrid;