import { useEffect, useState } from "react";
import { Pico } from "../../Import.Img";
import { ImgPico } from "../../Ui.styled";
import { DivDevices } from "./Devices.styled";

const itemStyles = [{ height: 42 }, { height: 43 }, { height: 55 }];
const positionStyles = [
  [
    { top: 0, left: 10 },
    { top: 33, left: 56 },
    { top: 0, left: 112 },
  ],
  [
    { top: -10, left: 50 },
    { top: 82, left: 81 },
    { top: 20, left: 102 },
  ],
  [
    { top: -3, left: 158 },
    { top: 56, left: 16 },
    { top: 25, left: 94 },
  ],
  [
    { top: -33, left: 158 },
    { top: 46, left: 11 },
    { top: 23, left: 98 },
  ],
  [
    { top: 39, left: 90 },
    { top: 38, left: 45 },
    { top: 28, left: 133 },
  ],
];

const Devices = ({ devices, Data }) => {
  const Renders = () => {
    return (
      <>
        {devices >= 0 && (
          <DivDevices Size={itemStyles[0]} TopLeft={positionStyles[Data][0]}>
            <ImgPico src={Pico.large} alt="large" />
          </DivDevices>
        )}
        {devices >= 1 && (
          <DivDevices Size={itemStyles[1]} TopLeft={positionStyles[Data][1]}>
            <ImgPico src={Pico.medium} alt="medium" />
          </DivDevices>
        )}
        {devices >= 2 && (
          <DivDevices Size={itemStyles[2]} TopLeft={positionStyles[Data][2]}>
            <ImgPico src={Pico.small} alt="small" />
          </DivDevices>
        )}
      </>
    );
  };

  return (
    <>
      <Renders key={devices} />
    </>
  );
};

export default Devices;
