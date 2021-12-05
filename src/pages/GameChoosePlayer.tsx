import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import { SeasonInlineImages, SeasonNames, Seasons } from "../Seasons";


function GameChoosePlayer() {
  const params: {gameId: string} = useParams();
  const link = `/hra/${params.gameId}/`
  const linkAffix = '/obtiznost'

  let buttons:JSX.Element[] = []
  for (let season of Seasons) {
    buttons.push(
      <Link to={link+season+linkAffix}>
        <Button fullWidth>
          <SeasonInlineImages season={season} />{SeasonNames[season]}
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

export default GameChoosePlayer;