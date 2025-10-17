import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const setDark = () => {
    var body = document.querySelector("body");
    body.classList.add("dark-theme");
    localStorage.setItem("grade-theme", "dark");
  };
  const setLight = () => {
    var body = document.querySelector("body");
    body.classList.remove("dark-theme");
    localStorage.setItem("grade-theme", "light");
  };
  const selectedTheme = localStorage.getItem("grade-theme");
  if (selectedTheme === "dark") {
    setDark();
  }
  const changeTheme = (e) => {
    if (e.target.checked) setDark();
    else setLight();
  };
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="header">
      <h3 className="header-title">Grade Calculator</h3>

      <div className="header-right">
        {(pathname === "/puc" || pathname === "/branch/prediction") && (
          <Link to="/btech">BTech</Link>
        )}

        {(pathname === "/btech" || pathname === "/") && (
          <Link to="/puc">PUC</Link>
        )}
        <div className="checkbox theme">
          <input
            type="checkbox"
            id="toggle-btn"
            defaultChecked={selectedTheme === "dark"}
            onChange={changeTheme}
          />
          <label htmlFor="toggle-btn"></label>
        </div>
      </div>
    </div>
  );
}
