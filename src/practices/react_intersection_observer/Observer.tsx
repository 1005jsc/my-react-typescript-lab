import React, { useEffect } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Observer = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0, 0.9, 1],
  });

  useEffect(() => {
    // console.log(ref);
    console.log(inView);
    // console.log(entry?.rootBounds?.height);
    // console.log(entry?.rootBounds);
    console.log(entry);
  }, [entry]);

  return (
    <>
      <ViewPortDiv />
      <InViewDiv ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </InViewDiv>

      {/* <InView
        as='div'
        onChange={(inView, entry) => console.log('Inview:', inView)}
      >
        <h2>
          Plain children are always rendered. Use onChange to monitor state.
        </h2>
      </InView> */}
    </>
  );
};

const ViewPortDiv = styled.div`
  height: 120vh;
  width: 100%;
  background-color: #134875;
`;

const InViewDiv = styled.div`
  height: 20vh;
  width: 100%;
  background-color: gray;
`;

export default Observer;
