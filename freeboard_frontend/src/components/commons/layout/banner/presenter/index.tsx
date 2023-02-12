import * as S from "../styled";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function BannerUI(props) {
  return (
    <S.Container>
      <S.Wrapper_1st>
        <S.TopContainer></S.TopContainer>
      </S.Wrapper_1st>
      <S.Wrapper_2st>
        <S.MiddleContainer>
          {/* <S.MiddleBest3Text>Top 3</S.MiddleBest3Text> */}
          {props.data?.fetchBoardsOfTheBest.map((el) => (
            <S.ElContainer>
              <S.MiddleOne>
                <S.One>
                  <S.OneImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    // src={`https://storage.googleapis.com/${el.images}`}
                    alt="이미지가 없습니다."
                  />

                  <S.OneText>
                    <S.OneText_Name>
                      <S.OneText_Name_kr>{el.writer}</S.OneText_Name_kr>
                      <S.OneText_Name_en>{el.title}</S.OneText_Name_en>
                    </S.OneText_Name>
                    <S.OneText_Contents>{el.contents}</S.OneText_Contents>
                  </S.OneText>
                  <S.OneImp>
                    <S.OneImp_Instagram>
                      <InstagramOutlined />
                    </S.OneImp_Instagram>
                    <S.OneImp_Youtube>
                      <FacebookOutlined />
                    </S.OneImp_Youtube>
                    <S.OneImp_FaceBook>
                      <YoutubeOutlined />
                    </S.OneImp_FaceBook>
                    <S.OneImp_Like>♥ {el.likeCount}</S.OneImp_Like>
                  </S.OneImp>
                </S.One>
              </S.MiddleOne>
              {/* <S.MiddleTwo>
                <S.One>
                  <S.OneImp>
                    <S.OneImp_Instagram>
                      <InstagramOutlined />
                    </S.OneImp_Instagram>
                    <S.OneImp_Youtube>
                      <FacebookOutlined />
                    </S.OneImp_Youtube>
                    <S.OneImp_FaceBook>
                      <YoutubeOutlined />
                    </S.OneImp_FaceBook>
                  </S.OneImp>
                  <S.OneText>
                    <S.OneText_Name>
                      <S.OneText_Name_kr>{el.writer}</S.OneText_Name_kr>
                      <S.OneText_Name_en>{el.title}</S.OneText_Name_en>
                    </S.OneText_Name>
                    <S.OneText_Contents>{el.contents}</S.OneText_Contents>
                  </S.OneText>
                  <S.OneImg
                    src={`https://storage.googleapis.com/${el.images}`}
                    alt="아놔"
                  />{" "}
                </S.One>
              </S.MiddleTwo>
              <S.MiddleThree>
                <S.One>
                  <S.OneImg
                    src={`https://storage.googleapis.com/${el.images}`}
                    alt="아놔"
                  />{" "}
                  <S.OneText>
                    <S.OneText_Name>
                      <S.OneText_Name_kr>{el.writer}</S.OneText_Name_kr>
                      <S.OneText_Name_en>{el.title}</S.OneText_Name_en>
                    </S.OneText_Name>
                    <S.OneText_Contents>{el.contents}</S.OneText_Contents>
                  </S.OneText>
                  <S.OneImp>
                    <S.OneImp_Instagram>
                      <InstagramOutlined />
                    </S.OneImp_Instagram>
                    <S.OneImp_Youtube>
                      <FacebookOutlined />
                    </S.OneImp_Youtube>
                    <S.OneImp_FaceBook>
                      <YoutubeOutlined />
                    </S.OneImp_FaceBook>
                  </S.OneImp>
                </S.One>
              </S.MiddleThree> */}
            </S.ElContainer>
          ))}
        </S.MiddleContainer>
      </S.Wrapper_2st>
      <S.Wrapper_3st>세번째</S.Wrapper_3st>
    </S.Container>
  );
}
