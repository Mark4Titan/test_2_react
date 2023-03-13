import { Pico } from "../../Import.Img";
import { ImgPico } from "../../Ui.styled";
import { DevicesAnim, DivDevices, LatText } from "./Devices.styled";
import { AnimStyles, itemStyles, positionStyles } from "./Seting/Seting.styles";
import React, { useEffect, useState } from "react";
import PatAnim from "./PatAnim/PatAnim";

const Timer = (valTime, valDow) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, valTime * 10);
    return () => clearTimeout(timer);
  }, [valTime]);

  return <div>{done ? `Time: ${valDow} sec` : `Latency: ${valTime}`}</div>;
};

const Devices = ({ devices, Data, stages, central }) => {

  const Renders = () => {
    const Params = PatAnim(Data, central)[Data];
    return (
      <>
        {stages >= 2 && stages !== 6 && (
          <LatText>
            {stages === 4
              ? Timer(Params.Obj.Lat, Params.Obj.Dow)
              : Timer(Params.Cloud.Lat, Params.Cloud.Dow)}
          </LatText>
        )}

        {devices >= 0 && (
          <>
            <DivDevices Size={itemStyles[0]} TopLeft={positionStyles[Data][0]}>
              <ImgPico src={Pico.small} alt="small" />
            </DivDevices>
            {stages > 2 && stages !== 6 && (
              <DevicesAnim
                Data={Data}
                Anim={AnimStyles[0]}
                TopLeft={positionStyles[Data][0]}
                PAnim={stages === 4 ? Params.Obj.Lat : Params.Cloud.Lat}
              >
                <ImgPico src={Pico.small_mask} alt="small mask" />
              </DevicesAnim>
            )}
          </>
        )}
        {devices >= 1 && (
          <>
            <DivDevices Size={itemStyles[1]} TopLeft={positionStyles[Data][1]}>
              <ImgPico src={Pico.medium} alt="medium" />
            </DivDevices>
            {stages > 2 && stages !== 6 && (
              <DevicesAnim
                Data={Data}
                Anim={AnimStyles[1]}
                TopLeft={positionStyles[Data][1]}
                PAnim={stages === 4 ? Params.Obj.Lat : Params.Cloud.Lat}
              >
                <ImgPico src={Pico.medium_mask} alt="medium mask" />
              </DevicesAnim>
            )}
          </>
        )}
        {devices >= 2 && (
          <>
            <DivDevices Size={itemStyles[2]} TopLeft={positionStyles[Data][2]}>
              <ImgPico src={Pico.large} alt="large" />
            </DivDevices>
            {stages > 2 && stages !== 6 && (
              <DevicesAnim
                Data={Data}
                Anim={AnimStyles[2]}
                TopLeft={positionStyles[Data][2]}
                PAnim={stages === 4 ? Params.Obj.Lat : Params.Cloud.Lat}
              >
                <ImgPico src={Pico.large_mask} alt="large mask" />
              </DevicesAnim>
            )}
          </>
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
