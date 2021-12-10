import { Link, } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import SeasonIcon from "../components/SeasonIcon/SeasonIcon";
import { SeasonNames, Seasons } from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";
import pageWithSeason from "../hoc/PageWithSeason/PageWithSeason";


function GameChooseDifficulty(props: {season: Seasons, gameId: string}) {
  const {season, gameId} = props;
  const link = `/hra/${gameId}/${season}/`
  return (
    <Content>
      <h1>{SeasonNames[season]}</h1>
      <SeasonIcon season={season} />
      <p>Vyber si obtížnost:</p>
      <Link to={link+'12/zacatecniFakta'}>
        <Button fullWidth>
          Dítě (12 faktů)
        </Button>
      </Link>
      <Link to={link+'8/zacatecniFakta'}>
        <Button fullWidth>
          Začátečník (8 faktů)
        </Button>
      </Link>
      <Link to={link+'4/zacatecniFakta'}>
        <Button fullWidth>
          Zkušený/á (4 faktů)
        </Button>
      </Link>
      <Link to={link+'0/zacatecniFakta'}>
        <Button fullWidth>
          Génius (0 faktů)
        </Button>
      </Link>
    </Content>
  )
}

export default pageWithGame(pageWithSeason(GameChooseDifficulty));