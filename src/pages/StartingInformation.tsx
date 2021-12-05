import { useParams } from "react-router-dom";
import Content from "../components/Content/Content";
import { SeasonNames } from "../Seasons";

function StartingInformation() {
  const params: {gameId: string, season: string} = useParams();
  return (
    <Content>
      <h1>Začáteční fakta</h1>
      <h2>{SeasonNames[params.season]}</h2>
    </Content>
  );
}

export default StartingInformation;