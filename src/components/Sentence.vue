<template>
  <div class="sentence">
    <p class="inline-h1 clickable">Here is the first hero to the show about 6</p>
    <Period text="ft" spaces="end" @click="$emit('clicked-period')"/>
    <p class="inline-h1 clickable">in stature whose hair is that of a</p>
    <Period text="god" spaces="both" @click="$emit('clicked-period')"/>
  </div>
</template>

<script>
import Period from './Period.vue'

export default {
  name: 'Sentence',
  components: {
    Period
  },
}
</script>

<style>
.inline-h1 {
  font-size: 3rem;
  font-weight: 500;
  font-family: Sans-Serif;
  display: inline;
}
</style>
