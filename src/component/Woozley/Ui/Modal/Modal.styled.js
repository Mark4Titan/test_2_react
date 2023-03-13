import styled from "@emotion/styled";

export const DivModal = styled.div`
  position: absolute;;
  z-index: 10;
  width: 1245px;
  height: 725px;
  top: 98px;
  left: -2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.17);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const DivCard = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
`;
export const DivTextBox = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
  font-size: 17px;
  background-color: #c2efbd;
`;
export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: 700;
  border: solid 1px;
  padding: 3px;
  justify-items: end;
  grid-gap: 50px;
`;
export const Data = styled.div`
  display: grid;
  grid-template: 1fr / 100px 170px 200px;
  border: solid 1px;
`;
export const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 10px 20px;
`;
export const Time = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  border-left: solid 1px;
  border-right: solid 1px;
  padding: 10px;
`;
export const Stars = styled.div`
  color: ${(props) => props.color};
  
  & :last-child {
    width: 22px;
    height: 22px;
  }
`;
export const StarsBox = styled.div`
  display: flex;
`;
export const TextH2 = styled.h2`
  padding: 0;
  margin: 0;
`;
