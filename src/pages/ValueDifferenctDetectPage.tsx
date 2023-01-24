import React, { useEffect, useState } from 'react';
import useWidthDetector from '../components/ValueDifferenceDetect/useWidthDetector';

type ValueDifferenctDetectPageProps = {};

const ValueDifferenctDetectPage = ({}: ValueDifferenctDetectPageProps) => {
  const { windowWidth, widthIsIncreasing } = useWidthDetector();
  // const [widthDetect, setWidthDetect] = useState<number>(window.innerWidth);

  // useEffect(() => {
  //   if (Math.abs(widthDetect - windowWidth) > 1) {
  //     setWidthDetect(windowWidth);
  //     // console.log(widthDetect - windowWidth);
  //   }

  //   // console.log(widthDetect);
  // }, [windowWidth]);

  useEffect(() => {
    console.log(widthIsIncreasing);
  }, [windowWidth]);

  return (
    <>
      <div> ValueDifferenctDetect</div>
    </>
  );
};
export default ValueDifferenctDetectPage;
