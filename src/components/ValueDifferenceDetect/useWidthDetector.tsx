import React, { useEffect, useState } from 'react';

type WindowSizeType = {
  width: number;
  height: number;
};

const useWidthDetector = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [widthDetect, setWidthDetect] = useState<number>(window.innerWidth);
  const [widthIsIncreasing, setWidthIsIncreasing] = useState<
    boolean | undefined
  >(undefined);
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // if (Math.abs(widthDetect - windowSize.width) > 1) {

    // }
    setWidthDetect(windowSize.width);
    setWidthIsIncreasing(widthDetect - windowSize.width < 0);
  }, [windowSize.width]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,

    widthIsIncreasing,
  };
};
export default useWidthDetector;
