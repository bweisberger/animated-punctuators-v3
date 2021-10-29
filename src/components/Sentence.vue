<template lang="pug">
.sentence
  Capital(:text="capitals[0].text" @click="handleCapitalClick(capitals[0].text)")
  p.inline-h1.clickable ere is the first hero to the
  Period(:text="periods[0].text" :spaces="periods[0].spaces" @click="handlePeriodClick(periods[0].text)")
  Capital(:text="capitals[1].text" @click="handleCapitalClick(capitals[1].text)")
  p.inline-h1.clickable bout 6
  Period(:text="periods[1].text" :spaces="periods[1].spaces" @click="handlePeriodClick(periods[1].text)")
  p.inline-h1.clickable in stature whose hair is that of a
  Period(:text="periods[2].text" :spaces="periods[2].spaces" @click="handlePeriodClick(periods[2].text)")
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

import { PeriodSpaces } from '@/types/LanguageTypes';

import Period from './Period.vue'
import Capital from './Capital.vue'

export default defineComponent({
  name: 'Sentence',
  components: {
    Capital,
    Period
  },
  data() {
    return {
      periods: [
        {
          text: 'show',
          spaces: PeriodSpaces.BOTH
        },
        {
          text: 'ft',
          spaces: PeriodSpaces.AFTER
        },
        {
          text: 'god',
          spaces: PeriodSpaces.BOTH
        }
      ],
      capitals: [
        {
          text: 'h'
        },
        {
          text: 'a'
        }
      ]
    }
  },
  methods: {
    handlePeriodClick(periodText: string) {
      this.$emit('punctuation-event-1', periodText);
    },
    handleCapitalClick(capitalText: string) {
      this.$emit('punctuation-event-2', capitalText);
    }
  },
})
</script>

<style lang="scss" scoped></style>
