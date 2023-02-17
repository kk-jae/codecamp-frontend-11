import * as S from "../styeld/index";

export default function SighUpUI(props) {
  return (
    <S.ContainerForm onSubmit={props.handleSubmit(props.onClickSighUp)}>
      <S.Wrapper>
        <S.Header>
          <S.Header_SighUp>회원가입</S.Header_SighUp>
        </S.Header>
        <S.Body>
          <S.Body_Email>
            <S.Body_Text>이메일</S.Body_Text>
            <S.Body_Input
              placeholder="이메일을 입력하세요"
              {...props.register("email")}
              type="email"
            ></S.Body_Input>
            <S.Body_InputError>
              {props.formState.errors.email?.message}
            </S.Body_InputError>
          </S.Body_Email>
          <S.Body_Name>
            <S.Body_Text>이름</S.Body_Text>
            <S.Body_Input
              {...props.register("name")}
              placeholder="이름을 입력하세요"
            ></S.Body_Input>
            <S.Body_InputError>
              {props.formState.errors.name?.message}
            </S.Body_InputError>
          </S.Body_Name>
          <S.Body_Password>
            <S.Body_Text>비밀번호</S.Body_Text>
            <S.Body_Input
              {...props.register("pw1")}
              placeholder="비밀번호를 입력하세요"
              type="password"
            ></S.Body_Input>
            <S.Body_InputError>
              {props.formState.errors.pw1?.message}
            </S.Body_InputError>
          </S.Body_Password>
          <S.Body_Password2>
            <S.Body_Text>비밀번호 확인</S.Body_Text>
            <S.Body_Input
              {...props.register("pw2")}
              placeholder="비밀번호를 다시 입력하세요"
              type="password"
            ></S.Body_Input>
            <S.Body_InputError>
              {props.formState.errors.pw2?.message}
            </S.Body_InputError>
          </S.Body_Password2>
        </S.Body>
        <S.Footer>
          <S.Footer_Submit>회원가입 하기</S.Footer_Submit>
        </S.Footer>
      </S.Wrapper>
    </S.ContainerForm>
  );
}
