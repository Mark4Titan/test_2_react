import { Pico } from "../../Import.Img";
import { DivPico, ImgPico } from "../../Ui.styled";

const itemStyles = [
  { margin_top: 38, height: 35 },
  { margin_top: 25, height: 47 },
  { margin_top: 0, height: 70 },
];

const RenderGroups = ({
  buttonIndex,
  groupIndex,
  setGroup,
  sethoverButton,
  bHover,
}) => {

  const handleMouseEnter = (bI) => {
    sethoverButton(bI);
  };

  const handleMouseLeave = () => {
    sethoverButton(-1);
  };

  const handleClick = (gI, but) => {
    setGroup(gI, but);
    sethoverButton(-1);
  };

  return (
    <DivPico
      TopLeft={itemStyles[buttonIndex]}
      key={buttonIndex}
      onMouseEnter={() => handleMouseEnter(buttonIndex)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(groupIndex, buttonIndex)}
    >
      {bHover[buttonIndex] ? (
        <ImgPico src={Pico.man_filled} alt="man filled" />
      ) : (
        <ImgPico src={Pico.man_empty} alt="man empty" />
      )}
    </DivPico>
  );
};
export default RenderGroups;
