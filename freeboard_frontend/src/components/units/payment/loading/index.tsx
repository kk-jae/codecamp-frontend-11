import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentLoading() {
  const router = useRouter();
  const [price, setPrice] = useState(0);

  const onChangeFirst = (p: number) => () => {
    setPrice(Number(p));
  };

  const onClickPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp32114578"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 겹치면 안됩니다. 주석하면 자동으로 생성됨
        name: "중고마켓 마일리지 충전",
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "권현재",
        buyer_tel: "010-2030-1309",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "https://localhost:3000/section28/28-01-paymont", // 모바일에서는 결제시, 페이지 주소가 바뀜. 따라서, 결제 끝나고 돌아갈 주소를 입력해야함
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          router.push("/28/payment/complete");
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // createPointTransactionOfLoading (gql)
          // createPointTransactiionOfBuyingAndSelling : 구매한 포인트로 결제 (gql)
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  return (
    <>
      {/* jQuery */}
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      {/* iamport.payment.js */}
      {/* <script
      type="text/javascript"
      // src="https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js"  // 구버전
    ></script>  신버전 : JavaScript SDK */}
      {/* ================ 1. 해당 함수를 useEffete 안에 선언하여 먼저 실행시켜야 첫 로드때도 이상없이 작동합니다================  */}
      {/* ================ 2. Head 태그안에 넣는다. */}
      {/* <script src="https://cdn.iamport.kr/v1/iamport.js"></script> */}
      {/* ================해당 함수를 useEffete 안에 선언하여 먼저 실행시켜야 첫 로드때도 이상없이 작동합니다================  */}
      <input onChange={onChangeFirst(500)} type="radio" name="price" />
      500원
      <input onChange={onChangeFirst(1000)} type="radio" name="price" />
      1000원
      <input onChange={onChangeFirst(2000)} type="radio" name="price" />
      2000원
      <input onChange={onChangeFirst(5000)} type="radio" name="price" />
      5000원
      <button onClick={onClickPayment}>충전하기</button>
      뮤테이션 해야함
    </>
  );
}
