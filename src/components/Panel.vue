<template lang="pug">
div.panel
  main.sentence-container
    slot(name="sentence")
  aside.hero-container
    slot(name="hero-1")
  slot
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: 'Panel',
})
</script>

<style lang="scss" scoped>
.panel {
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sentence-container {
  width: 50%;
  padding-left: 20px;
  @include mq(desktop) {
    width: 70%;
  }
}

.hero-container {
  width: 40%;
  height: 100%;
  @include mq(desktop) {
    width: auto;
  }
}
</style>
