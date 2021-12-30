import Icon, { IconStyle } from "../Icon/Icon";

function ClockIcon(props: {iconStyle?: IconStyle}) {
  return (
    <Icon iconStyle={props.iconStyle || 'tiny'} src='/clock.png' alt='Tahů' />
  );
}

export default ClockIcon;