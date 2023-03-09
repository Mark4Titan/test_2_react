import { Pico } from "../Import.Img";
import { ImgPico } from "../Ui.styled";
import { DivServer } from "./Server.styled";

const groupStyles = [
  { top: 398, left: 210 },
  { top: 375, left: 410 },
  { top: 374, left: 632 },
  { top: 560, left: 961 },
];

const Server = () => {
  
    const handleClick = (indexServer) => {
        console.log(indexServer);
    };
  return (
    <>
      {[0, 1, 2, 3].map((index) => (
        <DivServer
          TopLeft={groupStyles[index]}
          onClick={() => handleClick(index)}
        >
          {index === 2 && <ImgPico src={Pico.server} alt="server" />}
          {index !== 2 && <ImgPico src={Pico.server_ByteCloud} alt="server" />}
        </DivServer>
      ))}
    </>
  );
};
export default Server;
