import * as S from "./BoardsWrite.styles";
import { ChangeEvent, MouseEvent } from "react";

interface IPortFolioCreateBoardsUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickContents: (event: MouseEvent<HTMLButtonElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickUpdateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  isActive: boolean;
  data?: any;
}

export default function PortFolioCreateBoardsUI(
  props: IPortFolioCreateBoardsUIProps
) {
  return (
    <S.Container>
      <S.Head>게시물 {props.isEdit ? "수정" : "등록"}</S.Head>
      <S.Title>
        <S.FirstContent>
          <S.FirstContentItem1>
            <S.FirstContentHead1>
              작성자
              <S.TextError>{props.writerError}</S.TextError>
            </S.FirstContentHead1>
            <S.FirstContentInput1
              onChange={props.onChangeWriter}
              type="text"
              placeholder="이름을 입력하세요"
              defaultValue={props.data?.fetchBoard.writer}
              // disabled={props.isEdit ? true : false}
            />
          </S.FirstContentItem1>
          <S.FirstContentItem1>
            <S.FirstContentHead1>
              비밀번호
              <S.TextError>{props.passwordError}</S.TextError>
            </S.FirstContentHead1>
            <S.FirstContentInput1
              onChange={props.onChangePassword}
              type="password"
              placeholder="비밀번호를 입력하세요"
              defaultValue={props.data?.fetchBoard.password}
            />
          </S.FirstContentItem1>
        </S.FirstContent>
        <S.Content>
          <S.ContentHead>
            제목 <S.TextError>{props.titleError}</S.TextError>
          </S.ContentHead>
          <S.ContentInput
            onChange={props.onChangeTitle}
            placeholder="제목을 입력해주세요"
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.Content>
        <S.Content>
          <S.ContentHead>
            내용
            <S.TextError>{props.contentsError}</S.TextError>
          </S.ContentHead>
          <S.ContentInputN
            onChange={props.onChangeContents}
            placeholder="내용을 입력하세요"
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.Content>
        <S.Content>
          <S.ContentHead>주소</S.ContentHead>
          <S.AdrTop>
            <S.AdrTopInput placeholder="07250" />
            <S.AdrTopBtn>우편번호 검색</S.AdrTopBtn>
          </S.AdrTop>
          <S.AdrBot>
            <S.ContentInput></S.ContentInput>
            <S.ContentInput></S.ContentInput>
          </S.AdrBot>
        </S.Content>
        <S.Content>
          <S.ContentHead onChange={props.onChangeYoutubeUrl}>
            유튜브
          </S.ContentHead>
          <S.ContentInput placeholder="링크를 복사해주세요" />
        </S.Content>
        <S.ContentPhoto>
          <S.ContentHead>사진첨부</S.ContentHead>
          <S.PhotoHead>
            <S.ContentPhotoPic>
              <S.Pic>+</S.Pic>
              <S.Pic>Upload</S.Pic>
            </S.ContentPhotoPic>
            <S.ContentPhotoPic>
              <S.Pic>+</S.Pic>
              <S.Pic>Upload</S.Pic>
            </S.ContentPhotoPic>
            <S.ContentPhotoPic>
              <S.Pic>+</S.Pic>
              <S.Pic>Upload</S.Pic>
            </S.ContentPhotoPic>
          </S.PhotoHead>
        </S.ContentPhoto>
        <S.Content>
          <S.ContentHead>메인 설정</S.ContentHead>
          <S.ContentInp type="radio" name="main" />
          유튜브
          <S.ContentInp type="radio" name="main" />
          사진
        </S.Content>
      </S.Title>
      <S.LastBtn
        onClick={
          props.isEdit ? props.onClickUpdateBoard : props.onClickContents
        }
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.LastBtn>
    </S.Container>
  );
}
