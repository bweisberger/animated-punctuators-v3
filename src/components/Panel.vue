<template lang="pug">
div(class="panel")
  main(class="sentence-container")
    slot(name="sentence")
  aside(class="hero-container")
    slot(name="hero")
    slot(name="hero-active")
  slot
</template>

<script>
export default {
  name: 'Panel',
}
</script>

<style lang="scss">
.panel {
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.sentence-container {
  width: 240px;
  @include mq(phablet){

  }
  @include mq(tablet){

  }
  @include mq(desktop){

  }
  padding-left: 20px;
}

.hero-container {
  display: flex;
  justify-content: flex-end;
  width: 80px;
  z-index: -1;
}
</style>
