import { useState } from "react";
import { Link  } from "react-router-dom";
import Button from "../components/Button/Button";
import { ButtonGridWrapper } from "../components/ButtonGrid/ButtonGrid";
import ClockIcon from "../components/ClockIcon/ClockIcon";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import Game from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function TargetPick(props: {gameId: string}) {
  const { gameId } = props;

  let [sectorPickShown, setSectorPickShown] = useState(false);
  let [pickedSector, setPickedSector] = useState<number | undefined>(undefined);

  function selectSectorClicked() {
    setSectorPickShown(!sectorPickShown);
  }

  function sectorPicked(index: number, value: string) {
    setPickedSector(index);
    setSectorPickShown(false);
  }

  let continueLink = `/hra/${gameId}/zacilit/-1`;
  if (pickedSector !== undefined) {
    continueLink = `/hra/${gameId}/zacilit/${pickedSector+1}`;
  }

  const backLink = `/hra/${gameId}/herniMenu`;

  const sectors = Game.getSectors();
  const columns = Math.floor(sectors / 3);
  const values = Array.from({length: sectors}, (_, key) => (key + 1).toString())

  return (
    <Content>
      <h1>Akce: Zacílit</h1>
      <div style={{marginBottom: '2em'}}>
        <span style={{marginRight: '1em'}}>Sektor:</span>
        <ButtonGridWrapper columns={columns} values={values} title="Vyber sektor" shown={sectorPickShown} onPick={sectorPicked}>
          <Button onClick={selectSectorClicked}>{pickedSector !== undefined ? pickedSector.toString() : '(Vyber Sektor)'}</Button>
        </ButtonGridWrapper>
      </div>
      <Link to={continueLink}>
        <Button fullWidth disabled={pickedSector === undefined}>Zacílit (4 <ClockIcon />)</Button>
      </Link>
      <Divider margin />
      <Link to={backLink}>
        <Button fullWidth>Zpět</Button>
      </Link>
    </Content>
  );
}

export default pageWithGame(TargetPick);