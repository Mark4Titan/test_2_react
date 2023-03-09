import styled from "@emotion/styled";

export const DivServer = styled.div`
  position: absolute;
  height: 60px;

  top: ${(props) => props.TopLeft.top}px;
  left: ${(props) => props.TopLeft.left}px;
`;
