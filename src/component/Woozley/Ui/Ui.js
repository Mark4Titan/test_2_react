
import { Pico } from "./Import.Img";
import Buttons from "./Mans/Mans";
import { DivPico, ImgPico } from "./Ui.styled";

// const ManVu = {};

const Ui = () => {

  const Man = () => {
    return (
      <DivPico width="33" height="70" top="349" left="651">
        <ImgPico src={Pico.man_empty} alt="man empty" />
        <ImgPico src={Pico.man_filled} alt="man filled" />
      </DivPico>
    );
  };

  return (
    <>
      {/* <Man />; */}
      <Buttons />
    </>
  );
};
export default Ui;
