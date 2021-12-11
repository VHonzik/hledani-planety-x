import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";

function NewGameDifficulty() {
  const standardLink = '/novahra/standard/potrvrdit';
  const expertLink = '/novahra/expert/potrvrdit';
  return (
    <Content>
      <h1>Obtížnost</h1>
      <Link to={standardLink}>
        <Button fullWidth>Standart</Button>
      </Link>
      <Link to={expertLink}>
        <Button fullWidth>Expert</Button>
      </Link>
    </Content>
  );
}

export default NewGameDifficulty;