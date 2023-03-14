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
import {
  setTotalCloudActions,
  setTotalDefault,
} from "../../../redux/services/TotalSlice";
import Checkbox from "./Checkbox/Checkbox";
import CommLines from "./CommLines/CommLines";
import PatAnim from "./Mans/Devices/PatAnim/PatAnim";
import Mans from "./Mans/Mans";
import Modal from "./Modal/Modal";
import RendersText from "./RenderText/RenderText";
import Server from "./Server/Server";
import { BoxUi, DivRegion } from "./Ui.styled";

const Ui = ({ isWater, handleWater }) => {
  const dispatch = useDispatch();
  const { group } = useSelector(getGroup);
  const { server } = useSelector(getServer);
  const { central } = useSelector(getCentral);
  const { stages } = useSelector(getStages);

  useEffect(() => {
    dispatch(setAllDefaultActions());
    dispatch(setTotalDefault());
  }, [dispatch]);

  useEffect(() => {    
    stages === 6 &&
      dispatch(
        setTotalCloudActions(
          group.reduce((acc, _, indexSer) => {
            if (group[indexSer] !== -1) {
              acc.push(PatAnim(indexSer, central)[group[indexSer]]);
            }
            return acc;
          }, [])
        )
      );
  }, [central, dispatch, group, stages]);


  useEffect(() => {
    if (stages === 2) {
      dispatch(setStagesActions(3));

      setTimeout(() => {
        dispatch(setStagesActions(4));
      }, 5000);

      setTimeout(() => {
        dispatch(setStagesActions(6));
      }, 10000);
    }
  }, [dispatch, stages]);



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

  const renderGroupMans = (data) => {
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
    <BoxUi>
      <DivRegion>
        <RendersText stages={stages} central={central} />
      </DivRegion>
      <Checkbox isWater={isWater} handleWater={handleWater} />
      {group.map((_, indexGr) => renderGroupMans(indexGr))}

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
          stages={stages}
        />
      )}
      {stages === 6 && <Modal />}
    </BoxUi>
  );
};
export default Ui;
