<template>
  <div class="your-choice">
    <div class="your-choice__inner">
      <div class="your-choice__title">
        Введіть дані для проживання
      </div>
      <InfoBlock
          :text="'Заповни, будь ласка, обов’язкові поля (обов’язкові поля помічені символом *).'"
          :type="'error'"
      />

      <DefaultSelect
        :label="'Локація'"
        :options="['Київ, Дудки', 'Карпати, місто']"
        :withIco="true"
        :placeholder="'Обери локацію'"
      />

      <div class="custom-row">
        <div class="custom-col">
        
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import DefaultSelect from "../../../../UI/selections/DefaultSelect/DefaultSelect.vue";

export default {
  name: "BookingStepA",
  components: {InfoBlock, DefaultSelect},
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

.your-choice {
  border: 1px solid $border-grey;
  border-radius: 8px;
  padding: 16px;
  height: 500px;
}

</style>