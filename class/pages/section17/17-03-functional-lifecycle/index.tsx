// 17-02-class-lifecycle을(클래스형) 함수형으로 변경하는 작업

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // 기본적인 모양 ( 변경되고나서 실행 x )
  // useEffect( () =>{},[])

  // componentDidMount와 동일
  // useEffect는 코드가 모두 그려지고 나서 제일 마지막에 실행 됩니다.

  useEffect(() => {
    console.log("그려지고 나서 실행!!");
  }, []);

  // 의존성 배열 (dependency-array)
  // 배열안에 아무것도 없으니, 초기에 한번만 실행되고 실행되지 않음

  // componentDidMount + componentDidUpdate와 동일 (처음 한번도 실행 됩니다.)

  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  });

  // 배열 자체가 없으니까 뭐가 바뀌던 계속 다시 실행

  useEffect(() => {
    // componentWillUnmount 와 동일
    return () => {
      console.log("사라지기전에 실행!!");
    };
  }, []);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행!!");

    return () => {
      console.log("사라지기전에 실행!!");
    };
  });
  // 배열에 있을경우, 안에 들어가는 값이 변경될때만 재실행됩니다.

  // 2. useEffect 잘못된 사용법 (1. 추가렌더링 발생, 무한루프)
  // useEffect는 함수를 모두 그린 후 실행됩니다. (코드 순서와 상관없음) 그런데 set이 안에 있으면 추가렌더링이 발생합니다.
  // 그래서 useEffect안에 set을 사용하여 수정하면 반복적으로 화면을 그리게 되어 무한루프에 빠지게 됩니다.
  useEffect(() => {
    // setCount((prev) => prev + 1);
  }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}
