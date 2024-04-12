<template>
  <div class="main-calendar">
    <div class="main-calendar__inner">
      <div class="main-calendar__top">

      </div>
      <div class="main-calendar__content">

        <VueDatePicker
            class="calendar-style only-calendar"
            range
            multi-calendars
            ref="datepicker"
            locale="uk"
            inline
            auto-apply
            no-disabled-range
            :transitions="false"
            :auto-position="false"
            :month-change-on-scroll="false"
            :full-month-name="true"
            :monthNameFormat="'long'"
            :enable-time-picker="false"
            :disabledDates="disabledDates"
            v-model="Booking.data.date"
            @closed="closeCalendar"
        >
<!--            :config="config"-->
          <template #arrow-right>
              <Arrow  />
          </template>
          <template #arrow-left>
              <Arrow  />
          </template>

          <template #day="{ day, date }">
            <div class="calendar-day">
              <div class="calendar-day-item"> {{day}} </div>
              <span class="calendar-price">
                <StatusInfo/> {{getPrice(date)}}
              </span>
            </div>



<!--            <template v-if="day === tomorrow">-->
<!--              asd-->
<!--            </template>-->
<!--            <template v-else>-->
<!--              {{ day }}-->
<!--            </template>-->
          </template>

        </VueDatePicker>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Arrow from '../../../../../assets/img/arrow.svg?skipsvgo'
import StatusInfo from '../../../../../assets/img/calendar-currencies.svg?skipsvgo'

export default {
  name: "MainCalendar",

  components: {
    VueDatePicker,
    Arrow,
    StatusInfo,
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  computed: {

    disabledDates() {
      let today = new Date();

      let tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 2)

      let afterTomorrow = new Date(tomorrow);
      afterTomorrow.setDate(tomorrow.getDate() + 3);

      return [tomorrow, afterTomorrow]
    },

    // config() {
    //   return {
    //     allowStopPropagation: true,
    //     closeOnScroll: false,
    //     modeHeight: 255,
    //     allowPreventDefault: false,
    //     closeOnClearValue: true,
    //     closeOnAutoApply: true,
    //     noSwipe: false,
    //     keepActionRow: false,
    //     onClickOutside: (data) => this.onClickOutside(data),
    //     tabOutClosesMenu: false,
    //     arrowLeft: undefined,
    //   }
    // }
  },

  data() {
    return {
    }
  },

  mounted() {
    // this.$refs.datepicker.openMenu()
  },

  methods: {
    closeCalendar() {
      // this.$refs.datepicker.openMenu()
    },

    onClickOutside(data) {
      console.log(data);
    },

    getPrice(date) {
      // console.log(date);
      // console.log(this.$moment(date).format('YYYY/DD/MM'));

      // let tomorrow  = this.$moment(date).add(1,'days')

      return 4600

    },
  },




}
</script>

<style scoped>

</style>