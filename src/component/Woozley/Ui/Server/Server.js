import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServer, setStagesActions } from "../../../../redux/services/GroupSlice";
import { Pico } from "../Import.Img";
import { ImgPico } from "../Ui.styled";
import { DivServer } from "./Server.styled";

const itemStyles = [
  { height: 44, width: 44 },
  { height: 60, width: 58 },
];
const groupStyles = [
  { top: 398, left: 210 },
  { top: 375, left: 395 },
  { top: 374, left: 632 },
  { top: 560, left: 961 },
];

const Server = ({ Server, setServer, data, central, stages }) => {
  const dispatch = useDispatch();
    const { server } = useSelector(getServer);
  const [hoveredServer, setHoveredServer] = useState(false);

    useEffect(() => {
      const Bul = server.every((value) => value > 0);
      Bul && dispatch(setStagesActions(2));
    }, [dispatch, server]);

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
      {(stages < 2 || Server > 0) && (
        <DivServer
          key={data}
          TopLeft={groupStyles[data]}
          WidthHeight={itemStyles[Server]}
          onClick={() => handleClick(data)}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          {Server === 0 ? (
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
