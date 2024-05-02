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
            @goToBackStepEmit="goToBackStep"
            @goToNextStepEmit="goToNextStep"
        />

        <BookingStepD
            v-if="Booking.data.activeStep === 4"
            :Booking="Booking"
        />

        <BookingStepE
            v-if="Booking.data.activeStep === 5"
            :Booking="Booking"
            @confirmBooking="confirmBooking"
        />

        <div class="booking__buttons" v-if="Booking.data.activeStep !== 3">

          <div class="booking__btn">
            <MainButton
                :label="'Назад'"
                :secondary="true"
                :ico="'arrow'"
                :icoPosition="'left'"
                :disabled="Booking.data.activeStep === 1"
                @click="goToBackStep"
            />
          </div>
          <div class="booking__btn">
            <MainButton
                v-if="Booking.data.activeStep < 5"
              :label="'Далі'"
              :secondary="true"
              :ico="'arrow'"
              :icoPosition="'right'"
              @click="checkFirstPopup"
            />
              <!-- :disabled="Booking.data.activeStep > 2" -->

            <MainButton
                v-if="Booking.data.activeStep === 5"
                :label="'Оплатити'"
                :icoPosition="'right'"
                :disabled="!canPay"
                @click="successPayBookingPopup = true"
            />
          </div>
        </div>

      </div>


    </div>

  </div>

  <RulesPopup
      v-if="openRulesPopup"
      @closeRulesPopup="openRulesPopup = false"
      @confirm="closeRulesPopup"
  />

  <ShortSpecialPopup
      v-if="openShortSpecialPopup"
      :shortSpecialPopupText="specialOfferPopupText"
      @closeShortSpecialPopup="openShortSpecialPopup = false"
      @confirm="closeShortSpecialPopup"
  />

  <ShortSpecialPopup
      v-if="successPayBookingPopup"
      :shortSpecialPopupText="successPayBookingPopupText"
      @closeShortSpecialPopup="successPayBookingPopup = false"
      @confirm="successPayBookingPopup = false"
  />

</template>

<script>

import BookingLeft from "@/components/coreComponents/BookingLeft/BookingLeft.vue";
import BookingStepA from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepA/BookingStepA.vue";
import BookingStepB from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepB/BookingStepB.vue";
import BookingStepC from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepC/BookingStepC.vue";
import BookingStepD from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepD/BookingStepD.vue";
import BookingStepE from "@/components/modules/BookingModule/components/BookingSection/components/BookingStepE/BookingStepE.vue";
import BookingTop from "@/components/modules/BookingModule/components/BookingSection/components/BookingTop/BookingTop.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";

import RulesPopup from "@/components/modules/BookingModule/popups/RulesPopup/RulesPopup.vue";
import ShortSpecialPopup from "@/components/modules/BookingModule/popups/ShortSpecialPopup/ShortSpecialPopup.vue";

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

    RulesPopup,
    ShortSpecialPopup,
  },


  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  data() {
    return {
      successPayBookingPopup: false,
      successPayBookingPopupText: {
        title: 'Оплата пройшла успішно!',
        txt: 'Твоє бронювання успішно завершено! Я вже чекаю тебе у гості та готуюсь до твого приїзду!',
        img: true,
        imgType: 'ico',
        imgName: 'specialSuccessBookingPopup',
        yes: 'На головну сторінку',
      },

      canPay: false,

      openRulesPopup: false,
      openShortSpecialPopup: false,
      specialOfferPopupText: {
        title: 'Спеціальна пропозиція для тебе',
        txt: 'Продовжи проживання в УЛІС до 3-х днів та отримай знижку у розмірі Х% від загальної вартості бронювання.',
        img: true,
        imgName: 'specialOfferPopup',
        no: 'Ні, дякую',
        yes: 'Отримати знижку',
      },

      // specialOfferPopupTextTest: {
      //   title: 'Спеціальна пропозиція для тебе',
      //   txt: 'Продовжи проживання в УЛІС до 3-х днів та отримай знижку у розмірі Х% від загальної вартості бронювання.',
      //   imgSrc: '/assets/special-offer-artboard.png',
      //   imgAlt: 'alt',
      //   no: 'Ні, дякую',
      //   yes: 'Отримати знижку',
      // },
    }
  },

  methods: {
    closeRulesPopup() {
      this.openRulesPopup = false;
      this.openShortSpecialPopup = true;
    },

    closeShortSpecialPopup() {
      this.openShortSpecialPopup = false;
      this.goToNextStep()
    },

    goToBackStep() {
      this.Booking.data.activeStep = this.Booking.data.activeStep - 1
      window.scrollTo(0, 0)
    },

    checkFirstPopup() {
      if(this.Booking.data.activeStep === 1 && !this.Booking.stepAValidation()) {
        return false
      }

      if(this.Booking.data.activeStep === 1) {
        this.openRulesPopup = true
        return
      }

      this.goToNextStep()
    },

    goToNextStep() {

      if(this.Booking.data.activeStep === 1 && !this.Booking.stepAValidation()) {
        return false
      }

      if(this.Booking.data.activeStep === 4 && !this.Booking.stepDValidation()) {
        return false
      }

      this.Booking.data.activeStep = this.Booking.data.activeStep + 1
      window.scrollTo(0, 0)
    },

    confirmBooking() {
      if(!this.Booking.stepEValidation()) {
        return false
      }

      this.canPay = true
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";



</style>