<template>
  <div class="booking">
    <BookingSection
        :Booking="Booking"
    />
    
  </div>
</template>

<script>
import BookingSection from "./components/BookingSection/BookingSection.vue";
import {Booking} from "./models/Booking";

export default {
  name: "BookingModule",

  components: {
    BookingSection,
  },

  data() {
    return {
      Booking: new Booking(),
    }
  }

}
</script>

<style scoped>

</style>