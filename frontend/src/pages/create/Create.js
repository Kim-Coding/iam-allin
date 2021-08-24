import "./create.css";
import ResultCreate from "../../components/create/ResultCreate";
import MakeCreate from "../../components/create/MakeCreate";
import { useState } from "react";

function Create() {
  const [result, setResult] = useState([]);
  const cur = Math.ceil(
    (new Date() - new Date(2002, 11, 7, 19, 59)) / 604800000
  );

  function makeResult(data) {
    setResult(data);
  }

  return (
    <>
      <MakeCreate makeResult={makeResult} />
      <ResultCreate value={result} cur={cur} />
    </>
  );
}

export default Create;
