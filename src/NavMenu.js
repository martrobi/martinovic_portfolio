import React from 'react';

function NavMenu({ onNavItemClick }) {
  return (
    <div className='navcontainer'>
      <div className='name'>
        <p><span style={{ color: '#1bfaff' }}>Robert Martinović - </span>Frontend Developer</p>
      </div>
    <div className="navmenu">
      <ul className='nav-list'>
      <li>
          <a href="#" onClick={() => onNavItemClick('App')}>Home</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavItemClick('Skills')}>Skills</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavItemClick('About')}>About</a>
        </li>
        <li>
          <a href="#" onClick={() => onNavItemClick('Contact')}>Contact</a>
        </li>
      </ul>
    </div>
    <div className='blok'>

    </div>
    </div>
  );
}

export default NavMenu;
