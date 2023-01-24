import React from 'react';
import styled from 'styled-components';
import CssDivChild from '../components/CssDivWidthSuccessingTest/CssDivChild';

type CssDivWidthSuccessingTextProps = {};

const CssDivWidthSuccessingText = ({}: CssDivWidthSuccessingTextProps) => {
  const array = [1, 2, 3, 4, 5, 5];

  return (
    <>
      <CssDivParent>
        <CssDivParent2>
          <CssDivParent3>
            {array.map((__, index) => {
              return <CssDivChild key={index} />;
            })}
          </CssDivParent3>
        </CssDivParent2>
      </CssDivParent>
    </>
  );
};
export default CssDivWidthSuccessingText;

const CssDivParent = styled.div`
  width: 1800px;
  margin: auto;
`;
const CssDivParent2 = styled.div`
  width: 100%;
  margin: auto;
`;
const CssDivParent3 = styled.div`
  /* width: 100%; */
  margin: auto;
`;
