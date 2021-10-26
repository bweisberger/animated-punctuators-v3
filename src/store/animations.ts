import { HeroAnimationTiming, HeroToAnimationTimingMap } from '@/types/ComicTypes';

interface AnimationState {
  heroAnimationTiming: HeroToAnimationTimingMap
}

export default {
  state: {
    heroAnimationTiming: <HeroToAnimationTimingMap> {
      'second-period': {
        punctuating1: 1450,
        punctuating2: 1600,
        weapon2Start: 1000,
        weapon2End: 3500,
        weapon2Effect: 4000,
        entry: 4000,
      }
    }
  },
  getters: {
    heroTiming: (state: AnimationState) => (heroName: string): HeroAnimationTiming => {
      return state.heroAnimationTiming[heroName];
    },
  }
};