export default function QuizChangButtonTextDocument() {
  function onClickChangeBtn() {
    document.getElementById("btn").innerText = "반갑습니다.";
  }

  return (
    <div>
      <button id="btn" onClick={onClickChangeBtn}>
        안녕하세요.
      </button>
    </div>
  );
}
