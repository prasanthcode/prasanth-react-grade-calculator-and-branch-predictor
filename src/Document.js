import React from 'react'
import './Document.css'
export default function Document() {
  return (
    <div className="container">
    <div className="section">
      <h2>Introduction</h2>
      <p>
        Welcome to the Grade Calc 2.0, your comprehensive tool for calculating
        and managing your academic grades effortlessly.
      </p>
      <ul>
        <li>Languages Used: HTML ,CSS ,JS.</li>
        <li>
          Deployment:
          <a href="https://firebase.google.com/" target="_blank">Firebase</a>
        </li>
        <li>
          Fonts CDN:
          <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>
        </li>
        <li>
          Icons CDN:
          <a href="https://fontawesome.com/" target="_blank">Fontawesome</a>
        </li>
      </ul>
    </div>

    <div className="section">
      <h2>Features</h2>
      <p>This GC2.0 includes the following features:</p>
      <ul>
        <li>Grade Calculation.</li>
        <li>Inbuilt Calculator.</li>
        <li>Light and Dark Theme.</li>
        <li>Examcell Results Url.</li>
        <li>Print Option.</li>
        <li>Syllabus Papers.</li>
        <li>Calculation History.</li>
      </ul>
    </div>

    <div className="section">
      <h2>Download</h2>
      <p>
        Download the Credits JSON file by clicking the button below:
        <a href="./credits.json" className="btn" download>
          <i className="fa fa-download"></i> Download JSON
        </a>
      </p>
    </div>
    
  </div>
  )
}
