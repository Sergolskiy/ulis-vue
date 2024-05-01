<template>
  <div class="booking__inner">
    <div class="booking__main">
      <div class="booking__left">
        <BookingLeft
            :Booking="Booking"
            :type="'profile'"
        />
      </div>

      <div class="booking__content">
        <Profile
            :Booking="Booking"
        />
      </div>

    </div>
  </div>

</template>

<script>
import Profile from "@/components/modules/ProfileModule/components/Profile/Profile.vue";
import BookingLeft from "@/components/coreComponents/BookingLeft/BookingLeft.vue";
import {Booking} from "@/components/modules/BookingModule/models/Booking.js";

export default {
  name: "ProfileModule",
  components: {
    BookingLeft,
    Profile,
  },

  data() {
    return {
      Booking: new Booking(),
    }
  }
}
</script>

<style scoped lang="scss">

</style>