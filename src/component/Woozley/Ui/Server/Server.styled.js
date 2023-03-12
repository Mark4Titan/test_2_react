import styled from "@emotion/styled";

export const DivServer = styled.div`
  z-index: 5;
  position: absolute;
  ${(props) => props.WidthHeight}px;  
  ${(props) => props.TopLeft}px;
`;
