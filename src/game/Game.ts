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

const GameModeVisibleSkyHelpImage: Record<GameMode, string> = {
  [GameMode.Standard]: "/help-visible-6.gif",
  [GameMode.Expert]: "/help-visible-9.gif",
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
  [SkyObject.TrulyEmpty]: "Prázdný sektor",
  [SkyObject.PlanetX]: "Planeta X",
}

export const SkyObjectNamesAccusative: Record<SkyObject, string> = {
  [SkyObject.Asteroid]: "Asteroid",
  [SkyObject.DwarfPlanet]: "Trpasličí planetu",
  [SkyObject.Comet]: "Kometu",
  [SkyObject.GasCloud]: "Plynové mračno",
  [SkyObject.TrulyEmpty]: "Prázdný sektor",
  [SkyObject.PlanetX]: "Planetu X",
}

export const SkyObjectNamesPluralNominative: Record<SkyObject, string> = {
  [SkyObject.Asteroid]: "Asteroidy",
  [SkyObject.DwarfPlanet]: "Trpasličí planety",
  [SkyObject.Comet]: "Komety",
  [SkyObject.GasCloud]: "Plynové mračna",
  [SkyObject.TrulyEmpty]: "Prázdné sektory",
  [SkyObject.PlanetX]: "Planeta X",
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

export enum Research {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
}

enum Conference {
  X1 = 'X1',
  X2 = 'X2'
}

enum ResearchRules {
  OneOrMoreXAdjacentY = 'confClue1PlusXAdjacentY',
  NoXOppositeY = 'confClueNoXOppositeY',
  NoXWithin1Y = 'confClueNoXWithin1Y',
  AllXWithinN = 'confClueAllXWithinN',
  AllXWithinNY = 'confClueAllXWithinNY',
  NoXWithinNY = 'confClueNoXWithinNY',
  PlanetXNotOppositeY = 'confClue9NotOppositeY',
  AllXWithin1Y = 'confClueAllXWithin1Y',
  PlanetXNotWithinNY = 'confClue9NotWithinNY',
  NXConsecutive = 'confClueNXConsecutive',
  PlanetXNotWithin1Y = 'confClue9NotWithin1Y',
  OneOrMoreXOppositeY = 'confClue1PlusXOppositeY',
  PlanetXWithinNY = 'confClue9WithinNY',
  AllXOppositeY = 'confClueAllXOppositeY',
  AllXConsecutive = 'confClueAllXConsecutive',
}

export function reverseResearchRule(researchRuleValueString: string): ResearchRules | undefined {
  for (let researchRuleKey in ResearchRules) {
    const researchRule = ResearchRules[researchRuleKey as keyof typeof ResearchRules];
    if (researchRule === researchRuleValueString) {
      return researchRule;
    }
  }
  return undefined;
}

export type ResearchData = {
  objects: SkyObject[],
  objectX: SkyObject,
  objectY?: SkyObject,
  countN?: number,
  rule: ResearchRules,
}

class GameInstance {
  gameCode: string = '';
  skyObjects: Array<SkyObject> = []
  startingInfo: Record<Seasons, Array<StartingInfoEntry>> = { [Seasons.Spring]: [], [Seasons.Summer]: [], [Seasons.Autumn]: [], [Seasons.Winter]: []}
  research: Record<Research, ResearchData | undefined> = { [Research.A]: undefined, [Research.B]: undefined, [Research.C]: undefined, [Research.D]: undefined, [Research.E]: undefined, [Research.F]: undefined }
  conferences: Record<Conference, ResearchData | undefined> = { [Conference.X1]: undefined,  [Conference.X2]: undefined}
  mode: GameMode = GameMode.Standard

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
    const {found, gameMode} = this.findGameCode(gameCode);
    if (!found) {
      console.log(`Failed to find ${gameCode} game in maps list.`);
      return false;
    }
    console.log(`Fetching ${gameCode} game data`);
    this.gameCode = '';
    this.mode = gameMode;
    this.startingInfo = {[Seasons.Spring]: [], [Seasons.Summer]: [], [Seasons.Autumn]: [], [Seasons.Winter]: []};
    this.research = { [Research.A]: undefined, [Research.B]: undefined, [Research.C]: undefined, [Research.D]: undefined, [Research.E]: undefined, [Research.F]: undefined }
    this.conferences = { [Conference.X1]: undefined,  [Conference.X2]: undefined}
    let gameData: any;
    try {
      const response = await fetch(`/maps/${gameCode}.json`);
      if (!response.ok) {
        console.log(`Fetching ${gameCode}.json game data failed due to network error`);
        return false;
      }
      gameData = await response.json();
    } catch(e) {
      console.log(`Fetching ${gameCode} game data failed - ${e}`);
      return false;
    }

    if (!this.parseGameData(gameData)) {
      console.log(`Failed to parse ${gameCode} game data`);
      return false;
    }
    this.gameCode = gameCode;
    return true;
  }

  checkSkyObject(object: any): boolean {
    if (!(object in SkyObject)) {
      console.log(`Parsing failure: Unknown sky object ${object}`);
      return false;
    }
    return true;
  }

  parseSkyObjects(gameData: any) : boolean {
    if (!('obj' in gameData)) {
      console.log(`Parsing failure: 'obj' not found in game data ${Object.keys(gameData)}`);
      return false;
    }

    const objData = gameData['obj'];
    this.skyObjects = new Array(Object.keys(objData).length);
    for (let position in objData) {
      const object = objData[position];
      const index = parseInt(position)-1;
      if (!this.checkSkyObject(object)) {
        return false;
      }
      this.skyObjects[index] = object;
    }
    return true;
  }

  parseStartingInfo(gameData: any): boolean {
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

            if (!this.checkSkyObject(object)) {
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

  parseConferenceObject(conferenceObject: any): ResearchData | undefined {
    if (!('title' in conferenceObject)) {
      console.log(`Parsing failure: 'title' not found in conference game data ${Object.keys(conferenceObject)}`);
      return undefined;
    }

    const titleArray = conferenceObject['title'];
    const objects: SkyObject[] = []
    for (let skyObjectNumber of titleArray) {
      if (!this.checkSkyObject(skyObjectNumber)) {
        return undefined;
      }

      objects.push(skyObjectNumber);
    }

    const bodyObject = conferenceObject['body'];
    if (!('X' in bodyObject)) {
      console.log(`Parsing failure: 'X' key not found in conf body game data ${Object.keys(bodyObject)}`);
      return undefined;
    }

    const XObject = bodyObject['X'];
    if (!this.checkSkyObject(XObject)) {
      return undefined;
    }

    let YObject = undefined;
    if ('Y' in bodyObject) {
      if (bodyObject['Y'] !== XObject && bodyObject['Y'] !== null) {
        YObject = bodyObject['Y'];
        if (!this.checkSkyObject(YObject)) {
          return undefined;
        }
      }
    }

    let NCount = undefined;
    if ('N' in bodyObject) {
      NCount = bodyObject['N'];
    }

    if (!('type' in bodyObject)) {
      console.log(`Parsing failure: 'type' key not found in conf body game data ${Object.keys(bodyObject)}`);
      return undefined;
    }

    const researchRuleString = bodyObject['type'];
    const researchRule = reverseResearchRule(researchRuleString);
    if (!researchRule) {
      console.log(`Parsing failure: Unknown research rule ${researchRuleString} in conf body game data`);
      return undefined;
    }

    const researchData: ResearchData = {
      objects: objects, objectX: XObject, rule: researchRule
    }
    if (YObject) {
      researchData.objectY = YObject;
    }
    if (NCount) {
      researchData.countN = NCount;
    }
    return researchData;
  }

  parseResearchAndConferences(gameData: any): boolean {
    if (!('conf' in gameData)) {
      console.log(`Parsing failure: 'conf' not found in game data ${Object.keys(gameData)}`);
      return false;
    }

    const confData = gameData['conf'];

    for (let researchKey in Research) {
      const research = Research[researchKey as keyof typeof Research];

      if (!(research in confData)) {
        console.log(`Parsing failure: Research '${research}' not found in conf game data ${Object.keys(confData)}`);
        return false;
      }

      const conferenceObject = confData[research];

      const researchData = this.parseConferenceObject(conferenceObject);
      if (!researchData) {
        return false;
      }
      this.research[research] = researchData;
    }

    if (!(Conference.X1 in confData)) {
      console.log(`Parsing failure: 'X1' not found in conf game data ${Object.keys(confData)}`);
      return false;
    }

    const X1ConferenceObject = confData[Conference.X1];
    const researchData = this.parseConferenceObject(X1ConferenceObject);
    this.conferences[Conference.X1] = researchData;

    if (Conference.X2 in confData) {
      const X2ConferenceObject = confData[Conference.X2];
      const researchData = this.parseConferenceObject(X2ConferenceObject);
      this.conferences[Conference.X2] = researchData;
    }

    return true;
  }

  parseGameData(gameData: any): boolean {
    if (!this.parseSkyObjects(gameData)) {
      return false;
    }

    if (!this.parseStartingInfo(gameData)) {
      return false;
    }

    if (!this.parseResearchAndConferences(gameData)) {
      return false;
    }

    return true;
  }

  giveStartingInfo(season: Seasons, count: number): Array<StartingInfoEntry> {
    const entries = this.startingInfo[season];
    const clampedCount = Math.max(Math.min(count, entries.length), 0);
    return entries.slice(0, clampedCount);
  }

  getVisibleSkySize(): number {
    return Math.floor(this.skyObjects.length / 2);
  }

  getVisibleSkyHelpImage(): string {
    return GameModeVisibleSkyHelpImage[this.mode];
  }

  skyObjectSanitizeReveal(skyObject: SkyObject): SkyObject {
    if (skyObject === SkyObject.PlanetX) {
      return SkyObject.TrulyEmpty;
    }
    return skyObject;
  }

  validSector(sector: number) {
    return !isNaN(sector) && sector >= 0 && sector < this.skyObjects.length;
  }

  targetSector(sector: number): SkyObject {
    return this.skyObjectSanitizeReveal(this.skyObjects[sector]);
  }

  getSectors(): number {
    return this.skyObjects.length;
  }

}

const Game = new GameInstance()
export default Game;