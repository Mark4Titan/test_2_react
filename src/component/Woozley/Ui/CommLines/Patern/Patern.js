import { useSelector } from "react-redux";
import { ImgPico } from "../../Ui.styled";
import { DivBoxImg, DivComm } from "../CommLines.stiled";
import CONSTMAP from "./CONSTMAP";
import { getServer} from "../../../../../redux/services/GroupSlice";


 const RenderPriv = (Line, dev) => {
   return Line.map((i, index) => {
     const devIndex = Math.floor(index / 3);
     const devCount = dev[devIndex];
     const imgIndex = index % 3;
     const shouldRenderImg = devCount >= imgIndex;

     return (
       <DivComm key={i}>
         {shouldRenderImg ? <ImgPico src={i} alt={`link_${index}`} /> : null}
       </DivComm>
     );
   });
 };

  const createResultCentral = (CEN) => {
    let resultCentral = "";

    for (let i = 0; i < 4; i++) {
      if (i === CEN) {
        resultCentral += "1";
      } else {
        resultCentral += "0";
      }
    }

    return resultCentral;
  };


const RenderLine = (DEV, CEN, looking) => {
  const { server } = useSelector(getServer);

  const res = server.map(String).reduce((a, b) => a + b);
  const result = looking ? `SE_${res}` : `CSE_${createResultCentral(CEN)}`;

  const MAPSERVER = CONSTMAP(DEV);

  const elem = [];
  for (let i = 0; i < MAPSERVER[result].length; i++) {
    const firstElem = MAPSERVER[result][i][0];
    const rest = MAPSERVER[result][i].slice(1);
    elem.push(RenderPriv(firstElem, rest));
  }

  return <DivBoxImg key={elem}>{elem}</DivBoxImg>;
};

export default RenderLine;