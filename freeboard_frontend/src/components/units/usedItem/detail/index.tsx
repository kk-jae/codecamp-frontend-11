import styled from "@emotion/styled";
import UsedItemDetailBody from "./body";
import UsedItemDetailFooter from "./footer";

export default function UsedItemDetailUI() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Container>
      <UsedItemDetailBody />
      <UsedItemDetailFooter />
    </Container>
  );
}
