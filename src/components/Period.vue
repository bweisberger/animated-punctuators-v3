<template lang="pug">
span.container.clickable(@click="togglePeriod")
  p.inline-h1.text(v-if="period") {{withPeriod}}
  p.inline-h1.text(v-else :style="styleObject") {{withoutPeriod}}
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

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
      }
    }
  },
  computed: {
    withPeriod(): string {
      if (this.spaces === 'both') {
        return ` ${this.text}. `;
      } else if (this.spaces === 'front') {
        return ` ${this.text}.`;
      } else if (this.spaces === 'end') {
        return `${this.text}. `;
      } else {
        return `${this.text}.`;
      }
    },
    withoutPeriod(): string {
      if (this.spaces === 'both') {
        return ` ${this.text} `;
      } else if (this.spaces === 'front') {
        return ` ${this.text}`;
      } else if (this.spaces === 'end') {
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
    }
  },
  methods: {
    togglePeriod(): void {
      if (!this.period) {
        this.period = true;
        this.$emit('click');
      }
    },
  }
})
</script>

<style lang="scss" scoped>
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
