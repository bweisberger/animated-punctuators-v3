<template>
  <span class="container clickable" @click="togglePeriod">
    <p v-if="period" class="inline-h1 text">{{withPeriod}}</p>
    <p v-else class="inline-h1 text" :style="styleObject">{{withoutPeriod}}</p>
  </span>
</template>

<script lang="ts">
export default {
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
}
</script>

<style scoped>
  .text {
    color: var(--text-color);
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
