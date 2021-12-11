import React from 'react';
import classes from './Table.module.css'

function Table(props: {children?: React.ReactNode, innerDividers?: boolean, firstColumnHeader?: boolean, thickRows?: boolean}) {
  const { innerDividers, children, firstColumnHeader, thickRows } = props;

  let tableClasses = [classes.table];
  if (innerDividers) {
    tableClasses.push(classes.innerDividers)
  }

  if (firstColumnHeader) {
    tableClasses.push(classes.firstColumnHeader)
  }

  if (thickRows) {
    tableClasses.push(classes.thickRows)
  }

  return (
    <div className={classes.centerHorizontally}>
      <table className={tableClasses.join(' ')}>
        {children}
      </table>
    </div>
  );
}

export default Table;