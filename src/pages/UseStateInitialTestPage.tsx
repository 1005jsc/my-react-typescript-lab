import React from 'react';
import UseStateInitialTest from '../components/UseStateInitialTest';

type UseStateInitialTestPageProps = {};

const UseStateInitialTestPage = ({}: UseStateInitialTestPageProps) => {
  const propFromTop = 'yes1';
  //   const propFromTop = undefined;

  const yes = async () => {
    return await 'yes';
  };

  console.log(yes());

  return (
    <>
      {/* <div> UseStateInitialTestPage</div> */}
      <UseStateInitialTest propFromTop={propFromTop} />
    </>
  );
};
export default UseStateInitialTestPage;
