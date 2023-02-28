import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: auto;
`;

export const Profile_Wrapper = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  padding: 10px;
`;

export const Profile_left = styled.div``;
export const Profile_left_img = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
`;
export const Profile_right = styled.div`
  margin: 15px 15px 15px 25px;
`;
export const Profile_right_text = styled.div`
  font-weight: 700;
  display: flex;
  line-height: 30px;
`;
export const Right_selet = styled.span`
  width: 70px;
  font-weight: 500;
`;

export const Baskets = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 13px;
`;

export const Baskets_left = styled.div`
  font-weight: 700;
`;

export const Baskets_right = styled.div``;
export const Baskets_item = styled.div`
  width: 1000px;
  padding: 10px;
  margin: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
`;

export const Baskets_image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
export const Baskets_seller_price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 10px;
  font-size: 14px;
  font-weight: 700;
`;
export const Baskets_seller = styled.div``;
export const Baskets_price = styled.div``;
