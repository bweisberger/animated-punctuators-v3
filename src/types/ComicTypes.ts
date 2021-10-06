interface ComicAsset {
  staticHeroAsset?: string,
  activeHeroAsset1?: string,
  activeHeroAsset2?: string,
  heroObjectAsset1?: string,
  heroObjectAsset2?: string
}

interface ComicAssetsMap {
  [index: number]: ComicAsset
}