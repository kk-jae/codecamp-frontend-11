import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const List_detail = styled.span`
  cursor: pointer;
  padding: 18px;
`;

const NavigationList = [
  { name: "게시물 등록", page: "/homework/new" },
  { name: "게시물 리스트", page: "/homework/list" },
  { name: "Firebase", page: "/homework/firebase" },
];

export default function LayoutNavigation(props): JSX.Element {
  const router = useRouter();

  const onClickMovedPage = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(event.currentTarget.id);
  };

  return (
    <Wrapper>
      <List>
        {NavigationList.map((el) => (
          <List_detail key={el.page} id={el.page} onClick={onClickMovedPage}>
            {el.name}
          </List_detail>
        ))}
      </List>
    </Wrapper>
  );
}
