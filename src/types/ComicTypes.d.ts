export interface ComicAssets {
  staticHero1?: string,
  hero1Entry?: string,
  activeHero1_1?: string,
  activeHero1_2?: string,
  weapon1?: string,
  weapon2?: string,
  weapon2Effect?: string,
  externalDialogue?: string
}

export interface ComicAssetsCollection {
  [index: number]: ComicAssets
}