import { SpaceKnowledgeEngine } from '../data/spaceKnowledge';

export class AIResponseEngine {
  private knowledgeEngine: SpaceKnowledgeEngine;

  constructor() {
    this.knowledgeEngine = new SpaceKnowledgeEngine();
  }

  async generateResponse(userMessage: string): Promise<string> {
    const message = userMessage.toLowerCase();
    
    // First, try to find answers in knowledge base
    const kbResponse = this.searchKnowledgeBase(message);
    if (kbResponse) {
      return kbResponse;
    }

    // If not found in KB, simulate web search and AI reasoning
    return this.simulateWebSearchResponse(userMessage);
  }

  private searchKnowledgeBase(message: string): string | null {
    // Mission-specific queries
    if (message.includes('chandrayaan')) {
      const mission = this.knowledgeEngine.getMissionByName('chandrayaan-3');
      if (mission) {
        return `✅ **${mission.name}** is ${mission.description}

**Key Achievements:**
${mission.achievements.map(a => `• ${a}`).join('\n')}

**Mission Details:**
• Launch Date: ${mission.details.launchDate}
• Cost: ${mission.details.cost}
• Duration: ${mission.details.duration}

**Objectives:**
${mission.details.objectives?.map(o => `• ${o}`).join('\n')}

🌐 Source: [ISRO Official Website](https://www.isro.gov.in)`;
      }
    }

    if (message.includes('mars') || message.includes('mom') || message.includes('mangalyaan')) {
      const mission = this.knowledgeEngine.getMissionByName('mars orbiter');
      if (mission) {
        return `✅ **Mars Orbiter Mission (Mangalyaan)** was ${mission.description}

**Historic Achievements:**
${mission.achievements.map(a => `• ${a}`).join('\n')}

**Mission Highlights:**
• Launch Date: ${mission.details.launchDate}
• Cost: ${mission.details.cost} (cheaper than Hollywood movie "Gravity")
• Journey Duration: ${mission.details.duration}

**Scientific Instruments:**
${mission.details.instruments?.map(i => `• ${i}`).join('\n')}

🌐 Source: [ISRO Mars Mission](https://www.isro.gov.in/mars-orbiter-mission)`;
      }
    }

    if (message.includes('gaganyaan')) {
      const mission = this.knowledgeEngine.getMissionByName('gaganyaan');
      if (mission) {
        return `✅ **Gaganyaan** is ${mission.description}

**Program Highlights:**
${mission.achievements.map(a => `• ${a}`).join('\n')}

**Mission Objectives:**
${mission.details.objectives?.map(o => `• ${o}`).join('\n')}

**Key Components:**
${mission.details.instruments?.map(i => `• ${i}`).join('\n')}

**Status:** Currently in development with uncrewed test flights planned before crewed missions.

🌐 Source: [ISRO Gaganyaan Program](https://www.isro.gov.in/gaganyaan-programme)`;
      }
    }

    if (message.includes('aditya')) {
      const mission = this.knowledgeEngine.getMissionByName('aditya-l1');
      if (mission) {
        return `✅ **Aditya-L1** is ${mission.description}

**Mission Achievements:**
${mission.achievements.map(a => `• ${a}`).join('\n')}

**Scientific Objectives:**
${mission.details.objectives?.map(o => `• ${o}`).join('\n')}

**Instruments:**
${mission.details.instruments?.map(i => `• ${i}`).join('\n')}

**Launch:** ${mission.details.launchDate}
**Cost:** ${mission.details.cost}

🌐 Source: [ISRO Aditya-L1 Mission](https://www.isro.gov.in)`;
      }
    }

    // Rocket queries
    if (message.includes('pslv')) {
      const rocket = this.knowledgeEngine.getRocketByName('pslv');
      if (rocket) {
        return `✅ **PSLV (Polar Satellite Launch Vehicle)** is ${rocket.description}

**Specifications:**
• Type: ${rocket.type}
• Height: ${rocket.height}
• Payload Capacity: ${rocket.payload}
• First Flight: ${rocket.firstFlight}
• Total Launches: ${rocket.launches}
• Success Rate: ${rocket.successRate}

**Notable Achievements:**
• Launched Mars Orbiter Mission
• Set world record with 104 satellites in single launch
• Most reliable Indian rocket

🌐 Source: [ISRO PSLV Information](https://www.isro.gov.in/launchers/pslv)`;
      }
    }

    if (message.includes('gslv')) {
      const rocket = this.knowledgeEngine.getRocketByName('gslv');
      if (rocket) {
        return `✅ **GSLV Mk III (LVM3)** is ${rocket.description}

**Specifications:**
• Type: ${rocket.type}
• Height: ${rocket.height}
• Payload Capacity: ${rocket.payload}
• First Flight: ${rocket.firstFlight}
• Total Launches: ${rocket.launches}
• Success Rate: ${rocket.successRate}

**Key Features:**
• India's most powerful rocket
• Designed for Gaganyaan missions
• Indigenous cryogenic engine
• Heavy payload capability

🌐 Source: [ISRO GSLV Mk III](https://www.isro.gov.in/launchers/gslv-mk3)`;
      }
    }

    // Personnel queries
    if (message.includes('vikram sarabhai')) {
      const person = this.knowledgeEngine.searchPersonnel('vikram sarabhai')[0];
      if (person) {
        return `✅ **Dr. Vikram Sarabhai** was the ${person.role} who served during ${person.period}.

${person.description}

**Key Contributions:**
${person.achievements.map(a => `• ${a}`).join('\n')}

**Legacy:** His vision laid the foundation for India's space program, making ISRO one of the world's leading space agencies.

🌐 Source: [Wikipedia - Vikram Sarabhai](https://en.wikipedia.org/wiki/Vikram_Sarabhai)`;
      }
    }

    if (message.includes('kalam') || message.includes('abdul kalam')) {
      const person = this.knowledgeEngine.searchPersonnel('kalam')[0];
      if (person) {
        return `✅ **Dr. A.P.J. Abdul Kalam** was known as the ${person.role} and served during ${person.period}.

${person.description}

**Major Contributions:**
${person.achievements.map(a => `• ${a}`).join('\n')}

**Impact:** His work was crucial in developing India's missile technology and satellite launch capabilities.

🌐 Source: [Wikipedia - A.P.J. Abdul Kalam](https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam)`;
      }
    }

    // General ISRO queries
    if (message.includes('isro') && !message.includes('chairman')) {
      return `✅ **ISRO (Indian Space Research Organisation)** is India's national space agency, established in 1969 and headquartered in Bengaluru.

**Major Achievements:**
• Mars Orbiter Mission - First country to succeed in first attempt
• Chandrayaan missions - Lunar exploration program
• 104 satellites in single launch - World record
• Cost-effective space missions
• Gaganyaan - Human spaceflight program

**Key Statistics:**
• Founded: August 15, 1969
• Headquarters: Bengaluru, Karnataka
• Current Chairman: Dr. S. Somanath
• Total Missions: 100+ successful missions
• Success Rate: 95%+

**Launch Vehicles:** PSLV, GSLV Mk III, SSLV
**Major Centers:** SHAR (Sriharikota), ISAC (Bengaluru), VSSC (Thiruvananthapuram)

🌐 Source: [ISRO Official Website](https://www.isro.gov.in)`;
    }

    if (message.includes('chairman') || message.includes('head') || message.includes('director')) {
      const person = this.knowledgeEngine.searchPersonnel('somanath')[0];
      if (person) {
        return `✅ **Dr. S. Somanath** is the current Chairman of ISRO, serving since ${person.period}.

${person.description}

**Current Leadership:**
${person.achievements.map(a => `• ${a}`).join('\n')}

**Under his leadership:** ISRO has achieved major milestones including Chandrayaan-3's successful lunar landing and advancing the Gaganyaan human spaceflight program.

🌐 Source: [ISRO Leadership](https://www.isro.gov.in/about-isro/organisation)`;
      }
    }

    return null;
  }

