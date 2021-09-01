<template lang="pug">
div(class="sentence")
  p(class="inline-h1 clickable") Here is the first hero to the show about 6
  Period(text="ft" spaces="end" @click="$emit('clicked-period')")
  p(class="inline-h1 clickable") in stature whose hair is that of a
  Period(text="god" spaces="both" @click="$emit('clicked-period')")
</template>

<script lang="ts">
import Period from './Period.vue'

export default {
  name: 'Sentence',
  components: {
    Period
  },
}
</script>

<style lang="scss" scoped>
.inline-h1 {
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
</style>
