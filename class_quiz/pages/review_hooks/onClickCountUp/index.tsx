import { useCountUpFunc } from "./hook";

export default function QuizPage() {
  const { onClickCountUp, count } = useCountUpFunc();

  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCountUp}>Count up!</button>
      </div>
    </>
  );
}
