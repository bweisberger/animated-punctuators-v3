<template lang="pug">
div.panel
  main.sentence-container
    slot(name="sentence")
  aside.hero-container
    slot(name="hero")
  slot
</template>

<script>
export default {
  name: 'Panel',
}
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
  width: 50%;
  height: 50%;
  @include mq(phablet){
    width: 140px;
  }
  @include mq(tablet){
    width: 200px;
  }
}
</style>
