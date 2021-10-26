import { ComicToExtraAssetsMap, HeroAssetsCollection, ExtraAssets, HeroAssets } from '@/types/ComicTypes';

interface AssetState {
  comicExtraAssets: ComicToExtraAssetsMap,
  heroAssetsCollection: HeroAssetsCollection
}

export default {
  state: {
    comicExtraAssets: <ComicToExtraAssetsMap> {
      1: {
        externalDialog: 'help-dialog.png'
      }
    },
    heroAssetsCollection: <HeroAssetsCollection> {
      'second-period': {
        static: 'second-period.png',
        punctuating1: 'second-period-laser.png',
        punctuating2: 'second-period-grenade.png',
        weapon1: '',
        weapon2: 'black-hole-grenade.png',
        weapon2Effect: 'black-hole.png',
        entry: 'second-period-time-portal-entry.png',
      }
    }
  },
  getters: {
    comicExtraAssets: (state: AssetState) => (comicId: number): ExtraAssets => {
      return state.comicExtraAssets[comicId];
    },
    allHeroAssets: (state: AssetState) => (heroNames: string[]): HeroAssets[] => {
      return heroNames.map(hero => state.heroAssetsCollection[hero]);
    },
    singleHeroAssets: (state: AssetState) => (hero: string): HeroAssets => {
      return state.heroAssetsCollection[hero];
    }
  }
}