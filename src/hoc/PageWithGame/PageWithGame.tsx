import React, { ComponentType, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Game from "../../game/Game";
import ErrorRedirect from "../../pages/ErrorRedirect";
import LoadingGame from "../../pages/LoadingGame";

function pageWithGame<T>(WrappedPage: ComponentType<T>) {
  return (hocProps: Omit<T, 'gameId'>) => {
    const params: {gameId: string} = useParams();
    const { gameId } = params;

    let [initDone, setInitDone] = useState(Game.valid());
    let [gameValid, setGameValid] = useState(Game.valid());

    useEffect(() => {
      let isMounted = true;
      async function loadGame() {
        const loaded = await Game.load(gameId);
        console.log(`Game ${gameId} loaded: ${loaded}`);
        if (isMounted) {
          setGameValid(loaded);
          setInitDone(true);
        }
      }

      const idMatches = Game.check(gameId);
      console.log(`Game id matches: ${idMatches}`);
      if (!idMatches) {
        console.log(`Need to load game ${gameId}`);
        setInitDone(false);
        loadGame();
      }

      return function cleanUp() {
        isMounted = false;
      }
    }, [gameId]);

    if (!initDone) {
      return (
        <LoadingGame />
      )
    }

    if (gameValid) {
      return (
        <WrappedPage {...(hocProps as T)} gameId={gameId}/>
      );
    }

    return (
      <ErrorRedirect>
        <p>Nepodařilo se nám načíst hru s kódem: {gameId}.</p>
      </ErrorRedirect>
    );
  }
}

export default pageWithGame;