import React from 'react'
import SelectGrade from './SelectGrade'

export default function Table({subjects,credits,grades,handleGrade}) {
  return (
    <table id="grades_tab">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Credits</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      {subjects.map((subject, index) => (
        <tr key={`subject-${index}`}>
          <td>{subject}</td>
          <td>{credits[index]}</td>
          <td>
            <SelectGrade
              key={`grade-${index}`}
              grade={grades[index]}
              onChange={(e) => handleGrade(index, e.target.value)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
