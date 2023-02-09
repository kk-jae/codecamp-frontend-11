import * as S from "../styled";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Top3 = [{ name_kr: "스킵잭", name_en: "skipjack", contents: "내용" }];

export default function BannerUI() {
  return (
    <S.Container>
      <S.Wrapper_1st>
        <S.TopContainer>
          안녕하세요 <br />
          만나서 반갑습니다.
        </S.TopContainer>
      </S.Wrapper_1st>
      <S.Wrapper_2st>
        <S.MiddleContainer>
          <S.MiddleOne>
            <S.One>
              <S.OneImg></S.OneImg>
              <S.OneText>
                <S.OneText_Name>
                  <S.OneText_Name_kr>스킵잭</S.OneText_Name_kr>
                  <S.OneText_Name_en>SkipJack</S.OneText_Name_en>
                </S.OneText_Name>
                <S.OneText_Contents>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, sit dolores! Esse, veniam distinctio. At expedita sunt
                  iusto! Similique laborum reprehenderit voluptate nobis
                  corrupti! Rem repellendus eaque quisquam magnam minima.
                </S.OneText_Contents>
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
          </S.MiddleOne>
          <S.MiddleTwo>
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
                  <S.OneText_Name_kr>스킵잭</S.OneText_Name_kr>
                  <S.OneText_Name_en>SkipJack</S.OneText_Name_en>
                </S.OneText_Name>
                <S.OneText_Contents>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, sit dolores! Esse, veniam distinctio. At expedita sunt
                  iusto! Similique laborum reprehenderit voluptate nobis
                  corrupti! Rem repellendus eaque quisquam magnam minima.
                </S.OneText_Contents>
              </S.OneText>
              <S.OneImg></S.OneImg>
            </S.One>
          </S.MiddleTwo>
          <S.MiddleThree>
            <S.One>
              <S.OneImg></S.OneImg>
              <S.OneText>
                <S.OneText_Name>
                  <S.OneText_Name_kr>스킵잭</S.OneText_Name_kr>
                  <S.OneText_Name_en>SkipJack</S.OneText_Name_en>
                </S.OneText_Name>
                <S.OneText_Contents>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, sit dolores! Esse, veniam distinctio. At expedita sunt
                  iusto! Similique laborum reprehenderit voluptate nobis
                  corrupti! Rem repellendus eaque quisquam magnam minima.
                </S.OneText_Contents>
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
          </S.MiddleThree>
        </S.MiddleContainer>
      </S.Wrapper_2st>
      <S.Wrapper_3st>세번째</S.Wrapper_3st>
    </S.Container>
  );
}
