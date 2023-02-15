import styled from "@emotion/styled";

export const ContainerForm = styled.form`
  width: 100%;
  height: calc(100vh - 140px); // 네비게이션 height
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  box-shadow: 2px 2px 5px black;
  border-radius: 30px;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header_SighUp = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
export const Body = styled.div`
  width: 100%;
  /* height: 60%; */
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 15% 0px 15%;
`;

export const Body_Email = styled.div`
  width: 100%;
`;
export const Body_Name = styled.div`
  width: 100%;
`;
export const Body_Password = styled.div`
  width: 100%;
`;
export const Body_Password2 = styled.div`
  width: 100%;
`;

export const Body_Text = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
`;
export const Body_Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 16px;
  border: 1px solid white;
  padding: 8px;
  font-size: 11px;
  box-shadow: 1px 1px 5px black;

  :focus {
  }
`;
export const Body_InputError = styled.div`
  margin: 8px 0px 0px 8px;
  font-size: 8px;
  color: red;
  font-weight: 500;
`;

export const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  padding: 0px 15% 0px 15%;
`;

export const Footer_Submit = styled.button`
  width: 100%;
  font-size: 20px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid white;
  box-shadow: 1px 1px 5px black;
  transition: all 0.2s;

  :active {
    transform: scale(0.97);
  }
`;
