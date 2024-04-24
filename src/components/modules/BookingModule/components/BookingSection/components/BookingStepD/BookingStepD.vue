<template>
  <PersonalInfo
    :Booking="Booking"
  />
</template>

<script>
import PersonalInfo from "@/components/modules/BookingModule/chunks/PersonalInfo/PersonalInfo.vue";


export default {
  name: "BookingStepD",

  components: {PersonalInfo},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

}
</script>

<style scoped>

</style>