<template lang="pug">
.header
  a.link(href="https://awsymbols.com/about/") About
  a.link(href="https://awsymbols.com/punctuators-comic/our-heroes/") Heroes
  a.link(href="https://awsymbols.com/") Original Comic
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  background-color: hotpink;
  height: 10vh;
  width: 100%;
  padding: 20px;
  @include mq(desktop) {
    height: 5vh;
  }
  .link {
    font-weight: bold;
    font-size: 25px;
    margin: 20px;
    color: yellow;
    text-decoration: none;
  }
}
</style>