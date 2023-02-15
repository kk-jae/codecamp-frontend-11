import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/stores";
import * as S from "../styeld/index";

export default function LogInPageUI(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Header_SighUp>Star Life</S.Header_SighUp>
        </S.Header>
        <S.Body>
          <S.Body_Email>
            <S.Body_Text>이메일</S.Body_Text>
            <S.Body_Input
              onChange={props.onChangeEmail}
              placeholder="이메일을 입력하세요"
              type="email"
            ></S.Body_Input>
            <S.Body_InputError>{props.emailError}</S.Body_InputError>
          </S.Body_Email>
          <S.Body_Password>
            <S.Body_Text>비밀번호</S.Body_Text>
            <S.Body_Input
              onChange={props.onChangePassword}
              placeholder="비밀번호를 입력하세요"
              type="password"
            ></S.Body_Input>
            <S.Body_InputError>{props.passwordError}</S.Body_InputError>
          </S.Body_Password>
        </S.Body>
        <S.Footer>
          <S.Footer_Submit onClick={props.onClickLogIn}>로그인</S.Footer_Submit>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}
