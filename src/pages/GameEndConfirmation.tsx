import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function GameEndConfirmation(props: {gameId: string}) {
  const { gameId } = props;
  const returnLink = `/hra/${gameId}/herniMenu`;
  const endLink = `/hra/${gameId}/konec`;
  return (
    <Content>
      <h1>Ukončit hru</h1>
      <p>Jsi si jistý že chceš ukončit hru a odhalit objekty ve všech sektorech?</p>
      <Link to={endLink}>
        <Button fullWidth>Ano (Ukončit hru)</Button>
      </Link>
      <Link to={returnLink}>
        <Button fullWidth>Ne (Hrát dál)</Button>
      </Link>
    </Content>
  )
}

export default pageWithGame(GameEndConfirmation);