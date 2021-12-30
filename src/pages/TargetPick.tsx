import { useState } from "react";
import { Link  } from "react-router-dom";
import Button from "../components/Button/Button";
import { ButtonGridWrapper } from "../components/ButtonGrid/ButtonGrid";
import ClockIcon from "../components/ClockIcon/ClockIcon";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function TargetPick(props: {gameId: string}) {
  const { gameId } = props;

  let [sectorPickShown, setSectorPickShown] = useState(false);
  let [pickedSector, setPickedSector] = useState<number | undefined>(undefined);

  function selectSectorClicked() {
    setSectorPickShown(!sectorPickShown);
  }

  function sectorPicked(value: number) {
    setPickedSector(value);
    setSectorPickShown(false);
  }

  let continueLink = `/hra/${gameId}/zacilit/-1`;
  if (pickedSector !== undefined) {
    continueLink = `/hra/${gameId}/zacilit/${pickedSector+1}`;
  }

  return (
    <Content>
      <h1>Akce: Zacílit</h1>
      <div style={{marginBottom: '2em'}}>
        <span style={{marginRight: '1em'}}>Sektor:</span>
        <ButtonGridWrapper columns={6} title="Vyber sektor" shown={sectorPickShown} onPick={sectorPicked}>
          <Button onClick={selectSectorClicked}>{pickedSector !== undefined ? pickedSector.toString() : '(Vyber Sektor)'}</Button>
        </ButtonGridWrapper>
      </div>
      <Link to={continueLink}>
        <Button fullWidth disabled={pickedSector === undefined}>Zacílit (4 <ClockIcon />)</Button>
      </Link>
      <Divider margin />
      <Button fullWidth>Zpět</Button>
    </Content>
  );
}

export default pageWithGame(TargetPick);