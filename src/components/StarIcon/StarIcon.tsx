import React from "react";
import styled from "styled-components";
import { GreyStarIcon, YellowStarIcon } from "../../assets/icon";

type StarIconProps = {
  width: string;
  margin: string;
  rating: number;
};

const StarIcon = ({ rating, width, margin }: StarIconProps) => {
  const extractNumberOnly = (str: string) => {
    const onlyNumbersArray = str.match(/[0-9]/g);
    const onlyNumbers = parseInt(str.match(/[0-9]/g)?.join("")!);

    let unit: string = "";
    if (onlyNumbersArray) {
      unit = str
        .split("")
        .filter((x) => !onlyNumbersArray.includes(x))
        .join("");
    }

    return { onlyNumbers, unit };
  };

  const { onlyNumbers: onlyNumbersWidth, unit: unitWidth } =
    extractNumberOnly(width);
  const { onlyNumbers: onlyNumbersMargin } = extractNumberOnly(margin);

  const widthWithoutMargin = onlyNumbersWidth - 10 * onlyNumbersMargin;

  const widthAndHeight = `${widthWithoutMargin / 5}${unitWidth}`;

  return (
    <Container>
      <GreyStarDiv>
        <IconWrapper
          width={widthAndHeight}
          height={widthAndHeight}
          margin={margin}
        >
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>
        <IconWrapper
          width={widthAndHeight}
          height={widthAndHeight}
          margin={margin}
        >
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>
        <IconWrapper
          width={widthAndHeight}
          height={widthAndHeight}
          margin={margin}
        >
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>
        <IconWrapper
          width={widthAndHeight}
          height={widthAndHeight}
          margin={margin}
        >
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>
        <IconWrapper
          width={widthAndHeight}
          height={widthAndHeight}
          margin={margin}
        >
          <GreyStarIcon width={`100%`} height={`100%`} />
        </IconWrapper>
      </GreyStarDiv>

      <Div>
        <YellowStarDiv
          rating={rating}
          width={onlyNumbersWidth}
          unit={unitWidth}
        >
          <IconWrapper
            width={widthAndHeight}
            height={widthAndHeight}
            margin={margin}
          >
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper
            width={widthAndHeight}
            height={widthAndHeight}
            margin={margin}
          >
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper
            width={widthAndHeight}
            height={widthAndHeight}
            margin={margin}
          >
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper
            width={widthAndHeight}
            height={widthAndHeight}
            margin={margin}
          >
            <YellowStarIcon width={`100%`} height={`100%`} />
          </IconWrapper>
          <IconWrapper
            width={widthAndHeight}
            height={widthAndHeight}
            margin={margin}
          >
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
const YellowStarDiv = styled.div<{
  rating: number;
  width: number;
  unit: string;
}>`
  display: flex;
  flex-direction: row;
  width: ${({ rating, width, unit }) => `${(rating / 5) * width}${unit}`};
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
`;

const IconWrapper = styled.div<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex: 0 0 auto;
  margin: ${({ margin }) => margin};
`;
