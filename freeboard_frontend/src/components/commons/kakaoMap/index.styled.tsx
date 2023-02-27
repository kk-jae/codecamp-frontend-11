import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  position: relative;
`;
export const LatLng_Wrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
  display: flex;
`;

export const LatLng = styled.div`
  background-color: black;
  opacity: 0.6;
  color: white;
  border-radius: 10px;
  padding: 5px;
  margin: 2px;
`;
