<template lang="pug">
.wrapper
  .header
  Panel
    template(#sentence='')
      Sentence.text(@punctuation-event-1="toggleActiveHero1" @punctuation-event-2="toggleActiveHero2")
    template(#hero)
      img.hero(:src="getHeroImgPath()")
      img.weapon-2(:src="getWeapon2ImgPath()")
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
      weapon1: null as string | undefined | null,
      weapon2: null as string | undefined | null,
      activeHero: false
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
      const { staticHero, weapon1, weapon2 } = this.comicAssets;
      this.heroAsset = staticHero;
      this.weapon1 = weapon1;
      this.weapon2 = weapon2;
    },
    toggleActiveHero1() {
      const { staticHero, activeHero1, activeHero2 } = this.comicAssets;
      this.activeHero = true;
      this.heroAsset = activeHero2;
      setTimeout(() => {
       this.heroAsset = staticHero;
       this.activeHero = false 
      }, 1000);
    },
    getHeroImgPath() {
      return require(`../assets/second period/${this.heroAsset}`);
    },
    getWeapon2ImgPath() {
      return require(`../assets/second period/${this.weapon2}`);
    },
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 20vh;
  background-color: hotpink;
}
.weapon-2 {
  position: relative;
  z-index: 2;
  height: 15%;
  top: -150px;
  left: 30px;
  animation: parabola 2.5s infinite linear;
  @include mq(desktop) {
    height: 22%;
    animation: parabola 3.5s infinite linear;
  }
}

.hero {
  z-index: -1;
  height: 50%;
  margin: 35% 0 0 45%;
  @include mq(desktop) {
    height: 90%;
    margin: 5% 0 0 45%;
  }
}

$translateX0: 0vw;
$translateX100: -52vw;
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

@include mq(desktop) {
  // $translateX0: 0vw;
  // $translateX100: -66vw;
  // $translateY0: -10vh;
  // $translateXDifference: $translateX100 - $translateX0;
  // $translateYDifference: -60vh;
  @keyframes parabola {
    0% { 
      transform: translate(0vw, -10vh) rotate(400deg);
    } 
    10% { 
      transform: translate((-66vw * 0.125), (-60vh * 0.35)) rotate(220deg);
    } 
    20% { 
      transform: translate((-66vw * 0.250), (-60vh * 0.45)) rotate(40deg);
    } 
    30% { 
      transform: translate((-66vw * 0.375), (-60vh * 0.52)) rotate(-140deg);
    } 
    40% { 
      transform: translate((-66vw * 0.5), (-60vh * 0.55)) rotate(-320deg);
    }   
    50% { 
      transform: translate((-66vw * 0.55), (-60vh * 0.56)) rotate(-340deg);
    } 
    60% { 
      transform: translate((-66vw * 0.6), (-60vh * 0.55)) rotate(-360deg);
    } 
    70% { 
      transform: translate((-66vw * 0.725), (-60vh * 0.52)) rotate(-540deg);
    } 
    80% { 
      transform: translate((-66vw * 0.850), (-60vh * 0.45)) rotate(-720deg);
    } 
    90% { 
      transform: translate((-66vw * 0.975), (-60vh * 0.35)) rotate(-900deg);
    } 
    100% { 
      transform: translate(-66vw * 1.1, -10vh) rotate(-1080deg);
    } 
  }
}

.footer {
  height: 20vh;
  background-color: paleturquoise;
}
</style>