import React from "react";

export default function SelectGrade({grade,onChange}) {
  return (
   
    <select className="branchoption grades"  onChange={onChange} value={grade} aria-label="select grade">
      <option value="">Select</option>
      <option value="10">Ex</option>
      <option value="9">A</option>
      <option value="8">B</option>
      <option value="7">C</option>
      <option value="6">D</option>
      <option value="5">E</option>
      <option value="0">AB</option>
    </select>
  );
}
