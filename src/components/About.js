import React from "react";
import "../Document.css";
import { Link } from "react-router-dom";
import { MathJaxContext, MathJax } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: { packages: ["base", "ams"] },
};

export default function About() {
  return (
    <div className="container">
      <div className="section">
        <h3>SGPA Calculation Formula</h3>
        <p>
          <MathJaxContext version={3} config={config}>
            <MathJax style={{ fontSize: "12px" }}>
              {
                "\\[ \\text{SGPA} = \\frac{\\sum (\\text{Credit} \\times \\text{Grade Point})}{\\sum \\text{Credits}} \\]"
              }
            </MathJax>
          </MathJaxContext>
        </p>
        <p>
          For each subject, multiply the number of credits by the grade point
          earned. Sum all those values, then divide by the total number of
          credits for that semester. This gives you the SGPA (Semester Grade
          Points Average).
        </p>
        <h3>CGPA Calculation Formula</h3>
        <MathJaxContext version={3} config={config}>
          <MathJax style={{ fontSize: "12px" }}>
            {
              "\\[ \\text{CGPA} = \\frac{\\sum (\\text{SGPA} \\times \\text{Semester Credits})}{\\sum \\text{Semester Credits}} \\]"
            }
          </MathJax>
        </MathJaxContext>
        <p>
          Multiply each semester’s SGPA by the number of credits in that
          semester. Add those up and divide by the total credits across all
          semesters.This gives you the CGPA (Cumulative Grade Points Average).
        </p>
        <div className="section">
          <h2>About</h2>
          <p>
            This is a grade calculator specifically designed for RGUKT students.
            It helps you easily calculate your SGPA and CGPA based on your
            academic performance.
          </p>
          <ul>
            <li>
              <strong>Technology Stack:</strong> Built using React.js
            </li>
            <li>
              <strong>Deployment Platform:</strong>
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase
              </a>
            </li>
            <li>
              <strong>Fonts:</strong>
              <a
                href="https://fonts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Fonts
              </a>
            </li>
            <li>
              <strong>Icons:</strong>
              <a
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Font Awesome
              </a>
            </li>
          </ul>
        </div>

        <p>
          Download the Credits JSON file by clicking the button below:
          <Link
            to="/syllabus/credits.json"
            target="_blank"
            className="btn"
            download
            style={{ marginTop: "15px" }}
          >
            <i className="fa fa-download" target="_blank"></i> Download JSON
          </Link>
        </p>
      </div>
    </div>
  );
}
