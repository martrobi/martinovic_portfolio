import React, { useState, useEffect } from 'react';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import NavMenu from './NavMenu';
import '../src/style.css';
import laptopImage from './laptop.png';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div>
      <NavMenu onNavItemClick={handleNavItemClick} />
      {activeComponent === 'Skills' && <Skills />}
      {activeComponent === 'About' && <About />}
      {activeComponent === 'Contact' && <Contact />}
      </div>
      <div className='floating'><img className='sphere' src={laptopImage} alt='Laptop_floating' /></div>
    </div>
  );
}

export default App;
