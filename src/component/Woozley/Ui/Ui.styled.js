import styled from "@emotion/styled";

export const Divgroup = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  ${(props) => props.TopLeft}px;
  width: 200px;
`;
export const DivPico = styled.div`
  // position: absolute;
  margin: 5px;
  height: ${(props) => props.TopLeft.height}px;
  margin-top: ${(props) => props.TopLeft.margin_top}px;
`;

export const ImgPico = styled.img`
  width: 100%;
  height: 100%;
`;
export const DivReset = styled.div`
  position: absolute;
  top: 47px;
  background-color: burlywood;
  width: 100px;
  color: red;
  height: 44px;
  display: grid;
  justify-items: center;
  font-size: 20px;
  margin-left: 52px;
  align-items: center;
  border: solid 1px;
  cursor: pointer;
  role="button";
  tabindex="0";
   &:hover {
    font-size: 25px;
  }

`;
