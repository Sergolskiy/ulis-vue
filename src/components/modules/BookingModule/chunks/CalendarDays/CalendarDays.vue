<template>
  <div class="calendar-days__calendar-top">
    <div class="calendar-days__calendar-between">
      <div class="calendar-days__calendar-between-first">
        <div class="calendar-days__calendar-between-name">
          Заїзд
        </div>
        <div class="calendar-days__calendar-between-date" :class="{'active-date' : Booking.data.date !== null}">
          {{getDateStart}}
        </div>
      </div>
      <div class="calendar-days__calendar-between-last">
        <div class="calendar-days__calendar-between-name">
          Виїзд
        </div>
        <div class="calendar-days__calendar-between-date" :class="{'active-date' : Booking.data.date !== null}">
          {{getDateEnd}}
        </div>
      </div>
    </div>

    <div class="calendar-days__calendar-duration"
         v-if="duration"
    >
      <div class="calendar-days__calendar-duration-name">
        Тривалість
      </div>
      <div class="calendar-days__calendar-duration-count" :class="{'active-date' : Booking.data.date !== null}">
        {{getDays}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarDays",

  props: {
    Booking: {
      type: Object,
      default: null,
    },
    duration: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    getDateStart() {
      if(this.Booking.data.date) {
        return this.$moment(this.Booking.data.date[0]).format('dd, D MMM. YYYY')
      }
      return 'ДД/ММ/РР'
    },
    getDateEnd() {
      if(this.Booking.data.date) {
        return this.$moment(this.Booking.data.date[1]).format('dd, D MMM. YYYY')
      }
      return 'ДД/ММ/РР'
    },
    getDays() {
      if(this.Booking.data.date) {
        let diff = this.$moment(this.Booking.data.date[1]).diff(this.$moment(this.Booking.data.date[0]), 'days')
        return diff + ' ' + this.getNoun(diff, 'доба', 'доби', 'діб')
      }
      return 'к-ть діб'
    }
  },
  
}
</script>


<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.calendar-days {

  &__calendar-top {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 411px;
  }

  &__calendar-between {
    border-radius: 8px;
    border: 1px solid $border-grey;
    padding: 8px;
    display: flex;
    width: 100%;
  }

  &__calendar-between-first {
    position: relative;
    //width: 152px;
    width: 50%;
    
    //@include for-768 {
    //  width: 93px;
    //}

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 7px;
      right: 0;
      width: 1px;
      height: 24px;
      background: $border-grey;
    }
  }

  &__calendar-between-name {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: $text-grey;
  }

  &__calendar-between-date {
    margin-top: 4px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: $grey;

    @include for-768 {
      font-size: 14px;
    }

    &.active-date {
      color: $black;

      @include for-768 {
        font-size: 12px;
      }
    }
  }

  &__calendar-between-last {
    //width: 152px;
    width: 50%;
    text-align: right;

    //@include for-768 {
    //  width: 93px;
    //}
  }

  &__calendar-duration {
    border-radius: 8px;
    border: 1px solid $border-grey;
    padding: 8px 16px;
    margin-left: 16px;

    @include for-768 {
      margin-left: 6px;
      padding: 8px;
    }
  }

  &__calendar-duration-name {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: $text-grey;
  }

  &__calendar-duration-count {
    margin-top: 4px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: $grey;

    &.active-date {
      color: $black;
    }
  }

}
</style>