import { memo } from "react";

function ChildrenPage() {
  console.log("자식 컴포넌트가 렌더링 되었습니다.");

  return (
    <>
      <h2>=======자식컴포넌트=======</h2>
    </>
  );
}

export default memo(ChildrenPage);
