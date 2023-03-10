import styled from "@emotion/styled";

export const Divgroup = styled.div`
  z-index: 6;
  display: flex;
  justify-content: center;
  position: absolute;
  ${(props) => props.TopLeft}px;
  width: 230px;
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
const tog = (val) => {
  if (val === 0) return;
  return `pointer-events: none;
  color: #b0cad6;
    `;
};
export const DivButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: blue;
  ${(props) => (props.tog ? tog(props.tog) : tog(0))};

  &:hover {
    font-size: 25px;
    color: red;
  }
`;
export const DivRegion = styled.div`
  z-index: 7;
  position: absolute;
  display: grid;
  align-items: center;
  grid-gap: 9px;
  grid-template-columns: 1fr 60px 30px 60px;
  top: 120px;
  height: 44px;
  font-size: 24px;
  margin-left: 76px;
`;
