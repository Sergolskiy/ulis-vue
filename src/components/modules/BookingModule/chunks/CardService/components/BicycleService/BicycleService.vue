<template>

  <div class="service-content service-content--bicycle">
    <div class="service-content__item">
      <div class="service-content__title">
        <FormLabel
            :label="'Тип оренди'"
            :type="'required'"
        />
      </div>

      <div class="custom-row flex-wrap mt-1">
        <div class="custom-col custom-col--20 custom-col--lg-25  custom-col--xs-50">
          <RadioDefault
              :label="'Погодинно'"
              :modelValue="rentalType === 'hourly'"
              :name="'rentalType'"
              :btnStyle="true"
              @update:modelValue="rentalType = 'hourly'"
          />
        </div>
        <div class="custom-col custom-col--20 custom-col--lg-25  custom-col--xs-50">
          <RadioDefault
              :label="'Подобово'"
              :modelValue="rentalType === 'daily'"
              :name="'rentalType'"
              :btnStyle="true"
              @update:modelValue="rentalType = 'daily'"
          />
        </div>
      </div>
    </div>

    <div class="service-content__item">
      <div class="custom-row flex-wrap">
        <div class="custom-col custom-col--16 custom-col--lg-25 custom-col--sm-25 custom-col--xs-50">
          <div class="service-content__title">
            <FormLabel
                class="nowrap"
                :label="'К-ть велосипедів'"
                :type="'required'"
            />
          </div>
          <CounterInput
              class="mt-1"
              :border="true"
              :value="countBicycle"
              :minValue="0"
              @update:updateCounter="(item) => countBicycle = item"
          />
        </div>

        <div class="custom-col custom-col--16 custom-col--lg-25  custom-col--sm-25 custom-col--xs-50">
          <div class="service-content__title">
            <FormLabel
                :label="'Дит велосипед'"
            />
          </div>
          <CounterInput
              class="mt-1"
              :border="true"
              :value="countChildBicycle"
              :minValue="0"
              @update:updateCounter="(item) => countChildBicycle = item"
          />
        </div>

        <div class="custom-col custom-col--16 custom-col--lg-25  custom-col--sm-25 custom-col--xs-50">
          <div class="service-content__title">
            <FormLabel
                :label="'Дитяче крісло'"
            />
          </div>
          <CounterInput
              class="mt-1"
              :border="true"
              :value="countChildSeat"
              :minValue="0"
              @update:updateCounter="(item) => countChildSeat = item"
          />
        </div>

        <div class="custom-col custom-col--50 custom-col--sm-100"
            v-if="rentalType == 'daily'"
        >
          <DefaultSelect
              :label="'Кількість діб'"
              :placeholder="'Обери к-ть діб'"
              :required="'required'"
              :options="['1', '2']"
          />
        </div>
      </div>
    </div>

    <div class="service-content__item">
      <div class="service-content__title">
        <FormLabel
            :label="'Дати'"
            :type="'required'"
            :disabled="!countBicycle"
        />
      </div>

      <div class="custom-row custom-row--p4 flex-wrap mt-1">
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'4 грудня'"
              :modelValue="day === 1"
              :name="'day'"
              @update:modelValue="day = 1"
              :disabled="!countBicycle"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'5 грудня'"
              :modelValue="day === 2"
              :name="'day'"
              @update:modelValue="day = 2"
              :disabled="!countBicycle"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'6 грудня'"
              :modelValue="day === 3"
              :name="'day'"
              @update:modelValue="day = 3"
              :disabled="!countBicycle"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'7 грудня'"
              :modelValue="day === 4"
              :name="'day'"
              @update:modelValue="day = 4"
              :disabled="!countBicycle"
          />
        </div>
      </div>
    </div>

    <template  v-if="rentalType == 'hourly'">
      <div class="service-content__item">
        <div class="custom-row">
          <div class="custom-col custom-col--50 custom-col--xs-100">
            <DefaultSelect
                :label="'Час'"
                :placeholder="'Обери час'"
                :required="'required'"
                :options="['10:00', '11:00']"
            />
          </div>
          <div class="custom-col custom-col--50 custom-col--xs-100">
            <DefaultSelect
                :label="'Тривалість'"
                :placeholder="'Обери час'"
                :required="'required'"
                :options="['10:00', '11:00']"
                :disabled="true"
            />
          </div>
        </div>
    </div>
    </template>
  </div>

</template>

<script>
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import RadioDefault from "@/components/UI/radiobuttons/RadioDefault/RadioDefault.vue";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";
import DefaultSelect from "@/components/UI/selections/DefaultSelect/DefaultSelect.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";
import IconPlus from "@/assets/img/plus-gray.svg?skipsvgo";

export default {
  name: "BicycleService",
  components: {
    IconPlus,
    IconUAH,
    CounterInput,
    RadioDefault,
    FormLabel,
    DefaultSelect
  },

  data() {
    return {
      rentalType: 'hourly',
      day: 0,
      countBicycle: 0,
      countChildBicycle: 0,
      countChildSeat: 0,
    }
  }
}
</script>

<style scoped lang="scss">

</style>