  private simulateWebSearchResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();

    // Simulate web search for various topics
    if (message.includes('temperature') && message.includes('mars')) {
      return `🔎 Searching current Mars temperature data from NASA and recent missions...

✅ **Mars Temperature Information:**
• Average temperature: -60°C (-80°F)
• Summer temperatures: Up to 20°C (70°F) at equator
• Winter temperatures: Down to -125°C (-195°F) at poles
• Daily variation: Can change by 100°C between day and night

**Recent Data Sources:**
• NASA Perseverance Rover environmental monitoring
• Mars Reconnaissance Orbiter atmospheric data
• InSight lander weather station (until 2022)

🌐 Source: [NASA Mars Climate Overview](https://mars.nasa.gov/all-about-mars/facts/)`;
    }

    if (message.includes('latest') || message.includes('recent') || message.includes('news')) {
      return `🔎 Searching for latest ISRO developments and space news...

✅ **Recent ISRO Updates (2024-2025):**
• **Gaganyaan Progress:** Crew module tests and astronaut training ongoing
• **Aditya-L1:** Successfully reached L1 point, conducting solar observations
• **Chandrayaan-4:** Sample return mission in planning phase
• **NISAR Mission:** Joint Earth observation satellite with NASA in development
• **Shukrayaan-1:** Venus mission planned for 2028

**Upcoming Launches:**
• PSLV missions for Earth observation satellites
• GSLV Mk III missions for communication satellites
• Gaganyaan uncrewed test flights

🌐 Sources: [ISRO Official Updates](https://www.isro.gov.in) | [Space News](https://spacenews.com)`;
    }

