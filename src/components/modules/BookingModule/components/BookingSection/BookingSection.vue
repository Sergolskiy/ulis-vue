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
                :secondary="true"
                :ico="'arrow'"
                :icoPosition="'left'"
                :disabled="Booking.data.activeStep === 1"
                @click="Booking.data.activeStep = Booking.data.activeStep - 1"
            />
          </div>
          <div class="booking__btn">
<!--                :disabled="true"-->
            <MainButton
                :label="'Далі'"
                :secondary="true"
                :ico="'arrow'"
                :icoPosition="'right'"
                @click="Booking.data.activeStep = Booking.data.activeStep + 1"
            />
          </div>

        </div>

      </div>


    </div>

  </div>


</template>

<script>

import BookingLeft from "@/components/modules/BookingModule/components/BookingSection/components/BookingLeft/BookingLeft.vue";
import BookingStepA from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepA/BookingStepA.vue";
import BookingStepB from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepB/BookingStepB.vue";
import BookingStepC from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepC/BookingStepC.vue";
import BookingStepD from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepD/BookingStepD.vue";
import BookingStepE from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepE/BookingStepE.vue";
import BookingTop from "@/components/modules/BookingModule/components/BookingSection/components/BookingTop/BookingTop.vue";
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

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.booking__btn:deep(.main-button) {
  width: 215px;

  @include for-768 {
    width: 136px;
  }
}

</style>