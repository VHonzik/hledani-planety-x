import { SkyObjectNamesAccusative, StartingInfoEntry } from "../../game/Game";
import SkyObjectIcon from "../SkyObjectIcon/SkyObjectIcon";
import classes from "./StartingInfo.module.css"

function StartingInfo(props: {entries: StartingInfoEntry[]}) {
  const { entries } = props;
  const elements = [];

  for (let entry of entries) {
    const key = `${entry.sector}-${entry.object}`;
    elements.push((
      <tr key={key}>
        <td>Sektor {entry.sector+1}</td>
        <td><SkyObjectIcon inline object={entry.object} /></td>
        <td>neobsahuje {SkyObjectNamesAccusative[entry.object]}</td>
      </tr>
    ))
  }

  return (
    <div className={classes.centerHorizontally}>
      <table className={classes.factsTable}>
        {elements}
      </table>
    </div>
  )
}

export default StartingInfo;