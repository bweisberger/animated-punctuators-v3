<template>
  <div class="wrapper">
    <div class="header">
    </div>
    <Panel>
      <template #sentence>
        <Sentence @clicked-period="toggleActiveHero"/>
      </template>
      <template #hero-active v-if="activeHero">
        <img src="../assets/second-period-laser.gif" class="hero active"/>
      </template>
      <template #hero v-else>
        <img src="../assets/second-period.png" class="hero static"/>
      </template>
    </Panel>
    <div class="footer">
    </div>
  </div>
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
}
.footer {
  height: 20vh;
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