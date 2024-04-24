<template>

  <div class="service-content service-content--late-check-out">

    <div class="service-content__item mb-2">
      <div class="service-content__title">
        <FormLabel
            class="mb-1"
            :label="'Тип'"
            :type="'required'"
        />
      </div>

      <div class="custom-row">
        <div class="custom-col wfc">
          <RadioDefault
              :label="'Раннє заселення'"
              :modelValue="type === '1'"
              :name="'type'"
              :btnStyle="true"
              @update:modelValue="type = '1'"
          />
        </div>
        <div class="custom-col wfc">
          <RadioDefault
              :label="'Пізнє виселення'"
              :modelValue="type === '2'"
              :name="'type'"
              :btnStyle="true"
              @update:modelValue="type = '2'"
          />
        </div>
        <div class="custom-col wfc">
          <RadioDefault
              :label="'Раннє заселення та пізнє виселення'"
              :modelValue="type === '3'"
              :name="'type'"
              :btnStyle="true"
              @update:modelValue="type = '3'"
          />
        </div>
      </div>
    </div>
  
    <div class="service-content__item">
      <div class="custom-row">
        <div class="custom-col custom-col--50 custom-col--xs-100">
          <div class="schedule-block">
            <div class="schedule-block__name">
              Час заселення:
            </div>
            <div class="schedule-block__time">
              10:00
            </div>
          </div>

          <InfoBlock
            class="mt-2"
            :text="'На жаль, на цю дату немає опцій.'"
            :type="'error'"
           />
        </div>
        <div class="custom-col custom-col--50 custom-col--xs-100">
          <div class="schedule-block">
            <div class="schedule-block__name">
              Час виселення:
            </div>
            <div class="schedule-block__time">
              --:--
            </div>
          </div>

          <InfoBlock
            class="mt-2"
            :text="'На жаль, на цю дату немає опцій.'"
            :type="'error'"
          />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import RadioDefault from "@/components/UI/radiobuttons/RadioDefault/RadioDefault.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";


export default {
  name: "CheckInOutService",
  components: {
    FormLabel,
    RadioDefault,
    InfoBlock,
  },

  data() {
    return {
      serviceCount: 0,
      type: '',
    }
  },


}
</script>

<style lang="scss" scoped>
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";


  .service-content--late-check-out{
    padding-top: 16px;
  }

  .schedule-block {
    border: 1px solid $border-grey;
    border-radius: 8px;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;

    &__name {
      font-size: 14px;
    }

    &__time {
      font-size: 16px;
      font-weight: 500;
    }
  }


</style>