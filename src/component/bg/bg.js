import { DivBg, ImgBg } from "./bg.styled";
import BG_Img from "../img/Elements_Old/map_old.png";

const BG = () => {
  return (
    <DivBg margin_top={100} padding="20px" width="1200">
      <ImgBg src={BG_Img} alt="BG" />
      {/* <video
            loop
            muted
            autoplay="autoplay"
            poster="./component/img/map.png"
            src="./component/mp4/map.mp4"
            type="video/mp4"
          ></video> */}
    </DivBg>
  );
};
export default BG;
