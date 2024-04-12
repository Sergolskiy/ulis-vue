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
          />


          <InfoBlock
              class="mt-3"
              :text="'Для кожної дати в календарі вказана ціна на найдешевший доступний будинок.'"
              :type="'success'"
          />

        </div>

      </div>

      <div class="custom-row mt-4">
        <div class="custom-col custom-col--33">
          <DefaultSelect
              :label="'Кількість дорослих'"
              :options="['1 дорослий', '2 дорослих', '3 дорослих']"
              :inner-icon="'people'"
              :required="'required'"
              :placeholder="'0 дорослих'"
          />
        </div>
        <div class="custom-col custom-col--33">
          <DefaultSelect
              :label="'Кількість дорослих'"
              :options="['1 дитина', '2 дитини', '3 дитини']"
              :inner-icon="'people'"
              :required="'required'"
              :placeholder="'0 дітей'"
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

export default {
  name: "BookingStepA",

  components: {MainButton, DefaultInput, CalendarDays, MainCalendar, FormLabel, InfoBlock, DefaultSelect},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  mounted() {

  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";

.your-choice {
  border: 1px solid $border-grey;
  border-radius: 8px;
  padding: 16px;
  //height: 500px;

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