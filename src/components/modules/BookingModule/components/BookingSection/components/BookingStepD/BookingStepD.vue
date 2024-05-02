<template>
  <PersonalInfo
    :Booking="Booking"
  />

  <div class="personal-info mt-3" v-if="Booking.data.isAuth">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Для кого ти бронюєш?
      </div>

      <div class="personal-info__field mt-3">
        <div class="custom-row">
          <div class="custom-col mb-2">
            <RadioDefault
                class="label-w-100"
                :label="'Я головний гість'"
                :modelValue="true"
                :name="'guest'"
            />
          </div>
          <div class="custom-col">
            <RadioDefault
                class="label-w-100"
                :label="'Це бронювання не для мене'"
                :name="'guest'"
            />
          </div>
        </div>

        <div class="custom-row">
          <div class="custom-col custom-col--50 custom-col--xs-100">
            <DefaultInput
                :label="'Ім’я та прізвище гостя'"
                :labelType="'required'"
                :placeholder="'Ввести'"
                :error="Booking.validation.name"
                :errorTxt="Booking.validationTranslate.name"
                v-model="Booking.data.name"
            />
          </div>
          <div class="custom-col custom-col--50 custom-col--xs-100">
            <div class="personal-info__field">
              <DefaultInput
                  :label="'Email гостя'"
                  :labelType="'required'"
                  :placeholder="'example@gmail.com'"
                  :error="Booking.validation.email"
                  :errorTxt="Booking.validationTranslate.email"
                  v-model="Booking.data.email"
              />
            </div>
          </div>
          <div class="custom-col custom-col--50 custom-col--xs-100">
            <div class="personal-info__field">
              <DefaultInput
                  :label="'Номер телефону'"
                  :labelType="'required'"
                  :placeholder="'+380'"
                  :error="Booking.validation.phone"
                  :errorTxt="Booking.validationTranslate.phone"
                  v-model="Booking.data.phone"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import PersonalInfo from "@/components/modules/BookingModule/chunks/PersonalInfo/PersonalInfo.vue";
import RadioDefault from "@/components/UI/radiobuttons/RadioDefault/RadioDefault.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";


export default {
  name: "BookingStepD",

  components: {DefaultInput, RadioDefault, PersonalInfo},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

}
</script>

<style scoped>

</style>