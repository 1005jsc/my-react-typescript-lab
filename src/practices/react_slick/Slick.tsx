import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import './slickStyle.css';
import './slick_theme.css';

const Slick = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const settings = {
    arrows: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <BigDiv>
        <h2> Single Item</h2>
        <SliderSlider {...settings} ref={setSliderRef}>
          <YesDiv>
            <YesYesDiv>1</YesYesDiv>
          </YesDiv>
          <YesDiv>
            <YesYesDiv>2</YesYesDiv>
          </YesDiv>
          <YesDiv>
            <YesYesDiv>3</YesYesDiv>
          </YesDiv>
          <YesDiv>
            <YesYesDiv>4</YesYesDiv>
          </YesDiv>
          <YesDiv>
            <YesYesDiv>5</YesYesDiv>
          </YesDiv>
          <YesDiv>
            <YesYesDiv>6</YesYesDiv>
          </YesDiv>
        </SliderSlider>
        <ArrowDiv>
          <Button onClick={sliderRef?.slickPrev}>Prev</Button>
          <Button onClick={sliderRef?.slickNext}>Next</Button>
        </ArrowDiv>
      </BigDiv>
    </>
  );
};
export default Slick;

const BigDiv = styled.div`
  width: 60rem;
  margin: auto;

  height: '100vh';
`;

const ArrowDiv = styled.div`
  /* width: 5rem; */
  /* height: 4rem; */
  display: flex;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 0.2rem 0.5rem;
  /* width: 4rem; */
`;

const SliderSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 1rem;
    background-color: black;
  }
`;

const YesDiv = styled.div`
  width: 25%;
  height: 24rem;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
`;

const YesYesDiv = styled.div`
  height: 20rem;
  background-color: aliceblue;
`;
