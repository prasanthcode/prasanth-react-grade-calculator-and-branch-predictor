import "./App.css";
// import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";

import Header from "./Header";

import BranchPredict from "./BranchPredict";

import GradeContainer from "./GradeContainer";
import Bcontainer from "./Bcontainer";
import Gcontainer from "./Gcontainer";
import Footer from "./Footer";
import About from "./About";
import btech_subs from "./btech_subs.json";
import btech_credits from "./btech_credits.json";
import puc_subs from "./puc_subs.json";
import puc_credits from "./puc_credits.json";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Syllabus from "./Syllabus";
import PredictInfo from "./PredictInfo";
import Cgpa from "./Cgpa";
import ScrollToTop from './ScrollToTop';
function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
      <>

      <ScrollToTop />
      <Header />
	  
      <Routes>
        <Route
          index
          element={<Bcontainer subs={btech_subs} credits={btech_credits} />}
        />
        <Route
          path="/puc"
          element={<Gcontainer subs={puc_subs} credits={puc_credits} />}
        />
        <Route
          path="/btech"
          element={<Bcontainer subs={btech_subs} credits={btech_credits} />}
        />
        <Route path="/branch/prediction" element={<BranchPredict />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route
          path="*"
          element={<GradeContainer subs={btech_subs} credits={btech_credits} />}
        />
      </Routes>
      
      {(pathname === "/btech" || pathname === "/") && <Cgpa />}

      {pathname!=="/branch/prediction" &&  <About/>}
      {/* <Syllabus /> */}
      {(pathname === "/btech" || pathname === "/") && <Syllabus />}

      {pathname!=="/branch/prediction" &&  <PredictInfo />}


      <Footer />
      </>
  );
}

export default App;
