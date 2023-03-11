import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroup,
  getServer,
  getCentral,
  getStages,
  setGroupActions,
  setServerActions,
  setServerDefault,
  setCentralActions,
  setAllDefaultActions,
  setStagesActions,
} from "../../../redux/services/GroupSlice";
import CommLines from "./CommLines/CommLines";
import Mans from "./Mans/Mans";
import Server from "./Server/Server";
import { DivRegion, DivButton, DivModal } from "./Ui.styled";

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

  const SummGr = () => {
    return group.reduce((total, value) => total + value, 0);
  };
  const SummSer = () => {
    return server.reduce((total, value) => total + value, 0);
  };

  useEffect(() => {
    const Bul = server.every((value) => value > 0);
    Bul && dispatch(setStagesActions(2));
  }, [dispatch, server]);

  useEffect(() => {
    const Bul = group.every((value) => value > -1);
    Bul && dispatch(setStagesActions(1));
  }, [dispatch, group]);

  const ButtonNext = () => {
    dispatch(setStagesActions(1));
  };
  const ButtonStart = () => {
    dispatch(setStagesActions(2));
  };

  const DefaultGroup = () => {
    if (SummSer() > 0) {
      dispatch(setServerDefault());
    } else {
      dispatch(setAllDefaultActions());
    }
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
        <Mans key={data} setGroup={setGroup} Group={mansGroup} data={data} />
      );
    }
    return null;
  };

  const Again = () => {
    dispatch(setAllDefaultActions());
  };

  const RenderManagement = () => {
    if (stages === 0) {
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
    if (stages > 0 && stages < 2) {
      return (
        <>
          {central === -1 ? (
            <>
              Where is your data Choose one spot for Object Storage system
              {SummGr() > -5 && (
                <>
                  <DivButton onClick={DefaultGroup}>Prev.</DivButton>
                </>
              )}
            </>
          ) : (
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
          )}
        </>
      );
    }
    if (stages === 6) {
      return (
        <>
          Do you want to
          <DivButton onClick={Again}>start again?</DivButton>
        </>
      );
    }
  };

  return (
    <>
      <DivRegion>{RenderManagement()}</DivRegion>
      {group.map((_, indexGr) => renderMans(indexGr))}

      {stages !== 0 &&
        server.map((_, indexSer) => (
          <Server
            key={indexSer}
            server={server[indexSer]}
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
        <DivModal key="text">
          <div>done</div>
          <div>done</div>
        </DivModal>
      )}
    </>
  );
};
export default Ui;
