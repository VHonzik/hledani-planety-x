import React from 'react';
import classes from './Content.module.css'

function Content(props: {children: React.ReactNode}) {
  return (
    <div className={classes.content}>
      {props.children}
    </div>
  );
}

export default Content;