import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "../../section24/24-07-typescript-generic-use-state";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 게시물 등록하기 버튼이라고 가정 !!
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);

    const result = await axios.get("https//koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data.title);

    setIsSubmitting(false);
  };
  // 원래는 State의 마지막 false가 실행되어 처음부터 disabled가 false로 나와야하지만, 중간에 await를 만나 func이 마이크로큐에 들어가면서 한턴 쉬게 되어
  // 그 시간동안 disabled가 true로 작동 됩니다.

  return (
    <div>
      <button onClick={wrapAsync(onClickSync)} disabled={isSubmitting}>
        REST-API(동기) 요청하기
      </button>
    </div>
  );
}
