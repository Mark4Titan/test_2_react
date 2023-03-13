import { Stor_0001, Stor_0010, Stor_0100, Stor_1000, tableCloud } from "../../../../Logic/Logic";

const PatAnim = (Data, central) => {
  const Cent = () => {
    if (central === -1)
      return [{ Lat: 0 }, { Lat: 0 }, { Lat: 0 }, { Lat: 0 }, { Lat: 0 }];
    if (central === 0) return Stor_1000;
    if (central === 1) return Stor_0100;
    if (central === 2) return Stor_0010;
    if (central === 3) return Stor_0001;
  };
  return [
    { Cloud: tableCloud[Data], Obj: Cent()[Data] },
    { Cloud: tableCloud[Data], Obj: Cent()[Data] },
    { Cloud: tableCloud[Data], Obj: Cent()[Data] },
    { Cloud: tableCloud[Data], Obj: Cent()[Data] },
    { Cloud: tableCloud[Data], Obj: Cent()[Data] },
  ];
};

export default PatAnim