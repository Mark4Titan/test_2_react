import { useState } from "react";
import { Pico } from "../../Import.Img";
import { DivPico, ImgPico } from "../../Ui.styled";

const itemStyles = [
  { margin_top: 38, height: 35 },
  { margin_top: 25, height: 47 },
  { margin_top: 0, height: 70 },
];


const RenderGroups = ({ buttonIndex, groupIndex, setGroup, data }) => {
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const isHovered =
    hoveredGroup?.groupIndex === groupIndex &&
    hoveredGroup.buttonIndex >= buttonIndex;

  const handleMouseEnter = (groupIndex, buttonIndex) => {
    setHoveredGroup({ groupIndex, buttonIndex });
  };

  const handleMouseLeave = () => {
    setHoveredGroup(null);
  };

  const handleClick = (buttonIndex) => {
    setGroup(data, buttonIndex);
    setHoveredGroup(null);
  };

  return (
    <DivPico
      TopLeft={itemStyles[buttonIndex]}
      key={buttonIndex}
      onMouseEnter={() => handleMouseEnter(groupIndex, buttonIndex)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(buttonIndex)}
    >
      {isHovered ? (
        <ImgPico src={Pico.man_filled} alt="man filled" />
      ) : (
        <ImgPico src={Pico.man_empty} alt="man empty" />
      )}
    </DivPico>
  );
};
export default RenderGroups