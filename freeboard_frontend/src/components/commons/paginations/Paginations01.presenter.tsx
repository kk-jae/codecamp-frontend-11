import * as S from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <S.PageNation>
      <S.PageNationBtn
        onClick={props.onClickPrevPage}
        disabled={props.startPage === 1 ? true : false}
      >
        <span>{"<"}</span>
      </S.PageNationBtn>
      {new Array(10).fill(1).map(
        (el, index) =>
          index + props.startPage <= props.lastPage && (
            <S.PageNationBtnNumber
              key={index + props.startPage}
              onClick={props.onClickBoards}
              id={String(index + props.startPage)}
              isActive={props.startPage + index === props.activedPage}
            >
              {index + props.startPage}
            </S.PageNationBtnNumber>
          )
      )}
      <S.PageNationBtn
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 <= props.lastPage ? false : true}
      >
        {">"}
      </S.PageNationBtn>
    </S.PageNation>
  );
}
