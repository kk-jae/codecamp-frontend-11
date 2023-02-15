export default function HOFPageBtn() {
  const onClickButton = (qqq: number) => () => {
    console.log(qqq);
  };
  return (
    <>
      <div>
        <button onClick={onClickButton(123)}>버튼</button>
      </div>
    </>
  );
}
