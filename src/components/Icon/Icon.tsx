import classes from './Icon.module.css'

export type IconStyle = 'tiny' | 'inline'

export interface IconProps {
  src: string;
  alt: string;
  iconStyle?: IconStyle;
}

function Icon(props: IconProps) {
  const {src, alt, iconStyle} = props;
  const classNames = []
  if (iconStyle === 'inline') {
    classNames.push(classes.inlineIcon);
  } else if (iconStyle === 'tiny') {
    classNames.push(classes.tinyIcon);
  } else {
    classNames.push(classes.fullIcon);
  }
  return (
    <img src={src} alt={alt} className={classNames.join(",")}/>
  );
}

export default Icon;