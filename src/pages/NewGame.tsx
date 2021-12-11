import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";

function NewGame() {
  return (
    <Content>
      <h1>Nová hra</h1>
      <Link to='/novahra/obtiznost'>
        <Button fullWidth>Založit novou hru</Button>
      </Link>
      <Link to='/pripojitkehre/vlozitkod'>
        <Button fullWidth>Vložit kód hry</Button>
      </Link>
    </Content>
  );
}

export default NewGame;