import * as S from "../list/BoardsList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardsListContainerUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Wrapper_title>
          <S.Title_number>번호</S.Title_number>
          <S.Title_title>제목</S.Title_title>
          <S.Title_writer>작성자</S.Title_writer>
          <S.Title_createdAt>날짜</S.Title_createdAt>
        </S.Wrapper_title>
        {props.data?.fetchBoards.map((el) => (
          <S.Wrapper_list key={el._id}>
            <S.List_number>
              {String(el._id).slice(-4).toUpperCase()}
            </S.List_number>
            <S.List_title id={el._id} onClick={props.onClickMovedBoard}>
              {el.title}
            </S.List_title>
            <S.List_writer>{el.writer}</S.List_writer>
            <S.List_createdAt>{getDate(el.createdAt)}</S.List_createdAt>
          </S.Wrapper_list>
        ))}
        <S.Wrapper_footer>
          <S.CreateNewBoard onClick={props.onClickNewCreateBoard}>
            <img alt="게시글등록" src="../BoardPage/List_newBoard.png"></img>
            게시물 등록하기
          </S.CreateNewBoard>
        </S.Wrapper_footer>
      </S.Wrapper>
    </S.Container>
  );
}