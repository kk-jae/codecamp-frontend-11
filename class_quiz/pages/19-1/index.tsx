import { useEffect, useRef } from "react";

export default function UseRefFocusPage() {
  const qqq = useRef(null);

  useEffect(() => {
    qqq.current.focus();
  });

  return (
    <>
      <div>
        <input></input>
        비밀번호 : <input ref={qqq}></input>
      </div>
    </>
  );
}
