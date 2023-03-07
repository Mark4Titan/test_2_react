import styled from "@emotion/styled";

export const Divgroup = styled.div`
  display: flex;
  position: absolute;
  margin: 5px;
  ${(props) => props.TopLeft}px;
  width: 100px;
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
