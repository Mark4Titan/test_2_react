import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroup,
  getServer,
  getCentral,
  getStages,
  setGroupActions,
  setServerActions,
  setCentralActions,
  setAllDefaultActions,
  setStagesActions,
} from "../../../redux/services/GroupSlice";
import CommLines from "./CommLines/CommLines";
import Mans from "./Mans/Mans";
import Modal from "./Modal/Modal";
import RendersText from "./RenderText/RenderText";
import Server from "./Server/Server";
import { DivRegion } from "./Ui.styled";

const Ui = () => {
  const dispatch = useDispatch();
  const { group } = useSelector(getGroup);
  const { server } = useSelector(getServer);
  const { central } = useSelector(getCentral);
  const { stages } = useSelector(getStages);

  useEffect(() => {
    dispatch(setAllDefaultActions());
  }, [dispatch]);

  const stagesApdata = (data) => {
    dispatch(setStagesActions(data));
  };

 
  const setGroup = (valueGroup, buttIndex) => {
    const nevGroup = [...group];
    nevGroup[valueGroup] = buttIndex;
    dispatch(setGroupActions(nevGroup));
  };
  const setServer = (valueServer) => {
    const nevServer = [...server];
    nevServer[valueServer] = 1;
    dispatch(setServerActions(nevServer));
    if (central > -1) return;
    dispatch(setCentralActions(valueServer));
  };

  const renderMans = (data) => {
    const mansGroup = group[data];
    if (stages === 0 || mansGroup > -1) {
      return (
        <Mans
          key={data}
          setGroup={setGroup}
          Group={mansGroup}
          data={data}
          stages={stages}
          central={central}
        />
      );
    }
    return null;
  };


  return (
    <>
      <DivRegion>
        <RendersText stages={stages} central={central} />
      </DivRegion>
      {group.map((_, indexGr) => renderMans(indexGr))}

      {stages !== 0 &&
        server.map((_, indexSer) => (
          <Server
            key={indexSer}
            Server={server[indexSer]}
            setServer={setServer}
            data={indexSer}
            stages={stages}
            central={central}
          />
        ))}

      {stages >= 2 && (
        <CommLines
          server={server}
          devices={group}
          central={central}
          stagesApdata={stagesApdata}
          stages={stages}
        />
      )}
      {stages === 6 && (
        <Modal server={server} devices={group} central={central} />
      )}
    </>
  );
};
export default Ui;
