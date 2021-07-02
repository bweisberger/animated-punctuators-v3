<template lang="pug">
.wrapper
  .header
  Panel
    template(#sentence='')
      Sentence( @clicked-period="toggleActiveHero")
    template(#hero-active='' v-if="activeHero")
      img.hero.active(src="../assets/second-period-laser.gif")
    template(#hero v-else)
      img.hero.static(src="../assets/second-period.png" class="hero static")
  .footer
</template>

<script lang="ts">
import { Panel, Sentence } from '@/components';
export default {
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
    toggleActiveHero(): void {
      this.activeHero = true;
      setTimeout(() => {
       this.activeHero = false 
      }, 700);
    }
  }
}
</script>

<style>
.header {
  height: 20vh;
  background-color: hotpink;
}
.footer {
  height: 20vh;
  background-color: paleturquoise
}
.hero {
  position: relative;
}

.hero.static {
  width: 40%;
}

.hero.active {
  width: 140%;
}
</style>