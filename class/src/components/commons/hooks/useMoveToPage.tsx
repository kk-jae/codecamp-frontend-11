import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void; // 함수형
}

// 무엇을 return해주고 있으니 void는 아님
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const { visitedPage, setVisitedPage } = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
    setVisitedPage(path); // 로그인페이지일때는 set하지 않도록 조건 추가
    // localStorage.setItem("visitedPage", path); // 로컬스토리지도 가능!
  };

  return {
    onClickMoveToPage, // 숏핸드
    // onClickMoveToPage: onClickMoveToPage,
    //  { key : value }

    visitedPage,
  };
};

// 이전페이지로 돌아가게 만들 수 있습니다. ( 1. 리코일스테이트 활용, 2. 로컬스토리지 활용)
