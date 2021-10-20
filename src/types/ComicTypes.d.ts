export interface ComicAssets {
  staticHeroAsset?: string,
  activeHeroAsset1?: string,
  activeHeroAsset2?: string,
  heroObjectAsset1?: string,
  heroObjectAsset2?: string
}

export interface ComicAssetsCollection {
  [index: number]: ComicAssets
}