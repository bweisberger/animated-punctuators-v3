<template lang="pug">
#nav
  router-link(to="/about") About
router-view
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
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
