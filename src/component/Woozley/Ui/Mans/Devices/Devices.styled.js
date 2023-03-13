import styled from "@emotion/styled";

export const DivDevices = styled.div`
  position: absolute;
  height: ${(props) => props.Size.height}px;

  top: ${(props) => props.TopLeft.top}px;
  left: ${(props) => props.TopLeft.left}px;
`;
export const DevicesAnim = styled.div`
  position: absolute;
  height: ${(props) => props.Anim.height}px;
  top: ${(props) => props.TopLeft.top}px;
  left: ${(props) => props.TopLeft.left}px;
  width: ${(props) => props.Anim.widthMax}px;
  transform: translate(${(props) => props.Anim.transform});

  animation: ${(props) => props.Anim.titl}-${(props) => props.Data}-animation ${(
      props
    ) => props.PAnim * 10}ms linear;

  @keyframes ${(props) => props.Anim.titl}-${(props) => props.Data}-animation {
    0% {
      width: ${(props) => props.Anim.widthMin}px;
    }
    100% {
      width: ${(props) => props.Anim.widthMax}px;
    }
  }
`;


export const LatText = styled.div`
  background-color: #8a2be20f;
  color: #000;
  padding: 10px;
  border-radius: 4px;
  font-size: 17px;
  z-index: 12;
  transform: translate(15px, -42px);

  background: rgba(171, 100, 100, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.6px);
  -webkit-backdrop-filter: blur(8.6px);
  border: 1px solid rgb(75 75 75 / 91%);
`;

