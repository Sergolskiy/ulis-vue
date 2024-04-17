<template>

  <div class="custom-row">
    <div class="custom-col">
      <CardHouse
        :Booking="Booking"
      />
    </div>
    <div class="custom-col">
      <CardHouse
        :Booking="Booking"
      />
    </div>
  </div>

</template>

<script>
import CardHouse from "../../../../chunks/CardHouse/CardHouse.vue";

export default {
  name: "BookingStepB",

  components: {
    CardHouse
  },

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