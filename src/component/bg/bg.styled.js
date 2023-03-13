import styled from "@emotion/styled";

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
`;

export const DivBg = styled.div`
  z-index: 1;
  position: absolute;
  border-radius: 14px;
  margin-top: ${(props) => props.margin_top}px;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width}px;
  background-color: cornflowerblue;
  border: solid 2px #0037ff;
`;
export const ShipBg = styled.div`
  z-index: 100;
  position: absolute;
  width: 47px;
  height: 60px;
  bottom: 70px;
  left: 500px;

  animation: ship-animation 20s linear infinite;

  @keyframes ship-animation {
    0% {
      left: 500px;
      bottom: 70px;
    }
    50% {
      left: 600px;
      bottom: 80px;
    }
    100% {
      left: 500px;
      bottom: 70px;
    }
  }
`;
