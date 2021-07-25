<template lang="pug">
div.panel
  main.sentence-container
    slot(name="sentence")
  aside.hero-container
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
    width: 400px;
  }
  @include mq(tablet){
    width: 550px;
  }
  @include mq(desktop){
    width: 800px;
  }
  padding-left: 20px;
}

.hero-container {
  display: flex;
  justify-content: flex-end;
  width: 80px;
  z-index: -1;
  @include mq(phablet){
    width: 140px;
  }
  @include mq(tablet){
    width: 200px;
  }
}
</style>
