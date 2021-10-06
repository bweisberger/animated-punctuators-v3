<template lang="pug">
.wrapper
  .header
  Panel.panel
    template(#sentence='')
      Sentence.text(@punctuation-event1="toggleActiveHero1" @punctuation-event2="toggleActiveHero2")
    template(#hero)
      img.hero(:src="heroAsset")
      img.grenade(src="../assets/Single_Grenade.png")
  .footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
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
      heroAsset: ''
    }
  },
  mounted() {
    this.heroAsset = this.comicAssets(this.comicId).staticHeroAsset
    console.log('heroAsset -->', this.heroAsset);
  },
  computed: {
    ...mapGetters(['comicAssets'])
  },
  methods: {
    toggleActiveHero() {
      // this.activeHero = true;
      // this.
      // setTimeout(() => {
      //  this.activeHero = false 
      // }, 700);
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 20vh;
  // background-color: hotpink;
}
.grenade {
  animation: parabola 3.5s infinite linear;
}



@include mq(desktop) {
  $translateX0: 0vw;
  $translateX100: -60vw;
  $translateY0: -10vh;
  $translateXDifference: $translateX100 - $translateX0;
  $translateYDifference: -50vh;
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
}



.panel {
  display: flex;
  align-items: center;
  .hero {
    position: relative;
  }

  .hero.static {
    width: 70px;
    @include mq(phablet){
      width: 120px;
    }
    @include mq(tablet){
      width: 140px;
    }
  }

  .hero.active {
    width: 240px;
    @include mq(phablet){
      width: 440px;
    }
    @include mq(tablet){
      width: 500px;
    }
  }
}
.footer {
  height: 20vh;
  background-color: paleturquoise;
}
</style>