import { DivBg, ImgBg, ShipBg } from "./bg.styled";
import BG_Img from "../img/Elements_Old/map_old.png";
import BG_png from "../img/Elements_Old/map.png";
import ship from "../img/Elements_Old/ship.png";

const BG = ({ isChecked, isWater }) => {
  return (
    <DivBg margin_top={100} padding="20px" width="1200">
      {!isWater ? (
        <ImgBg src={BG_Img} alt="BG" />
      ) : (
        <div>
          <ImgBg src={BG_png} alt="BG" />
          <ShipBg>
            <ImgBg src={ship} alt="ship" />
          </ShipBg>
        </div>
      )}
    </DivBg>
  );
};
export default BG;
