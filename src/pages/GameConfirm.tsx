import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import { useEffect, useState } from "react";
import Game, { GameMode, GameModeNames, reverseGameMode } from "../game/Game";
import ErrorRedirect from "./ErrorRedirect";
import LoadingGame from "./LoadingGame";

function GameConfirm() {
  const params: {mode: string} = useParams();
  const { mode } = params;
  const gameMode = reverseGameMode(mode);

  let [gameCode, setGameCode] = useState('');
  let [gameLoaded, setGameLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function createGame(mode: GameMode) {
      const gameCode = await Game.create(mode);
      if (isMounted) {
        setGameCode(gameCode);
        setGameLoaded(true);
      }
    }

    if (gameMode) {
      createGame(gameMode);
    } else {
      setGameLoaded(true);
    }

    return function cleanUp() {
      isMounted = false;
    }
  }, [gameMode]);

  if (!gameMode) {
    return (
      <ErrorRedirect>
        <p>Obtížnost {mode} neznám. Jak si se sem dostal člověče?</p>
      </ErrorRedirect>
    );
  }

  if (!gameLoaded) {
    return (
      <LoadingGame />
    );
  }

  if (Game.valid()) {
    const playerChooseLink = `/hra/${gameCode}/vyberHrace`;

    return (
      <Content>
        <h1>Kód hry</h1>
        <p>Pokud další hráči používají jiná zařízení, měli by zadat následující kód:</p>
        <h2>{gameCode}</h2>
        <b>{GameModeNames[gameMode]}</b>
        <p>Ověřte, že všechny zařízení používají tento kód a začněte stisknutím tlačítka Pokračovat.</p>
        <hr />
        <Link to={playerChooseLink}>
          <Button fullWidth>Pokračovat</Button>
        </Link>
        <hr />
        <Link to='/novahra'>
          <Button fullWidth>Zpět</Button>
        </Link>
      </Content>
    );
  } else {
    return (
      <ErrorRedirect>
        <p>Něco se nepovedlo při vytváření nové hry. Zkuste to později.</p>
      </ErrorRedirect>
    );
  }

}

export default GameConfirm;