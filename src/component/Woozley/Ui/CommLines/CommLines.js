import { DivBoxImg, DivLines } from "./CommLines.stiled";

import RenderLine from "./Patern/Patern";

  const Manager = (stagesApdata) => {
    stagesApdata(3);

    setTimeout(() => {
      stagesApdata(4);
    }, 5000);

    // setTimeout(() => {
    //   stagesApdata(5);
    // }, 8000);

    setTimeout(() => {
      stagesApdata(6);
    }, 10000);
};
  

const CommLines = ({ devices, central, stages, stagesApdata }) => {

  return (
    <DivLines>
      {stages === 2 && Manager(stagesApdata)}
      <DivBoxImg key="Line_01">
        {stages === 3 && RenderLine(devices, central, true)}
        {stages >= 4 && RenderLine(devices, central, false)}
      </DivBoxImg>
    </DivLines>
  );
};
export default CommLines;
