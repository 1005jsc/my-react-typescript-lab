import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <SliderSlider {...settings}>
          <MiddleDiv>
            <h3>1</h3>
          </MiddleDiv>
          <MiddleDiv>
            <h3>2</h3>
          </MiddleDiv>
          <MiddleDiv>
            <h3>3</h3>
          </MiddleDiv>
          <MiddleDiv>
            <h3>4</h3>
          </MiddleDiv>
        </SliderSlider>
      </div>
    );
  }
}

const SliderSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    /* display: flex; */
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 1rem;
    /* background-color: black; */
  }
`;

const MiddleDiv = styled.div`
  height: 20rem;
  background-color: azure;
  border: 1px solid black;
`;
