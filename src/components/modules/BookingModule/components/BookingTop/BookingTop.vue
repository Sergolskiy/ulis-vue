<template>
  <div class="booking-tabs">
    <div class="booking-tabs__inner">
      <div class="booking-tabs__items">
        <div class="booking-tabs__item">
          <div class="booking-tabs__number">
            1
          </div>
          <div class="booking-tabs__name">
            Твій вибір
          </div>
        </div>
        <div class="booking-tabs__item">
          <div class="booking-tabs__number">
            2
          </div>
          <div class="booking-tabs__name">
            Будинок
          </div>
        </div>
        <div class="booking-tabs__item">
          <div class="booking-tabs__number">
            3
          </div>
          <div class="booking-tabs__name">
            Сервіси
          </div>
        </div>
        <div class="booking-tabs__item">
          <div class="booking-tabs__number">
            4
          </div>
          <div class="booking-tabs__name">
            Особиста інформація
          </div>
        </div>
        <div class="booking-tabs__item">
          <div class="booking-tabs__number">
            5
          </div>
          <div class="booking-tabs__name">
            Оплата
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingTop",

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

}
</script>

<style scoped lang="scss">

.booking-tabs {
  margin-top: 24px;

  &__inner {
    padding: 20px 0;
  }

  &__items {
    display: flex;
    justify-content: space-between;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__number {

  }

  &__name {

  }

}


</style>