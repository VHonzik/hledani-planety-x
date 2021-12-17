import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import Divider from "../components/Divider/Divider";
import Table from "../components/Table/Table";
import Game, { SkyObjectNamesPluralNominative } from "../game/Game";
import pageWithGame from "../hoc/PageWithGame/PageWithGame";

function ResearchConferences(props: {gameId: string}) {
  const { gameId } = props;

  const researchRows: React.ReactNode[] = [];
  const researchObject = Game.research;

  for (let researchName in researchObject) {
    const researchData = researchObject[researchName as keyof typeof researchObject]
    if (researchData) {
      let text = SkyObjectNamesPluralNominative[researchData.objects[0]];
      if (researchData.objects.length > 1) {
        text += ' a ' + SkyObjectNamesPluralNominative[researchData.objects[1]]
      }
      researchRows.push(<tr key={researchName}><td>{researchName}</td><td>{text}</td></tr>);
    }
  }

  const conferencesRows: React.ReactNode[] = [];
  const conferencesObject = Game.conferences;
  for (let conferenceName in conferencesObject) {
    const researchData = conferencesObject[conferenceName as keyof typeof conferencesObject]
    if (researchData) {
      let text = SkyObjectNamesPluralNominative[researchData.objects[0]];
      if (researchData.objects.length > 1) {
        text += ' a ' + SkyObjectNamesPluralNominative[researchData.objects[1]]
      }
      conferencesRows.push(<tr key={conferenceName}><td>{conferenceName}</td><td>{text}</td></tr>);
    }
  }

  const continueLink = `/hra/${gameId}/herniMenu`;
  return (
    <Content>
      <h1>Výzkum a Konference</h1>
      <p>V této hře jsou dostupné následující výzkumná témata a konference. Doporučujeme si je napsat na papír.</p>
      <Divider margin />
      <Table>
        <tbody>
          <tr><th colSpan={2}>Výzkum</th></tr>
          {researchRows}
          <tr><th colSpan={2}>Konference</th></tr>
          {conferencesRows}
        </tbody>
      </Table>
      <Divider margin />
      <Link to={continueLink}>
        <Button fullWidth>Pokračovat</Button>
      </Link>
    </Content>
  );
}

export default pageWithGame(ResearchConferences);