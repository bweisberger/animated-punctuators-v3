import { createStore } from 'vuex';

import assets from "@/store/assets";
import animations from "@/store/animations";
import heroes from "@/store/heroes";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    assets,
    animations,
    heroes
  }
});
