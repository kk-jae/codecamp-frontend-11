// recoil 실습 (props 드릴링 x) - 글로벌 state
// yarn add recoil
// app.tsx에 RecoilRoot 태그로 감싼 모든 태그들에 적용 가능합니다.

import { useEffect } from "react";
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";

export default function GlobalStateWithRecoilPage(): JSX.Element {
  // const [isEdit, setIsEdit] = useState(true); - 기존 사용 방법
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  // 초기값을 만들어서 사용해야하며,
  // 만들어 놓은 값은 어느페이지든 한번에 접근할 수 있습니다. (commons/stores/index.ts)

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <BoardWrite />;
  // return <BoardWrite isEdit={isEdit} />;
}
