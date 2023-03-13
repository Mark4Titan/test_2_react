import { DivCheck } from "./Checkbox.styled";

const Checkbox =({isChecked,
isWater,
handleCheckboxChange,
handleWater})=> {
  

  return (
    <DivCheck>
      <label>
        <input type="checkbox" checked={isWater} onChange={handleWater} />
        the water is blue
      </label>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Demo
      </label>
    </DivCheck>
  );
}

export default Checkbox;
