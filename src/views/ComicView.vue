<template lang="pug">
.wrapper
  .header
  Panel
    template(#sentence='')
      Sentence.text(@punctuation-event-1="toggleActiveHero1" @punctuation-event-2="toggleActiveHero2")
    template(#hero)
      img.hero(:src="getHeroImgPath()")
      img.grenade(src="../assets/Single_Grenade.png")
  .footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import { ComicAssets } from '@/types/ComicTypes';

import { Panel, Sentence } from '@/components';
export default defineComponent({
  name: 'ComicView',
  components: {
    Panel,
    Sentence,
  },
  props: {
    comicId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comicAssets: {} as ComicAssets,
      heroAsset: null as string | undefined | null,
      activeHero: false,
    }
  },
  beforeMount() {
    this.getComicAssets();
    this.initializeComicAssets();
  },
  computed: {
    ...mapGetters(['comicAssetsCollection'])
  },
  methods: {
    getComicAssets() {
      this.comicAssets = this.comicAssetsCollection[this.comicId];
    },
    initializeComicAssets() {
      this.heroAsset = this.comicAssets.staticHeroAsset;
    },
    toggleActiveHero1() {
      this.activeHero = true;
      this.heroAsset = this.comicAssets.activeHeroAsset1
      setTimeout(() => {
       this.heroAsset = this.comicAssets.staticHeroAsset;
       this.activeHero = false 
      }, 1000);
    },
    getHeroImgPath() {
      return require(`../assets/heroImages/${this.heroAsset}`);
    },
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 20vh;
  background-color: hotpink;
}
.grenade {
  animation: parabola 2.5s infinite linear;
  @include mq(desktop) {
    animation: parabola 3.5s infinite linear;
  }
  height: 40px;
  position: relative;
  z-index: 2;
  top: -80px;
  left: -30px;
}

.hero {
  position: relative;
  margin-left: auto;
  left: 50px;
  height: 100%;
  z-index: -1;
}

  $translateX0: 0vw;
  $translateX100: -55vw;
  $translateY0: -10vh;
  $translateXDifference: $translateX100 - $translateX0;
  $translateYDifference: -40vh;
  @keyframes parabola {
    0% { 
      transform: translate($translateX0, $translateY0) rotate(400deg);
    } 
    10% { 
      transform: translate($translateXDifference * 0.125, $translateYDifference * 0.35) rotate(220deg);
    } 
    20% { 
      transform: translate($translateXDifference * 0.250, $translateYDifference * 0.45) rotate(40deg);
    } 
    30% { 
      transform: translate($translateXDifference * 0.375, $translateYDifference * 0.52) rotate(-140deg);
    } 
    40% { 
      transform: translate($translateXDifference * 0.5, $translateYDifference * 0.55) rotate(-320deg);
    }   
    50% { 
      transform: translate($translateXDifference * 0.55, $translateYDifference * 0.56) rotate(-340deg);
    } 
    60% { 
      transform: translate($translateXDifference * 0.6, $translateYDifference * 0.55) rotate(-360deg);
    } 
    70% { 
      transform: translate($translateXDifference * 0.725, $translateYDifference * 0.52) rotate(-540deg);
    } 
    80% { 
      transform: translate($translateXDifference * 0.850, $translateYDifference * 0.45) rotate(-720deg);
    } 
    90% { 
      transform: translate($translateXDifference * 0.975, $translateYDifference * 0.35) rotate(-900deg);
    } 
    100% { 
      transform: translate($translateX100 * 1.1, $translateY0) rotate(-1080deg);
    } 
  }

.footer {
  height: 20vh;
  background-color: paleturquoise;
}
</style>