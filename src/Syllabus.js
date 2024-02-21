import React from "react";

export default function Syllabus() {
  return (
    <div className="syllabus-container">
      <div className="syllabus-year">
        <h3>CSE Syllabus</h3>
        <a href="./syllabus/syllabus.pdf" download>
          Download PDF
        </a>
      </div>
      <div className="syllabus-year">
        <h3>ECE Syllabus</h3>
        <a href="./syllabus/ECE syllabus.pdf" download>
          Download PDF
        </a>
      </div>
      <div className="syllabus-year">
        <h3>EEE Syllabus</h3>
        <a href="./syllabus/Attachment-1 updated.pdf" download>
          Download PDF
        </a>
      </div>
      <div className="syllabus-year">
        <h3>CIVIL Syllabus</h3>
        <a href="./syllabus/5_6323485392192406367.pdf" download>
          Download PDF
        </a>
      </div>
      <div className="syllabus-year">
        <h3>MECH Syllabus</h3>
        <a
          href="./syllabus/Annexure VI- MECHANICAL B.Tech program Course structure and syllabi (2).pdf"
          download
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
