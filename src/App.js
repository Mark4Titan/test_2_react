import { Header } from "./App.styled";
import BG from "./component/bg/bg";
import Ui from "./component/Woozley/Ui/Ui";

function App() {
  return (
    <div>
      <Header grid_template="1fr / 1fr 1fr 1fr">
        <BG />
        <Ui />
      </Header>
    </div>
  );
}

export default App;
