import {
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import * as S from "../styled";
import { IProps } from "../type";
import Link from "next/link";
import { useRouter } from "next/router";

{
  /* <S.Video autoPlay muted playsInline loop={true}>
  <source src="/배경비디오.mp4" type="video/mp4" />
</S.Video> */
}

export default function BannerUI(props) {
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/homepage/list");
  };

  return (
    <S.Container>
      <S.Wrapper_1st>
        <S.My>
          <S.My_img></S.My_img>
          <S.My_text>
            <S.My_text_one>ABOUT ME</S.My_text_one>
            <S.My_text_two>
              안녕하세요 Front-end developer{" "}
              <span style={{ fontWeight: "bold" }}>권현재</span>입니다. <br />
              해외연수(중국), 기술영업 등 다양한 경험을 하면서 온라인의 기술력을
              체감하였습니다. <br />
              이후 커리어 전환을 다짐하여 개발 공부를 시작하게 되었습니다.{" "}
              <br />
              한계에 도전하고 새로운것을 만들어내는 것이 즐겁습니다.
              <br />
              현재 HTML, CSS, JavaScript를 시작으로 TypeScript, ReactJS, git,
              Graphql-API, FireBase 등을 공부하고있습니다. <br />
              사용자의 시선을 사로잡고, 편리한 웹을 만들기 위해 노력하겠습니다.
              잘 부탁드립니다.
            </S.My_text_two>
            <S.My_text_three></S.My_text_three>
          </S.My_text>
        </S.My>
      </S.Wrapper_1st>
      <S.Wrapper_2st>
        <S.Work>Work</S.Work>
        <S.Item>
          <S.UsedItem onClick={props.onClickUsedItem}>
            <S.UsedItemTilte>중고 마켓</S.UsedItemTilte>
            <S.UsedItemImg src="/중고나라.gif" />
          </S.UsedItem>
          <S.Board onClick={props.onClickBoard}>
            <S.BoardTilte>자유게시판</S.BoardTilte>
            <S.BoardImg src="/Board.gif" />
          </S.Board>
        </S.Item>
        <S.LeftIcon>
          <S.Icon_img src="/brandIcon/html.png" />
          <S.Icon_img src="/brandIcon/css.png" />
          <S.Icon_img src="/brandIcon/java-script.png" />
          <S.Icon_img src="/brandIcon/typescript.png" />
        </S.LeftIcon>
        <S.RightIcon>
          <S.Icon_img src="/brandIcon/react.png" />
          <S.Icon_img src="/brandIcon/github.png" />
          <S.Icon_img src="/brandIcon/Graphql.png" />
          <S.Icon_img src="/brandIcon/Apollo-Client.png" />
        </S.RightIcon>
      </S.Wrapper_2st>
      <S.Wrapper_3st>
        <S.Contact>Contact</S.Contact>
        <S.Imp>
          <S.Name>
            <UserOutlined /> Hyun Jae Kwon
          </S.Name>
          <S.Email>
            <MailOutlined /> kk_jae@naver.com
          </S.Email>
          <S.Phone>
            <PhoneOutlined /> 010-2030-1309
          </S.Phone>
          <S.Github>
            <GithubOutlined />{" "}
            <Link href={"https://github.com/kk-jae"}> GitHub</Link>
          </S.Github>
          <S.Blog>
            <SmileOutlined />
            <Link href={"https://kk-jae.tistory.com"}> 블로그</Link>
          </S.Blog>
        </S.Imp>
      </S.Wrapper_3st>
    </S.Container>
  );
}
