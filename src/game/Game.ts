import mapsJson from "./maps.json"

export enum GameMode {
  Standard = 'standard',
  Expert = 'expert'
}

const GameModeKeys: Record<GameMode, '12B' | '18A'> = {
  [GameMode.Standard]: '12B',
  [GameMode.Expert]: '18A',
}

export const GameModeNames: Record<GameMode, string> = {
  [GameMode.Standard]: 'Standard (12 sektorů)',
  [GameMode.Expert]: 'Expert (18 sektorů)',
}

export function reverseGameMode(gameModeValueString: string): GameMode | undefined {
  for (let seasonKey in GameMode) {
    const gameMode = GameMode[seasonKey as keyof typeof GameMode];
    if (gameMode === gameModeValueString) {
      return gameMode;
    }
  }
  return undefined;
}

export enum SkyObject {
  Asteroid = 1,
  DwarfPlanet = 2,
  Comet = 3,
  GasCloud = 4,
  TrulyEmpty = 0,
  PlanetX = 9
}

export const SkyObjectImages: Record<SkyObject, string> = {
  [SkyObject.Asteroid]: "/icon-w-1.png",
  [SkyObject.DwarfPlanet]: "/icon-w-2.png",
  [SkyObject.Comet]: "/icon-w-3.png",
  [SkyObject.GasCloud]: "/icon-w-4.png",
  [SkyObject.TrulyEmpty]: "/icon-w-0.png",
  [SkyObject.PlanetX]: "/icon-w-9.png",
}

export const SkyObjectNamesNominative: Record<SkyObject, string> = {
  [SkyObject.Asteroid]: "Asteroid",
  [SkyObject.DwarfPlanet]: "Trpasličí planeta",
  [SkyObject.Comet]: "Kometa",
  [SkyObject.GasCloud]: "Plynové mračno",
  [SkyObject.TrulyEmpty]: "Prázný Sektor",
  [SkyObject.PlanetX]: "Planeta X",
}

export const SkyObjectNamesAccusative: Record<SkyObject, string> = {
  [SkyObject.Asteroid]: "Asteroid",
  [SkyObject.DwarfPlanet]: "Trpasličí planetu",
  [SkyObject.Comet]: "Kometu",
  [SkyObject.GasCloud]: "Plynové mračno",
  [SkyObject.TrulyEmpty]: "Prázný Sektor",
  [SkyObject.PlanetX]: "Planetu X",
}

export enum Seasons {
  Spring = 'jaro',
  Summer = 'leto',
  Autumn = 'podzim',
  Winter = 'zima',
}

export const SeasonNames: Record<Seasons, string> = {
  [Seasons.Spring]: "Jarní Rovnodenost",
  [Seasons.Summer]: "Letní Slunovrat",
  [Seasons.Autumn]: "Podzimní Rovnodenost",
  [Seasons.Winter]: "Zimní Slunovrat",
}

export const SeasonImages: Record<Seasons, string> = {
  [Seasons.Spring]: "/season-spring.png",
  [Seasons.Summer]: "/season-summer.png",
  [Seasons.Autumn]: "/season-autumn.png",
  [Seasons.Winter]: "/season-winter.png",
}

const SeasonInfoKeys: Record<Seasons, string> = {
  [Seasons.Spring]: "A",
  [Seasons.Summer]: "B",
  [Seasons.Autumn]: "C",
  [Seasons.Winter]: "D",
}

export function reverseSeason(seasonValueString: string): Seasons | undefined {
  for (let seasonKey in Seasons) {
    const season = Seasons[seasonKey as keyof typeof Seasons];
    if (season === seasonValueString) {
      return season;
    }
  }
  return undefined;
}

export type StartingInfoEntry = {
  sector: number,
  object: SkyObject
}

class GameInstance {
  gameCode: string = '';
  skyObjects: Array<SkyObject> = []
  startingInfo: Record<Seasons, Array<StartingInfoEntry>> = { [Seasons.Spring]: [], [Seasons.Summer]: [], [Seasons.Autumn]: [], [Seasons.Winter]: []}

