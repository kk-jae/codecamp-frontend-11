import { firebaseApp } from "./../../../../commons/libraries/firebase";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  position: relative;
  background-color: black;

  :after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
    z-index: 1;
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// TOP3 컨테이너 시작
export const Top3_Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 99vw;
  padding: 0px 50px 0px 50px;
  font-size: 30px;
  color: white;
  margin-bottom: 50px;
  /* z-index: 2; */
`;

export const Top3_Wrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Top3_List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
`;

export const Top3_List_Wrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const Top3_border = styled.div`
  width: 120px;
  height: 120px;
  border: 10px ridge gray;
  border-radius: 50%;
  position: absolute;
  animation: TopNum 2s linear infinite normal;
  @keyframes TopNum {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const Top_num = styled.div`
  font-size: 65px;
  font-weight: 600;
  animation: Num 1s linear infinite;
  padding-bottom: 3px;
  @keyframes Num {
    0% {
      transform: rotate(-20deg);
    }

    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(-20deg);
    }
  }
`;
export const Top_Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 20px;
`;
export const Top_name = styled.div`
  width: 100%;
  font-size: 53px;
  font-weight: 600;
`;

export const Top_img = styled.div``;

// TOP3 컨테이너 종료

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const List_Container = styled.div`
  width: 100%;
  color: white;
  z-index: 2;
  /* border: 1px solid yellow; */
`;

export const List_Item = styled.div`
  width: 100%;
  height: 250px;
  border: 4px solid white;
  border-radius: 70px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  :hover {
    transform: scale(1.02);
  }
`;

export const Item_left = styled.div`
  width: 20%;
  height: 100%;
  padding: 20px;
`;

export const Left_img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Item_right = styled.div`
  width: 80%;
  height: 100%;
  color: white;
  padding: 30px;
`;

export const Right_left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px 0px 0px;
`;
export const Right_writer = styled.div`
  font-size: 30px;
  font-weight: 500;
  /* overflow: auto; */
  /* text-overflow: ellipsis; */
`;

export const Right_title = styled.div`
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  /* overflow: hidden; */
`;
export const Right_right = styled.div``;

// 페이지네이션
export const Wrapper_footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  position: relative;
  background-color: yellow;
`;

export const CreateNewBoard = styled.button`
  position: absolute;
  right: 10px;
  width: 150px;
  height: 45px;
  background-color: white;
  border: 1px solid #ffd600;
  box-shadow: 1px 1px 4px #ffd600;
  /* border: 1px solid #f2f2f2; */
  /* border-radius: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 8%;
  cursor: pointer;
`;
