<template>
  <div class="your-choice">
    <div class="your-choice__inner">
      <div class="your-choice__title">
        Введіть дані для проживання
      </div>

      <InfoBlock
          class="mt-3"
          text='Заповни, будь ласка, обов’язкові поля (обов’язкові поля помічені символом <span class="red">*</span>).'
          :type="'error'"
      />

      <DefaultSelect
          class="mt-3"
          :label="'Локація'"
          :options="['Київ, Дудки', 'Карпати, місто']"
          :inner-icon="'location'"
          :placeholder="'Обери локацію'"
          :required="'required'"
          :error="Booking.validation.locationUlis"
          :errorTxt="Booking.validationTranslate.locationUlis"
          :selected="Booking.data.locationUlis"
          @update:modelValue="(item) => Booking.data.locationUlis = item"
      />

      <FormLabel
          class="mt-4"
          :label="'Дати'"
          :type="'required'"
      />

      <WasHouseSelected
          :type="'info'"
          :name="'Будинок на 1 спальню у лісі'"
          @openCalendar="openCalendar"
      />

      <WasHouseSelected
          :type="'error'"
          :name="'Будинок на 1 спальню у лісі'"
          @openCalendar="openCalendar"
      />

      <WasHouseSelected
          :type="'success'"
          :name="'Будинок на 1 спальню у лісі'"
          @openCalendar="openCalendar"
      />

      <div class="your-choice__calendar-wrap">

        <CalendarDays
            :Booking="Booking"
        />

        <div class="your-choice__calendar mt-3">


          <MainCalendar
              :Booking="Booking"
              :multiCalendars="true"
              :mobile-single="true"
          />


          <InfoBlock
              class="mt-3"
              :text="'Для кожної дати в календарі вказана ціна на найдешевший доступний будинок.'"
              :type="'success'"
          />

        </div>

      </div>



      <FormLabel
          class="mt-4"
          :label="'Вкажіть промокод'"
      />

      <div class="promo-field" v-if="!isSetPromoCode">
        <div class="promo-field__inner">
          <DefaultInput
              :label="''"
              :placeholder="'Ввести'"
          />
          <MainButton
              class="promo-field__btn h-40"
              :label="'Застосувати'"
              @click="confirmPromoCode"
          />
        </div>
      </div>

      <InfoBlock
          v-else
          class="mt-1"
          :text="'Промокод успішно застосовано'"
          :type="'success'"
      />

    </div>


    <CalendarPopup
        v-if="openCalendarPopup"
        :Booking="Booking"
        @close="openCalendarPopup = false"
    />
  </div>
</template>

<script>
import InfoBlock from "../../../../../../UI/labels/InfoBlock/InfoBlock.vue";
import FormLabel from "../../../../../../UI/labels/FormLabel/FormLabel.vue";
import MainCalendar from "../../../../chunks/MainCalendar/MainCalendar.vue";
import DefaultSelect from "../../../../../../UI/selections/DefaultSelect/DefaultSelect.vue";
import CalendarDays from "@/components/modules/BookingModule/chunks/CalendarDays/CalendarDays.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import WasHouseSelected from "@/components/modules/BookingModule/chunks/WasHouseSelected/WasHouseSelected.vue";
import CalendarPopup from "@/components/modules/BookingModule/popups/CalendarPopup/CalendarPopup.vue";


export default {
  name: "BookingStepA",

  components: {
    CalendarPopup,
    WasHouseSelected,
    MainButton, DefaultInput, CalendarDays, MainCalendar, FormLabel, InfoBlock, DefaultSelect
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  emits: ['updateCounter'],

  data() {
    return {

      openCalendarPopup: false,

      isSetPromoCode: false,



    }
  },

  mounted() {

  },

  methods: {


    confirmPromoCode() {
      this.isSetPromoCode = true
    },



    openCalendar() {
      this.openCalendarPopup = true
    }
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";

.your-choice {
  border: 1px solid $border-grey;
  border-radius: 8px;
  padding: 16px;
  //height: 500px;

  @include for-550 {
    padding: 0;
    border: 0;
  }

  &__inner {

  }

  &__title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

  &__calendar-wrap {
    border-radius: 8px;
    border: 1px solid $border-grey;
    padding: 16px;
    margin-top: 4px;

    @include for-550 {
      padding: 0;
      border: 0;
    }
  }

}

.promo-field {

  &__inner {
    position: relative;
  }

  &__btn {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 143px;
  }

  // :deep(.main-button) {
  //   padding: 11px 28px;
  // }
}


</style>