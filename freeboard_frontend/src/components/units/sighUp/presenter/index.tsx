import * as S from "../styeld/index";

export default function SighUpUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Header_SighUp>회원가입</S.Header_SighUp>
        </S.Header>
        <S.Body>
          <S.Body_Email>
            <S.Body_Text>이메일</S.Body_Text>
            <S.Body_Input
              placeholder="이메일을 입력하세요"
              onChange={props.onChangeEmail}
            ></S.Body_Input>
            <S.Body_InputError>{props.emailError}</S.Body_InputError>
          </S.Body_Email>
          <S.Body_Name>
            <S.Body_Text>이름</S.Body_Text>
            <S.Body_Input
              placeholder="이름을 입력하세요"
              onChange={props.onChangeName}
            ></S.Body_Input>
            <S.Body_InputError>{props.nameError}</S.Body_InputError>
          </S.Body_Name>
          <S.Body_Password>
            <S.Body_Text>비밀번호</S.Body_Text>
            <S.Body_Input
              placeholder="비밀번호를 입력하세요"
              onChange={props.onChangePassword}
              type="password"
            ></S.Body_Input>
            <S.Body_InputError>{props.passwordError}</S.Body_InputError>
          </S.Body_Password>
          <S.Body_Password2>
            <S.Body_Text>비밀번호 확인</S.Body_Text>
            <S.Body_Input
              placeholder="비밀번호를 다시 입력하세요"
              onChange={props.onChangePasswordCheck}
              type="password"
            ></S.Body_Input>
            <S.Body_InputError>{props.passwordCheckError}</S.Body_InputError>
          </S.Body_Password2>
          <S.Body_Picture>
            <S.Body_Picture_Input_noneDisplay
              type="file"
              onChange={props.onChangeUploadFile}
              ref={props.imgRef}
            />
            <S.Body_Picture_IMG
              src={
                props.imgUrl
                  ? `https://storage.googleapis.com/${props.imgUrl}`
                  : "/기본이미지.png"
              }
              // alt="웨않뒈"
              onClick={props.onClickImgUpload}
            />
            <S.Body_Picture_Input_Display>
              이미지 등록
            </S.Body_Picture_Input_Display>
          </S.Body_Picture>
        </S.Body>
        <S.Footer>
          <S.Footer_Submit onClick={props.onClickSighUp}>
            회원가입 하기
          </S.Footer_Submit>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}
