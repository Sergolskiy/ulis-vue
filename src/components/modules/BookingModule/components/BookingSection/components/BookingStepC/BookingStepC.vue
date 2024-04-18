<template>

  <div class="services">
    <div class="booking__buttons services__buttons">
      <div class="booking__btn services__btn">
        <MainButton
            :label="'Назад'"
            :secondary="true"
            :ico="'arrow'"
            :icoPosition="'left'"
            :disabled="Booking.data.activeStep === 1"
            @click="Booking.data.activeStep = Booking.data.activeStep - 1"
        />
      </div>
      <div class="booking__btn services__btn">
        <!--                :disabled="true"-->
        <MainButton
            :label="'Не цікаво'"
            :ico="'arrow'"
            :icoPosition="'right'"
            @click="Booking.data.activeStep = Booking.data.activeStep + 1"
        />
      </div>
    </div>

    <div class="services__price-block mt-4">
      <div class="services__overview-txt">
        Всього за сервіси
      </div>
      <div class="services__price">
        <IconUAH/>
        0
      </div>
    </div>


  </div>


</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import IconUAH from "@/assets/img/currencies.svg";

export default {
  name: "BookingStepC",
  components: {IconUAH, MainButton},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";


.services {

  &__price-block {
    display: flex;
    flex-direction: column;
    align-items: end;
    flex: 1 1 auto;
    justify-content: end;

    @include for-550 {
      // max-width: 100px;
    }
  }

  &__overview-txt {
    font-size: 12px;
    color: $text-grey;
    margin-bottom: 4px;
  }

  &__price {
    color: #1E1E1E;
    font-size: 24px;
    font-weight: 600;
    display: flex;

    @include for-680 {
      font-size: 20px;
      padding-top: 2px;
    }

    svg {
      @include for-680 {
        margin-top: -2px;
      }
    }
  }
}


</style>