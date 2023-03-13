import { useState } from "react";
import { Box, Header } from "./App.styled";
import BG from "./component/bg/bg";
import Ui from "./component/Woozley/Ui/Ui";

function App() {
  const [isWater, setIsWater] = useState(false);

  const handleWater = (event) => {
    setIsWater(event.target.checked);
  };

  return (
    <Header>
      <Box>
        <BG isWater={isWater} />
        <Ui isWater={isWater} handleWater={handleWater} />
      </Box>
    </Header>
  );
}

export default App;
