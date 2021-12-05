
import classes from './Button.module.css'

function Button(props: {children: React.ReactNode, fullWidth?: boolean, disabled?: boolean}) {
  let classNames = [classes.button];
  if (props.fullWidth) {
    classNames.push(classes.fullWidth);
  }
  return (
    <button className={classNames.join(' ')} disabled={props.disabled || false}>{props.children}</button>
  )
}

export default Button;