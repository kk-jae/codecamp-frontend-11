import { useState } from "react";

export default function RandomNumberState() {
  const [random, setRandom] = useState("000000");

  const randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );

  function onClickBtn() {
    setRandom(randomNumber);
  }

  return (
    <div>
      <div>{random}</div>
      <button onClick={onClickBtn}>인증번호 전송</button>
    </div>
  );
}
