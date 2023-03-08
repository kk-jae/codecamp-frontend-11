import { useCallback, useMemo, useState } from "react";
import ChildrenPage from "./children";

export default function ParentPage() {
  console.log("부모 컴포넌트가 렌더링 되었습니다.");
  let count = 0;
  const [countState, setCountState] = useState(0);

  useCallback(() => {}, []);

  const onClickCount = useCallback(() => {
    count = count + 1;
    console.log(count);
  }, []);

  // const onClickCountState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  //   console.log(countState);
  // }, []);

  const onClickCountState = useMemo(() => {
    return (): void => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <>
      <div>Let카운트 : {count}</div>
      <button onClick={onClickCount}>Let카운트 업!!</button>
      <div>State카운트 : {countState}</div>
      <button
        onClick={(): void => {
          setCountState(countState + 1);
        }}
      >
        State카운트 업!!
      </button>
      <ChildrenPage />
    </>
  );
}
