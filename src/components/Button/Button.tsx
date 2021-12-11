
import classes from './Button.module.css'

function Button(props: {children: React.ReactNode, fullWidth?: boolean, disabled?: boolean, formButton?:string, onClick?: () => void}) {
  const {fullWidth, disabled, children, formButton, onClick} = props;

  let formButtonProps = {}
  if (formButton) {
    formButtonProps = { type: 'submit', form: formButton }
  }

  let classNames = [classes.button];
  if (fullWidth) {
    classNames.push(classes.fullWidth);
  }
  return (
    <button className={classNames.join(' ')} disabled={disabled || false} onClick={onClick} {...formButtonProps}>{children}</button>
  )
}

export default Button;