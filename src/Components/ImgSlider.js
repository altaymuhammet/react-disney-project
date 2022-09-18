import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <SliderDiv {...settings}>
      <Wrap>
        <a href="#">
          <img src="images/slider-badag.jpg" alt="SliderImg-1" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src="images/slider-badging.jpg" alt="SliderImg-2" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src="images/slider-scale.jpg" alt="SliderImg-3" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src="images/slider-scales.jpg" alt="SliderImg-4" />
        </a>
      </Wrap>
    </SliderDiv>
  );
};

const SliderDiv = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  box-shadow: 0 30px 50px #000;

  ul li button {
    :before {
      color: #d4d1d1;
      font-size: 12px;
    }
  }

  ul li.slick-active button:before {
    color: #fff;
  }

  @media (orientation: portrait) {
    width: 85%;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: none;


  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
