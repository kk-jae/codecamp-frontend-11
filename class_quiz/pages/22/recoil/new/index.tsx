import { useEffect, useState } from "react";
import WritePage from "../../../../src/components/units/22/write";
import { isEditState } from "../../../../src/commons/library/recoil";
import { useRecoilState } from "recoil";

export default function NewPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <WritePage />;
}
