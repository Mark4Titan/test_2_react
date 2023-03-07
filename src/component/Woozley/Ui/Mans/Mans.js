import React, { useState } from "react";
import { Pico } from "../Import.Img";
import { Divgroup, DivPico, ImgPico } from "../Ui.styled";
import Devices from "./Devices/Devices";

function Buttons() {
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [clickGroups, setClickGroups] = useState(Array(5).fill(false));
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);
  const [clickedGroupIndex, setClickedGroupIndex] = useState(null);

  const handleMouseEnter = (groupIndex, buttonIndex) => {
    setHoveredGroup({ groupIndex, buttonIndex });
  };

  const handleMouseLeave = () => {
    setHoveredGroup(null);
  };

  const handleClick = (groupIndex, buttonIndex) => {
    setClickGroups((prevClickGroups) => {
      const newClickGroups = [...prevClickGroups];
      newClickGroups[groupIndex] = !newClickGroups[groupIndex];
      return newClickGroups;
    });

    setClickedButtonIndex(buttonIndex);
    setClickedGroupIndex(groupIndex);
  };

  const groupStyles = [
    { top: 350, left: 287 },
    { top: 555, left: 400 },
    { top: 338, left: 646 },
    { top: 423, left: 919 },
    { top: 608, left: 1018 },
  ];

  const itemStyles = [
    { margin_top: 38, height: 35 },
    { margin_top: 25, height: 47 },
    { margin_top: 0, height: 70 },
  ];

  const groups = Array(5)
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
              onClick={() => handleClick(groupIndex, buttonIndex)}
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
        <Divgroup key={groupIndex} TopLeft={groupStyles[groupIndex]}>
          {clickGroups[groupIndex] && clickedGroupIndex === groupIndex ? (
            <Devices
              devices={{ groupIndex, buttonIndex: clickedButtonIndex }}
            />
          ) : (
            buttons
          )}
        </Divgroup>
      );
    });

  return <div>{groups}</div>;
}

export default Buttons;
