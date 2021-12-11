import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound'
import NewGame from './pages/NewGame'
import NewGameDifficulty from './pages/NewGameDifficulty';
import GameConfirm from './pages/GameConfirm';
import GameChoosePlayer from './pages/GameChoosePlayer';
import GameChooseDifficulty from './pages/GameChooseDifficulty';
import StartingInformation from './pages/StartingInformation';
import ExistingGame from './pages/ExistingGame';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/novahra' />
      </Route>
      <Route path='/novahra' exact>
        <NewGame />
      </Route>
      <Route path='/pripojitkehre/vlozitkod' exact>
        <ExistingGame />
      </Route>
      <Route path='/novahra/obtiznost' exact>
        <NewGameDifficulty />
      </Route>
      <Route path='/novahra/:mode/potrvrdit' exact>
        <GameConfirm />
      </Route>
      <Route path='/hra/:gameId/vyberHrace' exact>
        <GameChoosePlayer />
      </Route>
      <Route path='/hra/:gameId/:season/obtiznost' exact>
        <GameChooseDifficulty />
      </Route>
      <Route path='/hra/:gameId/:season/:facts/zacatecniFakta' exact>
        <StartingInformation />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
