import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/stores";
import * as S from "../styeld/index";
import { useForm } from "react-hook-form";

export default function LogInPageUI(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  return (
    <S.ContainerForm onSubmit={props.handleSubmit(props.onClickLogIn)}>
      <S.Wrapper>
        <S.Header>
          <S.Header_SighUp>Star Life</S.Header_SighUp>
        </S.Header>
        <S.Body>
          <S.Body_Email>
            <S.Body_Text>이메일</S.Body_Text>
            <S.Body_Input
              placeholder="이메일을 입력하세요"
              type="email"
              {...props.register("email")}
            ></S.Body_Input>
            <S.Body_InputError>
              {props.formState.errors.email?.message}
            </S.Body_InputError>
          </S.Body_Email>
          <S.Body_Password>
            <S.Body_Text>비밀번호</S.Body_Text>
            <S.Body_Input
              placeholder="비밀번호를 입력하세요"
              type="password"
              {...props.register("password")}
            ></S.Body_Input>
            <S.Body_InputError>
              {props.formState.errors.password?.message}
            </S.Body_InputError>
          </S.Body_Password>
        </S.Body>
        <S.Footer>
          <S.Footer_Submit>로그인</S.Footer_Submit>
        </S.Footer>
      </S.Wrapper>
    </S.ContainerForm>
  );
}
