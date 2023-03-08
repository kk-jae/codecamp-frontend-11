import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

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

  return (
    <div>
      {kwon.map((el) => (
        <div>
          <LazyLoad height={500} width={600}>
            <img src={el} />
          </LazyLoad>
        </div>
      ))}
    </div>
  );
}
