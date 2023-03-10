import { useState } from "react";
import { Pico } from "../Import.Img";
import { ImgPico } from "../Ui.styled";
import { DivServer } from "./Server.styled";

const itemStyles = [{ height: 44 }, { height: 60 }];
const groupStyles = [
  { top: 398, left: 210 },
  { top: 375, left: 395 },
  { top: 374, left: 632 },
  { top: 560, left: 961 },
];

const Server = ({ server, setServer, data, startV, central }) => {
  const [hoveredServer, setHoveredServer] = useState(false);

  const handleMouseLeave = () => {
    setHoveredServer(false);
  };

  const handleMouseEnter = () => {
    setHoveredServer(true);
  };

  const handleClick = (indexServer) => {
    setServer(indexServer);
  };

  const serverRender = (data) => {
    return central === data ? (
      <ImgPico src={Pico.server} alt="server" />
    ) : (
      <ImgPico src={Pico.server_ByteCloud} alt="server ByteCloud" />
    );
  };

  return (
    <>
      {(!startV || server > 0) && (
        <DivServer
          key={data}
          TopLeft={groupStyles[data]}
          Height={itemStyles[server]}
          onClick={() => handleClick(data)}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          {server === 0 ? (
            <>
              {!hoveredServer ? (
                <ImgPico src={Pico.circle_empty} alt="circle empty" />
              ) : (
                <ImgPico src={Pico.circle_filled} alt="circle filled" />
              )}
            </>
          ) : (
            serverRender(data)
          )}
        </DivServer>
      )}
    </>
  );
};
export default Server;
