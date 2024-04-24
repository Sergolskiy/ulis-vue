<template>
  <div class="personal-info">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Введіть особисту інформацію
      </div>

      <InfoBlock
          class="mt-3 mb-3"
          text='Заповни, будь ласка, обов’язкові поля (обов’язкові поля помічені символом <span class="red">*</span>).'
          :type="'error'"
      />

      <div class="custom-row">
        <div class="custom-col">
          <FormLabel
            class="mb-1"
            :label="'Ім’я та прізвище'"
            :type="'required'"
          />

          <div class="personal-info__field">
            <DefaultInput
                :placeholder="'Ввести'"
            />
          </div>
        </div>
      </div>

      <div class="custom-row">
        <div class="custom-col">

          <FormLabel
            class="mb-1"
            :label="'Стать'"
            :type="'required'"
          />

          <div class="personal-info__field">
            <div class="custom-row">
              <div class="custom-col custom-col--33 custom-col--xs-50">
                <RadioDefault
                  class="label-w-100"
                  :label="'Жіноча'"
                  :modelValue="gender === 'female'"
                  :name="'gender'"
                  @update:modelValue="gender = 'female'"
                />
              </div>
              <div class="custom-col custom-col--33 custom-col--xs-50">
                <RadioDefault
                  class="label-w-100"
                  :label="'Чоловіча'"
                  :modelValue="gender === 'male'"
                  :name="'gender'"
                  @update:modelValue="gender = 'male'"
                />
              </div>
              <div class="custom-col custom-col--33 custom-col--xs-wfc">
                <RadioDefault
                  class="label-w-100"
                  :label="'Не визначився'"
                  :modelValue="gender === 'other'"
                  :name="'gender'"
                  @update:modelValue="gender = 'other'"
                />
              </div>
            </div>
          </div>  

        </div>
      </div>
    
      <div class="custom-row">
        <div class="custom-col">

          <FormLabel
            class="mb-1"
            :label="'Дата народження'"
            :type="'required'"
          />

          <div class="personal-info__field">
            DATE FIELD
          </div>
        </div>
      </div>
   
      <div class="custom-row">
        <div class="custom-col">

          <FormLabel
            class="mb-1"
            :label="'Національність (місто)'"
            :type="'required'"
          />

          <div class="personal-info__field">
            <DefaultSelect
              :options="['Українець', 'Тоджик']"
              :inner-icon="'location'"
              :placeholder="'Обери національність'"
              :required="'required'"
            />
          </div>
        </div>
      </div>

      <div class="custom-row">
        <div class="custom-col custom-col--50 custom-col--xs-100">
          <FormLabel
            class="mb-1"
            :label="'Номер телефону'"
            :type="'required'"
          />

          <div class="personal-info__field">
            <DefaultInput
                :placeholder="'+380'"
            />
          </div>
        </div>
        <div class="custom-col custom-col--50 custom-col--xs-100">
          <FormLabel
            class="mb-1"
            :label="'Email'"
            :type="'required'"
          />

          <div class="personal-info__field">
            <DefaultInput
                :placeholder="'example@gmail.com'"
            />
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import DefaultSelect from "../../../../UI/selections/DefaultSelect/DefaultSelect.vue";
import CheckInOutService from "@/components/modules/BookingModule/chunks/CardService/components/CheckInOutService/CheckInOutService.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import RadioDefault from "@/components/UI/radiobuttons/RadioDefault/RadioDefault.vue";

export default {
  name: "PersonalInfo",
  components: {
    InfoBlock,
    CheckInOutService,
    DefaultSelect,
    DefaultInput,
    FormLabel,
    RadioDefault,
  },

  props: {
    // Booking: {
    //   type: Object,
    //   default: null,
    // },
  },

  data () {
    return {
      gender: ''
    }
  },

  methods: {

  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.label-w-100 :deep(.radio-default__label) {
  width: 100%;
}


.personal-info {

  &__inner {
    padding: 16px;
    border: 1px solid $border-grey;
    border-radius: 8px;
  }
  
  &__title {
    font-weight: 600;
    font-size: 20px
  }

  &__field .custom-col {
    @include for-680 {
      margin-bottom: 8px;
    }
  }
}

</style>