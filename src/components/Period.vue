<template lang="pug">
span.container.clickable(@click="togglePeriod")
  p.inline-h1.text(v-if="period") {{withPeriod}}
  p.inline-h1.text(v-else :style="styleObject") {{withoutPeriod}}
  img.period-flash(:src="periodFlashImgPath" v-if="showPeriodFlash")
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

import { PeriodSpaces } from '@/types/LanguageTypes';

export default defineComponent({
  name: 'Period',
  props: {
    text: {
      type: String,
      required: true,
    },
    spaces: {
      type: String,
    }
  },
  data() {
    return {
      period: false,
      textColor: {
        base: '#0000000',
        hover: '#c9c4c3',
      },
      showPeriodFlash: false
    }
  },
  computed: {
    withPeriod(): string {
      if (this.spaces === PeriodSpaces.BOTH) {
        return ` ${this.text}. `;
      } else if (this.spaces === PeriodSpaces.BEFORE) {
        return ` ${this.text}.`;
      } else if (this.spaces === PeriodSpaces.AFTER) {
        return `${this.text}. `;
      } else {
        return `${this.text}.`;
      }
    },
    withoutPeriod(): string {
      if (this.spaces === PeriodSpaces.BOTH) {
        return ` ${this.text} `;
      } else if (this.spaces === PeriodSpaces.BEFORE) {
        return ` ${this.text}`;
      } else if (this.spaces === PeriodSpaces.AFTER) {
        return `${this.text} `;
      } else {
        return `${this.text}`;
      }
    },
    styleObject(): any {
      return {
        '--text-color': this.textColor.base,
        '--text-color--hover': this.textColor.hover
      }
    },
    periodFlashImgPath(): void {
      return require('../assets/second-period/period-flash.png');
    },
  },
  methods: {
    togglePeriod(): void {
      if (!this.period) {
        this.$emit('click');
        setTimeout(() => {
          this.showPeriodFlash = true
        }, 1000)
        setTimeout(() => {
          this.showPeriodFlash = false
        }, 2100)
        setTimeout(() => {
          this.period = true;
        }, 2100)
      }
    },
  }
})
</script>

<style lang="scss" scoped>
.period-flash {
  position: relative;
  height: 15px;
  z-index: -1;
  left: -11px;
  top: 10px;
  @include mq(desktop) {
    height: 30px;
    left: -25px;
    top: 10px;
  }
}
  .text {
    color: var(--text-color);
    font-size: $font-size-mobile;
    font-family: Sans-Serif;
    display: inline;
    @include mq(phablet){
      font-size: $font-size-phablet;
      font-weight: 500;
    }
    @include mq(tablet){
      font-size: $font-size-tablet;
      font-weight: 500;
    }
    @include mq(desktop){
      font-size: $font-size-desktop;
      font-weight: 500;
    }
  }
  .text:hover {
    color: var(--text-color--hover);
  }
  .container {
    padding: 2px;
  }
  .blank-space {
    color: white;
  }
  .clickable {
  cursor: pointer;
}
</style>
