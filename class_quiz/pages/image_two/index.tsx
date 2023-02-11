import { gql } from "@apollo/client";

export default function ImagePage() {
  const onChangeUploadFile = (event) => {
    console.log(event.target.files?.[0]);
  };

  return (
    <>
      <div>이미지 업로드</div>
      <input type="file" onChange={onChangeUploadFile} />
    </>
  );
}
