import { useState } from "react";

export default function AddCounter() {
  const [counter, setCounter] = useState(0);

  function OnclickAddCounterNumber() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={OnclickAddCounterNumber}>카운터증가</button>
    </div>
  );
}
