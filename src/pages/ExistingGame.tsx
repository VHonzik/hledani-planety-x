import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import TextInput from "../components/TextInput/TextInput";
import Game from "../game/Game";
import ErrorRedirect from "./ErrorRedirect";
import LoadingGame from "./LoadingGame";

function ExistingGame() {
  let history = useHistory();

  const [gameCode, setGameCode] = useState('');
  const [flashInput, setFlashInput] = useState(false);
  const [gameErrorMessage, setGameErrorMessage] = useState<React.ReactNode>(null);
  const [gameLoading, setGameLoading] = useState(false);
  const [gameLoadingFailed, setGameLoadingFailed] = useState(false);


  function onFlashFinished() {
    setFlashInput(false);
  }

  function gameError(show: boolean) {
    if (show) {
      setFlashInput(true);
      setGameErrorMessage(<span>Kód {gameCode} není správný, možná špatně opsáno?</span>);
    } else {
      setGameErrorMessage(null);
    }
  }

  async function loadGame() {
    setGameLoading(true);
    const result = await Game.load(gameCode);
    if (result) {
      const playerChooseLink = `/hra/${gameCode}/vyberHrace`;
      history.push(playerChooseLink);
    } else {
      setGameLoadingFailed(true);
    }
  }

  function findGame(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (gameCode.length === 0) {
      setFlashInput(true);
      return;
    }

    const {found} = Game.findGameCode(gameCode);
    if (!found) {
      gameError(true);
    } else {
      loadGame();
    }
  }

  function onTextInputChange(value: string) {
    setGameCode(value);
    gameError(false);
  }

  if (gameLoading) {
    return (
      <LoadingGame />
    );
  }

  if (gameLoadingFailed) {
    return (
      <ErrorRedirect>
        <p>Něco se nepovedlo při načítání nové hry. Zkuste to později.</p>
      </ErrorRedirect>
    );
  }

  return (
    <Content>
      <h1>Hra více hráčů</h1>
      <form id='gameCodeForm' onSubmit={(event) => findGame(event)}>
        <TextInput fullWidth placeholder='Vlož kód hry' onChange={onTextInputChange} flash={flashInput} flashFinished={onFlashFinished} errorMessage={gameErrorMessage}/>
        <Button fullWidth formButton='gameCodeForm'>Připojit se do hry</Button>
      </form>
    </Content>
  );
}

export default ExistingGame;