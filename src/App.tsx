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
import ResearchConferences from './pages/ResearchConferences';
import GameMenu from './pages/GameMenu';
import GameEndConfirmation from './pages/GameEndConfirmation';
import GameEnd from './pages/GameEnd';
import TargetPickReminder from './pages/TargetPickReminder';
import TargetPick from './pages/TargetPick';
import TargetPickResult from './pages/TargetPickResult';

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
      <Route path='/hra/:gameId/vyzkumKonference' exact>
        <ResearchConferences />
      </Route>
      <Route path='/hra/:gameId/herniMenu' exact>
        <GameMenu />
      </Route>
      <Route path='/hra/:gameId/konecPotvrzeni' exact>
        <GameEndConfirmation />
      </Route>
      <Route path='/hra/:gameId/zacilitUpozorneni' exact>
        <TargetPickReminder />
      </Route>
      <Route path='/hra/:gameId/zacilit' exact>
        <TargetPick />
      </Route>
      <Route path='/hra/:gameId/zacilit/:sector' exact>
        <TargetPickResult />
      </Route>
      <Route path='/hra/:gameId/konec' exact>
        <GameEnd />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
