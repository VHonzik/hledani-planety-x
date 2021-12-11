import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import StartingInfo from "../components/StartingInfo/StartingInfo";
import Game, { SeasonNames, Seasons } from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";
import pageWithSeason from "../hoc/PageWithSeason/PageWithSeason";
import ErrorRedirect from "./ErrorRedirect";

function StartingInformation(props: {season: Seasons, gameId: string}) {
  const params: {facts: string} = useParams();
  const factsCount = parseInt(params.facts);

  if (isNaN(factsCount) || factsCount < 0 || factsCount > 12 || factsCount % 4 !== 0 ) {
    return (
      <ErrorRedirect>
        <p>Obtížnost s {factsCount} neumíme. Musí jich být 0, 4, 8 nebo 12. Jak si se sem dostal člověče?</p>
      </ErrorRedirect>
    )
  }

  const {season, gameId} = props;
  const startingInfo = Game.giveStartingInfo(season, factsCount);
  startingInfo.sort((entryA, entryB) => entryA.sector - entryB.sector);

  const nextPlayerLink = `/hra/${gameId}/vyberHrace`
  const researchConferencesLink = `/hra/${gameId}/vyzkumKonference`;

  return (
    <Content>
      <h1>Začáteční fakta</h1>
      <h2>{SeasonNames[season]}</h2>
      <StartingInfo entries={startingInfo} />
      <Link to={nextPlayerLink}>
        <Button fullWidth>
          Přidat dalšího hráče
        </Button>
      </Link>
      <Link to={researchConferencesLink}>
        <Button fullWidth>
            Pokračovat
        </Button>
      </Link>

    </Content>
  );
}

export default pageWithGame(pageWithSeason(StartingInformation));