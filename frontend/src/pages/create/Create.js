import "./create.css";
import ResultCreate from "../../components/create/ResultCreate";
import MakeCreate from "../../components/create/MakeCreate";
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
