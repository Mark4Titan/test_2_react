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
import { streaming } from "../../Logic/Logic";
import { getTotalCloud } from "../../../../redux/services/TotalSlice";
import { useSelector } from "react-redux";

function getStreamingQuality(time) {
  let quality;
  let stars;

   if (time <= 45) {
    quality = <div>{streaming.Ultra}</div>;
    stars = 5;
  } else if (time > 45 && time <= 55) {
    quality = <div>{streaming.Ultra}</div>;
    stars = 4;
  } else if (time >= 56 && time <= 75) {
    quality = <div>{streaming.Ultra}</div>;
    stars = 4;
  } else if (time >= 76 && time <= 105) {
    quality = <div>{streaming.Full}</div>;
    stars = 3;
  } else if (time > 105 && time <= 165) {
    quality = <div>{streaming.HD}</div>;
    stars = 1;
  } else if (time >= 106) {
    quality = <div>{streaming.HD}</div>;
    stars = 1;
  } else {
    quality = <div>{streaming.HD}</div>;
    stars = 1;
  }

  return { quality, stars };
}

const StarRating = (count) => {
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



const Modal = () => {
  const { totalCloud } = useSelector(getTotalCloud);



  const Consrtuct = (mas) => {


    const val = getStreamingQuality(mas.Dow);
    return (
      <>
        <DivTextBox>
          <Title>
            <div>{mas.title}</div>
            {StarRating(val.stars)}
          </Title>
          <Data>
            <Content>
              latency <br />
              <div>{mas.Lat}</div>
            </Content>
            <Time>
              Download time <br />
              <div>{mas.Dow} sec</div>
            </Time>
            <Content>
              Video streaming <br />
              {val.quality}
            </Content>
          </Data>
        </DivTextBox>
      </>
    );
   
  };

  return (
    <DivModal key="text">
      <DivCard>
        <TextH2>ByteCloud</TextH2>
        {totalCloud.map((i) => Consrtuct(i.Cloud))}
      </DivCard>
      <DivCard>
        <TextH2>Object Storage</TextH2>
        {totalCloud.map((i) => Consrtuct(i.Obj))}
      </DivCard>
    </DivModal>
  );
};
export default Modal;
