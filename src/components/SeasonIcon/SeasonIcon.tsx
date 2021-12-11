import { SeasonImages, SeasonNames, Seasons } from "../../game/Game";
import Icon, { IconStyle } from "../Icon/Icon";

interface SeasonProps {
  season: Seasons,
  iconStyle?: IconStyle,
}

function SeasonIcon(props: SeasonProps) {
  const { season, iconStyle } = props;
  return (
    <Icon iconStyle={iconStyle} src={SeasonImages[season]}  alt={SeasonNames[season]} />
  );
}

export default SeasonIcon;