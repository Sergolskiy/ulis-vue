<template>

  <Header/>

  <BookingModule

  />

</template>

<script>

import Header from "./components/templates/Header/Header.vue";
import BookingModule from "./components/modules/BookingModule/BookingModule.vue";

export default {
  name: 'App',

  components: {
    Header,
    BookingModule,
  },

  data() {
    return {}
  },

  mounted() {

  },

}

</script>


<style lang="scss">
  @import "./scss/normalize";
  //@import '../node_modules/vue-datepicker-next/index.css';
  @import '../node_modules/bootstrap-4-grid/css/grid.min.css';
  @import "../node_modules/vue-select/dist/vue-select.css";
  @import "./scss/main";
</style>
