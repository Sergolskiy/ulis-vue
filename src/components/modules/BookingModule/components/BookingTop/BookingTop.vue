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
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

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

    &:nth-child(n+2) {
      position: relative;

      @include for-768 {
        padding-left: 20%;
      }

      @include for-550 {
        padding-left: 15%;
      }

      &:before {
        content: '';
        position: relative;
        top: 0;
        left: -24px;
        display: block;
        width: 88px;
        height: 1px;
        background: $border-grey;

        @include for-1120 {
          position: absolute;
          top: 12px;
          left: -8vw;
          display: block;
          width: 6vw;
          height: 1px;
          background: #DCE0E4;
        }

        @include for-992 {
          display: none;
        }

        @include for-768 {
          display: block;
          left: 26px;
          width: 45%;
        }

        @include for-550 {
          left: 11px;
          width: 30%;
        }
      }
    }
  }

  &__number {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $black;
    color: $white;
    border-radius: 50%;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    padding-top: 2px;
  }

  &__name {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-left: 10px;
    padding-top: 4px;

    @include for-768 {
      display: none;
    }
  }

}


</style>