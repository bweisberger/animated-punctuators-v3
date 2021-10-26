export interface ComicToHeroesMap {
  [index: number]: string[]
}

export interface ComicToExtraAssetsMap {
  [index: number]: ExtraAssets
}

export interface HeroAssets {
  static?: string,
  punctuating1?: string,
  punctuating2?: string,
  weapon1?: string,
  weapon2?: string,
  weapon2Effect?: string,
  entry?: string,
}

export interface ExtraAssets {
  externalDialog?: string
}

export interface HeroAssetsCollection {
  [index: string]: HeroAssets
}

export enum HeroState {
  STATIC = 'static',
  PUNCTUATING1 = 'punctuating1',
  PUNCTUATING2 = 'punctuating2',
  ENTRY = 'entry'
}

export enum Weapons {
  LASER,
  GRENADE
}

export interface HeroToAnimationTimingMap {
  [index: string]: HeroAnimationTiming
}

export interface HeroAnimationTiming {
  punctuating2?: number,
  weapon2Start?: number,
  weapon2End?: number,
  weapon2Effect?: number,
  entry?: number,
}