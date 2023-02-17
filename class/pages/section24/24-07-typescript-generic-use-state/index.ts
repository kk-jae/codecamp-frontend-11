// 제공자
export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  let state = 초기값; // 만들어 놓고 안쓸거면 const로 변경하세요

  const setState = (변경값: S): void => {
    console.log(`${state}에서 ${변경값}으로 값을 변경하겠습니다!!!`); // 1. state 변경하기
    console.log(`변경된 ${변경값}을 사용해서 컴포넌트를 리렌더링 하겠습니다!!`); // 2. 해당 컴포넌트를 리렌더링 시키기(render함수)
  };

  return [state, setState];
}

// 사용자     <여기에 타입을 적으면 S 타입을 사용자가 지정해주는 것 입니다.>
const [count, setCount] = useState<number>(10);
// 초기값에 따라 count의 타입이 계속 변경됩니다.
