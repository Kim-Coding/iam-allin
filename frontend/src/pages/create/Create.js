import "./create.css";
import ResultCreate from "../../components/ResultCreate";
import MakeCreate from "../../components/MakeCreate";
import { useState } from "react";

function Create() {
  const [result, setResult] = useState([]);
  function makeResult(data) {
    setResult(data);
  }

  return (
    <>
      <MakeCreate makeResult={makeResult} />
      <ResultCreate value={result} />
    </>
  );
}

export default Create;
