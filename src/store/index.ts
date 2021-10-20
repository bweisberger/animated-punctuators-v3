import { createStore } from 'vuex';
import { ComicAssetsCollection } from '@/types/ComicTypes';

export default createStore({
  state: {
    comicAssetsCollection: <ComicAssetsCollection>{
      1: {
        staticHeroAsset: 'second-period.png',
        activeHeroAsset1: 'second-period-laser.png',
        activeHeroAsset2: 'Grenade_Final.png',
        heroObjectAsset2: 'Single_Grenade.png'
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
