import React from 'react';
import '../style/NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navStyle">
      <div className="navItemStyle title">Tune-Track</div>
      <div className="leftSide">
        <div className="navItemStyle"><i><a href='https://linktr.ee/fi.ta' target='blank'>contact</a> </i></div>
      </div>
    </nav>
  );
};


export default NavBar;
