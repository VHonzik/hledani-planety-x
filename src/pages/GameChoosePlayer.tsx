import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import SeasonIcon from "../components/SeasonIcon/SeasonIcon";
import { SeasonNames, Seasons } from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";


function GameChoosePlayer(props: {gameId: string}) {
  const { gameId } = props;
  const link = `/hra/${gameId}/`
  const linkAffix = '/obtiznost'

  let buttons:JSX.Element[] = []
  for (let seasonKey in Seasons) {
    const season = Seasons[seasonKey as keyof typeof Seasons];
    buttons.push(
      <Link to={link+season+linkAffix} key={seasonKey}>
        <Button fullWidth>
          <SeasonIcon inline season={season} />{SeasonNames[season]}
        </Button>
      </Link>
    )
  }

  return (
    <Content>
      <h1>Výběr strany</h1>
      <p>Vyber stranu na kterou koukáš a napiš si ji na sešit:</p>
      {buttons}
    </Content>
  )
}

export default pageWithGame(GameChoosePlayer);