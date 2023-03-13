import {
  Content,
  Data,
  DivCard,
  DivModal,
  DivTextBox,
  Stars,
  StarsBox,
  TextH2,
  Time,
  Title,
} from "./Modal.styled";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import PatAnim from "../Mans/Devices/PatAnim/PatAnim";
import { streaming } from "../../Logic/Logic";

function getStreamingQuality(time) {
  let quality;
  let stars;

  if (time >= 106) {
    quality = <div>{streaming.HD}</div>;
    stars = 5;
  } else if (time >= 76 && time <= 105) {
    quality = <div>{streaming.Full}</div>;
    stars = 4;
  } else if (time >= 56 && time <= 75) {
    quality = <div>{streaming.Ultra}</div>;
    stars = 4;
  } else if (time > 45 && time <= 55) {
    quality = <div>{streaming.Ultra}</div>;
    stars = 3;
  } else if (time <= 45) {
    quality = <div>{streaming.Ultra}</div>;
    stars = 5;
  } else if (time > 105 && time <= 165) {
    quality = <div>{streaming.HD}</div>;
    stars = 3;
  } else {
    quality = <div>{streaming.HD}</div>;
    stars = 1;
  }

  return { quality, stars };
}

const StarRating = ( count ) => {
  const filledStars = Array.from({ length: count }, (_, index) => (
    <Stars key={index} color="#fcab17">
      <AiTwotoneStar />
    </Stars>
  ));

  const emptyStars = Array.from({ length: 5 - count }, (_, index) => (
    <Stars key={index} color="black">
      <AiOutlineStar />
    </Stars>
  ));

  return (
    <StarsBox>
      {emptyStars}
      {filledStars}
    </StarsBox>
  );
};

// const Stars = ({ color, children }) => (
//   <span style={{ color }}>{children}</span>
// );


const Modal = ({ server, devices, central }) => {
  const Cloud = devices.reduce((acc, item, i) => {
    if (item === -1) {
      acc.push(PatAnim(i, -1)[i].Cloud);
      console.log(acc);
    }
    return acc;
  }, []);

  const Storage = devices.reduce((acc, item, i) => {
    if (item === -1) {
      acc.push(PatAnim(i, central)[i].Obj);
    }
    return acc;
  }, []);

  // console.log("Cloud", Cloud);
  // console.log("Storage", Storage);

  const Consrtuct = (mas, text) => {
    // console.log(item.title));
    // streaming;
    // const Strimming = (time) => {
 

    const items = [];
    mas.map((item) => {
      const val = getStreamingQuality(item.Lat);
      items.push(
        <>
          <DivTextBox>
            <Title>
              <div>{item.title}</div>
              {StarRating(val.stars)}
            </Title>
            <Data>
              <Content>
                latency <br />
                {item.Lat}
              </Content>
              <Time>
                Download time <br />
                {item.Dow} sec
              </Time>
              <Content>
                Video streaming <br />
                {val.quality}
              </Content>
            </Data>
          </DivTextBox>
        </>
      );
      return null;
    });
    return items;
  };

  return (
    <DivModal key="text">
      <DivCard>
        <TextH2>ByteCloud</TextH2>
        {Consrtuct(Cloud)}
      </DivCard>
      <DivCard>
        <TextH2>Object Storage</TextH2>
        {Consrtuct(Storage)}
      </DivCard>
    </DivModal>
  );
};
export default Modal;
