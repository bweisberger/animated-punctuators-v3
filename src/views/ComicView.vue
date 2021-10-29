<template lang="pug">
.wrapper
  .black-top-border
  Panel.panel
    template(#sentence='')
      Sentence.text(@punctuation-event-1="punctuationAnimation1" @punctuation-event-2="punctuationAnimation2")
    template(#hero-1).hero-1
      img.hero(:src="hero1ImgPath")
      img.weapon-1(:src="hero1Weapon1ImgPath" v-if="showHero1Weapon1" :class="hero1Weapon1Class")
      img.weapon-2(:src="hero1Weapon2ImgPath" v-if="showHero1Weapon2 || showHero1Weapon2Effect" :class="hero1Weapon2Class")
  .black-bottom-border
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
      showHero1Weapon1: false,
      hero1Weapon1Class: '',
      showHero1Weapon2: false,
      hero1Weapon2Class: '',
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
    hero1Weapon1ImgPath(): void {
      return require(`../assets/${this.hero1Name}/${this.hero1Assets.weapon1}`);
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
    punctuationAnimation1(elementText: string): void {
      this.punctuateHero1(1, elementText);
    },
    punctuationAnimation2(elementText: string): void {
      this.punctuateHero1(2, elementText);
    },
    punctuateHero1(style: number, elementText?: string): void {
      this.hero1State = HeroState[`PUNCTUATING${style}`];
      const delay = this.hero1AnimationTiming[`punctuating${style}`];
      this.handleHero1Weapon(style, elementText);
      setTimeout(() => {
       this.hero1State = HeroState.STATIC;
      }, delay);
    },
    handleHero1Weapon(style: number, elementText?: string) {
      if (elementText) {
        this[`hero1Weapon${style}Class`] = elementText;
      }
      if (this.hero1AnimationTiming[`weapon${style}Start`]) {
        const appearDelay = this.hero1AnimationTiming[`weapon${style}Start`];
        const disappearDelay = this.hero1AnimationTiming[`weapon${style}End`];
        setTimeout(() => {
          this[`showHero1Weapon${style}`] = true;
        }, appearDelay);
        setTimeout(() => {
          this[`showHero1Weapon${style}`] = false;
        }, disappearDelay);
      }
    },
  }
})
</script>

<style lang="scss" scoped>
.black-top-border{
  height: 20vh;
  background-color: black;
  width: 100%;
}
.black-bottom-border {
  height: 30vh;
  background-color: black;
  width: 100%;
}
.panel {
  padding: 5vh 0;
}
.weapon-1 {
  position: relative;
  z-index: 2;
  width: 35%;
  top: -80px;
  left: 10px;
  animation: laser 0.5s infinite linear;
  @include mq(desktop) {
    width: 45%;
    top: -140px;
    left: -20px;
  }
  &.show {
    animation: laser-show 0.5s infinite linear;
  }
  &.ft {
    animation: laser-ft 0.4s infinite linear;
  }
  &.god {
    animation: laser-god 0.5s infinite linear;
  }
}
.weapon-2 {
  position: relative;
  z-index: 2;
  height: 15%;
  top: -100px;
  left: 30px;
  @include mq(desktop) {
    height: 22%;
    top: -150px;
  }
  &.h {
    animation: parabola-h 2.5s infinite linear;
  }
  &.a {
    animation: parabola-a 2.5s infinite linear;
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
$translateX100: -47vw;
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
      transform: translate((-60vw * 0.125), (-60vh * 0.35)) rotate(220deg);
    } 
    20% { 
      transform: translate((-60vw * 0.250), (-60vh * 0.45)) rotate(40deg);
    } 
    30% { 
      transform: translate((-60vw * 0.375), (-60vh * 0.52)) rotate(-140deg);
    } 
    40% { 
      transform: translate((-60vw * 0.5), (-60vh * 0.55)) rotate(-320deg);
    }   
    50% { 
      transform: translate((-60vw * 0.55), (-60vh * 0.56)) rotate(-340deg);
    } 
    60% { 
      transform: translate((-60vw * 0.6), (-60vh * 0.55)) rotate(-360deg);
    } 
    70% { 
      transform: translate((-60vw * 0.725), (-60vh * 0.52)) rotate(-540deg);
    } 
    80% { 
      transform: translate((-60vw * 0.850), (-60vh * 0.45)) rotate(-720deg);
    } 
    90% { 
      transform: translate((-60vw * 0.975), (-60vh * 0.35)) rotate(-900deg);
    } 
    100% { 
      transform: translate(-60vw * 1.1, -10vh) rotate(-1080deg);
    } 
  }
}

@keyframes parabola-h {
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
  @keyframes parabola-h {
    0% { 
      transform: translate(0vw, -10vh) rotate(400deg);
    } 
    10% { 
      transform: translate((-60vw * 0.125), (-60vh * 0.35)) rotate(220deg);
    } 
    20% { 
      transform: translate((-60vw * 0.250), (-60vh * 0.45)) rotate(40deg);
    } 
    30% { 
      transform: translate((-60vw * 0.375), (-60vh * 0.52)) rotate(-140deg);
    } 
    40% { 
      transform: translate((-60vw * 0.5), (-60vh * 0.55)) rotate(-320deg);
    }   
    50% { 
      transform: translate((-60vw * 0.55), (-60vh * 0.56)) rotate(-340deg);
    } 
    60% { 
      transform: translate((-60vw * 0.6), (-60vh * 0.55)) rotate(-360deg);
    } 
    70% { 
      transform: translate((-60vw * 0.725), (-60vh * 0.52)) rotate(-540deg);
    } 
    80% { 
      transform: translate((-60vw * 0.850), (-60vh * 0.45)) rotate(-720deg);
    } 
    90% { 
      transform: translate((-60vw * 0.975), (-60vh * 0.35)) rotate(-900deg);
    } 
    100% { 
      transform: translate(-60vw * 1.1, -10vh) rotate(-1080deg);
    } 
  }
}


  // $translateX0: 0vw;
  // $translateX100: -66vw;
  // $translateY0: -10vh;
  // $translateXDifference: $translateX100 - $translateX0;
  // $translateYDifference: -60vh;
