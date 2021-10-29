import { ComicToHeroesMap } from '@/types/ComicTypes';

interface HeroState {
  comicHeroes: ComicToHeroesMap
}

export default {
  state: {
    comicHeroes: <ComicToHeroesMap>{
      1: ['second-period']
    },
  },
  getters: {
    comicHeroes: (state: HeroState) => (comicId: number): string[] => {
      return state.comicHeroes[comicId];
    }
  }
};