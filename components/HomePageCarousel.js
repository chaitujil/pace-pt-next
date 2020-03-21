import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {css} from "emotion";
import styled from '@emotion/styled';

const imageCss = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin: -200px 0 -200px 0;
  
  @media (max-width: 900px) {
     width: 100%;
     height: auto;
     margin: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 100%;
  max-height: 600px;
  overflow: hidden;
`;

const CaptionText = styled.h4`
  color: ${props => props.light ? "white" : "black"};
  font-weight: bold;

  @media (max-width: 900px) {
     color: ${props => props.light ? "white" : "black"};
     font-size: 1rem;
  }
`;

const SlideItem = (imageUrl, theme) => {
  return (<Carousel.Item>
    <ImageWrapper>
      <img
        className={imageCss}
        src={imageUrl}
        alt="Current slide"
      />
    </ImageWrapper>
    <Carousel.Caption>
      <CaptionText light={theme === "light"}>We Help Active Adults In The Bay Area Get Back To The Things They Love WITHOUT Medication,
        Multiple
        Doctor’s Visits, And Surgery.
      </CaptionText>
    </Carousel.Caption>
  </Carousel.Item>)
};

let slides = [];
for (let i = 1; i <= 5; i++) {
  let textColor = "light";
  if (i === 2 || i === 4) {
    textColor = "dark";
  }
  slides.push(SlideItem("../static/pace_pt_image_" + i + ".jpeg", textColor));
}

const HomePageCarousel = () => (
  <section>
    <Carousel fade={true} interval="5000">
      {slides}
    </Carousel>
  </section>
);

export default HomePageCarousel;
