import { useState } from "react";

export default function ChangeBtnText() {
  const [changeBtn, setChangeBtn] = useState("안녕하세요");

  function onClickChangeBtnText() {
    setChangeBtn("반갑습니다.");
  }

  return (
    <div>
      <button onClick={onClickChangeBtnText}>{changeBtn}</button>
    </div>
  );
}
