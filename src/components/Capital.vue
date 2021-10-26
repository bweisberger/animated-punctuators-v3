<template lang="pug">
span.container.clickable(@click="toggleCapital")
  .inline-h1.text(:class="toggleClass" :style="styleObject") {{letter}}
</template>

<script lang="ts">
import { mapGetters } from 'vuex';

interface StyleOptions {
  '--text-color': string,
  '--text-color--hover': string,
}

export default {
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
      }
    }
  },
  computed: {
    styleObject(): StyleOptions {
      return {
        '--text-color': this.textColor.base,
        '--text-color--hover': this.textColor.hover,
      }
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
        }, startCapital)
        setTimeout(() => {
          this.letter = this.letter.toUpperCase();
        }, startCapital + (blackHoleTime/2))
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .text {
    color: var(--text-color);
    display: inline;
  }

  .text.toggled {
    animation: black-hole 4s linear both;
  }

  @keyframes black-hole {
    50% {font-size: 0px; opacity: 0;}
    100% {font-size: $font-size-mobile; opacity: 1;}
  }

@include mq(desktop) {
  @keyframes black-hole {
      50% {font-size: 0px; opacity: 0;}
      100% {font-size: $font-size-desktop; opacity: 1;}
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
