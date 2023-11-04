import React from 'react';
import '../style/NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navStyle">
      <div className="navItemStyle title">Tune-Track</div>
      <div className="leftSide">
        <div className="navItemStyle"><i>About</i></div>
        <div className="navItemStyle"><i>Contact</i></div>
      </div>
    </nav>
  );
};


export default NavBar;
