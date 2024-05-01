<template>
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

      <DefaultInput
          :placeholder="'Ввести'"
          :error="Personal.validation.name"
          :errorTxt="Personal.validationTranslate.name"
          v-model="Personal.data.name"
      />
    </div>
  </div>

  <div class="custom-row">
    <div class="custom-col mb-0">

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
                :modelValue="Personal.data.gender === 'female'"
                :name="'gender'"
                @update:modelValue="Personal.data.gender = 'female'"
            />
          </div>
          <div class="custom-col custom-col--33 custom-col--xs-50">
            <RadioDefault
                class="label-w-100"
                :label="'Чоловіча'"
                :modelValue="Personal.data.gender === 'male'"
                :name="'gender'"
                @update:modelValue="Personal.data.gender = 'male'"
            />
          </div>
          <div class="custom-col custom-col--33 custom-col--xs-wfc">
            <RadioDefault
                class="label-w-100"
                :label="'Не визначився'"
                :modelValue="Personal.data.gender === 'other'"
                :name="'gender'"
                @update:modelValue="Personal.data.gender = 'other'"
            />
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="custom-row">
    <div class="custom-col">

      <!--          <FormLabel-->
      <!--            class="mb-1"-->
      <!--            :label="'Дата народження'"-->
      <!--            :type="'required'"-->
      <!--          />-->

      <div class="personal-info__field">
        <DatePickerDefault
            :label="'Дата народження'"
            :labelType="'required'"
            :error="Personal.validation.birthday"
            :errorTxt="Personal.validationTranslate.birthday"
        >
          <template #body>
            <VueDatePicker
                class="calendar-style"
                :class="{'calendar-error': Personal.validationTranslate.birthday}"
                ref="datepicker"
                locale="uk"
                auto-apply
                :month-change-on-scroll="false"
                :monthNameFormat="'long'"
                :enable-time-picker="false"
                :auto-position="true"
                :placeholder="'ДД/ММ/PP'"
                v-model="Personal.data.birthday"
            >
              <template #arrow-right>
                <Arrow/>
              </template>
              <template #arrow-left>
                <Arrow/>
              </template>
            </VueDatePicker>
          </template>
        </DatePickerDefault>
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
            :options="['Українець']"
            :inner-icon="'location'"
            :placeholder="'Обери національність'"
            :required="'required'"
            :error="Personal.validation.nationality"
            :errorTxt="Personal.validationTranslate.nationality"
            :selected="Personal.data.nationality"
            @update:modelValue="(item) => Personal.data.nationality = item"
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
            :error="Personal.validation.phone"
            :errorTxt="Personal.validationTranslate.phone"
            v-model="Personal.data.phone"
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
            :error="Personal.validation.email"
            :errorTxt="Personal.validationTranslate.email"
            v-model="Personal.data.email"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DatePickerDefault from "@/components/UI/inputs/DatePickerDefault/DatePickerDefault.vue";
import RadioDefault from "@/components/UI/radiobuttons/RadioDefault/RadioDefault.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";
import Arrow from "@/assets/img/arrow.svg";
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import DefaultSelect from "@/components/UI/selections/DefaultSelect/DefaultSelect.vue";

export default {
  name: "PersonalInfoFields",
  components: {
    DefaultSelect,
    VueDatePicker,
    FormLabel,
    Arrow,
    InfoBlock,
    DefaultInput,
    RadioDefault,
    DatePickerDefault
  },

  props: {
    Personal: {
      type: Object,
      default: null,
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../scss/mixins/mixins";

.label-w-100 :deep(.radio-default__label) {
  width: 100%;
}

.personal-info__field .custom-col {
  @include for-680 {
    margin-bottom: 8px;
  }
}

</style>