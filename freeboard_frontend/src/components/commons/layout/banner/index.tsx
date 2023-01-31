import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
`;

const Wrapper_Banner = styled.div`
  width: 100%;
`;
const H3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const IMG = styled.img`
  width: 100%;
  object-fit: cover;
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

  return (
    <Wrapper>
      <Slider {...settings}>
        <Wrapper_Banner>
          <H3>
            <IMG src="/image 02.png" />
          </H3>
        </Wrapper_Banner>
        {/* <div>
          <H3>
            <IMG src="/bannerBox.png" />
          </H3>
        </div>
        <div>
          <H3>
            <IMG src="/bannerBox.png" />
          </H3>
        </div> */}
      </Slider>
    </Wrapper>
  );
}
