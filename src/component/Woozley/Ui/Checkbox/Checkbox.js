import { DivCheck } from "./Checkbox.styled";

const Checkbox = ({ isWater, handleWater }) => {
  return (
    <DivCheck>
      <label>
        <input type="checkbox" checked={isWater} onChange={handleWater} />
        the water is blue
      </label>      
    </DivCheck>
  );
};

export default Checkbox;
