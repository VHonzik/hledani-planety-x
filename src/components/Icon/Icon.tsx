import classes from './Icon.module.css'

export interface IconProps {
  src: string;
  alt: string;
  inline?: boolean;
}

function Icon(props: IconProps) {
  const {src, alt, inline} = props;
  const styles = []
  if (inline) {
    styles.push(classes.inlineIcon);
  } else {
    styles.push(classes.fullIcon);
  }
  return (
    <img src={src} alt={alt} className={styles.join(",")}/>
  );
}

export default Icon;