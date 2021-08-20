import "./create.css";
import ResultCreate from "../../components/ResultCreate";
import { useState } from "react";
import axios from "axios";

function Create() {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);
  const [exist, setExist] = useState([]);

  // (async function () {
  //   axios.get("").then((res) => console.log(res));
  // })();

  const combination = (arr, selectNum) => {
    const combinationArr = [];
    let i = 0;
    while (i < selectNum) {
      const rnum = Math.round(Math.random() * (arr.length - 1));
      if (combinationArr.indexOf(arr[rnum]) === -1) {
        combinationArr.push(arr[rnum]);
        i++;
      }
    }
    return combinationArr;
  };

  const onKeyup = (e) => {
    setValue(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onClick = (e) => {
    const arr = [];
    const exist = [1, 2, 3, 4, 5, 6, 7, 8];
    const notExist = [10, 11, 12, 13, 14, 15, 16, 17, 18, 32, 45, 27];
    let i = 0;
    while (i < value) {
      let temp = [];
      const randomNum = Math.round(Math.random());
      if (randomNum === 0) {
        temp = combination(notExist, 6);
      } else {
        temp = combination(notExist, 5);
        temp = temp.concat(combination(exist, 1));
      }
      const sum = temp.reduce((pre, cur) => pre + cur, 0);
      if (100 < sum && sum < 170) {
        temp.sort((a, b) => a - b);
        arr.push(temp);
        i += 1;
      }
    }
    setResult(arr);
  };
  return (
    <>
      <div className="Create">
        <input
          type="text"
          placeholder="몇 줄 생성할까요?"
          onKeyUp={onKeyup}
          onKeyPress={onEnter}
        />
        <input type="button" value="생성" onClick={onClick} />
      </div>
      <ResultCreate value={result} />
    </>
  );
}

export default Create;
