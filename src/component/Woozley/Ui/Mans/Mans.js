import React, { useState } from "react";
import { Pico } from "../Import.Img";
import { Divgroup, DivPico, ImgPico } from "../Ui.styled";
import Devices from "./Devices/Devices";

const groupStyles = [
  { top: 365, left: 239 },
  { top: 568, left: 355 },
  { top: 346, left: 596 },
  { top: 427, left: 863 },
  { top: 608, left: 964 },
];

const itemStyles = [
  { margin_top: 38, height: 35 },
  { margin_top: 25, height: 47 },
  { margin_top: 0, height: 70 },
];

function Mans({ setGroup, Group, data }) {
  const [hoveredGroup, setHoveredGroup] = useState(null);

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

  const groups = Array(1)
    .fill()
    .map((_, groupIndex) => {
      const buttons = Array(3)
        .fill()
        .map((_, buttonIndex) => {
          const isHovered =
            hoveredGroup?.groupIndex === groupIndex &&
            hoveredGroup.buttonIndex >= buttonIndex;

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
        });

      return (
        <Divgroup key={data} TopLeft={groupStyles[data]}>
          {Group > -1 ? (
            <Devices devices={Group} Data={data} />
          ) : (
            buttons
          )}
        </Divgroup>
      );
    });
  return <div>{groups}</div>;
}

export default Mans;
