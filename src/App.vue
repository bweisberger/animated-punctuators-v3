<template lang="pug">
#app
  Header
  router-view.main
  Footer
</template>

<script lang="ts">
import { Header, Footer } from '@/components';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.main {
  height: 80vh;
  @include mq(desktop) {
    height: 85vh;
  }
}
</style>
