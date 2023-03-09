import styled from "@emotion/styled";

export const DivDevices = styled.div`
  position: absolute;
  height: ${(props) => props.Size.height}px;

  top: ${(props) => props.TopLeft.top}px;
  left: ${(props) => props.TopLeft.left}px;
`;
