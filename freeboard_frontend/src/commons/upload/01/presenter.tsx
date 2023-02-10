import * as S from "./styled";

export default function Upload01UI(props) {
  return (
    <S.Upload01Container>
      {props.fileUrl !== "" ? (
        <S.Upload01Img
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.Upload01ClickBtn onClick={props.onClickUpload}>
          업로드
        </S.Upload01ClickBtn>
      )}
      <input
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
        style={{ display: "none" }}
      />
    </S.Upload01Container>
  );
}
