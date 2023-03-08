import { useEffect, useState } from "react";

const qqq = [];

export default function PreviewPage() {
  const [isClick, setIsClick] = useState(false);

  const kwon = [
    "/quiz/1.jpeg",
    "/quiz/2.jpeg",
    "/quiz/3.jpeg",
    "/quiz/4.jpeg",
    "/quiz/5.jpeg",
    "/quiz/6.jpeg",
    "/quiz/7.jpeg",
    "/quiz/8.jpeg",
    "/quiz/9.jpeg",
    "/quiz/10.jpeg",
  ];

  useEffect(() => {
    kwon.map((el, index) => {
      const image = new Image();
      image.src = kwon[index];

      image.onload = () => {
        qqq.push(image);
      };

      // return image;
    });
  }, []);

  const onClickButton = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <div>
      {isClick === true ? kwon.map((el) => <img src={el} />) : <div></div>}
      <button onClick={onClickButton}>이미지 보이기!</button>
    </div>
  );
}
