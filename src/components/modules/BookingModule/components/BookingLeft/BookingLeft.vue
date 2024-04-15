<template>
  <div class="left-side">
    <div class="left-side__inner">
      <div class="left-side__account">
        <Account/>
      </div>

      <div class="left-side__choice">
        <ChoiceBooking/>
      </div>

      <div class="left-side__row">
        <ChosenHouse/>
      </div>

      <div class="left-side__row mb-3">
        <MainButton
            :label="'Додати ще один будинок'"
          >
          </MainButton>
      </div>
    </div>
  </div>
</template>

<script>
import Account from "../../chunks/Account/Account.vue";
import ChoiceBooking from "../../chunks/ChoiceBooking/ChoiceBooking.vue";
import ChosenHouse from "../../chunks/ChosenHouse/ChosenHouse.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";

export default {
  name: "BookingLeft",

  components: {
    Account,
    ChoiceBooking,
    ChosenHouse,
    MainButton
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

  }

  &__choice {

  }

}

</style>