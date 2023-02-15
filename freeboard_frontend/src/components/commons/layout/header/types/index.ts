import type { MouseEvent } from "react";

export interface IProps {
  onClickLogin: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickMovePage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickLogo: (event: MouseEvent<HTMLDivElement>) => void;
  onClickSighUp: (event: MouseEvent<HTMLSpanElement>) => void;
}
