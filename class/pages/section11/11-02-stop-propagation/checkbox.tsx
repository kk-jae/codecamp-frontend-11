export default function Checkbox() {
  const qqq2 = () => {
    alert("2번 클릭");
  };
  const qqq3 = (event) => {
    event.stopPropagation();
    // event.stopPropagation()이 없을경우 3번의 부모태그인 2번클릭, 1번클릭 모두 동작합니다.
    alert("3번 클릭");
  };

  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
