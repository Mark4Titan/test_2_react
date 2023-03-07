import styled from "@emotion/styled";

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
`;

export const DivBg = styled.div`
  position: absolute;
  margin-left: 50px;
  margin-top: ${(props) => props.margin_top}px;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width}px;
  background-color: cornflowerblue;
  border: solid 2px #0037ff;
`;
