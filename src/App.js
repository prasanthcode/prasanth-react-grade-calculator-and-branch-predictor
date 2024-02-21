import "./App.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";

import BranchPredict from "./BranchPredict";

import GradeContainer from "./GradeContainer";
import Bcontainer from "./Bcontainer";
import Gcontainer from "./Gcontainer";
import Footer from "./Footer";
import Document from "./Document";
import btech_subs from "./btech_subs.json";
import btech_credits from "./btech_credits.json";
import puc_subs from "./puc_subs.json";
import puc_credits from "./puc_credits.json";

import Syllabus from "./Syllabus";
function App() {
  return (
    <BrowserRouter>
      <Header />
	  
      <Routes>
        <Route
          index
          element={<Bcontainer subs={btech_subs} credits={btech_credits} />}
        />
        <Route
          path="/puc-grade-calculator"
          element={<Gcontainer subs={puc_subs} credits={puc_credits} />}
        />
        <Route
          path="/btech-grade-calculator"
          element={<Bcontainer subs={btech_subs} credits={btech_credits} />}
        />
        <Route path="/branch-prediction" element={<BranchPredict />} />
        <Route path="/about" element={<Document />} />
        <Route
          path="*"
          element={<GradeContainer subs={btech_subs} credits={btech_credits} />}
        />
      </Routes>
      <Syllabus />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
