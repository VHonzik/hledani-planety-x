import { SeasonNames, SeasonImages } from "../../Seasons";
import classes from './FullImage.module.css'


function FullImage(props: {season: string}) {
  return (
    <img src={SeasonImages[props.season]} alt={SeasonNames[props.season]} className={classes.fullImage} />
  );
}

export default FullImage;