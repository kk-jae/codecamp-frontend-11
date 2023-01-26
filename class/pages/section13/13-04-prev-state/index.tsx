import { useState } from 'react'

export default function CounterLetDocumentPage():JSX.Element{
    // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state 써야됨)
    const [ count, setCount ] = useState(0)

    function onClickCountUp():void{
      // setCount(count + 2)
      // setCount(count + 1)
      // setCount(count + 3)
      // setCount(count + 5)
      // setCount(count + 2)
      // setState의 특징으로(임시저장공간) 마지막 카운터만 ( +2 ) 적용됩니다.

        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
        setCount((prev) => prev +1);
      // prev는 임시저장 공간에서 가지고 오므로 0+1, 1+1, 2+1, 3+1, 4+1이 계속 적용됩니다.

    }

    // function onClickCountDown(){
    //    setCount(count - 1)
    // }

    return (
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
            {/* <button onClick={onClickCountDown}>카운트 내리기!!!</button> */}
        </div>
    )
}