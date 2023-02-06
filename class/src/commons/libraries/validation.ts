export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다!");
    return false;
    // 받는 함수가 종료되어야 하는데 여기에 return 만 있으면 해당 페이지 함수만 종료
  }

  if (file.size > 5 * 1024 * 1024) {
    //
    alert("파일 용량이 너무 큽니다. (제한 : 5MB");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업로드 가능합니다!!!");
    return false;
  }
  // accept 기능 활용도 가능합니다. (태그에 적용)

  return true;
};
