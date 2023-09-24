import React, { useState, useEffect } from 'react';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import NavMenu from './NavMenu';
import '../src/style/style.css';
import '../src/style/responsive.css';
import atom from './images/atom.png';

function App() {
  const [activeComponent, setActiveComponent] = useState('App'); 
  const [isFloatingVisible, setIsFloatingVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true); 

  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    const updateVisibility = () => {
      setIsFloatingVisible(
        window.innerWidth > 993 || activeComponent === 'App'
      );
      setIsTextVisible(
        window.innerWidth <= 993 && activeComponent === 'App'
      );
    };

    window.addEventListener('resize', updateVisibility);

    updateVisibility();

    return () => {
      window.removeEventListener('resize', updateVisibility);
    };
  }, [activeComponent]);

  return (
    <div>
      <div>
        <NavMenu onNavItemClick={handleNavItemClick} />
        {activeComponent === 'Skills' && <Skills />}
        {activeComponent === 'About' && <About />}
        {activeComponent === 'Contact' && <Contact />}
      </div>
      {isFloatingVisible && (
        <div className='floating'>
          <img className='sphere' src={atom} alt='Floating' />
        </div>
      )}
      {isTextVisible && (
        <div className='text-mobile'>
          <p className='text-only'>
            <span style={{ color: '#1bfaff' }}>Welcome,</span>
            <br />
            to my portfolio
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '15px',
              }}
            >
              <span
                style={{
                  color: '#1bfaff',
                  position: 'center',
                  fontSize: '15px',
                }}
              >
                -Robert Martinovic-
              </span>
            </div>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
