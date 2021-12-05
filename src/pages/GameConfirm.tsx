import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";

function GameConfirm() {
  const params: {gameId: string} = useParams();
  return (
    <Content>
      <h1>Kód hry</h1>
      <p>Pokud další hráči používají jiná zařízení, měli by zadat následující kód:</p>
      <h2>{params.gameId.toUpperCase()}</h2>
      <b>Standart (12 sektorů)</b>
      <p>Ověřte, že všechny zarížení používají tento kód a začněte stisknutím tlačítka Pokračovat.</p>
      <hr />
      <Link to='/hra/g3x6/vyberHrace'>
        <Button fullWidth>Pokračovat</Button>
      </Link>
      <hr />
      <Link to='/novahra'>
        <Button fullWidth>Zpět</Button>
      </Link>
    </Content>
  )
}

export default GameConfirm;