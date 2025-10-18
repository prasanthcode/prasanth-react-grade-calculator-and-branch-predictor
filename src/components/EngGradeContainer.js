import GradeCalculator from "./GradeCalculator";

export default function EngGradeContainer({ subs, credits }) {
  const branchOpts = ["CSE", "ECE", "EEE", "CIVIL", "MECH"];
  const yearSemOpts = [
    "E1S1",
    "E1S2",
    "E2S1",
    "E2S2",
    "E3S1",
    "E3S2",
    "E4S1",
    "E4S2",
  ];

  return (
    <GradeCalculator
      subs={subs}
      credits={credits}
      branchOptions={branchOpts}
      yearSemOptions={yearSemOpts}
      title="Engineering SGPA Calculator"
    />
  );
}
