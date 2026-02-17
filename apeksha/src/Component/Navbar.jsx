import React, { useEffect, useState } from 'react';
import { FaRegSun } from 'react-icons/fa';
import { MdClose, MdOutlineNightlight } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import "../Css/Navbar.css";
import { IoSunny } from 'react-icons/io5';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className='navbar'>
      <div className='left-nav'>
        <h1>AP<span className="highlight">EK</span>SHA</h1>
      </div>
      <div className='right-nav'>
        <a href="#Home"><p>HOME</p></a>
        <a href="#About"><p>ABOUT</p></a>
        <a href="#Skill"><p>SKILLS</p></a>
        <a href="#Project"><p>PROJECTS</p></a>
        <a href="#Git"><p>STATISTICS</p></a>
        <a href="#Contact"><p>CONTACT</p></a>
        <a href="/Resume (3).pdf" download target="_blank" rel="noopener noreferrer">
          <p>RESUME</p>
        </a>
        <div className='btn'>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IoSunny size={25} /> : <MdOutlineNightlight size={25} />}
          </button>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleDrawer}>
        <IoMdMenu size={30} />
      </div>

      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleDrawer}>
          <MdClose size={25} />
        </button>
        <a href="#Home" onClick={toggleDrawer}>HOME</a>
        <a href="#About" onClick={toggleDrawer}>ABOUT</a>
        <a href="#Skill" onClick={toggleDrawer}>SKILLS</a>
        <a href="#Project" onClick={toggleDrawer}>PROJECTS</a>
        <a href="#Git" onClick={toggleDrawer}>STATISTICS</a>
        <a href="#Contact" onClick={toggleDrawer}>CONTACT</a>
        <div className='btn' onClick={toggleDrawer}>
          <button  onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaRegSun size={25} /> : <MdOutlineNightlight size={25} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
