export default function Container(): JSX.Element {
  ["철수", "영희", "훈이", "맹구"].map((el, index) => {
    if (el.includes("영희") === true) {
      console.log(`영희는 ${index + 1}번째 칸에 들어있습니다.`);
    }
  });

  return <></>;
}
