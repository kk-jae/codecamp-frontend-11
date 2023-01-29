import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  /* height: 200px; */
`;

const H3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function LayoutBanner(props): JSX.Element {
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

  const IMG = styled.img``;

  return (
    <Wrapper>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        <div>
          <H3>
            <IMG src="/bannerBox.png" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/bannerBox.png" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/bannerBox.png" />
          </H3>
        </div>
      </Slider>
    </Wrapper>
  );
}
