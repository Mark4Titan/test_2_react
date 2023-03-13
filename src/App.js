import { useState } from "react";
import { Box, Header } from "./App.styled";
import BG from "./component/bg/bg";
import Ui from "./component/Woozley/Ui/Ui";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isWater, setIsWater] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleWater = (event) => {
    setIsWater(event.target.checked);
  };

  return (
    <Header>
      <Box>
        <BG isChecked={isChecked} isWater={isWater} />
        <Ui
          isChecked={isChecked}
          isWater={isWater}
          handleCheckboxChange={handleCheckboxChange}
          handleWater={handleWater}
        />
      </Box>
    </Header>
  );
}

export default App;
