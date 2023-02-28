import { uuidv4 } from "@firebase/util";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import * as S from "../stlyed/index";

export default function NavigationUI() {
  const { onClickMoveToPage } = useMoveToPage();

  const Board = [
    { name: "게시글", url: "/homepage/list" },
    // { name: "게시글", url: "/homepage/list" }
  ];

  const UsedItem = [{ name: "중고마켓", url: "/homepage/UsedItem/list" }];

  return (
    <S.Container>
      <S.Wrapper>
        <S.Board>
          {Board.map((el, index) => (
            <S.Board_Menu onClick={onClickMoveToPage(el.url)} key={index}>
              {el.name}
            </S.Board_Menu>
          ))}
        </S.Board>
        <S.UsedItem>
          {UsedItem.map((el, index) => (
            <S.UsedItem_Menu onClick={onClickMoveToPage(el.url)} key={index}>
              {el.name}
            </S.UsedItem_Menu>
          ))}
        </S.UsedItem>
      </S.Wrapper>
    </S.Container>
  );
}
