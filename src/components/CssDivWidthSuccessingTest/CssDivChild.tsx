import React from 'react';
import styled from 'styled-components';

type CssDivChildProps = {};

const CssDivChild = ({}: CssDivChildProps) => {
  return (
    <>
      <Div> CssDivChild</Div>
    </>
  );
};
export default CssDivChild;

const Div = styled.div`
  width: 60%;
  border: 1px solid black;
`;
