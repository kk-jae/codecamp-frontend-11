import styled from "@emotion/styled";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 200px;
  background-color: pink;
  padding: 0px 35% 0px 35%;
`;
const H3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const IMG = styled.img``;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    // centerPadding: "0px",
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <H3>
            <IMG src="/dog.jpeg" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/dog.jpeg" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/dog.jpeg" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/dog.jpeg" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/dog.jpeg" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/dog.jpeg" />
          </H3>
        </div>
      </Slider>
    </Wrapper>
  );
}
