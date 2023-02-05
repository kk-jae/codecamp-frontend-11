import { useState, MouseEvent } from "react";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01(props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10); // type에러를 해결하기 위해 ?? 10을 추가하였습니다. (api통해 받아오기 전에는 언디파인드이므로 언디파인드일때 값을 임의로 만들어 놓습니다.)
  const [activedPage, setActivedPage] = useState(1);

  const onClickBoards = (event: MouseEvent<HTMLButtonElement>): void => {
    void props.refetch({ page: Number(event?.currentTarget.id) });
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
  };

  const onClickPrevPage = (): void => {
    if (startPage == 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickBoards={onClickBoards}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
