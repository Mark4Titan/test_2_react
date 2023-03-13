import { Divgroup } from "../Ui.styled";
import Devices from "./Devices/Devices";
import RenderGroups from "./RenderGroups/RenderGroups";

const groupStyles = [
  { top: 365, left: 209 },
  { top: 568, left: 339 },
  { top: 346, left: 586 },
  { top: 427, left: 853 },
  { top: 608, left: 950 },
];

function Mans({ setGroup, Group, data, stages, central }) {
  const groups = Array(1)
    .fill()
    .map(() => {
      const buttons = Array(3)
        .fill()
        .map((_, buttonIndex) => {
          return (
            <RenderGroups
              key={`buttonIndex_${buttonIndex}`}
              buttonIndex={buttonIndex}
              groupIndex={data}
              setGroup={setGroup}
            />
          );
        });

      return (
        <Divgroup key={data} TopLeft={groupStyles[data]}>
          {Group > -1 ? (
            <Devices
              devices={Group}
              Data={data}
              stages={stages}
              central={central}
            />
          ) : (
            buttons
          )}
        </Divgroup>
      );
    });
  return <div>{groups}</div>;
}

export default Mans;
