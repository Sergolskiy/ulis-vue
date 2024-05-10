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
            @removeHouse="removeHouse"
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
            @goToNextStepEmit="afterNextStep"
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
              :ico="'arrow'"
              :icoPosition="'right'"
              @click="afterNextStep"
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
      @confirm="successPayBookingPopup = false; goToHome()"
  />

  <ShortSpecialPopup
      v-if="openSignInPopup"
      :shortSpecialPopupText="signInPopupText"
      @closeShortSpecialPopup="openSignInPopup = false"
      @confirm="openSignInPopup = false; goToLogin()"
      @no="openSignInPopup = false; goToNextStep()"
  />

  <DeleteItemPopup
      v-if="openRemovePopup"
      :deletePopupText="deletePopupText"
      @closeDeletePopup="openRemovePopup = false"
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
import DeleteItemPopup from "@/components/modules/BookingModule/popups/DeleteItemPopup/DeleteItemPopup.vue";

export default {
  name: "BookingSection",

  components: {
    DeleteItemPopup,
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
      openRemovePopup: false,
      deletePopupText: {
        title: 'Видалити будинок?',
        txt: 'Ти впевнений, що хочеш виконати цю дію? Якщо ти видалиш будинок, то всі обрані фільтри та сервіси не збережуться.',
        no: 'Не хочу',
        yes: 'Видалити',
      },


      openSignInPopup: false,
      signInPopupText: {
        title: 'Авторизуйся в системі',
        txt: 'Авторизуйся в системі, щоб першим дізнаватися про вигідні пропозиції, накопичувати бонуси та вести профіль, додаючи у wishlist та waitlist',
        img: true,
        imgType: 'ico',
        imgName: 'signInPopup',
        no: 'Іншим разом',
        yes: 'Авторизуватися',
      },

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

  mounted() {
    if(this.Booking.data.activeStep === 1) {
      this.openRulesPopup = true
    }
  },

  methods: {
    goToHome() {
      window.location = window.location.origin;
    },

    closeRulesPopup() {
      this.openRulesPopup = false;
    },

    closeShortSpecialPopup() {
      this.openShortSpecialPopup = false;
      this.goToNextStep()
    },

    goToLogin() {
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('page', 'login');

      window.location.search = urlParams;
    },

    goToBackStep() {
      this.Booking.data.activeStep = this.Booking.data.activeStep - 1
      window.scrollTo(0, 0)
    },

    afterNextStep() {
      if(this.Booking.data.activeStep === 1 && !this.Booking.stepAValidation()) {
        return false
      }

      // if(this.Booking.data.activeStep === 1) {
      //   this.openRulesPopup = true
      //   return
      // }

      if(this.Booking.data.activeStep === 3 && !this.Booking.data.isAuth) {
        this.openSignInPopup = true;
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


    removeHouse() {
      this.$emit('removeHouse')
      this.openRemovePopup = true
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";



</style>