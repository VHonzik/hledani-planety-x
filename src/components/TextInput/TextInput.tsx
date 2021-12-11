import React, { useEffect, useState } from 'react';

import classes from './TextInput.module.css'

export interface TextInputProps {
  fullWidth?: boolean,
  placeholder?: string,
  onChange?: (value: string) => void,
  flash?: boolean,
  flashFinished?: () => void,
  errorMessage?: React.ReactNode
}

function TextInput(props: TextInputProps) {
  const {fullWidth, placeholder, onChange, flash, flashFinished, errorMessage} = props;

  let [content, setContent] = useState('');
  let [flashState, setFlashState] = useState(false);

  useEffect(() => {
    function disableFlash() {
      setFlashState(false);
      if (flashFinished) {
        flashFinished();
      }
    }
    let timeout: ReturnType<typeof setTimeout>;
    if (flash) {
      setFlashState(true);
      timeout = setTimeout(disableFlash, 300);
    }

    return function cleanup() {
      clearTimeout(timeout);
    }
  }, [flash, flashFinished]);

  let classNames = [classes.input];
  if (fullWidth) {
    classNames.push(classes.fullWidth);
  }

  if (flashState) {
    classNames.push(classes.flashEnter);
  }

  function onHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  }

  let errorElement = null;
  if (errorMessage) {
    errorElement = <div className={classes.error}>{errorMessage}</div>
  }

  return (
    <div className={classes.root}>
      <input type='text' value={content} className={classNames.join(' ')} placeholder={placeholder || ''} name='gameCode' onChange={onHandleChange} />
      {errorElement}
    </div>
  );
}

export default TextInput;