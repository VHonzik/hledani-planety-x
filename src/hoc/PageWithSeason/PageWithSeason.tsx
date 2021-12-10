import { ComponentType } from "react";
import { useParams } from "react-router-dom";
import { reverseSeason } from "../../game/Game";
import ErrorRedirect from "../../pages/ErrorRedirect";

function pageWithSeason<T>(WrappedPage: ComponentType<T>) {
  return (hocProps: Omit<T, 'season'>) => {
    const params: {season: string} = useParams();
    const seasonName = params.season;
    const season = reverseSeason(params.season);

    if (season === undefined) {
      return (
        <ErrorRedirect>
          <p>Stranu {seasonName} neznám. Jak si se sem dostal člověče?</p>
        </ErrorRedirect>
      );
    } else {
      return (
        <WrappedPage {...(hocProps as T)} season={season}/>
      );
    }
  }
}

export default pageWithSeason;