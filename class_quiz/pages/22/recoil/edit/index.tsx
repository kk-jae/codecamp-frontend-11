import { useEffect, useState } from "react";
import { isEditState } from "../../../../src/commons/library/recoil";
import WritePage from "../../../../src/components/units/22/write";
import { useRecoilState } from "recoil";

export default function EditPage() {
  return <WritePage />;
}
