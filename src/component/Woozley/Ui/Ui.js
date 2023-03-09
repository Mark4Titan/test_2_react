import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroup,
  getServer,
  setGroupActions,
  setGroupDefault,
  setServerActions,
  setServerDefault,
} from "../../../redux/services/GroupSlice";
import Mans from "./Mans/Mans";
import Server from "./Server/Server";
import { DivRegion, DivButton } from "./Ui.styled";

const Ui = () => {
  const [nextV, setNextV] = useState(false);
  const dispatch = useDispatch();
  const { group } = useSelector(getGroup);
  const { server } = useSelector(getServer);

  const SummGr = () => {
    return group.reduce((total, value) => total + value, 0);
  };
  const SummSer = () => {
    return server.reduce((total, value) => total + value, 0);
  };

  useEffect(() => {
    const Bul = group.every((value) => value > -1);
    Bul && setNextV(true);
  }, [group]);

  const ButtonNext = () => {
    setNextV(true);
  };

  const DefaultGroup = () => {
    SummSer() > 0 ? dispatch(setServerDefault()) : dispatch(setGroupDefault());
    setNextV(false);
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
  };

  const renderMans = (data) => {
    const mansGroup = group[data];
    if (!nextV || mansGroup > -1) {
      return (
        <Mans key={data} setGroup={setGroup} Group={mansGroup} data={data} />
      );
    }
    return null;
  };

  return (
    <>
      <DivRegion>
        Wher are your users? Choose the number for every region.
        {SummGr() > -5 && (
          <>
            <DivButton onClick={DefaultGroup}>Prev.</DivButton>
            <DivButton onClick={ButtonNext}>Next</DivButton>
          </>
        )}
      </DivRegion>
      {group.map((_, indexGr) => renderMans(indexGr))}

      {nextV &&
        server.map((_, indexSer) => (
          <Server
            key={indexSer}
            server={server[indexSer]}
            setServer={setServer}
            data={indexSer}
          />
        ))}
    </>
  );
};
export default Ui;
