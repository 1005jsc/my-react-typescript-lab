import React from "react";
import styled from "styled-components";
import { GreyStarIcon, YellowStarIcon } from "../../assets/icon";

type StarIconProps = {};

const StarIcon = ({}: StarIconProps) => {
  return (
    <Container>
      <GreyStarDiv>
        <IconWrapper width={"160px"} height={`160px`}>
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>

        <IconWrapper width={"160px"} height={`160px`}>
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>

        <IconWrapper width={"160px"} height={`160px`}>
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>

        <IconWrapper width={"160px"} height={`160px`}>
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>

        <IconWrapper width={"160px"} height={`160px`}>
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>
      </GreyStarDiv>

      <Div>
        <YellowStarDiv>
          {/* <Box></Box> */}
          <IconWrapper width={"160px"} height={`160px`}>
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper width={"160px"} height={`160px`}>
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper width={"160px"} height={`160px`}>
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper width={"160px"} height={`160px`}>
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper width={"400px"} height={`400px`}>
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
        </YellowStarDiv>
      </Div>
    </Container>
  );
};
export default StarIcon;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const GreyStarDiv = styled.div`
  display: flex;
  position: relative;
`;
const Div = styled.div``;
const YellowStarDiv = styled.div`
  display: flex;
  /* display: inline-block; */
  flex-direction: row;

  width: 370px;
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
`;

const IconWrapper = styled.div<{ width: string; height: string }>`
  /* display: inline-block; */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex: 0 0 auto;
  margin: 2px;
  border: 1px solid black;
`;
