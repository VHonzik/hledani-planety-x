import classes from './HelpImage.module.css'

function HelpImage(props: {src: string, alt?: string, caption: string}) {
  const {src, caption} = props;
  const alt = props.alt || caption;
  return (
    <div className={classes.helpImageContainer}>
      <img className={classes.helpImage} src={src} alt={alt} />
      <p className={classes.caption}><i>{caption}</i></p>
    </div>    
  );
}

export default HelpImage;