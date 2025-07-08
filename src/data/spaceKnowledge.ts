export interface SpaceData {
  missions: Mission[];
  rockets: Rocket[];
  satellites: Satellite[];
  achievements: Achievement[];
  personnel: Personnel[];
  facilities: Facility[];
}

export interface Mission {
  id: string;
  name: string;
  description: string;
  year: string;
  status: 'completed' | 'ongoing' | 'planned';
  category: 'lunar' | 'mars' | 'earth' | 'human' | 'solar' | 'interplanetary';
  achievements: string[];
  details: {
    launchDate?: string;
    cost?: string;
    duration?: string;
    objectives: string[];
    instruments?: string[];
    results?: string[];
  };
}

export interface Rocket {
  id: string;
  name: string;
  type: string;
  payload: string;
  height: string;
  firstFlight: string;
  launches: number;
  successRate: string;
  description: string;
}

export interface Satellite {
  id: string;
  name: string;
  type: string;
  launchDate: string;
  purpose: string;
  status: string;
  orbit: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  significance: string;
}

export interface Personnel {
  id: string;
  name: string;
  role: string;
  period: string;
  achievements: string[];
  description: string;
}

export interface Facility {
  id: string;
  name: string;
  location: string;
  type: string;
  established: string;
  description: string;
}

export const spaceKnowledge: SpaceData = {
  missions: [
    {
      id: 'chandrayaan3',
      name: 'Chandrayaan-3',
      description: 'India\'s third lunar exploration mission that successfully demonstrated soft landing and rover operations on the Moon\'s south pole region.',
      year: '2023',
      status: 'completed',
      category: 'lunar',
      achievements: [
        'First successful soft landing on lunar south pole',
        'Rover operations for 14+ days',
        'Scientific data collection from lunar surface',
        'Cost-effective lunar mission at $75 million'
      ],
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
      id: 'mom',
      name: 'Mars Orbiter Mission (Mangalyaan)',
      description: 'India\'s first interplanetary mission that successfully entered Mars orbit, making India the first country to succeed in the first attempt.',
      year: '2014',
      status: 'completed',
      category: 'mars',
      achievements: [
        'First Mars mission success in first attempt',
        'Most cost-effective Mars mission at $74 million',
        'Operational for 7+ years (planned for 6 months)',
        'Fourth space agency to reach Mars'
      ],
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
        ]
      }
    },
    {
      id: 'gaganyaan',
      name: 'Gaganyaan',
      description: 'India\'s first crewed spaceflight program designed to carry Indian astronauts to low Earth orbit.',
      year: '2024-25',
      status: 'ongoing',
      category: 'human',
      achievements: [
        'First human spaceflight program',
        'Indigenous crew module development',
        'Astronaut training program with Russia',
        'Advanced life support systems'
      ],
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
      id: 'aditya-l1',
      name: 'Aditya-L1',
      description: 'India\'s first dedicated solar mission to study the Sun\'s corona and solar wind from the L1 Lagrange point.',
      year: '2023',
      status: 'ongoing',
      category: 'solar',
      achievements: [
        'First solar observation mission',
        'L1 orbit insertion successful',
        'Multi-instrument payload for solar studies',
        'Continuous solar observation capability'
      ],
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
    }
  ],
  rockets: [
    {
      id: 'pslv',
      name: 'PSLV (Polar Satellite Launch Vehicle)',
      type: 'Four-stage rocket',
      payload: '3,800 kg to LEO',
      height: '44 meters',
      firstFlight: 'September 20, 1993',
      launches: 58,
      successRate: '94.8%',
      description: 'India\'s workhorse rocket known for its reliability and versatility in launching satellites to various orbits.'
    },
    {
      id: 'gslv-mk3',
      name: 'GSLV Mk III (LVM3)',
      type: 'Three-stage heavy-lift rocket',
      payload: '10,000 kg to LEO, 4,000 kg to GTO',
      height: '43.5 meters',
      firstFlight: 'June 5, 2017',
      launches: 6,
      successRate: '100%',
      description: 'India\'s most powerful operational rocket, designed for heavy payloads and human spaceflight missions.'
    },
    {
      id: 'sslv',
      name: 'SSLV (Small Satellite Launch Vehicle)',
      type: 'Three-stage small-lift rocket',
      payload: '500 kg to LEO',
      height: '34 meters',
      firstFlight: 'August 7, 2022',
      launches: 3,
      successRate: '66.7%',
      description: 'Cost-effective rocket designed for small satellite launches with quick turnaround time.'
    }
  ],
  satellites: [
    {
      id: 'insat-3dr',
      name: 'INSAT-3DR',
      type: 'Meteorological Satellite',
      launchDate: 'September 8, 2016',
      purpose: 'Weather monitoring and disaster management',
      status: 'Operational',
      orbit: 'Geostationary'
    },
    {
      id: 'cartosat-3',
      name: 'Cartosat-3',
      type: 'Earth Observation Satellite',
      launchDate: 'November 27, 2019',
      purpose: 'High-resolution earth imaging',
      status: 'Operational',
      orbit: 'Sun-synchronous'
    }
  ],
  achievements: [
    {
      id: 'record-launch',
      title: '104 Satellites in Single Launch',
      date: 'February 15, 2017',
      description: 'ISRO set a world record by launching 104 satellites in a single mission using PSLV-C37.',
      significance: 'Demonstrated India\'s capability in multi-satellite deployment and cost-effective launch services.'
    },
    {
      id: 'mars-first-attempt',
      title: 'Mars Success in First Attempt',
      date: 'September 24, 2014',
      description: 'India became the first country to successfully reach Mars orbit in its maiden attempt.',
      significance: 'Established India as a major space power and demonstrated cost-effective interplanetary missions.'
    }
  ],
  personnel: [
    {
      id: 'vikram-sarabhai',
      name: 'Dr. Vikram Sarabhai',
      role: 'Father of Indian Space Program',
      period: '1962-1971',
      achievements: [
        'Founded ISRO in 1969',
        'Established space research in India',
        'Initiated satellite communication program'
      ],
      description: 'Visionary scientist who laid the foundation of India\'s space program and established ISRO.'
    },
    {
      id: 'apj-kalam',
      name: 'Dr. A.P.J. Abdul Kalam',
      role: 'Missile Man of India',
      period: '1960s-1990s',
      achievements: [
        'Developed SLV-3 rocket',
        'Led Agni and Prithvi missile programs',
        'Contributed to satellite launch vehicle development'
      ],
      description: 'Renowned scientist who played crucial role in developing India\'s missile and space technology.'
    },
    {
      id: 's-somanath',
      name: 'Dr. S. Somanath',
      role: 'Current ISRO Chairman',
      period: '2022-Present',
      achievements: [
        'Leading Gaganyaan mission',
        'Overseeing Chandrayaan-3 success',
        'Advancing human spaceflight program'
      ],
      description: 'Current chairman of ISRO, leading India\'s ambitious space missions including human spaceflight.'
    }
  ],
  facilities: [
    {
      id: 'shar',
      name: 'Satish Dhawan Space Centre (SHAR)',
      location: 'Sriharikota, Andhra Pradesh',
      type: 'Launch Complex',
      established: '1971',
      description: 'India\'s primary spaceport for satellite and interplanetary mission launches.'
    },
    {
      id: 'isac',
      name: 'ISRO Satellite Centre (ISAC)',
      location: 'Bengaluru, Karnataka',
      type: 'Satellite Development',
      established: '1972',
      description: 'Primary center for design, development, and testing of satellites.'
    }
  ]
};

