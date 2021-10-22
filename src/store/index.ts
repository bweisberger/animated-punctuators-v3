import { createStore } from 'vuex';
import { ComicAssetsCollection } from '@/types/ComicTypes';

export default createStore({
  state: {
    comicAssetsCollection: <ComicAssetsCollection>{
      1: {
        staticHero1: 'second-period.png',
        activeHero1_1: 'second-period-laser.png',
        activeHero1_2: 'second-period-grenade.png',
        hero1_entry: 'second-period-time-portal-enter.png',
        weapon1: 'laser.png',
        weapon2: 'black-hole-grenade.png',
        weapon2Effect: 'black-hole-2.png',
        externalDialogue: 'help-dialogue.png'
      }
    }
  },
  getters: {
    comicAssetsCollection: (state) => {
      return state.comicAssetsCollection
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
