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
import { DivReset } from "./Ui.styled";

// const ManVu = {};

const Ui = () => {
  const dispatch = useDispatch();
  const { group_0, group_1, group_2, group_3, group_4 } = useSelector(getGroup);

  const Tog = () => {
    return group_0 + group_1 + group_2 + group_3 + group_4 > -5
      ? true
      : false;
  };

  const DefaultGroup = () => {
    dispatch(setGroupDefault());
  };

  return (
    <>
      {/* <Man />; */}
      {Tog() && <DivReset onClick={DefaultGroup}>Reset</DivReset>}
      <Mans setGroup={setGroupActions_0} Group={group_0} data={0} />
      <Mans setGroup={setGroupActions_1} Group={group_1} data={1} />
      <Mans setGroup={setGroupActions_2} Group={group_2} data={2} />
      <Mans setGroup={setGroupActions_3} Group={group_3} data={3} />
      <Mans setGroup={setGroupActions_4} Group={group_4} data={4} />
    </>
  );
};
export default Ui;
