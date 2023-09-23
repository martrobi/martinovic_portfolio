import React from 'react';
import slika1 from './HTML5.png';
import slika2 from './CSS3.png';
import slika3 from './JavaScript.png';
import slika4 from './React.png';
import '../src/style.css';
function Skills() {
    
  return (
    <div className="skills">
      <div className="container">
      <div className="image-grid">
        <div className="image-card">
          <img  src={slika1} alt="Slika 1" />
          <p>HTML5</p>
        </div>
        <div className="image-card" >
        <img src={slika2} alt="Slika 2"  />
          <p>CSS3</p>
        </div>
        <div className="image-card">
          <img src={slika3} alt="Slika 3" />
          <p >JavaScript</p>
        </div>
        <div className="image-card">
          <img  src={slika4} alt="Slika 4" />
          <p >React</p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Skills;