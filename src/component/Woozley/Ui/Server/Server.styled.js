import styled from "@emotion/styled";

export const DivServer = styled.div`
  position: absolute;
  height: ${(props) => props.Height.height}px;

  top: ${(props) => props.TopLeft.top}px;
  left: ${(props) => props.TopLeft.left}px;
`;
