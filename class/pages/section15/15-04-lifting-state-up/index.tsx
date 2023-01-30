import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";
import { useState } from "react";

export default function LiftingStateUp(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>===============================</div>
      <Child2 count={count} onClickCount={onClickCount} />
    </>
  );
}

// 자식 1에서 카운트를 누르면 자식2에도 같이 카운터가 올라가야합니다.
// 자식끼리는 수행할 수 없으니, 자식1을 부모로 "끌어올리기" 한 후 자식 2에 넘겨줍니다.

// 방법
// 1. 부모의 setCount를 자식에게 그대로 넘깁니다. (Child1)
// 2. 부모의 함수를 자식에게 넘깁니다.(Child2)
