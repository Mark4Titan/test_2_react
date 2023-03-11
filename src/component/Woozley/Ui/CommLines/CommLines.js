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
import { DivComm, DivBoxImg, DivLines, DivModal } from "./CommLines.stiled";
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

  const RenderPriv = (Line, dev, dev2 = -1) => {
    return Line.map((i, index) => {
      const devCounts = [dev, dev2];
      const devIndex = Math.floor(index / 3);
      const devCount = devCounts[devIndex];
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

  const renderLine = (num, index) => {
    if (num > 0) {
      return (
        <DivBoxImg key={`Line_${index}`}>
          {index === 0 && RenderPriv(ServeWestUsa, devices[1])}
          {index === 1 && RenderPriv(ServeUse, devices[0])}
          {index === 2 && RenderPriv(ServeGermany, devices[2])}
          {index === 3 && RenderPriv(ServeSingapore, devices[3], devices[4])}
        </DivBoxImg>
      );
    }
    return null;
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
      {Manager()}
      {stages === 3 && (
        <DivBoxImg key="Line_01">{server.map(renderLine)}</DivBoxImg>
      )}
      {(stages >= 4 ) && (
        <DivBoxImg key="Line_02)">{server.map(renderCentralServer)}</DivBoxImg>
      )}      
    </DivLines>
  );
};
export default CommLines;
