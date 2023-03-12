import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroup,
  getServer,
  setAllDefaultActions,
  setServerDefault,
  setStagesActions,
} from "../../../../redux/services/GroupSlice";
import { DivButton } from "../Ui.styled";

const RendersText = ({ stages, central }) => {
  const dispatch = useDispatch();
  const { group } = useSelector(getGroup);
  const { server } = useSelector(getServer);

  useEffect(() => {
    const Bul = server.every((value) => value > 0);
    Bul && dispatch(setStagesActions(2));
  }, [dispatch, server]);

  useEffect(() => {
    const Bul = group.every((value) => value > -1);
    Bul && dispatch(setStagesActions(1));
  }, [dispatch, group]);

  const SummGr = () => {
    return group.reduce((total, value) => total + value, 0);
  };
  const SummSer = () => {
    return server.reduce((total, value) => total + value, 0);
  };

  const ButtonNext = () => {
    dispatch(setStagesActions(1));
  };
  const ButtonStart = () => {
    dispatch(setStagesActions(2));
  };
  const Again = () => {
    dispatch(setAllDefaultActions());
  };
  const DefaultGroup = () => {
    if (SummSer() > 0) {
      dispatch(setServerDefault());
    } else {
      dispatch(setAllDefaultActions());
    }
  };

  const commonButtons = SummGr() > -5 && (
    <>
      <DivButton onClick={DefaultGroup}>Prev.</DivButton>
      or
      <DivButton onClick={ButtonNext}>Next</DivButton>
    </>
  );

  const firstJSX = (
    <>
      Wher are your users? Choose the number for every region.
      {commonButtons}
    </>
  );

  const secondJSX =
    central === -1 ? (
      <>
        Where is your data Choose one spot for Object Storage system
        {SummGr() > -5 && <DivButton onClick={DefaultGroup}>Prev.</DivButton>}
      </>
    ) : (
      <>
        Choose minimum two additional spots for ByteCloud and press
        {SummGr() > -5 && (
          <>
            <DivButton onClick={DefaultGroup}>Prev.</DivButton>
            or
            <DivButton tog={SummSer() <= 2 ? 1 : 0} onClick={ButtonStart}>
              Start
            </DivButton>
          </>
        )}
      </>
    );

  const lastJSX = (
    <>
      Do you want to
      <DivButton onClick={Again}>start again?</DivButton>
    </>
  );

  switch (stages) {
    case 0:
      return firstJSX;
    case 1:
      return secondJSX;
    case 6:
      return lastJSX;
    default:
      return null;
  }
};
export default RendersText;