  valid(): boolean {
    return this.gameCode.length > 0;
  }

  check(code: string): boolean {
    return this.valid() && code === this.gameCode;
  }

  findGameCode(gameCode: string): {found: boolean, gameMode: GameMode} {
    for (let gameModeString in GameMode) {
      const gameMode = GameMode[gameModeString as keyof typeof GameMode];
      const key = GameModeKeys[gameMode];
      const modeGameCodes = mapsJson[key];
      for (let code of modeGameCodes) {
        if (code === gameCode) {
          return {
            found: true,
            gameMode: gameMode
          }
        }
      }
    }

    return {
      found: false,
      gameMode: GameMode.Standard
    }
  }

  async create(mode: GameMode) {
    const key = GameModeKeys[mode];
    const maps = mapsJson[key];
    // TODO Store already played maps in a browser storage and exclude them here
    this.gameCode = maps[Math.floor(Math.random() * maps.length)];
    const result = await this.load(this.gameCode);
    if (!result) {
      this.gameCode = '';
    }
    return this.gameCode;
  }

  async load(gameCode: string): Promise<boolean> {
    console.log(`Fetching ${gameCode} game data`);
    this.gameCode = '';
    this.startingInfo = {[Seasons.Spring]: [], [Seasons.Summer]: [], [Seasons.Autumn]: [], [Seasons.Winter]: []};
    let gameData: any;
    try {
      const response = await fetch('/g3x6.json');
      if (!response.ok) {
        console.log('Fetching g3x6.json game data failed due to network error');
        return false;
      }

      gameData = await response.json();
    } catch(e) {
      console.log(`Fetching g3x6.json game data failed - ${e}`);
      return false;
    }

    if (!this.parseGameData(gameData)) {
      console.log(`Failed to parse g3x6.json game data`);
      return false;
    }
    this.gameCode = gameCode;
    return true;
  }

  parseGameData(gameData: any): boolean {
    if (!('obj' in gameData)) {
      console.log(`Parsing failure: 'obj' not found in game data ${Object.keys(gameData)}`);
      return false;
    }

    const objData = gameData['obj'];
    this.skyObjects = new Array(Object.keys(objData).length);
    for (let position in objData) {
      const object = objData[position];
      const index = parseInt(position)-1;
      if (!(object in SkyObject)) {
        console.log(`Parsing failure: Unknown sky object ${object}`);
        return false;
      }
      this.skyObjects[index] = object;
    }

    if (!('info' in gameData)) {
      console.log(`Parsing failure: 'info' not found in game data ${Object.keys(gameData)}`);
      return false;
    }

    const infoData = gameData['info'];

    for (let seasonString in Seasons) {
      const season = Seasons[seasonString as keyof typeof Seasons];
      const key = SeasonInfoKeys[season];

      if (!(key in infoData)) {
        console.log(`Parsing failure: '${key}' not found in starting info game data ${Object.keys(infoData)}`);
        return false;
      }

      const seasonInfoData = infoData[key];

      for (let groupKey in seasonInfoData) {
        const groupArray = seasonInfoData[groupKey];
        for (let infoEntry of groupArray) {
          for (let sectorNumber in infoEntry) {
            const sectorIndex = parseInt(sectorNumber) - 1;
            const object = infoEntry[sectorNumber];

            if (!(object in SkyObject)) {
              console.log(`Parsing failure: Unknown sky object ${object}`);
              return false;
            }

            this.startingInfo[season].push({
              object,
              sector: sectorIndex
            });
          }
        }
      }
    }

    return true;
  }

  giveStartingInfo(season: Seasons, count: number): Array<StartingInfoEntry> {
    const entries = this.startingInfo[season];
    const clampedCount = Math.max(Math.min(count, entries.length), 0);
    return entries.slice(0, clampedCount);
  }


}

const Game = new GameInstance()
export default Game;