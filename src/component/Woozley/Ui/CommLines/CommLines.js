import {  DivBoxImg, DivLines } from "./CommLines.stiled";
import React, { useEffect } from "react";
import RenderLine from "./Patern/Patern";


const CommLines = ({ server, devices, central, stages, stagesApdata }) => {
  
  const Manager = () => {
    useEffect(() => {
      stagesApdata(3);

      setTimeout(() => {
        stagesApdata(4);
      }, 4000);

      setTimeout(() => {
        stagesApdata(5);
      }, 8000);

      setTimeout(() => {
        stagesApdata(6);
      }, 10000);
    }, []);
  };


  return (
    <DivLines>
      {stages === 2 && Manager()}
      {stages === 3 && (
        <>
          <DivBoxImg key="Line_01">
            {RenderLine(devices, server, central, true)}
          </DivBoxImg>
        </>
      )}
      {stages >= 4 && (
        <DivBoxImg key="Line_02)">
          {RenderLine(devices, server, central, false)}
        </DivBoxImg>
      )}
    </DivLines>
  );
};
export default CommLines;
