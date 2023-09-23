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
      <div className='floating'><img className='sphere' src={laptopImage} alt='Floating' /></div>
      <div className='floating2'><img className='sphere2' src={laptopImage} alt='Floating' /></div>
      <div  className='text-mobile'>
        <p ><span style={{ color: '#1bfaff' }}>Welcome,</span><br/>
        to my portfolio<br/>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '15px'}}><span style={{ color: '#1bfaff', position: 'center', fontSize: '15px' }}>-Robert Martinovic-</span></div>
        </p>
        
      </div>
    </div>
  );
}

export default App;
