import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroup,
  setGroupActions_0,
  setGroupActions_1,
  setGroupActions_2,
  setGroupActions_3,
  setGroupActions_4,
  setGroupDefault,
} from "../../../redux/services/GroupSlice";
import Mans from "./Mans/Mans";
import Server from "./Server/Server";
import { DivRegion, DivButton } from "./Ui.styled";

// const ManVu = {};

const Ui = () => {
  const [nextV, setNextV] = useState(false);
  const dispatch = useDispatch();
  const { group_0, group_1, group_2, group_3, group_4 } = useSelector(getGroup);

  const Summ = () => {
    return group_0 + group_1 + group_2 + group_3 + group_4;
  };

  useEffect(() => {
    const Bul =
      group_0 > -1 &&
      group_1 > -1 &&
      group_2 > -1 &&
      group_3 > -1 &&
      group_4 > -1 &&
      true;
    Bul && setNextV(true);
  }, [group_0, group_1, group_2, group_3, group_4]);

  const ButtonNext = () => {
    setNextV(true);
    console.log(group_0 > -1 && nextV);
  };

  const DefaultGroup = () => {
    dispatch(setGroupDefault());
    setNextV(false);
  };

  return (
    <>
      <DivRegion>
        Wher are your users? Choose the number for every region.
        {Summ() > -5 && (
          <>
            <DivButton onClick={ButtonNext}>Next</DivButton>
            <DivButton onClick={DefaultGroup}>Reset</DivButton>
          </>
        )}
      </DivRegion>
      {!nextV ? (
        <Mans setGroup={setGroupActions_0} Group={group_0} data={0} />
      ) : (
        group_0 > -1 && (
          <Mans setGroup={setGroupActions_0} Group={group_0} data={0} />
        )
      )}

      {!nextV ? (
        <Mans setGroup={setGroupActions_1} Group={group_1} data={1} />
      ) : (
        group_1 > -1 && (
          <Mans setGroup={setGroupActions_1} Group={group_1} data={1} />
        )
      )}
      
      {!nextV ? (
        <Mans setGroup={setGroupActions_2} Group={group_2} data={2} />
      ) : (
        group_2 > -1 && (
          <Mans setGroup={setGroupActions_2} Group={group_2} data={2} />
        )
      )}
      
      {!nextV ? (
        <Mans setGroup={setGroupActions_3} Group={group_3} data={3} />
      ) : (
        group_3 > -1 && (
          <Mans setGroup={setGroupActions_3} Group={group_3} data={3} />
        )
      )}

      {!nextV ? (
        <Mans setGroup={setGroupActions_4} Group={group_4} data={4} />
      ) : (
        group_4 > -1 && (
          <Mans setGroup={setGroupActions_4} Group={group_4} data={4} />
        )
      )}

      
      
      

      {nextV && <Server />}
    </>
  );
};
export default Ui;
