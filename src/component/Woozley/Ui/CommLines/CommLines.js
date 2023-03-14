import { DivBoxImg, DivLines } from "./CommLines.stiled";

import RenderLine from "./Patern/Patern";

  

const CommLines = ({ devices, central, stages }) => {

  return (
    <DivLines>      
      <DivBoxImg key="Line_01">
        {stages === 3 && RenderLine(devices, central, true)}
        {stages >= 4 && RenderLine(devices, central, false)}
      </DivBoxImg>
    </DivLines>
  );
};
export default CommLines;
