<template>
  <div class="booking-tabs">
    <div class="booking-tabs__inner">

      <div class="booking-tabs__top">
        <div class="booking-tabs__top-left">
          {{getStepName}}
        </div>
        <div class="booking-tabs__top-right">
          Всі кроки (5)
        </div>
      </div>

      <div class="booking-tabs__items">
        <div class="booking-tabs__item"
             :class="{
                'booking-tabs__item--active' : Booking.data.activeStep >= 1,
                'booking-tabs__item--check' : Booking.data.activeStep > 1,
              }">
          <div class="booking-tabs__number">
            1
          </div>
          <div class="booking-tabs__name">
            Твій вибір
          </div>
        </div>
        <div class="booking-tabs__item"
             :class="{
                'booking-tabs__item--active' : Booking.data.activeStep >= 2,
                'booking-tabs__item--check' : Booking.data.activeStep > 2,
              }">
          <div class="booking-tabs__number">
            2
          </div>
          <div class="booking-tabs__name">
            Будинок
          </div>
        </div>
        <div class="booking-tabs__item"
             :class="{
                'booking-tabs__item--active' : Booking.data.activeStep >= 3,
                'booking-tabs__item--check' : Booking.data.activeStep > 3,
              }">
          <div class="booking-tabs__number">
            3
          </div>
          <div class="booking-tabs__name">
            Сервіси
          </div>
        </div>
        <div class="booking-tabs__item"
             :class="{
                'booking-tabs__item--active' : Booking.data.activeStep >= 4,
                'booking-tabs__item--check' : Booking.data.activeStep > 4,
              }">
          <div class="booking-tabs__number">
            4
          </div>
          <div class="booking-tabs__name">
            Особиста інформація
          </div>
        </div>
        <div class="booking-tabs__item"
             :class="{'booking-tabs__item--active' : Booking.data.activeStep === 5}">
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

  computed: {
    getStepName() {
      return this.stepName.find((item) => {return this.Booking.data.activeStep === item.id})?.name
    }
  },

  data() {
    return {
      stepName: [
        {
          id: 1,
          name: 'Твій вибір',
        },
        {
          id: 2,
          name: 'Будинок',
        },
        {
          id: 3,
          name: 'Сервіси',
        },
        {
          id: 4,
          name: 'Особиста інформація',
        },
        {
          id: 5,
          name: 'Оплата',
        },
      ],
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.booking-tabs {
  margin-top: 24px;

  @include for-768 {
    margin-top: 18px;
  }

  &__inner {
    padding: 20px 0;

    @include for-768 {
      padding: 0;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    @include from-768 {
      display: none;
    }
  }

  &__top-left {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }

  &__top-right {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    color: $grey;
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
    &--active {

      & + .booking-tabs__item {
        &:before {
          background: $black;
        }
      }

      .booking-tabs__number {
        background: $black;
      }

      .booking-tabs__name {
        color: $black;
      }
    }

    &--check {
      .booking-tabs__number {
        @include for-768 {
          font-size: 0;
          background: $black url("../../../../../assets/img/checked-white.svg") center center no-repeat;
          background-size: 16px;
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
    color: $white;
    background: $grey;
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
    color: $grey;

    @include for-768 {
      display: none;
    }
  }

}


</style>