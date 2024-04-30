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
                :error="Booking.validation.name"
                :errorTxt="Booking.validationTranslate.name"
                v-model="Booking.data.name"
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
                  :modelValue="Booking.data.gender === 'female'"
                  :name="'gender'"
                  @update:modelValue="Booking.data.gender = 'female'"
                />
              </div>
              <div class="custom-col custom-col--33 custom-col--xs-50">
                <RadioDefault
                  class="label-w-100"
                  :label="'Чоловіча'"
                  :modelValue="Booking.data.gender === 'male'"
                  :name="'gender'"
                  @update:modelValue="Booking.data.gender = 'male'"
                />
              </div>
              <div class="custom-col custom-col--33 custom-col--xs-wfc">
                <RadioDefault
                  class="label-w-100"
                  :label="'Не визначився'"
                  :modelValue="Booking.data.gender === 'other'"
                  :name="'gender'"
                  @update:modelValue="Booking.data.gender = 'other'"
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
                :error="Booking.validation.birthday"
                :errorTxt="Booking.validationTranslate.birthday"
            >
              <template #body>
                <VueDatePicker
                    class="calendar-style"
                    :class="{'calendar-error': Booking.validationTranslate.birthday}"
                    ref="datepicker"
                    locale="uk"
                    auto-apply
                    :month-change-on-scroll="false"
                    :monthNameFormat="'long'"
                    :enable-time-picker="false"
                    :auto-position="true"
                    :placeholder="'ДД/ММ/PP'"
                    v-model="Booking.data.birthday"
                >
                  <template #arrow-right>
                    <Arrow  />
                  </template>
                  <template #arrow-left>
                    <Arrow  />
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
              :error="Booking.validation.nationality"
              :errorTxt="Booking.validationTranslate.nationality"
              :selected="Booking.data.nationality"
              @update:modelValue="(item) => Booking.data.nationality = item"
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
                :error="Booking.validation.phone"
                :errorTxt="Booking.validationTranslate.phone"
                v-model="Booking.data.phone"
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
                :error="Booking.validation.email"
                :errorTxt="Booking.validationTranslate.email"
                v-model="Booking.data.email"
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
import DatePickerDefault from "@/components/UI/inputs/DatePickerDefault/DatePickerDefault.vue";
import StatusInfo from "@/assets/img/calendar-currencies.svg";
import Arrow from "@/assets/img/arrow.svg";
import VueDatePicker from "@vuepic/vue-datepicker";

export default {
  name: "PersonalInfo",
  components: {
    VueDatePicker, Arrow, StatusInfo,
    DatePickerDefault,
    InfoBlock,
    CheckInOutService,
    DefaultSelect,
    DefaultInput,
    FormLabel,
    RadioDefault,
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    },
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