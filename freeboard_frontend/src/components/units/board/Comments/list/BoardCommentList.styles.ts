import styled from "@emotion/styled";
//과제
export const PAGE = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
`;

export const Footer_Footer = styled.div`
  width: 100%;
`;

export const Footer_Review = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Footer_Review_Board_img_writer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
export const Footer_Review_Profile_img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const Footer_Review_Board = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 0px 3px 5px;
`;

export const Footer_Review_Writer = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
`;

export const Footer_Review_contents = styled.div`
  font-size: 13px;
  font-weight: 500;
`;
export const Footer_Review_date = styled.div`
  font-size: 11px;
  color: gray;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Footer_Review_update_delete = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Footer_Review_update = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;
export const Footer_Review_delete = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;
