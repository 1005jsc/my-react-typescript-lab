import { useEffect, useState } from 'react';
import VariousTest from '../components/VariousTest';

const VariousTests = () => {
  const [hi, setHi] = useState<boolean>(false);
  const [hiArray, setHiArray] = useState<boolean[]>();

  const handleButton = () => {
    setHi(!hi); // 1.  event 중일때는 set함수가 적용이 안되더라도
    let emptyArray = [] as boolean[];
    emptyArray.push(true); // 2. 값을 줄때는 state를 굳이 쓰지않고 값을 바로 집어 넣으면된다
    emptyArray.push(false);
    emptyArray.push(hi);
    emptyArray.push(hi);
    setHiArray(emptyArray); // 3. array 로 map으로 뿌릴려고 하는데 이거 event가 끝나면 된다
    // [true, false, false]
    console.log(1);
  };

  console.log(2);

  return (
    <>
      <div>
        <button onClick={handleButton}>click</button>

        <span>{`${hi}`}</span>
      </div>
      {hiArray &&
        hiArray.map((value, index) => {
          return <VariousTest hi={value} key={index} />;
        })}
    </>
  );
};

export default VariousTests;
