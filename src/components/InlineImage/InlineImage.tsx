import classes from './InlineImage.module.css'

function InlineImage(props: {src: string, alt: string}) {
  return (
    <img src={props.src} alt={props.alt} className={classes.inlineImage}/>
  );
}

export default InlineImage;