// Enhanced search and query processing
export class SpaceKnowledgeEngine {
  private data: SpaceData;

  constructor() {
    this.data = spaceKnowledge;
  }

  searchMissions(query: string): Mission[] {
    const searchTerm = query.toLowerCase();
    return this.data.missions.filter(mission =>
      mission.name.toLowerCase().includes(searchTerm) ||
      mission.description.toLowerCase().includes(searchTerm) ||
      mission.category.includes(searchTerm) ||
      mission.achievements.some(achievement => 
        achievement.toLowerCase().includes(searchTerm)
      )
    );
  }

  searchRockets(query: string): Rocket[] {
    const searchTerm = query.toLowerCase();
    return this.data.rockets.filter(rocket =>
      rocket.name.toLowerCase().includes(searchTerm) ||
      rocket.description.toLowerCase().includes(searchTerm) ||
      rocket.type.toLowerCase().includes(searchTerm)
    );
  }

  searchPersonnel(query: string): Personnel[] {
    const searchTerm = query.toLowerCase();
    return this.data.personnel.filter(person =>
      person.name.toLowerCase().includes(searchTerm) ||
      person.role.toLowerCase().includes(searchTerm) ||
      person.description.toLowerCase().includes(searchTerm)
    );
  }

  searchAll(query: string): any {
    return {
      missions: this.searchMissions(query),
      rockets: this.searchRockets(query),
      personnel: this.searchPersonnel(query),
      satellites: this.data.satellites.filter(sat =>
        sat.name.toLowerCase().includes(query.toLowerCase()) ||
        sat.purpose.toLowerCase().includes(query.toLowerCase())
      ),
      achievements: this.data.achievements.filter(ach =>
        ach.title.toLowerCase().includes(query.toLowerCase()) ||
        ach.description.toLowerCase().includes(query.toLowerCase())
      )
    };
  }

  getMissionByName(name: string): Mission | undefined {
    return this.data.missions.find(mission =>
      mission.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  getRocketByName(name: string): Rocket | undefined {
    return this.data.rockets.find(rocket =>
      rocket.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}