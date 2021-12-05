import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import FullImage from "../components/FullImage/FullImage";
import { SeasonNames } from "../Seasons";


function GameChooseDifficulty() {
  const params: {gameId: string, season: string} = useParams();
  const link = `/game/${params.gameId}/${params.season}/`
  return (
    <Content>
      <h1>{SeasonNames[params.season]}</h1>
      <FullImage season={params.season}/>
      <p>Vyber si obtížnost:</p>
      <Link to={link+'12'}>
        <Button fullWidth>
          Dítě (12 faktů)
        </Button>
      </Link>
      <Link to={link+'8'}>
        <Button fullWidth>
          Začátečník (8 faktů)
        </Button>
      </Link>
    </Content>
  )
}

export default GameChooseDifficulty;