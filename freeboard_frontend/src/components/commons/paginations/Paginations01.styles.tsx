import styled from "@emotion/styled";

export const PageNation = styled.div`
  color: white;
`;

export const PageNationBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`;
interface IPageProps {
  isActive?: boolean;
}
export const PageNationBtnNumber = styled.button`
  border: none;
  font-size: 20px;
  background-color: white;
  color: ${(props: IPageProps) =>
    props.isActive ? "black" : "rgb(48, 52, 65)"};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
