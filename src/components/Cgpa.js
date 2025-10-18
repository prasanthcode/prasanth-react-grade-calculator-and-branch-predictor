import React, { useState } from "react";
import credits from "../data/btech_credits.json";

export default function Cgpa() {
  const sems = ["E1S1", "E1S2", "E2S1", "E2S2", "E3S1", "E3S2", "E4S1", "E4S2"];
  const [branch, setBranch] = useState("0");
  const [sgpa, setSgpa] = useState(Array(sems.length).fill("")); // one for each sem
  const [cgpa, setCgpa] = useState("0.0");
  const handleSgpaChange = (index, value) => {
    const updated = [...sgpa];
    updated[index] = value;
    setSgpa(updated);
  };

  const calcArrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };

  const handleBranch = (e) => {
    console.log(e.target.value);
    setBranch(e.target.value);
  };
  const [weightedSgpas, setWeightedSgpas] = useState(
    Array(sems.length).fill(0)
  );
  const handleCgpaChange = () => {
    if (sgpa.some((value) => value !== "")) {
      let csum = 0;
      let credsum = 0;
      let weightedArr = [];

      for (let i = 0; i < sems.length; i++) {
        if (sgpa[i] !== "") {
          const creditSum = calcArrSum(credits[i][parseInt(branch)]);
          const weightedValue = creditSum * parseFloat(sgpa[i]);
          csum += weightedValue;
          credsum += creditSum;
          weightedArr[i] = csum / credsum;
        } else {
          weightedArr[i] = 0;
        }
      }

      setWeightedSgpas(weightedArr);

      const overallCgpa = csum / credsum;
      setCgpa(overallCgpa.toFixed(2));

      if (window.innerWidth <= 768) {
        window.scrollTo({
          top: document.getElementById("totalcgpa").offsetTop - 30,
          behavior: "smooth",
        });
      }
    } else {
      setCgpa("0.0");
      setWeightedSgpas(Array(sems.length).fill(0)); // reset weighted array if needed
    }
  };

  return (
    <div
      style={{ textAlign: "right", padding: "0 40px" }}
      className="cgpa_container"
    >
      <span className="new">New </span>
      <h1 className="cgp" id="totalcgpa">
        {cgpa}
      </h1>
      <h3 style={{ width: "100%", textAlign: "center" }}>CGPA Calculator</h3>
      <span style={{ paddingRight: "10px" }}>Please select your branch</span>
      <select
        name="branch"
        value={branch}
        onChange={(e) => handleBranch(e)}
        className="branchoption"
      >
        <option value="0">CSE</option>
        <option value="1">ECE</option>
        <option value="2">EEE</option>
        <option value="3">CIVIL</option>
        <option value="4">MECH</option>
      </select>
      <p style={{ width: "100%", textAlign: "center" }}>
        Enter SGPA only for the semesters you want to calculate CGPA for
      </p>
      <table className="sgpa_table">
        <thead>
          <tr>
            <th>Sem</th>
            <th>Credits</th>
            <th>SGPA</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {sems.map((sem, index) => (
            <tr
              key={index}
              className={sgpa[index] !== "" ? "include_sgpa" : ""}
            >
              <td>{sem}</td>
              <td>{calcArrSum(credits[index][parseInt(branch)])}</td>

              <td>
                <input
                  type="number"
                  step="0.01"
                  className="sgpa_input"
                  placeholder="SGPA"
                  value={sgpa[index]}
                  onChange={(e) => handleSgpaChange(index, e.target.value)}
                />
              </td>
              <td>
                {sgpa[index] !== "" ? weightedSgpas[index].toFixed(2) : "0.00"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCgpaChange} className="btn">
        Calculate{" "}
      </button>
    </div>
  );
}
