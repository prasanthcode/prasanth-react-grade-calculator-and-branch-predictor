import GradeCalculator from "./GradeCalculator";

export default function PucGradeContainer({ subs, credits }) {
  const yearSemOpts = ["P1S1", "P1S2", "P2S1", "P2S2"];

  return (
    <GradeCalculator
      subs={subs}
      credits={credits}
      yearSemOptions={yearSemOpts}
      title="PUC SGPA Calculator"
    />
  );
}
