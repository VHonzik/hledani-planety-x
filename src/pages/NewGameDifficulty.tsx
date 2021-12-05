import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";

function NewGameDifficulty() {
  return (
    <Content>
      <h1>Obtížnost</h1>
      <Link to='/hra/g3x6/potrvrdit'>
        <Button fullWidth>Standart</Button>
      </Link>
      <Button fullWidth disabled>Expert</Button>
    </Content>
  );
}

export default NewGameDifficulty;