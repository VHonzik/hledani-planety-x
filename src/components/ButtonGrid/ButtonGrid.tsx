import classes from './ButtonGrid.module.css'

interface ButtonGridProps {
  title: string,
  columns: number,
  values: string[],
  shown: boolean,
  onPick?: (index: number, value: string) => void
}

interface ButtonGridWrapperProps extends ButtonGridProps {
  children: React.ReactNode
}

function ButtonGrid(props: ButtonGridProps) {
  const { title, columns, shown, onPick, values } = props;
  const buttonWidth = `${100/columns}%`;
  const buttons = [];

  function buttonClicked(index: number, value: string) {
    if (onPick) {
      onPick(index, value);
    }
  }

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    buttons.push(
      <button key={`gridButton${i}`} style={{width: buttonWidth}} onClick={() => {buttonClicked(i, value)}}>{value}</button>
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
