import React from 'react';
import styled from 'styled-components';

const Flexbox = () => {
  return (
    <>
      <BigDiv>
        <ChildrenDiv></ChildrenDiv>
        <ChildrenDiv></ChildrenDiv>
        <ChildrenDiv></ChildrenDiv>
        <ChildrenDiv></ChildrenDiv>
        <ChildrenDiv></ChildrenDiv>
        <ChildrenDiv></ChildrenDiv>
        <ChildrenDiv></ChildrenDiv>
      </BigDiv>
    </>
  );
};
export default Flexbox;

const BigDiv = styled.div`
  width: 80%;
  margin: auto;
  height: 10rem;
  border: 1px solid black;

  display: flex;
`;

const ChildrenDiv = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: aqua;
  border: 1px solid black;
`;
