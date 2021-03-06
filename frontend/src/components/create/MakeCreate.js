import { useEffect, useState } from "react";
import axios from "axios";

function MakeCreate({ makeResult }) {
  const [value, setValue] = useState();
  const [exist, setExist] = useState();

  useEffect(() => {
    axios.get(`/winnum/`).then((res) => {
      setExist(JSON.parse(res.data));
    });
  }, []);

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
    const noArr = Object.keys(exist);
    const maxNo = noArr[4];
    const maxNoValue = exist[maxNo];
    const valueArr = Object.values(exist);
    const notExist = [];
    const existArr = [
      ...new Set(
        valueArr.reduce((pre, cur) => {
          return pre.concat(cur);
        })
      ),
    ];
    for (let i = 1; i < 46; i++) {
      if (!existArr.includes(i)) {
        notExist.push(i);
      }
    }

    let i = 0;

    while (i < value) {
      let temp = [];
      let count = 0;
      const randomNum = Math.round(Math.random() * 2);
      if (randomNum === 0) {
        temp = combination(notExist, 2);
        temp = temp.concat(combination(existArr, 4));
      } else if (randomNum === 1) {
        temp = combination(notExist, 3);
        temp = temp.concat(combination(existArr, 3));
      } else {
        temp = combination(notExist, 4);
        temp = temp.concat(combination(existArr, 2));
      }
      const sum = temp.reduce((pre, cur) => pre + cur, 0);

      for (const num of temp) {
        if (maxNoValue.includes(num)) {
          count += 1;
        }
      }
      if (90 < sum && sum < 180 && count <= 1) {
        temp.sort((a, b) => a - b);
        let check = 0;
        let checknum = 0;

        for (let num of temp) {
          if (checknum === 0) {
            checknum = num;
          } else {
            if (num - 1 === checknum) {
              check += 1;
            }
            checknum = num;
          }
        }

        if (check === 0 || check === 1) {
          arr.push(temp);
          i += 1;
        }
      }
    }
    makeResult(arr);
  };
  return (
    <div className="Create">
      <div className="Create">
        <input
          type="text"
          placeholder="??? ??? ????????????????"
          onKeyUp={onKeyup}
          onKeyPress={onEnter}
        />
        <input type="button" value="??????" onClick={onClick} />
      </div>
    </div>
  );
}

export default MakeCreate;
