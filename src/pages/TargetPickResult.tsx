import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import ClockIcon from "../components/ClockIcon/ClockIcon";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import SkyObjectIcon from "../components/SkyObjectIcon/SkyObjectIcon";
import Game, { SkyObject, SkyObjectNamesNominative } from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";
import ErrorRedirect from "./ErrorRedirect";

function TargetPickResult(props: {gameId: string}) {
  const { gameId } = props;

  const params: {sector: string} = useParams();
  const sector = parseInt(params.sector);

  if (!Game.validSector(sector-1)) {
    return (
      <ErrorRedirect>
        <p>Sektor {sector} neexistuje. Jak si se sem dostal člověče?</p>
      </ErrorRedirect>
    );
  }

  const skyObject = Game.targetSector(sector-1);
  const continueLink = `/hra/${gameId}/herniMenu`;

  let message: React.ReactNode = null;
  let iconography: React.ReactNode = null;
  if (skyObject === SkyObject.TrulyEmpty) {
    message = <p>Sektor {sector} se zdá prázdný. Buďto je to <i>skutečně</i> {SkyObjectNamesNominative[SkyObject.TrulyEmpty]} nebo to může být {SkyObjectNamesNominative[SkyObject.PlanetX]}.</p>;
    iconography = <div><SkyObjectIcon object={SkyObject.TrulyEmpty} iconStyle={"inline"} /> <SkyObjectIcon object={SkyObject.PlanetX} iconStyle={"inline"} /></div>
  } else {
    message = <p>V sektoru {sector} je {SkyObjectNamesNominative[skyObject]}</p>;
    iconography = <SkyObjectIcon object={skyObject} iconStyle={"inline"} />;
  }

  return (
    <Content>
      <h1>Akce: Zacílit</h1>
      <p>Posuň svojí figurku: 4 <ClockIcon iconStyle={"tiny"} /></p>
      {iconography}
      {message}
      <Divider margin />
      <Link to={continueLink}>
        <Button fullWidth>Pokračovat</Button>
      </Link>
    </Content>
  );
}

export default pageWithGame(TargetPickResult);