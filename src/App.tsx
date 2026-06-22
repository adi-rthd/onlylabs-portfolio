import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OnlyLabs from './components/OnlyLabs';
import Skills from './components/Skills';
import CodingProfile from './components/CodingProfile';
import ProductionEngineering from './components/ProductionEngineering';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Inline hook to handle scrolling to section IDs on pathname routing updates
function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pathToIdMap: { [key: string]: string } = {
      '/about': 'about',
      '/experience': 'experience',
      '/projects': 'projects',
      '/onlylabs': 'onlylabs',
      '/skills': 'skills',
      '/system-design': 'system-design',
      '/contact': 'contact'
    };

    const targetId = pathToIdMap[pathname];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Default scroll to top if path is "/"
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f4f4f5] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden">
      <ScrollToSection />
      
      {/* Premium Background Mesh Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-16 space-y-24 md:space-y-36 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OnlyLabs />
        <Skills />
        <CodingProfile />
        <ProductionEngineering />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
