import useMovedPage from "./hook";

export default function MovePage() {
  const { onClickMovedPage } = useMovedPage();

  return (
    <>
      <div>
        <button onClick={onClickMovedPage("/boards")}>게시물 이동</button>
        <button onClick={onClickMovedPage("/markets")}>마이페이지 이동</button>
        <button onClick={onClickMovedPage("/mypages")}>회원가입 이동</button>
      </div>
    </>
  );
}
