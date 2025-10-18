import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BranchPredict from "./components/BranchPredict";
import Footer from "./components/Footer";
import About from "./components/About";
import btech_subs from "./data/btech_subs.json";
import btech_credits from "./data/btech_credits.json";
import puc_subs from "./data/puc_subs.json";
import puc_credits from "./data/puc_credits.json";
import { useLocation } from "react-router-dom";
import Syllabus from "./components/Syllabus";
import PredictInfo from "./components/PredictInfo";
import Cgpa from "./components/Cgpa";
import ScrollToTop from "./components/ScrollToTop";
import EngGradeContainer from "./components/EngGradeContainer";
import PucGradeContainer from "./components/PucGradeContainer";
function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route
          index
          element={
            <EngGradeContainer subs={btech_subs} credits={btech_credits} />
          }
        />
        <Route
          path="/puc"
          element={<PucGradeContainer subs={puc_subs} credits={puc_credits} />}
        />
        <Route
          path="/btech"
          element={
            <EngGradeContainer subs={btech_subs} credits={btech_credits} />
          }
        />
        <Route path="/branch/prediction" element={<BranchPredict />} />
        <Route
          path="*"
          element={
            <EngGradeContainer subs={btech_subs} credits={btech_credits} />
          }
        />
      </Routes>

      {(pathname === "/btech" || pathname === "/") && <Cgpa />}

      {pathname !== "/branch/prediction" && <About />}
      {(pathname === "/btech" || pathname === "/") && <Syllabus />}

      {pathname !== "/branch/prediction" && <PredictInfo />}

      <Footer />
    </>
  );
}

export default App;
