<template lang="pug">
.wrapper
  .header
  Panel.panel
    template(#sentence='')
      Sentence.text(@clicked-period="toggleActiveHero")
    template(#hero-active='' v-if="activeHero")
      img.hero.active(src="../assets/second-period-laser.gif")
    template(#hero v-else)
      img.hero.static(src="../assets/second-period.png" class="hero static")
  .footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Panel, Sentence } from '@/components';
export default defineComponent({
  name: 'ComicView',
  components: {
    Panel,
    Sentence,
  },
  data() {
    return {
      activeHero: false
    }
  },
  methods: {
    toggleActiveHero() {
      this.activeHero = true;
      setTimeout(() => {
       this.activeHero = false 
      }, 700);
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 20vh;
  background-color: hotpink;
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