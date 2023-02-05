import styled from "@emotion/styled";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 50vh;
  /* display: flex; 캐러셀 뭉개짐 */
  /* flex-direction: row; */
  /* align-items: center; */
  background-color: #ffd500;
  position: relative;
`;

export const BannerText = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
export const TextTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
export const TextContents = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 80px;
  left: 50px;
`;
export const TextMain = styled.div``;
export const TextSub = styled.div``;

export const BannerCarousel = styled.div`
  background-color: red;
  width: 50%;
  height: 80%;
  position: absolute;
  right: 0;
  top: 30px;
  right: 60px;
`;

export const SliderParents = styled.div`
  width: 100%;
`;

export const SliderChild = styled.img`
  width: 100%;
  object-fit: cover;
`;
