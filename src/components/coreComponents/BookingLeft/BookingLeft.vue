<template>
  <div class="left-side">
    <div class="left-side__inner">
      <div class="left-side__account">
        <Account
            :Booking="Booking"
        />

        <div class="left-side__account-exit" v-if="Booking.data.isAuth">
          <a href="javascript:void(0)" class="left-side__account-exit-btn" @click="exitProfile">Вийти</a>
        </div>

        <div class="mt-4" v-if="Booking.data.isAuth && isTypeProfile">
          <MainButton
              :label="'Перейти до бронювання'"
              :ico="'arrow'"
              :icoPosition="'right'"
              @click="goToHome"
          />
        </div>
      </div>

      <template v-if="!isTypeCertificate">
        <div class="left-side__mobile">
          <MobileDetailBooking
              @openPopup="openPopup"
          />
        </div>

        <div class="left-side__choice">
          <ChoiceBooking
              :Booking="Booking"
          />
        </div>

        <div class="left-side__chosen-house" v-if="Booking.data.activeStep >= 2">
          <ChosenHouse
              :Booking="Booking"
              @removeHouse="$emit('removeHouse')"
          />
        </div>

        <div class="left-side__btn mb-3" v-if="Booking.data.activeStep >= 3 && !isTypeProfile">
          <MainButton
              :label="'Додати ще один будинок'"
              :ico="'plus'"
              :icoPosition="'right'"
          >
          </MainButton>
        </div>
      </template>

      <PersonalDetails
          v-if="Booking.data.isAuth"
          class="mb-3"
          :Booking="Booking"
      />
    </div>

    <DetailPopup
        class="mobile-detail-popup"
        :class="{'active': openDetailPopup}"
        :Booking="Booking"
        @close="closePopup"
        @removeHouse="$emit('removeHouse')"
    />

  </div>
</template>

<script>
import Account from "@/components/coreComponents/BookingLeft/components/Account/Account.vue";
import PersonalDetails from "@/components/coreComponents/BookingLeft/components/PersonalDetails/PersonalDetails.vue";
import ChoiceBooking from "@/components/coreComponents/BookingLeft/components/ChoiceBooking/ChoiceBooking.vue";
import ChosenHouse from "@/components/coreComponents/BookingLeft/components/ChosenHouse/ChosenHouse.vue";
import MainButton from "../../UI/buttons/MainButton/MainButton.vue";
import MobileDetailBooking from "@/components/coreComponents/BookingLeft/components/MobileDetailBooking/MobileDetailBooking.vue";
import DetailPopup from "@/components/coreComponents/BookingLeft/popups/DetailPopup/DetailPopup.vue";

export default {
  name: "BookingLeft",

  components: {
    DetailPopup,
    MobileDetailBooking,
    Account,
    ChoiceBooking,
    ChosenHouse,
    MainButton,
    PersonalDetails
  },

  emits: ['openPopup', 'close', 'removeHouse'],

  props: {
    Booking: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },

  computed: {
    isTypeProfile() {
      return this.type === 'profile'
    },

    isTypeCertificate() {
      return this.type === 'certificate'
    },
  },

  data() {
    return {
      openDetailPopup: false,
    }
  },

  methods: {
    openPopup() {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden'
      this.openDetailPopup = true
    },

    closePopup() {
      document.body.style.overflow = 'initial'
      this.openDetailPopup = false
    },

    exitProfile() {
      localStorage.removeItem('logged')
      this.goToHome()
    },

    goToHome() {
      window.location = window.location.origin;
    },
  }

}
</script>

<style scoped lang="scss">
@import "../../../scss/colors";
@import "../../../scss/mixins/mixins";

.mobile-detail-popup {
  transition: 0.3s;
  transform: translateX(-100%);

  &.active {
    transform: translateX(0);
  }
}

.left-side {

  &__inner {

    @include for-992 {
      display: flex;
      gap: 16px;
    }

    @include for-768 {
      flex-direction: column;
    }
  }

  &__account {
    @include for-992 {
      width: 50%;
    }

    @include for-768 {
      width: 100%;
    }
  }

  &__account-exit-btn {
    display: flex;
    width: 100%;
    height: 56px;
    padding: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    background: $warning-red;
    color: $warning-red-border;
    border-radius: 8px;
    margin-top: 8px;

    &:before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      background: url("../../../assets/img/exit-btn.svg") center center no-repeat;
    }
  }

  &__mobile {
    width: 50%;

    @include from-992 {
      display: none;
    }

    @include for-768 {
      margin-top: 16px;
      width: 100%;
    }
  }

  &__choice {
    @include for-992 {
      display: none;
    }
  }

  &__chosen-house {
    @include for-992 {
      display: none;
    }
  }

  &__btn {
    @include for-992 {
      display: none;
    }
  }

}

</style>