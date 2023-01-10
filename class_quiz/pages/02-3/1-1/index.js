export default function RandomNumber() {
  //랜덤 6자리
  function onClickRandomNumber() {
    const random = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    document.getElementById("number").innerText = random;
  }
  return (
    <div>
      <div id="number">000000</div>
      <button onClick={onClickRandomNumber}>인증번호 전송</button>
    </div>
  );
}
