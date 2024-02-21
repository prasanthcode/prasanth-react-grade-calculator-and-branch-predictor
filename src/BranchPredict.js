import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BranchPredict() {
  const [predictData, setPredictData] = useState(null);

  const [inputValue, setInputValue] = useState({
    rank: 363,
    total_cgpa: 9.18,
    math_cgpa: 9.25,
    phy_cgpa: 9.1,
    chem_cgpa: 9,
    gender: "1",
    caste: 0,
  });
  const handleReset = () => {
    setInputValue({
      rank: "",
      total_cgpa: "",
      math_cgpa: "",
      phy_cgpa: "",
      chem_cgpa: "",
      gender: "1",
      caste: "",
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputValue((prevInputs) => ({ ...prevInputs, [name]: value }));
    // console.log(prevInputs);
  };

  const [loading, setLoading] = useState("Predict");
  const [error, setError] = useState(null);
  const predictSend = async () => {
    if (inputValue.caste !== "") {
      try {
        setLoading("Predicting...");
        const response = await axios.post(
          process.env.REACT_APP_PREDICT_URL,
          inputValue,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response.data);
        setPredictData({
          cse: (response.data.predictions["CS"] * 100).toFixed(0),
          ece: (response.data.predictions["EC"] * 100).toFixed(0),
          ce: (response.data.predictions["CE"] * 100).toFixed(0),
          eee: (response.data.predictions["EE"] * 100).toFixed(0),
          me: (response.data.predictions["ME"] * 100).toFixed(0),
          mmen: (response.data.predictions["MME-N"] * 100).toFixed(0),
          chemr: (response.data.predictions["CHEM-R"] * 100).toFixed(0),
          chemn: (response.data.predictions["CHEM-N"] * 100).toFixed(0),
        });
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading("Predict");
      }
    } else {
      console.log("Select reservation category");
    }
  };
 
  // const speed = 10;

  // const incNbrRec = (i, endNbr, id) => {
  //   if (i <= endNbr) {
  //     setPredictData((prevPredictions) => ({
  //       ...prevPredictions,
  //       [id]: i,
  //     }));

  //     setTimeout(() => {
  //       incNbrRec(i + 1, endNbr, id);
  //     }, speed);
  //   }
  // };

  // const handleButtonClick = async() => {
  //   await predictSend();
  //   incEltNbr('cse', 'cse');
  //   incEltNbr('ece', 'ece');
  //   incEltNbr('ce', 'ce');
  //   incEltNbr('mme', 'mmen');
  //   incEltNbr('chemn', 'chemn');
  //   incEltNbr('chemr', 'chemr');
  //   incEltNbr('ee', 'eee');
  //   incEltNbr('me', 'me');
  // };

  // const incEltNbr = (i, o) => {
  //   // incNbrRec(0, predictData[o], i);
  //   incNbrRec(0, predictData?.[o] || 0, i);
  //   // incNbrRec(0, endNbr, i);
  // };
  return (
    <div id="container">
      <div className="branch_predict" id="branch_redict">
      <div className="prediction-info">
          <p>
            <strong>Branch Prediction</strong> with insights from the 2019 Batch
            data.
          </p>
          <span className="testing-label">Testing Phase</span>
        
        </div>

        <div className="branch-wrapper" id="branch-wrapper">
          <div className="predict-input">
            <span>Rank</span>
            <input
              type="number"
              min="1"
              id="rank"
              name="rank"
              onChange={handleInput}
              value={inputValue.rank}
            />
          </div>
          <div className="predict-input">
            <span>Total CGPA</span>
            <input
              type="number"
              min="1"
              max="10"
              id="total_cgpa"
              name="total_cgpa"
              onChange={handleInput}
              value={inputValue.total_cgpa}
            />
          </div>

          <div className="predict-input">
            <span>Mathematics CGPA</span>
            <input
              type="number"
              min="1"
              max="10"
              id="math_cgpa"
              name="math_cgpa"
              onChange={handleInput}
              value={inputValue.math_cgpa}
            />
          </div>
          <div className="predict-input">
            <span>Physics CGPA</span>
            <input
              type="number"
              min="1"
              max="10"
              id="phy_cgpa"
              name="phy_cgpa"
              onChange={handleInput}
              value={inputValue.phy_cgpa}
            />
          </div>
          <div className="predict-input">
            <span>Chemistry CGPA</span>
            <input
              type="number"
              min="1"
              max="10"
              id="chem_cgpa"
              name="chem_cgpa"
              onChange={handleInput}
              value={inputValue.chem_cgpa}
            />
          </div>
          <div className="predict-input">
            <span>Gender</span>
            <div className="gender" id="gender">
              <input
                type="radio"
                name="gender"
                id="male"
                value="1"
                onChange={handleInput}
                checked={inputValue.gender === "1"}
              />
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                id="female"
                value="0"
                onChange={handleInput}
                checked={inputValue.gender === "0"}
              />
              <span>Female</span>
            </div>
          </div>
          <div className="predict-input">
            <span>Reservation Category</span>
            <select
              name="caste"
              id="caste"
              className="branchoption"
              value={inputValue.caste}
              onChange={handleInput}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="0">BC-A</option>
              <option value="1">BC-B</option>
              <option value="2">BC-C</option>
              <option value="3">BC-D</option>
              <option value="4">BC-E</option>
              <option value="5">OC</option>
              <option value="6">SC</option>
              <option value="7">ST</option>
            </select>
          </div>
          <div className="probability">
            <div className="branch">
              <h4 className="pro-percent" id="cse">
                {predictData ? predictData.cse + "%" : "--"}
              </h4>
              <span>CSE</span>
            </div>
            <div className="branch">
              <h4 className="pro-percent" id="ece">
                {predictData ? predictData.ece + "%" : "--"}
              </h4>
              <span>ECE</span>
            </div>
            <div className="branch">
              <h4 className="pro-percent" id="ce">
                {predictData ? predictData.ce + "%" : "--"}
              </h4>
              <span>CE</span>
            </div>

            <div className="branch">
              <h4 className="pro-percent" id="chemr">
                {predictData ? predictData.chemr + "%" : "--"}
              </h4>
              <span>CHEM-R</span>
            </div>
          </div>
          <div className="probability">
            <div className="branch">
              <h4 className="pro-percent" id="mme">
                {predictData ? predictData.mmen + "%" : "--"}
              </h4>
              <span>MME</span>
            </div>
            <div className="branch">
              <h4 className="pro-percent" id="ee">
                {predictData ? predictData.eee + "%" : "--"}
              </h4>
              <span>EEE</span>
            </div>
            <div className="branch">
              <h4 className="pro-percent" id="me">
                {predictData ? predictData.me + "%" : "--"}
              </h4>
              <span>ME</span>
            </div>
            <div className="branch">
              <h4 className="pro-percent" id="chemn">
                {predictData ? predictData.chemn + "%" : "--"}
              </h4>
              <span>CHEM-N</span>
            </div>
          </div>
          <div className="probability">
            <button onClick={handleReset} className="btn">
              Reset
            </button>
            <button id="predict" onClick={predictSend} className="btn">
              {loading} 
            <i className="fas fa-flask"></i>
            </button>
          </div>
        <div className="social-icons"> <a href="https://www.linkedin.com/in/prakash-naidu-talatam-441984261">
        By Talatam Prakash Naidu<i className="fab fa-linkedin"></i>  </a><br/>  <a href="https://www.linkedin.com/in/prasanth-gavvala-442b4327b">&amp; Prasanth Gavvala
            <i className="fab fa-linkedin"></i>
          </a></div>
        </div>
      </div>
    </div>
  );
}
