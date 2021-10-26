<template lang="pug">
.sentence
  Capital(text="h" @click="$emit('punctuation-event-2')")
  p.inline-h1.clickable ere is the first hero to the
  Period(text="show" spaces="both" @click="$emit('punctuation-event-1')")
  Capital(text="a" @click="$emit('punctuation-event-2')")
  p.inline-h1.clickable bout 6
  Period(text="ft" spaces="end" @click="$emit('punctuation-event-1')")
  p.inline-h1.clickable in stature whose hair is that of a
  Period(text="god" spaces="both" @click="$emit('punctuation-event-1')")
</template>

<script lang="ts">
import Period from './Period.vue'
import Capital from './Capital.vue'

export default {
  name: 'Sentence',
  components: {
    Capital,
    Period
  }
}
</script>

<style lang="scss" scoped></style>
