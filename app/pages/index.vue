<!-- //////// -->
<!-- Template -->
<!-- //////// -->

<template lang="pug">

.content
  p Index
  p {{ this.currentDate }}

</template>

<!-- ///////////// -->
<!-- Vue Component -->
<!-- ///////////// -->

<script>

import axios from '../plugins/axios'

export default {
  name: 'index',
  async asyncData() {
    const { data } = await axios.get('/api/date/now')
    return { currentDate: data }
  },
}
</script>

<!-- ////// -->
<!-- Styles -->
<!-- ////// -->

<style lang="scss">
</style>
