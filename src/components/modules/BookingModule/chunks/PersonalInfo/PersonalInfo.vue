<template>
  <div class="personal-info">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Введіть особисту інформацію
      </div>

      <PersonalInfoFields
          :Personal="Booking"
      />


    </div>
  </div>
</template>

<script>


import PersonalInfoFields from "@/components/coreComponents/PersonalInfoFields/PersonalInfoFields.vue";

export default {
  name: "PersonalInfo",
  components: {
    PersonalInfoFields

  },

  props: {
    Booking: {
      type: Object,
      default: null,
    },
  },

  data () {
    return {
      gender: ''
    }
  },

  methods: {

  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

</style>