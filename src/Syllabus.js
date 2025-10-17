import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Syllabus() {
  const [selected, setSelected] = useState(0);

  const buttons = ["CSE", "ECE", "EEE", "CIVIL", "MECH"];
  const syllabus = [
    "syllabus.pdf",
    "ECE syllabus.pdf",
    "Attachment-1 updated.pdf",
    "5_6323485392192406367.pdf",
    "Annexure VI- MECHANICAL B.Tech program Course structure and syllabi (2).pdf",
  ];

  return (
    <div className="syllabus-container">
      <div style={{ display: "flex" }}>
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className="syllabus-btn-group"
            style={{
              padding: "10px 20px",
              backgroundColor:
                selected === index
                  ? " var(--second-dark)"
                  : "var(--prime-light)",
              color:
                selected === index
                  ? " var(--prime-dark)"
                  : "var(--second-light)",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="syllabus-year">
        <h3>{`${buttons[selected]} Syllabus`}</h3>

        <iframe
          src={`https://docs.google.com/gview?url=https://prasanth-rgukt-grade.web.app/syllabus/syllabus/${syllabus[selected]}&embedded=true`}
          width="100%"
          height="500px"
          title="PDF Viewer"
        ></iframe>

        <Link
          target="_blank"
          to={`/syllabus/syllabus/${syllabus[selected]}`}
          download="syllabus.pdf"
        >
          Download PDF
        </Link>
      </div>
    </div>
  );
}
