import axios from "axios";
import React, { useEffect, useState } from "react";
import { useIsFetching } from "react-query";
import UseEffectDepsTestPage from "./UseEffectDepsTestPage";

type AsyncTestPageProps = {};

const AsyncTestPage = ({}: AsyncTestPageProps) => {
  let yo: any;

  const [yoyo, setYoyo] = useState();

  const yes1 = async () => {
    const yes = await fetch(`${process.env.REACT_APP_SERVER_URL_ASYNC_TEST}`);

    // setYoyo(await yes.json());
    const yes2 = await yes.json();

    return yes2;
  };

  useEffect(() => {
    console.log(yes1());

    console.log(yoyo);
  }, []);

  return (
    <>
      <div> asyncTestPage</div>
    </>
  );
};
export default AsyncTestPage;
