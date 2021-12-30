import classes from './ButtonGrid.module.css'

interface ButtonGridProps {
  title: string,
  columns: number,
  shown: boolean,
  onPick?: (value: number) => void
}

interface ButtonGridWrapperProps extends ButtonGridProps {
  children: React.ReactNode
}

function ButtonGrid(props: ButtonGridProps) {
  const { title, columns, shown, onPick } = props;
  const buttonWidth = `${100/columns}%`;
  const buttons = [];

  function buttonClicked(index: number) {
    if (onPick) {
      onPick(index);
    }
  }

  for (let i = 0; i < 18; i++) {
    buttons.push(
      <button key={`gridButton${i}`} style={{width: buttonWidth}} onClick={() => {buttonClicked(i)}}>{i+1}</button>
    )
  }
  return (
    <div className={classes.gridRoot} style={{display: shown ? 'initial' : 'none'}}>
      <div className={classes.gridTitle}>{title}</div>
      {buttons}
    </div>
  );
}

function ButtonGridWrapper(props: ButtonGridWrapperProps) {
  const {children} = props;
  return (
    <div className={classes.gridWrapper}>
      {children}
      <ButtonGrid {...props} />
    </div>
  );
}


export { ButtonGridWrapper }
export default ButtonGrid;
