import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  console.log(router);
  const onClickMove1 = () => {
    router.push("/section05/05-02-static-routing-board-moved/1");
    //localhost:3000 생략
  };

  const onClickMove2 = () => {
    router.push("/section05/05-02-static-routing-board-moved/2");
    //localhost:3000 생략
  };

  const onClickMove3 = () => {
    router.push("/section05/05-02-static-routing-board-moved/3");
    //localhost:3000 생략
  };

  return (
    <div>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </div>
  );
}