    if (message.includes('cost') || message.includes('budget')) {
      return `🔎 Searching ISRO budget and mission cost information...

✅ **ISRO Budget & Mission Costs:**
• **Annual Budget (2024-25):** ₹13,042 crores ($1.6 billion)
• **Chandrayaan-3:** $75 million (₹615 crores)
• **Mars Orbiter Mission:** $74 million (₹450 crores)
• **Gaganyaan Program:** $1.4 billion (₹10,000 crores)

**Cost Comparison:**
• ISRO's Mars mission cost less than Hollywood movie "Gravity" ($100M)
• Chandrayaan-3 cost 8x less than NASA's ARTEMIS program per mission
• Most cost-effective space agency globally

🌐 Source: [Government Budget Documents](https://www.indiabudget.gov.in) | [ISRO Financial Reports](https://www.isro.gov.in)`;
    }

    if (message.includes('future') || message.includes('upcoming') || message.includes('planned')) {
      return `🔎 Searching ISRO's future mission roadmap and plans...

✅ **ISRO Future Missions (2025-2030):**

**Human Spaceflight:**
• Gaganyaan crewed missions (2025-2026)
• Space station development (2030s)

**Lunar Program:**
• Chandrayaan-4: Sample return mission
• Lunar Polar Exploration Mission (LUPEX) with JAXA

**Planetary Exploration:**
• Shukrayaan-1: Venus orbiter mission (2028)
• Mars sample return mission (2030s)

**Earth Observation:**
• NISAR mission with NASA (2025)
• Advanced weather satellites
• Climate monitoring constellation

**Technology Demonstrations:**
• Reusable Launch Vehicle (RLV) tests
• Air-breathing propulsion systems
• Space debris mitigation technologies

🌐 Source: [ISRO Vision 2047](https://www.isro.gov.in) | [Space Policy Institute](https://www.orfonline.org)`;
    }

    // Default response for unknown queries
    return `🔎 Searching for information about "${userMessage}"...

I couldn't find specific information about that in my knowledge base, but here's what I can help you with:

**Available Topics:**
• **Missions:** Chandrayaan-3, Mars Orbiter Mission, Gaganyaan, Aditya-L1
• **Rockets:** PSLV, GSLV Mk III, SSLV specifications and capabilities
• **Personnel:** Vikram Sarabhai, A.P.J. Abdul Kalam, current ISRO leadership
• **Achievements:** Record launches, cost-effective missions, technological milestones
• **Future Plans:** Upcoming missions and space exploration roadmap

**Try asking about:**
• "Tell me about Chandrayaan-3"
• "What is Gaganyaan mission?"
• "ISRO Mars mission details"
• "Who founded ISRO?"
• "Latest ISRO news"

🌐 For more specific information: [Search on Google](https://www.google.com/search?q=${encodeURIComponent(userMessage)}+ISRO)`;
  }
}