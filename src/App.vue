<template>

  <Header

  />

  <BookingModule
      v-if="page === 'main'"
  />

  <LoginModule
      v-if="page === 'login'"
  />

  <RegistrationModule
      v-if="page === 'registration'"
  />

  <ProfileModule
      v-if="page === 'profile'"
  />

  <CertificateModule
      v-if="page === 'certificate'"
  />

  <NotFoundModule
      v-if="page === '404'"
  />

</template>

<script>

import Header from "./components/templates/Header/Header.vue";
import BookingModule from "./components/modules/BookingModule/BookingModule.vue";
import LoginModule from "@/components/modules/LoginModule/LoginModule.vue";
import RegistrationModule from "@/components/modules/RegistrationModule/RegistrationModule.vue";
import ProfileModule from "@/components/modules/ProfileModule/ProfileModule.vue";
import CertificateModule from "@/components/modules/CertificateModule/CertificateModule.vue";
import NotFoundModule from "@/components/modules/NotFoundModule/NotFoundModule.vue";

export default {
  name: 'App',

  components: {
    NotFoundModule,
    CertificateModule,
    ProfileModule,
    RegistrationModule,
    LoginModule,
    Header,
    BookingModule,
  },

  data() {
    return {
      page: null,
    }
  },

  mounted() {
    this.setPage()
  },

  methods: {
    setPage() {
      this.page = new URL(location.href).searchParams.get('page')

      if(!this.page) {
        this.page = 'main'
      }
    },
  }

}

</script>


<style lang="scss">
  @import "./scss/normalize";
  //@import '../node_modules/vue-datepicker-next/index.css';
  @import '../node_modules/bootstrap-4-grid/css/grid.min.css';
  @import "../node_modules/vue-select/dist/vue-select.css";
  @import "./scss/main";
</style>
