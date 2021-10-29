<template lang="pug">
.footer copyright Ty Rickers 2021
</template>

<script lang="ts">
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: paleturquoise;
  height: 10vh;
  width: 100%;
  text-align: center;
  padding: 10px;
  @include mq(desktop) {
    height: 5vh;
  }
}
</style>