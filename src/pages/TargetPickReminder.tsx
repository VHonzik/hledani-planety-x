import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import HelpImage from "../components/HelpImage/HelpImage";
import Game from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function TargetPickReminder(props: {gameId: string}) {
  const { gameId } = props;
  const returnLink = `/hra/${gameId}/herniMenu`;
  const continueLink = `/hra/${gameId}/zacilit`;
  return (
    <Content>
      <h1>Akce: Zacílit</h1>
      <p>Připomínka: Zacílit lze pouze na sektory které jsou ve viditelné obloze. (Na začátku hry jsou ve viditelné obloze sektory 1-{Game.getVisibleSkySize()})</p>
      <HelpImage src={Game.getVisibleSkyHelpImage()} alt='Viditelná obloha' caption='Zacílit lze pouze ve videtlné půlce oblohy.' />
      <Link to={continueLink}>
        <Button fullWidth>Pokračovat</Button>
      </Link>
      <Divider margin />
      <Button fullWidth disabled>Toto upozornění už neukazovat</Button>
      <Divider margin />
      <Link to={returnLink}>
        <Button fullWidth>Zpět</Button>
      </Link>
    </Content>
  );
}

export default pageWithGame(TargetPickReminder);