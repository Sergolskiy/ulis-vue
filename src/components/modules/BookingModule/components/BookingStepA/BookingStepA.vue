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
        </div>
      </div>

      <div class="custom-row">
        <div class="custom-col custom-col--33">
          <DefaultSelect
              :label="'Локація'"
              :options="['Київ, Дудки', 'Карпати, місто']"
              :withIco="true"
              :placeholder="'Обери локацію'"
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

export default {
  name: "BookingStepA",

  components: {CalendarDays, MainCalendar, FormLabel, InfoBlock, DefaultSelect},

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

</style>