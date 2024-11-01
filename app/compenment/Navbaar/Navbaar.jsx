"use client";
import "./Navbaar.css";
import React, { useState } from "react";

function Navbar() {
  const brend = "./brend.png";
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  function showSidebar() {
    setSidebarVisible(true);
  }

  function hideSidebar() {
    setSidebarVisible(false);
  }

  return (
    <nav>
    <img src={brend} alt="brend" width={170} className="image-brend " />
      <ul className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </a>
        </li>
        <li ><a href="#">VIDEO</a></li>
        <li><a href="#">FIXTURE & RESULTS</a></li>
        <li><a href="#">TEAMS</a></li>
        <li><a href="#">TICKETS</a></li>
        <li><a href="#">FANS</a></li>
        <li><a href="#">SHOP</a></li>
      </ul>

      <ul>
        <li className="hideOnMobile"><a href="#">LATEST</a></li>
        <li className="hideOnMobile"><a href="#">VIDEO</a></li>
        <li className="hideOnMobile"><a href="#">FIXTURE & RESULTS</a></li>
        <li className="hideOnMobile"><a href="#">TEAMS</a></li>
        <li className="hideOnMobile"><a href="#">TICKETS</a></li>
        <li className="hideOnMobile"><a href="#">FANS</a></li>
        <li className="hideOnMobile"><a href="#">SHOP</a></li>
        <li >
          <a href="">
          <svg className="custom-svg1" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </a>
        </li>
        <li onClick={showSidebar} >
          <a href="#">
            <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
