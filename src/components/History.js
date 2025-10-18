import React from "react";

export default function History({ history, showHistory }) {
  return (
    <div
      id="sem-wrap"
      className={`sem-wrapper ${showHistory ? "show-wrap" : ""}`}
    >
      <h5>History</h5>
      <div id="semester-container">
        {history.map((semester, index) => (
          <div key={index} className="semester-row">
            <div className="semester">{semester.yearSem}</div>
            <div className="semester">{semester.branch}</div>
            <div className="cgpa">{semester.cgpa}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