@keyframes parabola-a {
  0% { 
    transform: translate($translateX0, $translateY0) rotate(400deg);
  } 
  10% { 
    transform: translate($translateX100 * 0.125, $translateYDifference * 0.35) rotate(220deg);
  } 
  20% { 
    transform: translate($translateX100 * 0.250, $translateYDifference * 0.45) rotate(40deg);
  } 
  30% { 
    transform: translate($translateX100 * 0.375, $translateYDifference * 0.52) rotate(-140deg);
  } 
  40% { 
    transform: translate($translateX100 * 0.5, $translateYDifference * 0.55) rotate(-320deg);
  }   
  50% { 
    transform: translate($translateX100 * 0.55, $translateYDifference * 0.56) rotate(-340deg);
  } 
  60% { 
    transform: translate($translateX100 * 0.6, $translateYDifference * 0.55) rotate(-360deg);
  } 
  70% { 
    transform: translate($translateX100 * 0.725, $translateYDifference * 0.52) rotate(-540deg);
  } 
  80% { 
    transform: translate($translateX100 * 0.850, $translateYDifference * 0.45) rotate(-720deg);
  } 
  90% { 
    transform: translate($translateX100 * 0.975, $translateYDifference * 0.35) rotate(-900deg);
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
  @keyframes parabola-a {
    0% { 
      transform: translate(0vw, -10vh) rotate(400deg);
    } 
    10% { 
      transform: translate((-20vw * 0.125), (-60vh * 0.35)) rotate(220deg);
    } 
    20% { 
      transform: translate((-20vw * 0.250), (-60vh * 0.45)) rotate(40deg);
    } 
    30% { 
      transform: translate((-20vw * 0.375), (-60vh * 0.52)) rotate(-140deg);
    } 
    40% { 
      transform: translate((-20vw * 0.5), (-60vh * 0.55)) rotate(-320deg);
    }   
    50% { 
      transform: translate((-20vw * 0.55), (-60vh * 0.56)) rotate(-340deg);
    } 
    60% { 
      transform: translate((-20vw * 0.6), (-60vh * 0.55)) rotate(-360deg);
    } 
    70% { 
      transform: translate((-20vw * 0.725), (-60vh * 0.52)) rotate(-540deg);
    } 
    80% { 
      transform: translate((-20vw * 0.850), (-60vh * 0.45)) rotate(-720deg);
    } 
    90% { 
      transform: translate((-20vw * 0.975), (-60vh * 0.35)) rotate(-900deg);
    } 
    100% { 
      transform: translate(-20vw * 1.1, -10vh) rotate(-1080deg);
    } 
  }
}

@keyframes laser {
  0% {
    transform: rotate(20deg);
  }
  50% {
    transform: translateX(-33vw) rotate(20deg);
  }
  100% {
    transform: translateX(-66vw) rotate(20deg);
  }
}
@keyframes laser-show {
  0% {
    transform: rotate(30deg);
  }
  50% {
    transform: translate(-5vw, -1vh) rotate(30deg);
  }
  100% {
    transform: translate(-10vw, -2vh) rotate(30deg);
  }
}
@keyframes laser-ft {
  0% {
    transform: rotate(15deg)
  }
  50% {
    transform: translate(-16vw, 1vh) rotate(15deg);
  }
  100% {
    transform: translate(-32vw, 2vh) rotate(15deg);
  }
}
@keyframes laser-god {
  0% {
    transform: rotate(-2deg)
  }
  50% {
    transform: translate(-24vw, 8vh) rotate(-2deg);
  }
  100% {
    transform: translate(-48vw, 16vh) rotate(-2deg);
  }
}

@include mq(desktop) {
  @keyframes laser {
    0% {
      transform: rotate(20deg);
    }
    50% {
      transform: translateX(-33vw) rotate(20deg);
    }
    100% {
      transform: translateX(-66vw) rotate(20deg);
    }
  }
  @keyframes laser-show {
    0% {
      transform: rotate(25deg);
    }
    50% {
      transform: translate(-14vw, -1.5vh) rotate(23deg);
    }
    100% {
      transform: translate(-28vw, -3vh) rotate(23deg);
    }
  }
  @keyframes laser-ft {
    0% {
      transform: rotate(24deg)
    }
    50% {
      transform: translate(-3vw, -1vh) rotate(28deg);
    }
    100% {
      transform: translate(-6vw, -2vh) rotate(28deg);
    }
  }
  @keyframes laser-god {
    0% {
      transform: rotate(10deg)
    }
    50% {
      transform: translate(-12.5vw, 2vh) rotate(10deg);
    }
    100% {
      transform: translate(-25vw, 4vh) rotate(10deg);
    }
  }
}
</style>