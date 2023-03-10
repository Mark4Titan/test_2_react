import styled from "@emotion/styled";

export const DivServer = styled.div`
  z-index: 5;
  position: absolute;
  height: ${(props) => props.Height.height}px;

  top: ${(props) => props.TopLeft.top}px;
  left: ${(props) => props.TopLeft.left}px;
`;
