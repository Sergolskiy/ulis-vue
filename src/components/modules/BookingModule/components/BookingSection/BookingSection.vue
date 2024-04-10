<template>

  <div class="booking__inner">
    <div class="booking__top">
      <BookingTop
          :Booking="Booking"
      />
    </div>

    <div class="booking__main">
      <div class="booking__left">
        <BookingLeft
            :Booking="Booking"
        />
      </div>

      <div class="booking__content">
        <BookingStepA
            v-if="Booking.data.activeStep === 1"
            :Booking="Booking"
        />

        <BookingStepB
            v-if="Booking.data.activeStep === 2"
            :Booking="Booking"
        />

        <BookingStepC
            v-if="Booking.data.activeStep === 3"
            :Booking="Booking"
        />

        <BookingStepD
            v-if="Booking.data.activeStep === 4"
            :Booking="Booking"
        />

        <BookingStepE
            v-if="Booking.data.activeStep === 5"
            :Booking="Booking"
        />

        <div class="booking__buttons">

          <div class="booking__btn">
            <MainButton
                :label="'Назад'"
                :ico="true"
                :secondary="true"
            />
          </div>
          <div class="booking__btn">
            <MainButton
                :label="'Далі'"
                :ico="true"
                :secondary="true"
            />
          </div>

        </div>

      </div>


    </div>

  </div>


</template>

<script>

import BookingLeft from "../BookingLeft/BookingLeft.vue";
import BookingStepA from "../BookingStepA/BookingStepA.vue";
import BookingStepB from "../BookingStepB/BookingStepB.vue";
import BookingStepC from "../BookingStepC/BookingStepC.vue";
import BookingStepD from "../BookingStepD/BookingStepD.vue";
import BookingStepE from "../BookingStepE/BookingStepE.vue";
import BookingTop from "../BookingTop/BookingTop.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";

export default {
  name: "BookingSection",

  components: {
    MainButton,
    BookingTop,
    BookingLeft,
    BookingStepA,
    BookingStepB,
    BookingStepC,
    BookingStepD,
    BookingStepE,
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