<template>
  <Modal
      @close="$emit('close')"
      class="custom-popup calendar-popup"
  >
    <template v-slot:header>

      <div class="d-flex justify-content-between align-items-center">
        Календар доступності будинку
      </div>

    </template>
    <template v-slot:body>
      <div class="calendar-popup__content">


        <MainCalendar
            :Booking="Booking"
            :multiCalendars="true"
            :mobile-single="true"
        />


        <InfoBlock
            class="mt-2"
            :text="'Для кожної дати в календарі вказана ціна на найдешевший доступний будинок.'"
            :type="'success'"
        />


      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/coreComponents/Modal/Modal.vue";
import MainCalendar from "@/components/modules/BookingModule/chunks/MainCalendar/MainCalendar.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";

export default {
  name: "CalendarPopup",
  components: {
    InfoBlock,
    MainCalendar,
    Modal
  },

  emits: ['close'],

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },



}
</script>

<style scoped lang="scss">
@import "../../../../../scss/mixins/mixins";

.calendar-popup {

  &:deep(.modal-component__wrapper) {
    max-width: 890px;
  }

  &:deep(.modal-component__content) {
    padding: 16px;
  }

  &__content {
    margin-top: 16px;
  }
  

}

</style>