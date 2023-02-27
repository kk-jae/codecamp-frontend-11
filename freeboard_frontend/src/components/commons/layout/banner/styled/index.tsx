import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Wrapper_1st = styled.div`
  background-color: #fffff3;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
`;

export const My = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

export const My_img = styled.div`
  width: 25%;
  border-radius: 50%;
  background-image: url("/my.jpg");
  background-size: cover;
`;
export const My_text = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const My_text_one = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 30px;
`;
export const My_text_two = styled.div`
  font-size: 20px;
  line-height: 45px;
`;
export const My_text_three = styled.div``;

export const Wrapper_2st = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

export const Work = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 50px;
`;

export const Item = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const UsedItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  box-shadow: 0px 4px 20px rgba(167, 115, 244, 0.2);
  border: 3px solid #a593e0;
  border-radius: 30px;
  text-align: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 13px;

  :hover {
    transform: scale(1.03);
  }
`;
export const Board = styled.div`
  width: 400px;
  height: 500px;
  border: 3px solid #a593e0;
  box-shadow: 0px 4px 20px rgba(167, 115, 244, 0.2);
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  padding: 13px;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.03);
  }
`;

export const UsedItemTilte = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const UsedItemImg = styled.img`
  margin-top: 8px;
  width: 95%;
  height: 85%;
  border-radius: 10px;
`;
export const BoardTilte = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const BoardImg = styled.img`
  margin-top: 8px;
  width: 95%;
  height: 85%;
  border-radius: 10px;
`;

// export const Video = styled.video`
//   /* position: absolute; */
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   background-position: center;
// `;

export const Icon_img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const LeftIcon = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const RightIcon = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MiddleThree = styled.div`
  width: 100%;
  height: 33%;
  background-color: black;
`;
export const Wrapper_3st = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Contact = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 30px;
`;
export const Imp = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.div`
  padding-bottom: 8px;
`;
export const Email = styled.div`
  padding-bottom: 8px;
`;
export const Phone = styled.div`
  padding-bottom: 8px;
`;
export const Github = styled.div`
  padding-bottom: 8px;
`;
export const Blog = styled.div`
  padding-bottom: 8px;
`;
