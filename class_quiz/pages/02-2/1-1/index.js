export default function AddCounter() {
  function AddCounterNumber() {
    const number = Number(document.getElementById("number").innerText) + 1;
    document.getElementById("number").innerText = number;
  }

  return (
    <div>
      <div id="number">0</div>
      <button onClick={AddCounterNumber}>카운트증가</button>
    </div>
  );
}
