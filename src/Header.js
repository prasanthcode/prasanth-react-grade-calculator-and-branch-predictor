import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const setDark = () => {
    var body = document.querySelector('body');
    body.classList.add('dark-theme');
    localStorage.setItem('grade-theme','dark');
  }
  const setLight = () => {
    var body = document.querySelector('body');
    body.classList.remove('dark-theme');
    localStorage.setItem('grade-theme','light');

  }
  const selectedTheme = localStorage.getItem('grade-theme');
  if(selectedTheme==="dark"){
    setDark();
  }
  const changeTheme = (e) => {
    if(e.target.checked) setDark();
    else setLight();
  }
  return (
    <div className="header">
      <h3 className="header-title">Grade Calc 2.0</h3>

      <div className="header-right">
        {/* <button id="download" className="download-btn">
          <i className="fa fa-print"></i>
        </button> */}

        {/* <a
          href="https://examcell.rguktsklm.ac.in/"
          id="examcell"
          target="_blank"
        >
          Examcell
        </a> */}
        <Link to="/puc-grade-calculator">PUC</Link>
        <Link to="/btech-grade-calculator">B-Tech</Link>
        <div className="checkbox theme">
          <input type="checkbox" id="toggle-btn" defaultChecked={selectedTheme==="dark"} onChange={changeTheme}  />
          <label htmlFor="toggle-btn"></label>
        </div>
      </div>
    </div>
  );
}
