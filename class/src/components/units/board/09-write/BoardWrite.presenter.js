import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  // props = {
  //   aaa=onClickSubmit,
  //   bbb=onChangeWriter,
  //   ccc=onChangeTitle,
  //   ddd=onChangeContents,
  //presenter.js

  const qqq = 3;
  return (
    <div>
      <div>@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@@</div>
      <div>
        작성자 : <RedInput type="text" onChange={props.onChangeWriter} />
        제목 : <input type="text" onChange={props.onChangeTitle} />
        내용 : <input type="text" onChange={props.onChangeContents} />
        <BlueButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </BlueButton>
      </div>
      <div>@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@@</div>
    </div>
    //presenter.js
  );
}

export const apple = 3;
//import 연습
