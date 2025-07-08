import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatInterface from './components/ChatInterface';
import MissionGrid from './components/MissionGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero onStartChat={() => scrollToSection('chat')} />
        </section>
        
        <section id="chat" className="py-20">
          <ChatInterface />
        </section>
        
        <section id="missions" className="py-20">
          <MissionGrid />
        </section>
        
        <section id="about" className="py-20">
          <AboutSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;