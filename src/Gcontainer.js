import React, { useState, useEffect } from "react";
import SelectOpt from "./SelectOpt";

import PredictInfo from "./PredictInfo";
import History from "./History";
import { useLocation } from "react-router-dom";
import Table from "./Table";

export default function Gcontainer(props) {
  const location = useLocation();
  // console.log(all_subs[0][0]);
  const [history, setHistory] = useState([]);
  const [yearSem, setYearSem] = useState(0);
  const branch = 0;
  const all_subs = props.subs;
  const all_credits = props.credits;
  const branchOpts = ["CSE", "ECE", "EEE", "CIVIL", "MECH"];
  const pucYearsemOpts = ["P1S1", "P1S2", "P2S1", "P2S2"];
  // const all_subs = props.subs;
  // const all_credits = props.credits;
  const engYearsemOpts = [
    "E1S1",
    "E1S2",
    "E2S1",
    "E2S2",
    "E3S1",
    "E3S2",
    "E4S1",
    "E4S2",
  ];
  // console.log(all_subs[yearSem][branch],yearSem,branch);
  const [grades, setGrades] = useState(
    Array(all_subs[yearSem][branch].length).fill("")
  );

  const handleYearSem = (e) => {
    setYearSem(e.target.value);
    setGrades(Array(all_subs[yearSem][branch].length).fill(""));
  };

  const [cgpa, setCgpa] = useState("0.0");
  const handleGrade = (index, grade) => {
    const newGrades = [...grades];
    newGrades[index] = grade;
    // formattedCgpa = 0;
    setGrades(newGrades);
  };

  const handleCgpa = () => {
    let sum = 0;
    let credit_sum = 0;
    all_credits[yearSem][branch].forEach((credit, index) => {
      const grade = grades[index];

      if (grade) {
        sum += credit * parseInt(grade);
        credit_sum += credit;
      }
    });
    if (!grades.includes("")) {
      if (window.innerWidth <= 768) {
        // Empty string is present, scroll to the top
        window.scrollTo({
          top: document.getElementById("totalgrade").offsetTop,
          behavior: "smooth",
        });
      }
      setCgpa((sum / credit_sum).toFixed(2));

      const newHistory = {
        yearSem: pucYearsemOpts[yearSem],
        cgpa: sum / credit_sum, // Replace with the appropriate way to get totalgrade in React
      };
      setHistory((prevHistory) => [...prevHistory, newHistory]);
    }
  };
  const showHistory = () => {
    const wrapper = document.getElementById("sem-wrap");
    wrapper.classList.toggle("show-wrap");
  };
  // const [totalGrade, setTotalGrade] = useState('0.0');
  const [isNegative, setIsNegative] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsNegative((prevIsNegative) => {
        setCgpa(prevIsNegative ? "0.0" : "-.-");
        return !prevIsNegative;
      });
    }, 500);

    // Clear the interval after 2000ms
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <>
      <div id="container">
        <div id="grades_wrapper">
          <Table
            subjects={all_subs[yearSem][branch]}
            credits={all_credits[yearSem][branch]}
            handleGrade={handleGrade}
            grades={grades}
          />
          <div className="optandbtn calculate">
            <button id="btn" className="btn" onClick={handleCgpa}>
              Calculate
            </button>
          </div>
        </div>
        <div id="gradecontainer">
          <a href="https://examcell.rguktsklm.ac.in/" target="_blank" aria-label="go to rgukt sklm examcell for results">
            Go to Examcell
          </a>
          Know your results Here
          <div className="optandbtn">
            <button id="history" className="btn" onClick={showHistory}>
              History
            </button>

            <SelectOpt
              key="three"
              id={"yearsem"}
              onChange={handleYearSem}
              options={pucYearsemOpts}
            />
          </div>
          <History history={history} />
          <h3 className="gradetitle">GPA</h3>
          <h1 id="totalgrade">{cgpa}</h1>
          <PredictInfo />
        </div>
      </div>
    </>
  );
}
