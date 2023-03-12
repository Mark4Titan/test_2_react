import { LinksGermany } from "../import.img.linksGermany";
import { LinksSingapore } from "../import.img.linksSingapore";
import { LinksUsa } from "../import.img.linksUsa";
import { LinksWest_usa } from "../import.img.linksWest_usa";
import { ImgPico } from "../Ui.styled";
import { DivComm, DivBoxImg, DivLines } from "./CommLines.stiled";
import React, { useEffect } from "react";

const SerLink = [LinksWest_usa, LinksUsa, LinksGermany, LinksSingapore];

const CommLines = ({ server, devices, central, stages, stagesApdata }) => {

  const Manager = () => {
    useEffect(() => {
      stagesApdata(3);

      setTimeout(() => {
        stagesApdata(4);
      }, 4000);

      // setTimeout(() => {
      //   stagesApdata(5);
      // }, 8000);

      // setTimeout(() => {
      //   stagesApdata(6);
      // }, 10000);
    }, []);
  };

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

  const createResultCentral = () => {
    let resultCentral = "";

    for (let i = 0; i < 4; i++) {
      if (i === central) {
        resultCentral += "1";
      } else {
        resultCentral += "0";
      }
    }

    return resultCentral;
  };

  const renderLine = (looking = true) => {
    const res = server.map(String).reduce((a, b) => a + b);
    const result = looking ? `SE_${res}` : `CSE_${createResultCentral()}`;

    const MAPSERVER = {
      SE_1111: [
        [SerLink[0], devices[1]],
        [SerLink[1], devices[0]],
        [SerLink[2], devices[2]],
        [SerLink[3], devices[3], devices[4]],
      ],
      SE_0111: [
        [SerLink[1], devices[0], devices[1]],
        [SerLink[2], devices[2]],
        [SerLink[3], devices[3], devices[4]],
      ],
      SE_1011: [
        [SerLink[0], devices[1], devices[0]],
        [SerLink[2], devices[2]],
        [SerLink[3], devices[3], devices[4]],
      ],
      SE_1101: [
        [SerLink[0], devices[1]],
        [SerLink[1], devices[0], -1, devices[2]],
        [SerLink[3], devices[3], devices[4]],
      ],
      SE_1110: [
        [SerLink[0], devices[1]],
        [SerLink[1], devices[0]],
        [SerLink[2], devices[2], devices[3], devices[4]],
      ],

      CSE_1000: [
        [
          SerLink[0],
          devices[1],
          devices[0],
          devices[2],
          devices[3],
          devices[4],
        ],
      ],
      CSE_0100: [
        [
          SerLink[1],
          devices[0],
          devices[1],
          devices[2],
          devices[3],
          devices[4],
        ],
      ],
      // 
      CSE_0010: [
        [
          SerLink[2],
          devices[2],
          devices[3],
          devices[4],
          devices[0],
          devices[1],
        ],
      ],
      CSE_0001: [
        [
          SerLink[3],
          devices[3],
          devices[4],
          devices[0],
          devices[1],
          devices[2],
        ],
      ],
    };

    
    const elem = [];
    for (let i = 0; i < MAPSERVER[result].length; i++) {
      const firstElem = MAPSERVER[result][i][0];
      const rest = MAPSERVER[result][i].slice(1);
      elem.push(RenderPriv(firstElem, rest));
    }

    return <DivBoxImg key={elem}>{elem}</DivBoxImg>;
  };



  return (
    <DivLines>
      {stages === 2 && Manager()}
      {stages === 3 && (
        <>
          <DivBoxImg key="Line_01">{renderLine()}</DivBoxImg>
        </>
      )}
      {stages >= 4 && (
        <DivBoxImg key="Line_02)">{renderLine(false)}</DivBoxImg>
      )}
    </DivLines>
  );
};
export default CommLines;
