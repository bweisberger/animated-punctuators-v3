import { createStore } from 'vuex';
import { ComicToHeroesMap, ComicToExtraAssetsMap, HeroAssetsCollection, ExtraAssets, HeroAssets } from '@/types/ComicTypes';

export default createStore({
  state: {
    comicHeroes: <ComicToHeroesMap>{
      1: ['second-period']
    },
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
        entry: 'second-period-time-portal-entry.png',
      }
    }
  },
  getters: {
    comicHeroes: (state) => (comicId: number): string[] => {
      return state.comicHeroes[comicId];
    },
    comicExtraAssets: (state) => (comicId: number): ExtraAssets => {
      return state.comicExtraAssets[comicId];
    },
    allHeroAssets: (state) => (comicId: number): HeroAssets[] => {
      const heroNames = state.comicHeroes[comicId];
      return heroNames.map(hero => state.heroAssetsCollection[hero]);
    },
    singleHeroAssets: (state) => (hero: string): HeroAssets => {
      return state.heroAssetsCollection[hero];
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
