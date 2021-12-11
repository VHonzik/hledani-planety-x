import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import ClockIcon from "../components/ClockIcon/ClockIcon";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function GameMenu(props: {gameId: string}) {
  const { gameId } = props;
  const link = `/hra/${gameId}/`;
  return (
    <Content>
      <h1>Herní Menu</h1>
      <Link to={link+'pruzkum'}>
        <Button fullWidth>Průzkum (3-4 <ClockIcon />)</Button>
      </Link>
      <Link to={link+'zamirit'}>
        <Button fullWidth>Zacílit (4 <ClockIcon />)</Button>
      </Link>
      <Link to={link+'vyzkum'}>
        <Button fullWidth>Výzkum (1 <ClockIcon />)</Button>
      </Link>
      <Link to={link+'najitX'}>
        <Button fullWidth>Najít Planetu X (5 <ClockIcon />)</Button>
      </Link>
      <Divider margin />
      <Link to={link+'peerReview'}>
        <Button fullWidth>Peer Review (Recenze)</Button>
      </Link>
      <Link to={link+'konference'}>
        <Button fullWidth>Planeta X Konference</Button>
      </Link>
      <Divider margin />
      <Link to={link+'end'}>
        <Button fullWidth>Ukončit hru a Odhalit objekty</Button>
      </Link>
    </Content>
  );
}

export default pageWithGame(GameMenu);