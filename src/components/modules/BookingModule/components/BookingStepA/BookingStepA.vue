<template>
  <div class="your-choice">
    <div class="your-choice__inner">
      <div class="your-choice__title">
        Введіть дані для проживання
      </div>

      <InfoBlock
          class="mt-3"
          :text="'Заповни, будь ласка, обов’язкові поля (обов’язкові поля помічені символом *).'"
          :type="'error'"
      />

      <DefaultSelect
          class="mt-3"
          :label="'Локація'"
          :options="['Київ, Дудки', 'Карпати, місто']"
          :inner-icon="'location'"
          :placeholder="'Обери локацію'"
      />

      <FormLabel
          class="mt-4"
          :label="'Дати'"
          :type="'required'"
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

      <div class="custom-row mt-4">
        <div class="custom-col custom-col--33 custom-col--xs-100">
          <DefaultSelect
              :label="'Кількість дорослих'"
              :options="['1 дорослий', '2 дорослих', '3 дорослих']"
              :inner-icon="'people'"
              :required="'required'"
              :placeholder="'0 дорослих'"
          />
        </div>
        <div class="custom-col custom-col--33 custom-col--xs-100">
          <DefaultSelect
              :label="'Кількість дорослих'"
              :options="['1 дитина', '2 дитини', '3 дитини']"
              :inner-icon="'people'"
              :required="'required'"
              :placeholder="'0 дітей'"
          />
        </div>
        <div class="custom-col custom-col--33 custom-col--xs-100">

          <FormLabel
              class="mb-1"
              :label="'Наявність тварин'"
              :type="'required'"
          />

          <DefaultCheckbox
              class="w-100"
              :label="'Я візьму тваринку з собою'"
              :required="'required'"
              :bordered="true"
              v-model="checked"
          />
        </div>
      </div>


      <FormLabel
          class="mt-4"
          :label="'Вкажіть промокод або кодове слово для подарункового сертифікату'"
      />

      <div class="promo-field">
        <div class="promo-field__inner">
          <DefaultInput
              :label="''"
          />
          <MainButton
              class="promo-field__btn"
              :label="'Застосувати'"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import FormLabel from "../../../../UI/labels/FormLabel/FormLabel.vue";
import MainCalendar from "../../chunks/MainCalendar/MainCalendar.vue";
import DefaultSelect from "../../../../UI/selections/DefaultSelect/DefaultSelect.vue";
import CalendarDays from "@/components/modules/BookingModule/chunks/CalendarDays/CalendarDays.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import DefaultCheckbox from "@/components/UI/checkboxes/DefaultCheckbox/DefaultCheckbox.vue";

export default {
  name: "BookingStepA",

  components: {
    DefaultCheckbox,
    MainButton, DefaultInput, CalendarDays, MainCalendar, FormLabel, InfoBlock, DefaultSelect},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  data() {
    return {
      checked: false,
    }
  },

  mounted() {

  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

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

  :deep(.main-button) {
    padding: 11px 28px;
  }
}


</style>