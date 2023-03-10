import { Pico } from "../../Import.Img";
import { ImgPico } from "../../Ui.styled";
import { DivDevices } from "./Devices.styled";

const itemStyles = [{ height: 55 }, { height: 43 }, { height: 42 }];
const positionStyles = [
  [
    { top: 0, left: 133 },
    { top: 33, left: 86 },
    { top: 0, left: 40 },
  ],
  [
    { top: 20, left: 122 },
    { top: 82, left: 85 },
    { top: -10, left: 55 },
  ],
  [
    { top: 25, left: 108 },
    { top: 65, left: 10 },
    { top: -3, left: 178 },
  ],
  [
    { top: 23, left: 130 },
    { top: 46, left: 20 },
    { top: -40, left: 180 },
  ],
  [
    { top: 28, left: 150 },
    { top: 38, left: 60 },
    { top: 39, left: 110 },
  ],
];

const Devices = ({ devices, Data }) => {
  const Renders = () => {
    return (
      <>
        {devices >= 0 && (
          <DivDevices Size={itemStyles[0]} TopLeft={positionStyles[Data][0]}>
            <ImgPico src={Pico.small} alt="small" />
          </DivDevices>
        )}
        {devices >= 1 && (
          <DivDevices Size={itemStyles[1]} TopLeft={positionStyles[Data][1]}>
            <ImgPico src={Pico.medium} alt="medium" />
          </DivDevices>
        )}
        {devices >= 2 && (
          <DivDevices Size={itemStyles[2]} TopLeft={positionStyles[Data][2]}>
            <ImgPico src={Pico.large} alt="large" />
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
