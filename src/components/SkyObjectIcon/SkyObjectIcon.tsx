import { SkyObject, SkyObjectImages, SkyObjectNamesNominative } from "../../game/Game";
import Icon from "../Icon/Icon";

interface SkyObjectProps {
  object: SkyObject,
  inline?: boolean
}

function SkyObjectIcon(props: SkyObjectProps) {
  const { object, inline } = props;
  return (
    <Icon inline={inline} src={SkyObjectImages[object]}  alt={SkyObjectNamesNominative[object]} />
  );
}

export default SkyObjectIcon;