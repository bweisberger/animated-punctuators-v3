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
  background-color: hotpink;
}
.grenade {
  animation: parabola 2s infinite linear;
}
@keyframes rotation {
  0% {
    transform: rotate(359deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes parabola {
  0% { 
    transform: translate(0px, 0px) rotate(360deg); 
  } 
  25% { 
    transform: translate(-200px, -100px) rotate(200deg); 
  }
  50% {
    transform: translate(-400px, -200px) rotate(100deg); 
  }
  75% {
    transform: translate(-600px, -80px) rotate(50deg); 
  } 
  100% {
    transform: translate(-800px, -20px) rotate(0deg); 
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