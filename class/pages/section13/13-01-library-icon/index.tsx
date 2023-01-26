import { UpCircleOutlined } from "@ant-design/icons"
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color:red;
  font-size:50px;
`

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event : MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id)
    // MyIcon에 직접 id와 onClick을 적용하지 않았으므로 currentTarget.id를 받아와야합니다.
  };

  return (
      <div id="삭제할게시글ID"  onClick={onClickDelete}>
        <MyIcon />
      </div>
      // 라이브러리 특성상 버튼 클릭시 자동으로 감싸고있는 태그에 id값이 적용되므로, 
      // 직접 만들어서 컨트롤할 수 있게 해야합니다. 
      // 혹은 MyIcon에 직접 주고 event.currentTarget.id를 가져와도 동일하게 작동합니다. (이벤트버블링)
      );
}