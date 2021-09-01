<template lang="pug">
.wrapper
  .header
  .main Stuff here
  .footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About',
  components: {},
  data() {
    return {
    }
  },
  methods: {
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 20vh;
  background-color: hotpink;
}

.footer {
  height: 20vh;
  background-color: paleturquoise;
}
</style>