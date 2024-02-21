import React from 'react'

export default function SelectOpt({options,onChange,id}) {
  return (
    <select  className="branchoption" onChange={onChange} id={id} aria-label={"select semester , branch"}>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </select>

  )
}
