import { createStore } from 'vuex'

export default createStore({
  state: {
    comicAssets: <ComicAssetsMap>{
      1: {
        staticHeroAsset: '../assets/second-period.png',
        activeHeroAsset1: '../assets/second-period-laser.gif',
        activeHeroAsset2: '../assets/Grenade_Final.png',
        heroObjectAsset2: '../assets/Single_Grenade.png'
      }
    }
  },
  getters: {
    comicAssets: (state) => (comicId) => {
      return state.comicAssets[comicId]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
