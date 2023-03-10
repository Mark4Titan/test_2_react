import { LinksGermany } from "../import.img.linksGermany";
import { LinksSingapore } from "../import.img.linksSingapore";
import { LinksUsa } from "../import.img.linksUsa";
import { LinksWest_usa } from "../import.img.linksWest_usa";
import { ServersClosestFriends } from "../Import.ServersClosestFriends";
import { ImgPico } from "../Ui.styled";
import { DivComm, DivGermany, DivLines } from "./CommLines.stiled";
import React, { useEffect, useState } from "react";


const CommLines = ({ server, devices, SummServer }) => {
  const [element, setElement] = useState(false)


  

  const  MyComponent = (val)=> {
    useEffect(() => {
      setElement("start");

      setTimeout(() => {
        setElement("end");
      }, 3000);

      setTimeout(() => {
        setElement("Finish");
      }, 5000);
    }, [val]);

    // return <div>{/* рендерінг компоненту */}</div>;
  }

  MyComponent(true);
  console.log(element);



const RenderPriv = () => {
  return ServersClosestFriends.map((i, index) => {
    const deviceIndex = Math.floor(index / 3);
    const threshold = index % 3;

    if (devices[deviceIndex] >= threshold) {
      return (
        <DivComm key={i}>
          <ImgPico src={i} alt={`link_${index}`} />
        </DivComm>
      );
    }

    return null;
  });
};



  const Render = (Line) => {    

    if (SummServer() > 3) return RenderPriv(Line);
    return (Line.map((i, index) => (
      <DivComm key={`${i}_${index}`}>
        {((index % 3 === 0 && devices[Math.floor(index / 3)] >= 0) ||
          (index % 3 === 1 && devices[Math.floor(index / 3)] >= 1) ||
          (index % 3 === 2 && devices[Math.floor(index / 3)] === 2)) && (
          <ImgPico src={i} alt={`link_${index}`} />
        )}
      </DivComm>
    )))
  };

  return (
    <DivLines>
      {server[0] > 0 && (
        <DivGermany key="Line_)">{Render(LinksWest_usa)}</DivGermany>
      )}
      {server[1] > 0 && (
        <DivGermany key="Line_1">{Render(LinksUsa)}</DivGermany>
      )}
      {server[2] > 0 && (
        <DivGermany key="Line_2">{Render(LinksGermany)}</DivGermany>
      )}
      {server[3] > 0 && (
        <DivGermany key="Line_3">{Render(LinksSingapore)}</DivGermany>
      )}
    </DivLines>
  );
};
export default CommLines;
