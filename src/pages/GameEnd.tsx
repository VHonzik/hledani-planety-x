import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import SkyObjectIcon from "../components/SkyObjectIcon/SkyObjectIcon";
import Table from "../components/Table/Table";
import Game, { SkyObjectNamesNominative } from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function GameEnd() {
  let elements: JSX.Element[] = [];

  for (let i = 0; i < Game.skyObjects.length; i++) {
    const skyObject = Game.skyObjects[i];
    const key = `${i}-${skyObject}`;
    elements.push((
      <tr key={key}>
        <td>Sektor {i+1}</td>
        <td><SkyObjectIcon iconStyle='inline' object={skyObject} /></td>
        <td>{SkyObjectNamesNominative[skyObject]}</td>
      </tr>
    ));
  }

  return (
    <Content>
      <h1>Konec hry</h1>
      <Table innerDividers firstColumnHeader thickRows>
        <tbody>
          {elements}
        </tbody>
      </Table>
      <Divider margin />
      <Link to='/'>
        <Button fullWidth>Zpět na Úvodní obrazovku</Button>
      </Link>
    </Content>
  )
}

export default pageWithGame(GameEnd);