<template>
  <div class="main-calendar">
    <div class="main-calendar__inner">
      <div class="main-calendar__top">

      </div>
      <div class="main-calendar__content">
        {{date}}
<!--        <VueDatePicker-->
<!--            class="calendar-style only-calendar"-->
<!--            range-->
<!--            multi-calendars-->
<!--            ref="datepicker"-->
<!--            :transitions="false"-->
<!--            :auto-position="false"-->
<!--            :month-change-on-scroll="false"-->
<!--            v-model="date"-->
<!--            @closed="closeCalendar"-->
<!--        />-->
<!--            :config="config"-->

        <!--        </VueDatePicker>-->
      </div>
    </div>
  </div>
</template>

<script>
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "MainCalendar",

  components: {
    // VueDatePicker,
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  computed: {
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
    //     onClickOutside: (data) => onClickOutside,
    //     tabOutClosesMenu: false,
    //     arrowLeft: undefined,
    //   }
    // }
  },

  data() {
    return {
      date: null,
    }
  },

  mounted() {
    this.$refs.datepicker.openMenu()
  },

  methods: {
    closeCalendar() {
      this.$refs.datepicker.openMenu()
    },

    onClickOutside(data) {

    },
  },




}
</script>

<style scoped>

</style>