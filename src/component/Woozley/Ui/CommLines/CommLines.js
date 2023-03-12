import { LinksGermany } from "../import.img.linksGermany";
import { LinksSingapore } from "../import.img.linksSingapore";
import { LinksUsa } from "../import.img.linksUsa";
import { LinksWest_usa } from "../import.img.linksWest_usa";
import {
  ServeUse,
  ServeWestUsa,
  ServeGermany,
  ServeSingapore,
} from "../Import.ServersClosestFriends";
import { ImgPico } from "../Ui.styled";
import { DivComm, DivBoxImg, DivLines } from "./CommLines.stiled";
import React, { useEffect } from "react";

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

  const Render = (Line) => {
    return Line.map((i, index) => (
      <DivComm key={`${i}_${index}`}>
        {((index % 3 === 0 && devices[Math.floor(index / 3)] >= 0) ||
          (index % 3 === 1 && devices[Math.floor(index / 3)] >= 1) ||
          (index % 3 === 2 && devices[Math.floor(index / 3)] === 2)) && (
          <ImgPico src={i} alt={`link_${index}`} />
        )}
      </DivComm>
    ));
  };

  const renderLine = () => {
    const res = server.map(String).reduce((a, b) => a + b);
    const result = "SE_" + res;

    const SerLink = [ServeWestUsa, ServeUse, ServeGermany, ServeSingapore];
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
    };

    const elem = [];
    for (let i = 0; i < MAPSERVER[result].length; i++) {
      const firstElem = MAPSERVER[result][i][0];
      const rest = MAPSERVER[result][i].slice(1);
      elem.push(RenderPriv(firstElem, rest));
    }

    return (
      <DivBoxImg key={elem}>
        {elem}        
      </DivBoxImg>
    );   
  };

  const renderCentralServer = (s, i) => {
    if (s > 0 && central === i) {
      return (
        <DivBoxImg key={`Line_${i}`}>
          {Render([LinksWest_usa, LinksUsa, LinksGermany, LinksSingapore][i])}
        </DivBoxImg>
      );
    }
    return null;
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
        <DivBoxImg key="Line_02)">{server.map(renderCentralServer)}</DivBoxImg>
      )}
    </DivLines>
  );
};
export default CommLines;
