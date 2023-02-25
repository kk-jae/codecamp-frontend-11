import Slider from "react-slick";

export default function BoardCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {props.data?.map((el) => (
        <img src={`https://storage.googleapis.com/${el}`} />
      ))}
    </Slider>
  );
}
