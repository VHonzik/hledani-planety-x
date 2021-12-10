import { SeasonImages, SeasonNames, Seasons } from "../../game/Game";
import Icon from "../Icon/Icon";

interface SeasonProps {
  season: Seasons,
  inline?: boolean
}

function SeasonIcon(props: SeasonProps) {
  const { season, inline } = props;
  return (
    <Icon inline={inline} src={SeasonImages[season]}  alt={SeasonNames[season]} />
  );
}

export default SeasonIcon;