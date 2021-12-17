import { SkyObjectNamesAccusative, StartingInfoEntry } from "../../game/Game";
import SkyObjectIcon from "../SkyObjectIcon/SkyObjectIcon";
import Table from "../Table/Table";

function StartingInfo(props: {entries: StartingInfoEntry[]}) {
  const { entries } = props;
  const elements = [];

  if (entries.length === 0) {
    return (
      <p>Jsi génius, ty nepotřebuješ žádný fakta.</p>
    );
  }

  for (let entry of entries) {
    const key = `${entry.sector}-${entry.object}`;
    elements.push((
      <tr key={key}>
        <td>Sektor {entry.sector+1}</td>
        <td><SkyObjectIcon iconStyle='inline' object={entry.object} /></td>
        <td>neobsahuje {SkyObjectNamesAccusative[entry.object]}</td>
      </tr>
    ));
  }

  return (
    <Table innerDividers firstColumnHeader thickRows>
      <tbody>
        {elements}
      </tbody>
    </Table>
  );
}

export default StartingInfo;