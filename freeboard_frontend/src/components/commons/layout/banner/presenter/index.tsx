import * as S from "../styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    innerHeight: 1000,
    outerHeight: 1500,
  };
  return (
    <S.BannerWrapper>
      <S.BannerText>
        {/* <S.TextTitle>Who Are You</S.TextTitle> */}
        <S.TextContents>
          <S.TextMain>홈페이지 설명 텍스트를 입력하는 곳 입니다.</S.TextMain>
          {/* <S.TextSub>우리에게 알려주세요</S.TextSub> */}
        </S.TextContents>
      </S.BannerText>
      <S.BannerCarousel>
        <Slider {...settings}>
          <S.SliderParents>
            <S.SliderChild src="/image 02.png" />
          </S.SliderParents>
          <S.SliderParents>
            <S.SliderChild />d
          </S.SliderParents>
        </Slider>
      </S.BannerCarousel>
    </S.BannerWrapper>
  );
}
