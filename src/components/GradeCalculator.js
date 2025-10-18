import React, { useState, useEffect, useRef } from "react";
import SelectOpt from "./SelectOpt";
import History from "./History";
import Table from "./Table";

export default function GradeCalculator({
  subs,
  credits,
  yearSemOptions,
  branchOptions = null,
  defaultBranch = 0,
  title = "SGPA Calculator",
  examCellLink = "https://examcell.rguktsklm.ac.in/",
}) {
  const [history, setHistory] = useState([]);
  const [yearSem, setYearSem] = useState(0);
  const [branch, setBranch] = useState(defaultBranch);
  const [showHistory, setShowHistory] = useState(false);

  const [grades, setGrades] = useState(
    Array(subs[yearSem][branch].length).fill("")
  );
  const [cgpa, setCgpa] = useState("0.0");
  const [isNegative, setIsNegative] = useState(false);
  const totalGradeRef = useRef(null);

  useEffect(() => {
    setGrades(Array(subs[yearSem][branch].length).fill(""));
  }, [yearSem, branch, subs]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsNegative((prev) => {
        setCgpa(prev ? "0.0" : "-.-");
        return !prev;
      });
    }, 500);

    const timeoutId = setTimeout(() => clearInterval(intervalId), 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleGrade = (index, grade) => {
    const newGrades = [...grades];
    newGrades[index] = grade;
    setGrades(newGrades);
  };

  const handleYearSem = (e) => setYearSem(e.target.value);

  const handleBranch = (e) => setBranch(e.target.value);

  const handleCgpa = () => {
    let sum = 0,
      creditSum = 0;
    credits[yearSem][branch].forEach((credit, i) => {
      const grade = grades[i];
      if (grade) {
        sum += credit * parseInt(grade);
        creditSum += credit;
      }
    });

    if (!grades.includes("")) {
      const calculated = (sum / creditSum).toFixed(2);
      setCgpa(calculated);

      const newEntry = {
        yearSem: yearSemOptions[yearSem],
        branch: branchOptions ? branchOptions[branch] : undefined,
        cgpa: calculated,
      };
      setHistory((prev) => [...prev, newEntry]);

      // Scroll on mobile
      if (window.innerWidth <= 768 && totalGradeRef.current) {
        totalGradeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <div id="container">
      <div id="grades_wrapper">
        <Table
          subjects={subs[yearSem][branch]}
          credits={credits[yearSem][branch]}
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
        <a href={examCellLink} target="_blank" rel="noreferrer">
          Go to Examcell <i className="fas fa-arrow-right"></i>
        </a>
        <div className="optandbtn">
          <button
            id="history"
            className="btn"
            onClick={() => setShowHistory((prev) => !prev)}
          >
            {showHistory ? "Hide History" : "Show History"}
          </button>

          <SelectOpt
            id="yearsem"
            onChange={handleYearSem}
            options={yearSemOptions}
          />

          {branchOptions && (
            <SelectOpt
              id="branch"
              onChange={handleBranch}
              options={branchOptions}
            />
          )}
        </div>

        <History history={history} showHistory={showHistory} />
        <h3 className="gradetitle">{title}</h3>
        <h1 id="totalgrade" ref={totalGradeRef}>
          {cgpa}
        </h1>
      </div>
    </div>
  );
}
