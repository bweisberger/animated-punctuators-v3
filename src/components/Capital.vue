<template lang="pug">
span.container.clickable(@click="toggleCapital")
  .inline-h1.text(:class="toggleClass" :style="styleObject") {{letter}}
  img.black-hole-animated(:src="blackHoleImgPath" v-if="startBlackHole" :class="letter.toLowerCase()")
  span.black-hole(v-if="showBlackHole" :class="letter.toLowerCase()")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

interface StyleOptions {
  '--text-color': string,
  '--text-color--hover': string,
}

export default defineComponent({
  name: 'Capital',
  props: {
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String
    }
  },
  data() {
    return {
      capital: false,
      letter: this.text.toLowerCase(),
      toggleClass: '',
      textColor: {
        base: '#0000000',
        hover: '#c9c4c3',
      },
      startBlackHole: false,
      showBlackHole: false
    }
  },
  computed: {
    styleObject(): StyleOptions {
      return {
        '--text-color': this.textColor.base,
        '--text-color--hover': this.textColor.hover,
      }
    },
    blackHoleImgPath(): void {
      return require('../assets/second-period/black-hole.png');
    },
    ...mapGetters(['heroTiming'])
  },
  methods: {
    toggleCapital(): void {
      const startCapital = this.heroTiming('second-period').weapon2End;
      const blackHoleTime = this.heroTiming('second-period').weapon2Effect;
      if (!this.capital) {
        this.capital = true;
        this.$emit('click');
        setTimeout(() => {
          this.toggleClass = 'toggled';
          this.startBlackHole = true;
        }, startCapital);
        setTimeout(() => {
          this.startBlackHole = false;
        }, startCapital + blackHoleTime/4);
        setTimeout(() => {
          this.letter = this.letter.toUpperCase();
        }, startCapital + (blackHoleTime/2));
        setTimeout(() => {
          this.showBlackHole = true;
        }, startCapital);
        setTimeout(() => {
          this.showBlackHole = false;
        }, startCapital + blackHoleTime);
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .text {
    color: var(--text-color);
    display: inline;
  }

  .text.toggled {
    animation: change-capital 4s linear both;
  }

  .black-hole-animated {
    position: absolute;
    left: -2vw;
    width: 40vw;
    &.h {
      top: 37vh;
      left: -8vw;
    }
    &.a {
      top: 45vh;
      left: -8vw;
    }
    @include mq(desktop) {
      width: 15vw;
      &.h {
        top: 38vh;
        left: -4vw;
      }
      &.a {
        top: 38vh;
        left: 44vw;
      }
    }
  }

  .black-hole {
    position: absolute;
    background-color: black;
    border-radius: 50%;
    z-index: -2;
    animation: black-hole 4s infinite linear;
    &.h {
      top: 44vh;
      left: 7vw;
    }
    &.a {
      top: 52vh;
      left: 7vw;
    }
    @include mq(desktop) {
      &.h {
        top: 46vh;
        left: 1vw;
      }
      &.a {
        top: 46vh;
        left: 49vw;
      }
    }
  }

  @keyframes change-capital {
    50% {font-size: 0px; opacity: 0;}
    100% {font-size: $font-size-mobile; opacity: 1;}
  }

@include mq(desktop) {
  @keyframes change-capital {
      50% {font-size: 0px; opacity: 0;}
      100% {font-size: $font-size-desktop; opacity: 1;}
    }
}

  @keyframes black-hole {
    0% {width: 0; height: 0}
    10% {width: 30px; height: 10px; opacity: 1}
    94% {width: 25px; height: 8px; opacity: 1}
    95% {width: 10px; height: 3px; opacity: 0.5}
    100% {width: 0; height: 0; opacity: 0}
  }

  @include mq(desktop) {
    @keyframes black-hole {
      0% {width: 0; height: 0}
      10% {width: 60px; height: 20px; opacity: 1}
      94% {width: 50px; height: 15px; opacity: 1}
      95% {width: 30px; height: 10px; opacity: 0.5}
      100% {width: 0; height: 0; opacity: 0}
    }
  }

  .text:hover {
    color: var(--text-color--hover);
  }
  .container {
    width: 100px;
    min-width: 100px;
  }
  .clickable {
  cursor: pointer;
}
</style>
