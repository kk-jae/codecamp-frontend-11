import { useState } from "react";

export const useCountUpPage = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((count) => count + 1);
    console.log(count);
  };

  return {
    onClickCountUp,
    count,
  };
};
