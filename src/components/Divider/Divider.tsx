import classes from './Divider.module.css'

function Divider(props: {margin?: boolean}) {
  let classNames = [classes.divider];
  if (props.margin) {
    classNames.push(classes.margin);
  }
  return (
    <hr className={classNames.join(' ')} />
  );
}

export default Divider;