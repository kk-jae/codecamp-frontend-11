import * as S from "../styeld/index";

export default function SighUpUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Header_SighUp>회원가입</S.Header_SighUp>
        </S.Header>
        <S.Body>
          <S.Body_Email>
            <S.Body_Text>이메일</S.Body_Text>
            <S.Body_Input placeholder="이메일을 입력하세요"></S.Body_Input>
            <S.Body_InputError>이메일은 필수입니다.</S.Body_InputError>
          </S.Body_Email>
          <S.Body_Name>
            <S.Body_Text>이름</S.Body_Text>
            <S.Body_Input placeholder="이름을 입력하세요"></S.Body_Input>
            <S.Body_InputError>이름은 필수입니다.</S.Body_InputError>
          </S.Body_Name>
          <S.Body_Password>
            <S.Body_Text>비밀번호</S.Body_Text>
            <S.Body_Input placeholder="비밀번호를 입력하세요"></S.Body_Input>
            <S.Body_InputError>비밀번호는 필수입니다.</S.Body_InputError>
          </S.Body_Password>
          <S.Body_Password2>
            <S.Body_Text>비밀번호 확인</S.Body_Text>
            <S.Body_Input placeholder="비밀번호를 다시 입력하세요"></S.Body_Input>
            <S.Body_InputError>비밀번호를 확인해주세요</S.Body_InputError>
          </S.Body_Password2>
        </S.Body>
        <S.Footer>
          <S.Footer_Submit>회원가입 하기</S.Footer_Submit>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}
