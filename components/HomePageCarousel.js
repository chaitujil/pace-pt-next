import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import HowCanWeHelp from "./HowCanWeHelp";
import styled from '@emotion/styled';
import {css} from "emotion";

const firstImage = css`
  width: 100%;
  height: 750px;
  
  @media (max-width: 900px) {
     width: 100%;
     height: 400px;
     margin: 0;
  }
`;

const HomePageCarousel = () => (
  <section>
    <Carousel interval="10000">
      <Carousel.Item>
        <img
          className={firstImage}
          src="../static/firstImage.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We Help Active Adults In The Bay Area Get Back To The Things They Love WITHOUT Medication, Multiple
            Doctor’s Visits, And Surgery.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HowCanWeHelp/>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default HomePageCarousel;
