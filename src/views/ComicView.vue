<template lang="pug">
.wrapper
  .header
  Panel
    template(#sentence='')
      Sentence.text(@punctuation-event-1="punctuationAnimation1" @punctuation-event-2="punctuationAnimation2")
    template(#hero-1).hero-1
      img.hero(:src="hero1ImgPath")
      img.weapon-2(:src="hero1Weapon2ImgPath" v-if="showHero1Weapon2 || showHero1Weapon2Effect")
  .footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import { ExtraAssets, HeroAssets, HeroState } from '@/types/ComicTypes';

import { Panel, Sentence } from '@/components';
import { HeroAnimationTiming } from '@/types/ComicTypes';
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
      heroAssets: [] as HeroAssets[],
      heroNames: [] as string[],
      extraAssets: {} as ExtraAssets,
      hero1State: HeroState.STATIC as HeroState,
      showHero1Weapon2: false,
      showHero1Weapon2Effect: false,
    }
  },
  beforeMount() {
    this.getComicAssets();
  },
  computed: {
    hero1Assets(): HeroAssets {
      return this.heroAssets[0];
    },
    hero1Name(): string {
      return this.heroNames[0];
    },
    hero1AnimationTiming(): HeroAnimationTiming {
      return this.heroTiming(this.hero1Name);
    },
    hero1ImgPath(): void {
      return require(`../assets/${this.hero1Name}/${this.hero1Assets[this.hero1State]}`);
    },
    hero1Weapon2ImgPath(): void {
      return this.showHero1Weapon2Effect ? 
        require(`../assets/${this.hero1Name}/${this.hero1Assets.weapon2Effect}`) : 
        require(`../assets/${this.hero1Name}/${this.hero1Assets.weapon2}`);
    },
    ...mapGetters(['comicHeroes', 'allHeroAssets', 'comicExtraAssets', 'singleHeroAssets', 'heroTiming'])
  },
  methods: {
    getComicAssets(): void {
      this.heroNames = this.comicHeroes(this.comicId);
      this.heroAssets = this.allHeroAssets(this.heroNames);
      this.extraAssets = this.comicExtraAssets(this.comicId);
    },
    punctuationAnimation1(): void {
      this.punctuateHero1(1);
    },
    punctuationAnimation2(): void {
      this.punctuateHero1(2);
    },
    punctuateHero1(style: number): void {
      this.hero1State = HeroState[`PUNCTUATING${style}`];
      const delay = this.hero1AnimationTiming[`punctuating${style}`];
      this.handleHero1Weapon(style);
      setTimeout(() => {
       this.hero1State = HeroState.STATIC;
      }, delay);
    },
    handleHero1Weapon(style: number) {
      if (this.hero1AnimationTiming[`weapon${style}Start`]) {
        const appearDelay = this.hero1AnimationTiming[`weapon${style}Start`];
        const disappearDelay = this.hero1AnimationTiming[`weapon${style}End`];
        setTimeout(() => {
          this[`showHero1Weapon${style}`] = true;
        }, appearDelay);
        setTimeout(() => {
          this[`showHero1Weapon${style}`] = false;
          this[`showHero1Weapon${style}Effect`] = true;
        }, disappearDelay);

      }
    }
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
  top: -100px;
  left: 30px;
  animation: parabola 2.5s infinite linear;
  @include mq(desktop) {
    height: 22%;
    top: -150px;
    animation: parabola 2.5s infinite linear;
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
$translateX100: -40vw;
$translateY0: -5vh;
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