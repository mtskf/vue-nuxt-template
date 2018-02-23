<!-- //////// -->
<!-- Template -->
<!-- //////// -->

<template lang="pug">

  .container
    site-menu
    nuxt
    site-footer

</template>

<!-- ///////////// -->
<!-- Vue Component -->
<!-- ///////////// -->

<script>

import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'site-menu': Menu,
    'site-footer': Footer,
  },
}

</script>

<!-- ////// -->
<!-- Styles -->
<!-- ////// -->

<style lang="scss">

.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

</style>
