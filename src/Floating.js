// FloatingMessage.js
import React, { useEffect, useState } from 'react';
import './style.css';

function FloatingMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Nakon 1 sekunde, prikažite tekst

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className={`floating-text-container ${isVisible ? 'float' : ''}`}>
      Welcome
    </div>
  );
}

export default FloatingMessage;
