import { Header, Hero, About, Skill, Project, Contact, Footer } from './components';

import { useEffect } from 'react'


const App = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;