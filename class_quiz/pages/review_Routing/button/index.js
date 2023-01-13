import { useRouter } from "next/router";

export default function RoutingReview() {
  const router = useRouter();

  const onClickBtn1 = () => {
    router.push("/review_Routing/moved/1");
  };
  const onClickBtn2 = () => {
    router.push("/review_Routing/moved/2");
  };
  const onClickBtn3 = () => {
    router.push("/review_Routing/moved/3");
  };

  return (
    <div>
      <button onClick={onClickBtn1}>1번 게시글로 이동</button>
      <button onClick={onClickBtn2}>2번 게시글로 이동</button>
      <button onClick={onClickBtn3}>3번 게시글로 이동</button>
    </div>
  );
}
