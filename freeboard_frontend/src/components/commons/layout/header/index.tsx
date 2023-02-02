import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: yellow; */
`;

export default function LayoutHeader(props): JSX.Element {
  return (
    <Wrapper>
      <div>메인 로고</div>
      <div>페이지 이름</div>
    </Wrapper>
  );
}
