import React from 'react'

export default function History({history}) {
  return (
    <div className="sem-wrapper" id="sem-wrap">
            <h5>History</h5>
            <div id="semester-container">
              {history.map((semester, index) => (
                <div key={index} className="semester-row">
                  <div className="semester">{semester.yearSem}</div>
                  <div className="semester">{semester.branch}</div>
                  <div className="cgpa">{semester.cgpa.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
  )
}
