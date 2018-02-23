<!-- //////// -->
<!-- Template -->
<!-- //////// -->

<template lang="pug">

.content
  p About
  p {{ this.$store.state.count }}

</template>

<!-- ///////////// -->
<!-- Vue Component -->
<!-- ///////////// -->

<script>

export default {
  name: 'about',
}

</script>

<!-- ////// -->
<!-- Styles -->
<!-- ////// -->

<style lang="scss">
</style>
