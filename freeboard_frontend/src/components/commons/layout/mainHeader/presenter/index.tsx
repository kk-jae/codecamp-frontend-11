import * as S from "../styled/index";

export default function HeaderUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Header_left>HyunJae Kwon</S.Header_left>
          <S.Header_right>
            <S.right_item>ABOUT ME</S.right_item>
            <S.right_item>WORK</S.right_item>
            <S.right_item>CONTACT</S.right_item>
          </S.Header_right>
        </S.Header>
      </S.Wrapper>
    </S.Container>
  );
}
