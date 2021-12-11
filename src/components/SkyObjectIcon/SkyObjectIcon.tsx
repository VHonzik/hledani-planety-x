import { SkyObject, SkyObjectImages, SkyObjectNamesNominative } from "../../game/Game";
import Icon, { IconStyle } from "../Icon/Icon";

interface SkyObjectProps {
  object: SkyObject,
  iconStyle?: IconStyle,
}

function SkyObjectIcon(props: SkyObjectProps) {
  const { object, iconStyle } = props;
  return (
    <Icon iconStyle={iconStyle} src={SkyObjectImages[object]}  alt={SkyObjectNamesNominative[object]} />
  );
}

export default SkyObjectIcon;