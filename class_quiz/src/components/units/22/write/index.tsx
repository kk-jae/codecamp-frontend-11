import { useState } from "react";
import { isEditState } from "../../../../commons/library/recoil";
import { useRecoilState } from "recoil";

export default function WritePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <div>
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </div>
  );
}
