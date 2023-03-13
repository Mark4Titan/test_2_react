import { useEffect, useState } from "react";
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

const Ui = ({ isChecked, isWater, handleCheckboxChange, handleWater }) => {
  const dispatch = useDispatch();
  const { group } = useSelector(getGroup);
  const { server } = useSelector(getServer);
  const { central } = useSelector(getCentral);
  const { stages } = useSelector(getStages);
  const [first, setfirst] = useState(false);

  useEffect(() => {
    dispatch(setAllDefaultActions());
    dispatch(setTotalDefault());
  }, [dispatch]);

  useEffect(() => {
    central === -1 && setfirst(false);
  }, [central, dispatch]);

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

  const ItemTotal = () => {
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
    setfirst(true);
  };

  return (
    <BoxUi>
      <DivRegion>
        <RendersText stages={stages} central={central} />
      </DivRegion>
      <Checkbox
        isChecked={isChecked}
        isWater={isWater}
        handleCheckboxChange={handleCheckboxChange}
        handleWater={handleWater}
      />
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
            ItemTotal={ItemTotal}
          />
        ))}
      {central !== -1 && stages === 4 && !first && ItemTotal()}

      {stages >= 2 && (
        <CommLines
          server={server}
          devices={group}
          central={central}
          stagesApdata={stagesApdata}
          stages={stages}
        />
      )}
      {stages === 6 && <Modal />}
    </BoxUi>
  );
};
export default Ui;
