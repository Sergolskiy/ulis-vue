<template>
  <div class="detail-popup">
    <div class="detail-popup__inner">
      <div class="detail-popup__top">
        <div class="detail-popup__back">
          <BackTo
              @click="$emit('close')"
          />
        </div>
        <span>Деталі бронювання</span>
      </div>

      <div class="detail-popup__content">

        <ChoiceBooking
            :Booking="Booking"
        />

        <ChosenHouse
            :Booking="Booking"
            @removeHouse="$emit('removeHouse')"
        />

        
        <div class="left-side__btn mb-3">
          <MainButton
          :label="'Додати ще один будинок'"
          :ico="'plus'"
          :icoPosition="'right'"
          >
        </MainButton>
      </div>
      
      <PersonalDetails
          v-if="Booking.data.isAuth"
          class="mb-3"
          :Booking="Booking"
      />
      
      </div>

    </div>
  </div>
</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import ChoiceBooking from "@/components/coreComponents/BookingLeft/components/ChoiceBooking/ChoiceBooking.vue";
import ChosenHouse from "@/components/coreComponents/BookingLeft/components/ChosenHouse/ChosenHouse.vue";
import PersonalDetails from "@/components/coreComponents/BookingLeft/components/PersonalDetails/PersonalDetails.vue";
import BackTo from '../../../../../assets/img/back-to.svg?skipsvgo'

export default {
  name: "DetailPopup",
  components: {
    PersonalDetails,
    ChosenHouse,
    ChoiceBooking,
    MainButton,
    BackTo
  },

  emits: ['removeHouse'],

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

.detail-popup {
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;

  &__inner {
    overflow: auto;
    height: calc(100vh - 56px);
  }

  &__top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid $border-grey;
    margin-bottom: 24px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    padding-top: 2px;
  }

  &__back {
    position: absolute;
    top: 8px;
    left: 16px;
    cursor: pointer;
  }

  &__content {
    padding: 0 16px;
  }

  &__btn {

  }

}


</style>