import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroup,
  getServer,
  getCentral,
  setGroupActions,
  setGroupDefault,
  setServerActions,
  setServerDefault,
  setCentralActions,
} from "../../../redux/services/GroupSlice";
import CommLines from "./CommLines/CommLines";
import { Pico } from "./Import.Img";
import Mans from "./Mans/Mans";
import Server from "./Server/Server";
import { DivRegion, DivButton, ImgPico } from "./Ui.styled";

const Ui = () => {
  const [nextV, setNextV] = useState(false);
  const [startV, setStartV] = useState(false);
  const dispatch = useDispatch();
  const { group } = useSelector(getGroup);
  const { server } = useSelector(getServer);
  const { central } = useSelector(getCentral);

  const SummGr = () => {
    return group.reduce((total, value) => total + value, 0);
  };
  const SummSer = () => {
    return server.reduce((total, value) => total + value, 0);
  };

  useEffect(() => {
    const Bul = server.every((value) => value > 0);
    Bul && setStartV(true);
  }, [server]);

  useEffect(() => {
    const Bul = group.every((value) => value > -1);
    Bul && setNextV(true);
  }, [group]);

  const ButtonNext = () => {
    setNextV(true);
  };
  const ButtonStart = () => {
    setStartV(true);
  };

  const DefaultGroup = () => {
    SummSer() > 0 ? dispatch(setServerDefault()) : dispatch(setGroupDefault());
    setNextV(false);
    setStartV(false);
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
    if (!nextV || mansGroup > -1) {
      return (
        <Mans key={data} setGroup={setGroup} Group={mansGroup} data={data} />
      );
    }
    return null;
  };

  

  const RenderManagement = () => {
    if (!nextV) {
      return (
        <>
          Wher are your users? Choose the number for every region.
          {SummGr() > -5 && (
            <>
              <DivButton onClick={DefaultGroup}>Prev.</DivButton>
              or
              <DivButton onClick={ButtonNext}>Next</DivButton>
            </>
          )}
        </>
      );
    }
    if (nextV) {
      return (
        <>
          Choose minimum two additional spots for ByteCloud and press
          {SummGr() > -5 && (
            <>
              <DivButton onClick={DefaultGroup}>Prev.</DivButton>
              or
              <DivButton tog={SummSer() <= 1 ? 1 : 0} onClick={ButtonStart}>
                Start
              </DivButton>
            </>
          )}
        </>
      );
    }
  };

  return (
    <>
      <DivRegion>{RenderManagement()}</DivRegion>
      {group.map((_, indexGr) => renderMans(indexGr))}

      {nextV &&
        server.map((_, indexSer) => (
          <Server
            key={indexSer}
            server={server[indexSer]}
            setServer={setServer}
            data={indexSer}
            startV={startV}
            Central={central}
            central={central}
          />
        ))}

      {startV && (
        <CommLines server={server} devices={group} SummServer={SummSer} />
      )}
    </>
  );
};
export default Ui;
