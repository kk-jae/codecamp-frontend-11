declare const window: typeof globalThis & {
  IMP: any;
};
// 윈도우안에 IMP가 있다고 명시 ( 없으면 IMP를 찾을 수 없으며, IMP 정보는 script에서 만들어줍니다.)

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp32114578"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 겹치면 안됩니다. 주석하면 자동으로 생성됨
        name: "갤럭시 z플립",
        amount: 1,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "https://localhost:3000/section28/28-01-paymont", // 모바일에서는 결제시, 페이지 주소가 바뀜. 따라서, 결제 끝나고 돌아갈 주소를 입력해야함
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

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
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      {/* iamport.payment.js */}
      {/* <script
        type="text/javascript"
        // src="https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js"  // 구버전
      ></script>  신버전 : JavaScript SDK */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>

      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
