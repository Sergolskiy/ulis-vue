<template>
  <div class="left-side">
    <div class="left-side__inner">
      <div class="left-side__account">
        <Account/>
      </div>

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
        />
      </div>

      <div class="left-side__btn mb-3" v-if="Booking.data.activeStep >= 2">
        <MainButton
            :label="'Додати ще один будинок'"
            :ico="'plus'"
            :icoPosition="'right'"
          >
          </MainButton>
      </div>
    </div>

    <DetailPopup
        class="mobile-detail-popup"
        :class="{'active': openDetailPopup}"
        :Booking="Booking"
        @close="closePopup"
    />

  </div>
</template>

<script>
import Account from "../../chunks/Account/Account.vue";
import ChoiceBooking from "../../chunks/ChoiceBooking/ChoiceBooking.vue";
import ChosenHouse from "../../chunks/ChosenHouse/ChosenHouse.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";
import MobileDetailBooking from "@/components/modules/BookingModule/chunks/MobileDetailBooking/MobileDetailBooking.vue";
import DetailPopup from "@/components/modules/BookingModule/chunks/DetailPopup/DetailPopup.vue";

export default {
  name: "BookingLeft",

  components: {
    DetailPopup,
    MobileDetailBooking,
    Account,
    ChoiceBooking,
    ChosenHouse,
    MainButton
  },

  emits: ['openPopup', 'close'],

  props: {
    Booking: {
      type: Object,
      default: null,
    }
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
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

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